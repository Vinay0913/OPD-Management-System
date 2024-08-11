package com.example.demo.Services;

import com.example.demo.Model.Specialization;

import java.util.List;
import java.util.Optional;

public interface SpecializationServices {

    List<Specialization> getallSpecialization();
    Specialization savaSpecialization(Specialization s);
    Specialization updateSpecalization(Specialization s,int id);
    Optional<Specialization> getSpecializationbyid(int id);
    public void DeleteSpecialization(int id);
}
