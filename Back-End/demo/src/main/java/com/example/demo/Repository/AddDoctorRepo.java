package com.example.demo.Repository;

import com.example.demo.Model.AddDoctor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AddDoctorRepo extends JpaRepository<AddDoctor,Integer> {
}
