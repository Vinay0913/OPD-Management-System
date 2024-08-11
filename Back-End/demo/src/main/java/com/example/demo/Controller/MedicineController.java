package com.example.demo.Controller;

import com.example.demo.Model.Medicines;
import com.example.demo.Services.MedicineServices;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/Medicines")
@CrossOrigin(origins = "http://127.0.0.1:5500")
public class MedicineController {


    private MedicineServices service;

    public MedicineController(MedicineServices service) {
        this.service = service;
    }

    @GetMapping("/")
    public ResponseEntity<List<Medicines>> getallmedicines()
    {
        List<Medicines> l1=service.getallMedicines();
        return  new ResponseEntity<List<Medicines>>(l1, HttpStatus.OK);

    }



}
