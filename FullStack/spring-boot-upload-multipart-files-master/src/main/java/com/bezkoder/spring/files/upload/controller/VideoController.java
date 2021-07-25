package com.bezkoder.spring.files.upload.controller;

import com.bezkoder.spring.files.upload.model.Video;
import com.bezkoder.spring.files.upload.repository.VideoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin("*")
public class VideoController {

    @Autowired
    VideoRepository videoRepository;

    @GetMapping("/video")
    public List<Video> displayVideo (){
        return videoRepository.findAll();
    }

    @DeleteMapping("/video/{videoId}")
    public Optional<ResponseEntity<String>> deleteVideo(@PathVariable (value = "videoId") Long videoId){
        return videoRepository.findById(videoId).map(video->{
            videoRepository.delete(video);
            return ResponseEntity.ok().body("Successfully deleted specified record");
        });
    }

    @PostMapping("/video")
    public Video addVideo (@RequestBody Video video){
        return videoRepository.save(video);
    }
}
