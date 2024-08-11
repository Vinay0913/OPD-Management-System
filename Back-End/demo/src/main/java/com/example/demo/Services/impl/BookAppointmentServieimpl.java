package com.example.demo.Services.impl;

import com.example.demo.Model.BookAppointment;
import com.example.demo.Repository.BookAppointmentRepo;
import com.example.demo.Services.BookAppointmentServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class BookAppointmentServieimpl implements BookAppointmentServices {

    private BookAppointmentRepo repo;
    @Autowired
    public BookAppointmentServieimpl(BookAppointmentRepo repo) {
        this.repo = repo;
    }

    @Override
    public List<BookAppointment> getallAppointments() {
        return repo.findAll();
    }

    @Override
    public BookAppointment saveAppointments(BookAppointment b) {
     return  repo.save(b);
    }

    @Override
    public void DeleteAppointment(int id) {

        repo.deleteById(id);
    }
}
