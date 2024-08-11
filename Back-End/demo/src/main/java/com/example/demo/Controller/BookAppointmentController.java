package com.example.demo.Controller;

import com.example.demo.Model.AddDoctor;
import com.example.demo.Model.BookAppointment;
import com.example.demo.Model.Specialization;
import com.example.demo.Services.BookAppointmentServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/BookAppointmentData")
@CrossOrigin(origins = "http://127.0.0.1:5500")
public class BookAppointmentController {

 private BookAppointmentServices service;

    @Autowired
    public BookAppointmentController(BookAppointmentServices service) {
        this.service = service;
    }

    @GetMapping("/")
    public ResponseEntity<List<BookAppointment>> getallAppointments()
    {
        List<BookAppointment>l1=service.getallAppointments();
        return  new ResponseEntity<List<BookAppointment>>(l1, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<BookAppointment>saveAppointments(@RequestBody  BookAppointment b)
    {
        BookAppointment l1=service.saveAppointments(b);
        return new ResponseEntity<>(l1, HttpStatus.OK);
    }


    @DeleteMapping("/{id}")
    public ResponseEntity<String>DeleteAppointments(@PathVariable  int id)
    {
        service.DeleteAppointment(id);
        return new ResponseEntity<>("Appointment Deleted Successfully", HttpStatus.OK);
    }

}
