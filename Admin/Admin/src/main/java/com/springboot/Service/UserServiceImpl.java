package com.springboot.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springboot.Exception.UserNotFoundException;
import com.springboot.Model.ApplyModel;
import com.springboot.Model.UserDto;
import com.springboot.Model.UserModel;
import com.springboot.Repository.ApplyRepository;
import com.springboot.Repository.UserRepository;
@Service
public class UserServiceImpl implements UserService {
	
	@Autowired
	private UserRepository adminRepository;
	@Autowired
	private ApplyRepository applyrepo;
	
	@Override
	public UserModel saveEmp(UserModel employee) {
		adminRepository.save(employee);
		return employee;
		
	}
	
	/*@Override
	public UserModel saved(UserDto dto) {
		
		UserModel u=new UserModel();
		u.setEmpId(dto.getEmpId());
		u.setEmail(dto.getEmail());
		u.setPassword(dto.getPassword());
		u.setMobileNumber(dto.getMobileNumber());
		u.setDepartment(dto.getDepartment());
		u.setRole(dto.getRole());
		
		adminRepository.save(u);
		
		
	}*/
	@Override
	public UserModel deleteEmp(int empId) {
        UserModel hr =adminRepository.findByEmpId(empId);
       /* if(hr==null) {
        	throw new UserNotFoundException("User not found");
        }*/
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
		hr.setDepartment(admin.getDepartment());
		hr.setRole(admin.getRole());
        return adminRepository.save(hr);
    }
	
	@Override
	public List<UserModel> getEmp()
	{
		return adminRepository.findAll();
	}


}
