package com.example.demo.Repository;

import com.example.demo.Model.Medicines;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MedicineRepository  extends JpaRepository<Medicines ,Integer> {


}
