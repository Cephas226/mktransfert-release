package com.example.monstyle.repository;

import com.example.monstyle.model.ImageModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ImageRepository extends JpaRepository<ImageModel, String> {
    Optional<ImageModel> findByName(String name);
}
