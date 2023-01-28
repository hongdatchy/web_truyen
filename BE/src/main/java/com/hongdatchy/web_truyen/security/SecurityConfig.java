/**
 * Copyright(C) 2022 Phạm Hồng Đạt
 * 02/10/2022
 */
package com.hongdatchy.web_truyen.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import static org.springframework.security.config.Customizer.withDefaults;

/**
 *
 *
 * @author hongdatchy
 */
@Configuration
@EnableWebSecurity
public class SecurityConfig  {

    @Autowired
    TokenProvider tokenProvider;

    @Autowired
    UserDetailsService userDetailsService;

    @Autowired
    AuthEntryPoint authEntryPoint;

    @Bean
    public PasswordEncoder passwordEncoder(){
        return new BCryptPasswordEncoder(10);
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http.cors().and()
                .csrf().disable()
                .authorizeHttpRequests()
                .antMatchers("/api/login",
                        "/api/createUser",
                        "/api/downloadFile/**",
                        "/**"
                ).permitAll()
//                .antMatchers("/api/test").hasAuthority("A")
                .anyRequest()
                .authenticated()
                .and().exceptionHandling().authenticationEntryPoint(authEntryPoint)
                .and().httpBasic(withDefaults())
                .addFilterAfter(new JWTFilter(tokenProvider), UsernamePasswordAuthenticationFilter.class)
        ;
        return http.build();
    }

    @Bean
    public AuthenticationManager authenticationManagerBean(HttpSecurity http) throws Exception {
        AuthenticationManagerBuilder authenticationManagerBuilder = http.getSharedObject(AuthenticationManagerBuilder.class);
        authenticationManagerBuilder.userDetailsService(userDetailsService).passwordEncoder(passwordEncoder());
        return authenticationManagerBuilder.build();
    }

    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/api/**")
                        .allowedMethods("*")
                        .allowedOriginPatterns("*")
                        .allowCredentials(true);
            }
        };
    }

}
