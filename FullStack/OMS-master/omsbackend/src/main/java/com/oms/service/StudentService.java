package com.oms.service;

import java.util.Optional;

import com.oms.model.Student;
import com.oms.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class StudentService {
/*
	List<Student> getAllStudents();
	Optional<Student> getOneStudent(Long id);
	void saveStudent(Student e);
	void updateStudent(Student e);
	void deleteStudent(Long id);
	void deleteAllStudents();*/
  @Autowired
  StudentRepository studentRepository;

  public Page<Student> findAllStudent (Pageable pageable){
    return  studentRepository.findAll(pageable);
  }
  public Student saveStudent(Student student){
    return  studentRepository.save(student);
  }
  public void deleteStudent(Long Id){
    studentRepository.deleteById(Id);
  }
  public Optional<Student> findStudentById(Long id){
    return studentRepository.findStudentById(id);
  }
}
