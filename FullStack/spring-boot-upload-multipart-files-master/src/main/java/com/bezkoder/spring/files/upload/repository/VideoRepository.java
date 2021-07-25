package com.bezkoder.spring.files.upload.repository;

import com.bezkoder.spring.files.upload.model.Video;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface VideoRepository extends JpaRepository<Video, Long> {

}
