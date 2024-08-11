package com.example.demo.Services.impl;

import com.example.demo.Model.Queries;
import com.example.demo.Repository.QueriesRepository;
import com.example.demo.Services.QueriesServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service
public class QueriesServiceImpl implements QueriesServices {

    private QueriesRepository repo;
@Autowired
    public QueriesServiceImpl(QueriesRepository repo) {
        this.repo = repo;
    }

    @Override
    public List<Queries> getallQueries() {
        return repo.findAll();
    }

    @Override
    public Queries saveQuery(Queries q) {
        return repo.save(q);
    }

    @Override
    public Optional<Queries> findquerybyid(int id) {
        return repo.findById(id);
    }
}
