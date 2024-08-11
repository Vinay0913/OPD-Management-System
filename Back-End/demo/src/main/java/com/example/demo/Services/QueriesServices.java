package com.example.demo.Services;

import com.example.demo.Model.Queries;

import java.util.List;
import java.util.Optional;

public interface QueriesServices {

    List<Queries> getallQueries();
    Queries saveQuery(Queries q);
    Optional<Queries> findquerybyid(int id);



}
