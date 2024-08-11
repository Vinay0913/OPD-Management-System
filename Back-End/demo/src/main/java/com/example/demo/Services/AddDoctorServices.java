package com.example.demo.Services;

import com.example.demo.Model.AddDoctor;

import java.util.List;
import java.util.Optional;

public interface AddDoctorServices {
 List<AddDoctor> getallDoctorInfo();
    AddDoctor savaDoctorsDetails(AddDoctor D);
    Optional<AddDoctor> getDoctorbyid(int id);
    public void DeleteDoctorData(int id);
    AddDoctor updatepassword(AddDoctor d,int id);
}
