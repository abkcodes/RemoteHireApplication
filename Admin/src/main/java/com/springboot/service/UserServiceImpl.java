package com.springboot.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springboot.exception.UserNotFoundException;
import com.springboot.model.UserModel;

import com.springboot.repository.UserRepository;
@Service
public class UserServiceImpl implements UserService {
	
	@Autowired
	private UserRepository adminRepository;
	
	
	@Override
	public UserModel saveEmp(UserModel employee) {
		adminRepository.save(employee);
		return employee;
		
	}
	
	
	@Override
	public UserModel deleteEmp(int empId) {
        UserModel hr =adminRepository.findByEmpId(empId);
       
        adminRepository.delete(hr);
        return hr;
        
    }
	@Override
	public UserModel updateEmp(int empId,UserModel admin)
    {
		UserModel hr = adminRepository.findByEmpId(empId);
		if(hr==null) {
			throw new UserNotFoundException("User Not Found");
		}
		hr.setEmail(admin.getEmail());
		hr.setPassword(admin.getPassword());
		hr.setMobileNumber(admin.getMobileNumber());
		hr.setName(admin.getName());
		hr.setRole(admin.getRole());
        return adminRepository.save(hr);
    }
	
	@Override
	public List<UserModel> getEmp()
	{
		return adminRepository.findAll();
	}
	public UserModel getUserById(int empId) {
		UserModel hr =adminRepository.findByEmpId(empId);
        if(hr==null) {
        	throw new UserNotFoundException("Job Id "+empId+" not found");
        }
        return hr;
	}


}
