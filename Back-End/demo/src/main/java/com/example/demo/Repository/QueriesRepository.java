package com.example.demo.Repository;

import com.example.demo.Model.Queries;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface QueriesRepository extends JpaRepository<Queries,Integer> {
}
