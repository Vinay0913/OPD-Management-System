package com.example.demo.Controller;

import com.example.demo.Model.Specialization;
import com.example.demo.MyExceptions.ResourceAlreadyExistsException;
import com.example.demo.Repository.SpecializationRepo;
import com.example.demo.Services.SpecializationServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/specialization")
@CrossOrigin(origins = "http://127.0.0.1:5500")
public class SpecializationController {



    private SpecializationServices ss;
@Autowired
    public SpecializationController(SpecializationServices ss) {
        this.ss = ss;
    }

    @GetMapping("/")
    public ResponseEntity<List<Specialization>> getallSpecializations()
    {
        List<Specialization>l1=ss.getallSpecialization();
        return  new ResponseEntity<List<Specialization>>(l1, HttpStatus.OK);
    }


    @PostMapping
    public ResponseEntity<Specialization>SaveSpecializations(@RequestBody Specialization s)
    {

        Specialization l1=ss.savaSpecialization(s);
        return  new ResponseEntity<Specialization>(l1, HttpStatus.OK);
    }
    @GetMapping("/{id}")
    public ResponseEntity<Specialization> getSpecializationsById(@PathVariable int id)
    {
        Optional<Specialization> l1=ss.getSpecializationbyid(id);
        return  new ResponseEntity<Specialization>(l1.get(), HttpStatus.OK);
    }
    @PutMapping("/{id}")
    public ResponseEntity<Specialization> UpdateSpecializationsById( @RequestBody Specialization s,@PathVariable int id)
    {
     Specialization l1=ss.updateSpecalization(s,id);
        return  new ResponseEntity<Specialization>(l1, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> DeleteSpecialization(@PathVariable int id)
    {
        ss.DeleteSpecialization(id);
        return  new ResponseEntity<String>("Specialization Deleted Successfully", HttpStatus.OK);
    }


}
