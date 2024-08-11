package com.example.demo.Model;


import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name = "PatientData")
public class PatientData {

    @Id
    private int id;
    private String name;
    private String email;
    private String Address;
    private String  Contact;
    private String gender;
    private int Age;
    private String password;
    private String confirm;
}
