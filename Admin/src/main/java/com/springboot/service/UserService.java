package com.springboot.service;

import java.util.List;


import com.springboot.model.UserModel;

public interface UserService {
	public UserModel saveEmp(UserModel employee);
	
	public UserModel deleteEmp(int empId);
	
	public UserModel updateEmp(int empId,UserModel admin);
	
	public List<UserModel> getEmp();
	

	
	

}
