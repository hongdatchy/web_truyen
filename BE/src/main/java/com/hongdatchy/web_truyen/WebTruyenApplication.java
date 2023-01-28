package com.hongdatchy.web_truyen;

import com.hongdatchy.web_truyen.entities.other.FileStorageProperties;
import com.hongdatchy.web_truyen.service.FileStorageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;

import java.util.Timer;
import java.util.TimerTask;

@SpringBootApplication
@EnableConfigurationProperties({FileStorageProperties.class})
public class WebTruyenApplication implements CommandLineRunner {

    public static void main(String[] args) {
        SpringApplication.run(WebTruyenApplication.class, args);
    }

    @Autowired
    FileStorageService fileStorageService;

    @Override
    public void run(String... args) throws Exception {
//        jobCron();
    }

//    public void jobCron() {
//        Timer timer = new Timer();
//        timer.scheduleAtFixedRate(new TimerTask(){
//            @Override
//            public void run() {
//                System.out.println("aaaa");
//                fileStorageService.scanDirAndUpdateDB();
//            }
//        }, 0, 1000);
//    }
}


