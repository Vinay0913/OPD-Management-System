package com.example.demo.Services.impl;

import com.example.demo.Model.AddDoctor;
import com.example.demo.MyExceptions.ResourceAlreadyExistsException;
import com.example.demo.Repository.AddDoctorRepo;
import com.example.demo.Services.AddDoctorServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.ExceptionHandler;

import java.util.List;
import java.util.Optional;

@Service
public class AddDoctorServicesimpl implements AddDoctorServices {
    private AddDoctorRepo repo;


    @Autowired
    public AddDoctorServicesimpl(AddDoctorRepo repo) {
        this.repo = repo;

    }



    @Override
    public List<AddDoctor> getallDoctorInfo() {
        return repo.findAll();
    }

    @Override
    @ExceptionHandler(ResourceAlreadyExistsException.class)
    public AddDoctor savaDoctorsDetails(AddDoctor D) {
        if(repo.existsById(D.getId()))
        {
            throw new ResourceAlreadyExistsException("Id Already Exists");
        }

        return repo.save(D);
    }

    @Override
    public Optional<AddDoctor> getDoctorbyid(int id) {
        return repo.findById(id);
    }

    @Override
    public void DeleteDoctorData(int id) {
        repo.deleteById(id);
    }

    @Override
    public AddDoctor updatepassword(AddDoctor d, int id) {
        Optional<AddDoctor>a1=repo.findById(id);
        AddDoctor a2=a1.get();
        a2.setPass(d.getPass());
        a2.setCpass(d.getCpass());
        return  repo.save(a2);
    }
}
