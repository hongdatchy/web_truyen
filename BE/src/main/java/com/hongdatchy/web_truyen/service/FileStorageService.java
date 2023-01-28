package com.hongdatchy.web_truyen.service;


import com.hongdatchy.web_truyen.entities.other.FileStorageProperties;
import com.hongdatchy.web_truyen.entities.request.UpdateComic;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.net.MalformedURLException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

@Service
public class FileStorageService {

    private final Path fileStorageLocation;

    @Autowired
    public FileStorageService(FileStorageProperties fileStorageProperties)  {
        this.fileStorageLocation = Paths.get(fileStorageProperties.getUploadDir())
                .toAbsolutePath().normalize();
        try {
            Files.createDirectories(this.fileStorageLocation);
        } catch (RuntimeException | IOException ex) {
            throw new RuntimeException("Could not create the directory where the uploaded files will be stored.", ex);
        }
    }

    public Resource loadFileAsResource(String subFolder, String fileName) {
        try {
            Path filePath = this.fileStorageLocation.resolve(subFolder+ "\\"+fileName).normalize();
            Resource resource = new UrlResource(filePath.toUri());
            if(resource.exists()) {
                return resource;
            } else {
                throw new RuntimeException("File not found: " + fileName);
            }
        } catch (MalformedURLException ex) {
            throw new RuntimeException("File not found: " + fileName, ex);
        }
    }

    public void scanDirAndUpdateDB(UpdateComic updateComic) {

    }
}
