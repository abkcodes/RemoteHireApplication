package com.springboot.model;

import java.util.List;

import javax.persistence.CascadeType;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name="admin_table")
public class UserModel {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int empId;
	
	

	public UserModel(int empId, String email, String password, long mobileNumber, String name, String role,
			List<ApplyModel> apply) {
		super();
		this.empId = empId;
		this.email = email;
		this.password = password;
		this.mobileNumber = mobileNumber;
		this.name = name;
		this.role = role;
		this.apply = apply;
	}

	private String email;
	private String password;
	private long mobileNumber;
	private String name;
	private String role;
	
	@OneToMany(cascade=CascadeType.ALL)
	private List<ApplyModel> apply;
	
	public List<ApplyModel> getApply() {
		return apply;
	}
	public void setApply(List<ApplyModel> apply) {
		this.apply = apply;
	}
	public int getEmpId() {
		return empId;
	}
	public void setEmpId(int empId) {
		this.empId = empId;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public long getMobileNumber() {
		return mobileNumber;
	}
	public void setMobileNumber(long mobileNumber) {
		this.mobileNumber = mobileNumber;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getRole() {
		return role;
	}
	public void setRole(String role) {
		this.role = role;
	}
	
	public UserModel() {
		
	}
	
	

	
	
}
