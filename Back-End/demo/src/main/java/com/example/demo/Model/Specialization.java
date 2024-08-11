package com.example.demo.Model;


import jakarta.persistence.Entity;
import jakarta.persistence.*;
import jakarta.persistence.Table;

@Entity
@Table(name = "Specialization")
public class Specialization {
    @Id
    private int id;
    private String special;

    // Constructors
    public Specialization() {}

    public Specialization(int id, String special) {
        this.id = id;
        this.special = special;
    }

    // Getters and Setters
    public int getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getSpecial() {
        return special;
    }

    public void setSpecial(String special) {
        this.special = special;
    }

    @Override
    public String toString() {
        return "Specialization{" +
                "id=" + id +
                ", special='" + special + '\'' +
                '}';
    }
}
