package com.example.demo.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name = "BookAppointmentData")
public class BookAppointment {
    @Id
    private int id;
    private String specialization;
    private String dname;
    private String pname;
    private String pcontact;
    private String date;
    private String time;


}
