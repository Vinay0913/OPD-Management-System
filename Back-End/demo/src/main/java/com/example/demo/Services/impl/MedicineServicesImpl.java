package com.example.demo.Services.impl;

import com.example.demo.Model.Medicines;
import com.example.demo.Repository.MedicineRepository;
import com.example.demo.Services.MedicineServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MedicineServicesImpl implements MedicineServices {

    private MedicineRepository repo;
    @Autowired
    public MedicineServicesImpl(MedicineRepository repo) {
        this.repo = repo;
    }

    @Override
    public List<Medicines> getallMedicines() {
        return repo.findAll();

    }
}
