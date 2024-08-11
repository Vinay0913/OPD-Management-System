package com.example.demo.Services;

import com.example.demo.Model.BookAppointment;
import com.example.demo.Model.PatientData;

import java.util.List;
import java.util.Optional;

public interface PatientDataServices {

    List<PatientData> getallPatientData();
   PatientData savePatientData(PatientData p);
   Optional<PatientData>  getDatabyId(int id);
    public void DeletePatientData(int id);
    PatientData updatePassword(PatientData p,int id);
    PatientData updateEmailandother(PatientData p,int id);
   List<PatientData>getpatientDatabyname(String name);
}
