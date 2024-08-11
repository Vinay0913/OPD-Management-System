package com.example.demo.Controller;

import com.example.demo.Model.Queries;
import com.example.demo.Model.Specialization;
import com.example.demo.Services.QueriesServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/queries")
@CrossOrigin(origins = "http://127.0.0.1:5500")
public class QueriesController {

    private QueriesServices services;
@Autowired
    public QueriesController(QueriesServices services) {
        this.services = services;
    }

    @GetMapping("/")
    public ResponseEntity<List<Queries>> getallQueries()
    {
        List<Queries>l1=services.getallQueries();
        return  new ResponseEntity<List<Queries>>(l1, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Queries>SaveQueries(@RequestBody Queries q)
    {

        Queries l1=services.saveQuery(q);
        return  new ResponseEntity<Queries>(l1, HttpStatus.OK);
    }


    @GetMapping("/{id}")
    public ResponseEntity<Queries> getQueriesById(@PathVariable int id)
    {
        Optional<Queries> l1=services.findquerybyid(id);
        return  new ResponseEntity<Queries>(l1.get(), HttpStatus.OK);
    }

}
