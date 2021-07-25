package com.bezkoder.spring.files.upload.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Video {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long videoId;
  private String url;

  public Video(Long videoId, String url) {
    this.videoId = videoId;
    this.url = url;
  }

  public Video() {
  }

  public Long getVideoId() {
    return videoId;
  }

  public void setVideoId(Long videoId) {
    this.videoId = videoId;
  }

  public String getUrl() {
    return url;
  }

  public void setUrl(String url) {
    this.url = url;
  }

  @Override
  public String toString() {
    return "Video{" +
            "videoId=" + videoId +
            ", url='" + url + '\'' +
            '}';
  }
}