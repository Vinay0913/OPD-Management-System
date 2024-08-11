package com.example.demo.Services;

import com.example.demo.Model.BookAppointment;

import java.util.List;

public interface BookAppointmentServices  {

     List<BookAppointment> getallAppointments();
     BookAppointment saveAppointments(BookAppointment b);
     public void DeleteAppointment(int id);


}
