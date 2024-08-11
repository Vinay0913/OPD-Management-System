package com.example.demo.Controller;

import com.example.demo.Model.AddDoctor;
import com.example.demo.Model.PatientData;
import com.example.demo.Services.AddDoctorServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/doctorinfo")
@CrossOrigin(origins = "http://127.0.0.1:5500")
public class AddDoctorController {

    private AddDoctorServices service;
    @Autowired
    public AddDoctorController(AddDoctorServices service) {
        this.service = service;
    }

    @GetMapping("/")
    public ResponseEntity<List<AddDoctor>>getAllDoctorinfo()
    {
        List<AddDoctor> l1=service.getallDoctorInfo();
        return new ResponseEntity<>(l1, HttpStatus.OK);
    }
    @GetMapping("/{id}")
    public ResponseEntity<AddDoctor>getDoctorbyid(@PathVariable int id)
    {
        Optional<AddDoctor> l1=service.getDoctorbyid(id);
        return new ResponseEntity<>(l1.get(), HttpStatus.OK);
    }
    @PostMapping
    public ResponseEntity<AddDoctor>saveDoctorinfo(@RequestBody  AddDoctor d)
    {
        AddDoctor l1=service.savaDoctorsDetails(d);
        return new ResponseEntity<>(l1, HttpStatus.OK);
    }




    @PatchMapping("/{id}")
    public ResponseEntity<AddDoctor> UpdatePassword(@RequestBody AddDoctor d, @PathVariable  int id)
    {
        AddDoctor p1=service.updatepassword(d,id);
        return  new ResponseEntity<>(p1,HttpStatus.OK);

    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String>DeleteDoctorData(@PathVariable  int id)
    {
        service.DeleteDoctorData(id);
        return new ResponseEntity<>("Doctor Deleted Successfully", HttpStatus.OK);
    }

}
