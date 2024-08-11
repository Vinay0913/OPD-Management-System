package com.example.demo.Controller;


import com.example.demo.Model.PatientData;
import com.example.demo.Services.BookAppointmentServices;
import com.example.demo.Services.PatientDataServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/PatientData")
@CrossOrigin(origins = "http://127.0.0.1:5500")
public class PatientDataController {

    private PatientDataServices service;


    @Autowired
    public PatientDataController(PatientDataServices service) {
        this.service = service;

    }




    @GetMapping("/")
    public ResponseEntity<List<PatientData>> getallPatients()
    {
        List<PatientData>l1=service.getallPatientData();
        return  new ResponseEntity<List<PatientData>>(l1, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<PatientData>saveAllPatients(@RequestBody  PatientData p)
    {

        PatientData l1=service.savePatientData(p);
        return new ResponseEntity<>(l1, HttpStatus.OK);
    }
    @GetMapping("/{id}")
    public ResponseEntity<Optional<PatientData>> getPatientDatabyid(@PathVariable  int id)
    {
        Optional<PatientData>l1=service.getDatabyId(id);
        return new ResponseEntity<Optional<PatientData>>(l1, HttpStatus.OK);
    }

    @PatchMapping("/{id}")
    public ResponseEntity<PatientData> Updatepassword(@RequestBody PatientData p,@PathVariable  int id)
    {

      PatientData p1=service.updatePassword(p,id);
      return  new ResponseEntity<>(p1,HttpStatus.OK);

    }

    @GetMapping("/search")
    public ResponseEntity<List<PatientData>> searchPatientsByName(@RequestParam(name = "name", required = false, defaultValue = "") String name) {
        List<PatientData> l1 = service.getpatientDatabyname(name);
        return new ResponseEntity<>(l1, HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<PatientData> UpdateEmailandother(@RequestBody PatientData p,@PathVariable  int id)
    {
        PatientData p1=service.updateEmailandother(p,id);
        return  new ResponseEntity<>(p1,HttpStatus.OK);

    }




    @DeleteMapping("/{id}")
    public ResponseEntity<String>DeletePatientData(@PathVariable  int id)
    {
        service.DeletePatientData(id);
        return new ResponseEntity<>("Patient Data Deleted Successfully", HttpStatus.OK);
    }

}
