package com.example.demo.Services.impl;

import com.example.demo.Model.Specialization;
import com.example.demo.MyExceptions.ResourceAlreadyExistsException;
import com.example.demo.Repository.SpecializationRepo;
import com.example.demo.Services.SpecializationServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.ExceptionHandler;

import java.util.List;
import java.util.Optional;

@Service
public class Specializationservicesimpl  implements SpecializationServices {

    private SpecializationRepo srepo;
@Autowired
    public Specializationservicesimpl(SpecializationRepo srepo) {
        this.srepo = srepo;
    }

    @Override
    public List<Specialization> getallSpecialization() {
        return srepo.findAll();
    }

    @Override
    @ExceptionHandler(ResourceAlreadyExistsException.class)
    public Specialization savaSpecialization(Specialization s) {
        if(srepo.existsById(s.getId()))
        {
            throw  new ResourceAlreadyExistsException("Id already Exists");
        }
        return srepo.save(s);
    }

    @Override
    public Specialization updateSpecalization(Specialization s, int id) {
      Optional<Specialization> s1=srepo.findById(id);
      Specialization s2=s1.get();
      s2.setId(s.getId());
      s2.setSpecial(s.getSpecial());
      return  srepo.save(s2);

    }

    @Override
    public Optional<Specialization> getSpecializationbyid(int id) {
        Optional<Specialization> s1=srepo.findById(id);
        return srepo.findById(id);
    }

    @Override
    public void DeleteSpecialization(int id) {
        srepo.deleteById(id);
    }
}
