package com.springboot.Model;

import java.time.LocalDate;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;


import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.format.annotation.DateTimeFormat.ISO;

public class ApplyDto {
	
	private int applyId;
	
	private String email;
	
	private int jobid;
	
	/*@DateTimeFormat(iso=ISO.DATE)
	private LocalDate appliedDate;*/

	public int getApplyId() {
		return applyId;
	}

	public void setApplyId(int applyId) {
		this.applyId = applyId;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public int getJobid() {
		return jobid;
	}

	public void setJobid(int jobid) {
		this.jobid = jobid;
	}

	/*public LocalDate getAppliedDate() {
		return appliedDate;
	}

	public void setAppliedDate(LocalDate appliedDate) {
		this.appliedDate = appliedDate;
	}*/

	public ApplyDto(int applyId, String email, int jobid) {
		super();
		this.applyId = applyId;
		this.email = email;
		this.jobid = jobid;
		
	}
	
	

	

}
