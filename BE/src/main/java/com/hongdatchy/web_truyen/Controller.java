/**
 * Copyright(C) 2022 Phạm Hồng Đạt
 * 02/10/2022
 */
package com.hongdatchy.web_truyen;

import com.hongdatchy.web_truyen.entities.model.User;
import com.hongdatchy.web_truyen.entities.request.LoginRequest;
import com.hongdatchy.web_truyen.entities.request.Register;
import com.hongdatchy.web_truyen.entities.request.UpdateComic;
import com.hongdatchy.web_truyen.entities.response.LoginResponse;
import com.hongdatchy.web_truyen.entities.response.MyResponse;
import com.hongdatchy.web_truyen.repo.CategoryRepository;
import com.hongdatchy.web_truyen.repo.ComicRepository;
import com.hongdatchy.web_truyen.repo.UserRepository;
import com.hongdatchy.web_truyen.security.MyUserDetails;
import com.hongdatchy.web_truyen.security.TokenProvider;
import com.hongdatchy.web_truyen.service.FileStorageService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.Resource;
import org.springframework.data.domain.ExampleMatcher;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.stream.Collectors;

/**
 *
 *
 * @author hongdatchy
 */
@RestController
@RequestMapping("api")
public class Controller {
    public static final String JWT = "jwt";

    @Value("${timeExpirationToken}")
    private long EXPIRED;

    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    TokenProvider tokenProvider;

    @Autowired
    UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    FileStorageService fileStorageService;

    @Autowired
    CategoryRepository categoryRepository;

    @Autowired
    ComicRepository comicRepository;

    @PostMapping("/login")
    public ResponseEntity<Object> login(@RequestBody LoginRequest loginRequest, HttpServletResponse response){
        UsernamePasswordAuthenticationToken authenticationToken =
                new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword());
        Authentication authentication = authenticationManager
                .authenticate(authenticationToken);
        SecurityContextHolder.getContext().setAuthentication(authentication);
        String token = tokenProvider.createToken(authentication);
        Cookie cookie = new Cookie(JWT, token);
        cookie.setMaxAge((int) EXPIRED/1000);
        cookie.setHttpOnly(true);
        cookie.setSecure(true);
        response.addCookie(cookie);
        User user = ((MyUserDetails) authentication.getPrincipal()).getUser();
        user.setPassword("");
        return ResponseEntity.ok(MyResponse.success(new LoginResponse(token, user)));
    }

    @PostMapping("/createUser")
    public ResponseEntity<Object> createUser(@RequestBody Register register){
        ModelMapper mapper = new ModelMapper();
        User user = mapper.map(register, User.class);
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        user.setCoin(0);
        if(userRepository.getFirstUserByUsername(user.getUsername()) == null){
            User userResponse = userRepository.save(user);
            userResponse.setPassword("");
            return ResponseEntity.ok(MyResponse.success(userResponse));
        }else{
            return ResponseEntity.ok(MyResponse.fail("username đã tồn tại"));
        }
    }



    @GetMapping("/downloadFile/{subFolder1:.+}/{subFolder2:.+}/{fileName:.+}")
    public ResponseEntity<Resource> downloadFile(@PathVariable String fileName,
                                                 @PathVariable String subFolder1,
                                                 @PathVariable String subFolder2,
                                                 HttpServletRequest request) {
        // Load file as Resource
        Resource resource = fileStorageService.loadFileAsResource(subFolder1+"/"+subFolder2, fileName);

        // Try to determine file's content type
        String contentType = null;
        try {
            contentType = request.getServletContext().getMimeType(resource.getFile().getAbsolutePath());
        } catch (IOException ex) {
            ex.printStackTrace();
        }

        // Fallback to the default content type if type could not be determined
        if(contentType == null) {
            contentType = "application/octet-stream";
        }

        return ResponseEntity.ok()
                .contentType(MediaType.parseMediaType(contentType))
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + resource.getFilename() + "\"")
                .body(resource);
    }

//    @PostMapping("/scanDirAndUpdateDB")
//    public ResponseEntity<Object> scanDirAndUpdateDB(@RequestBody UpdateComic updateComic) {
//        System.out.println(updateComic);
//        fileStorageService.scanDirAndUpdateDB(updateComic);
////        // Load file as Resource
////        Resource resource = fileStorageService.loadFileAsResource(subFolder1+"/"+subFolder2, fileName);
////
////        // Try to determine file's content type
////        String contentType = null;
////        try {
////            contentType = request.getServletContext().getMimeType(resource.getFile().getAbsolutePath());
////        } catch (IOException ex) {
////            ex.printStackTrace();
////        }
////
////        // Fallback to the default content type if type could not be determined
////        if(contentType == null) {
////            contentType = "application/octet-stream";
////        }
////
////        return ResponseEntity.ok()
////                .contentType(MediaType.parseMediaType(contentType))
////                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + resource.getFilename() + "\"")
////                .body(resource);
//        return ResponseEntity.ok("");
//    }

    @GetMapping("/comic/{categoryId}")
    public ResponseEntity<Object> getListComicByCategory(@PathVariable int categoryId){
        return ResponseEntity.ok(comicRepository.findAll()
                .stream().filter(comic -> comic.getCategoryId().equals(categoryId))
                .collect(Collectors.toList()));
    }

    @GetMapping("/listChapter/{nameComic}")
    public ResponseEntity<Object> getListChapterByNameComic(@PathVariable String nameComic){
        return ResponseEntity.ok(fileStorageService.readListFolder(nameComic));
    }

    @GetMapping("/category")
    public ResponseEntity<Object> getAllCategory(){
        return ResponseEntity.ok(categoryRepository.findAll());
    }

//
//
//    @GetMapping("/testGetList")
//    public ResponseEntity<Object> testGetList(){
//        return ResponseEntity.ok(Collections.nCopies(5, new MyStr("1")));
//    }
//
////    @CrossOrigin(origins = "http://localhost:5500", allowCredentials = "true")
//    @GetMapping("/testOriginCookie")
//    public ResponseEntity<Object> testOriginCookie(HttpServletResponse response){
//        Cookie cookie = new Cookie("key", "value");
//        cookie.setMaxAge(30);// 30s
//        response.addCookie(cookie);
//        return ResponseEntity.ok(new MyStr("testOriginCookie"));
//    }
//
//    @GetMapping("/testHttpCookieOnly")
//    public ResponseEntity<Object> testHttpCookieOnly(HttpServletResponse response){
//        Cookie cookie = new Cookie("keyCookieOnly", "valueCookieOnly");
//        cookie.setMaxAge(30);// 30s
//        cookie.setHttpOnly(true);
//        cookie.setSecure(true);
//        response.addCookie(cookie);
//        return ResponseEntity.ok(new MyStr("testHttpCookieOnly"));
//    }
//
//    @GetMapping("/getCookieFromClient")
//    public ResponseEntity<Object> getCookieFromClient(@RequestHeader(value="cookie") String cookie){
//
//        System.out.println(cookie.split("; ")[0].substring("keyCookieOnly=".length()));
//
//        return ResponseEntity.ok(new MyStr("getCookieFromClient"));
//    }
//
//    @AllArgsConstructor
//    @Data
//    public static class MyStr{
//        String string;
//    }

}

