package com.example.demo.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;

@Data
@Entity
public class Queries {
    @Id
   private int id;
  private String  name;
    private String   email;
    private String   phone;
    private String  subject;
    private String message;
}
