package com.example.demo.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.*;


@Data
@Entity
@Table(name = "Doctorinfo")
public class AddDoctor {
    @Id
    private int id;
    private String special;
    private String name;
    private  String email;
    private String contact;
    private String date;
    private String pass;
    private String cpass;

}
