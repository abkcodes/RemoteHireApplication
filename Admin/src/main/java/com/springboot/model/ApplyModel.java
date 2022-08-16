package com.springboot.model;



import javax.persistence.Entity;
import javax.persistence.Id;

import javax.persistence.Table;



@Entity
@Table(name="applied_table")
public class ApplyModel {
	
    public int getUserId() {
		return userId;
	}


	public void setUserId(int userId) {
		this.userId = userId;
	}
	@Id
	private int jobid;
	

	private int userId;
	
	private String email;
	
	private String status;
	


	private String description;
	
	
	public String getDescription() {
		return description;
	}


	public void setDescription(String description) {
		this.description = description;
	}


	public String getStatus() {
		return status;
	}


	public void setStatus(String status) {
		this.status = status;
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


	
	
	


	

	


	public ApplyModel(String email, int jobid,int userId,String status) {
		super();
		
		this.email = email;
		this.jobid = jobid;
		this.userId=userId;
		this.status=status;
		
	}


	public ApplyModel() {
		
	}


	
	
	
	
	
	

}
