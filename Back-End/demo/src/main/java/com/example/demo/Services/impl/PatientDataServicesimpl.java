package com.example.demo.Services.impl;

import com.example.demo.Model.PatientData;
import com.example.demo.Repository.PatientDataRepository;
import com.example.demo.Services.PatientDataServices;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class PatientDataServicesimpl implements PatientDataServices {

    private PatientDataRepository repo;

    @Autowired
    public PatientDataServicesimpl(PatientDataRepository repo) {
        this.repo = repo;

    }




    @Override
    public List<PatientData> getallPatientData() {
        return repo.findAll();
    }

    @Override
    public PatientData savePatientData(PatientData p) {



        return repo.save(p);
    }

    @Override
    public Optional<PatientData> getDatabyId(int id) {
        return repo.findById(id);
    }

    @Override
    public void DeletePatientData(int id) {
        repo.deleteById(id);
    }



    @Override
    public PatientData  updatePassword(PatientData p, int id) {
        Optional<PatientData>p1=repo.findById(id);
        PatientData p2=p1.get();
        p2.setPassword((p.getPassword()));
        p2.setConfirm(p.getConfirm());
        return repo.save(p2);
    }

    @Override
    public PatientData updateEmailandother(PatientData p, int id) {
        Optional<PatientData>p1=repo.findById(id);
        PatientData p2=p1.get();
        p2.setName(p.getName());
        p2.setEmail(p.getEmail());
        p2.setAddress(p.getAddress());
        p2.setContact(p.getContact());
        p2.setAge(p.getAge());
        p2.setGender(p.getGender());



        return repo.save(p2);
    }

    @Override
    public List<PatientData> getpatientDatabyname(String name) {
        List<PatientData> allPatients = repo.findAll();
        return allPatients.stream()
                .filter(patient -> patient.getName().toLowerCase().contains(name.toLowerCase()))
                .collect(Collectors.toList());
    }
}
