package com.springboot.Service;

import java.util.List;

import com.springboot.Model.UserDto;
import com.springboot.Model.UserModel;

public interface UserService {
	public UserModel saveEmp(UserModel employee);
	
	public UserModel deleteEmp(int empId);
	
	public UserModel updateEmp(int empId,UserModel admin);
	
	public List<UserModel> getEmp();
	
//	public UserModel findByEmpId(int empId);
//	public UserModel saved(UserModel m);
	
	

}
