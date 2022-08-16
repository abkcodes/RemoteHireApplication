package com.springboot.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.springboot.dto.LoginDto;
import com.springboot.model.UserDto;
import com.springboot.model.UserModel;
import com.springboot.repository.UserRepository;
import com.springboot.service.UserServiceImpl;

@RestController
@RequestMapping("/admin")
public class UserController {
	
	@Autowired
	private UserServiceImpl adminService;
	@Autowired
	private UserRepository repo;
	
	
	
	@PostMapping("/adds")
	public String saveEmp(@RequestBody UserDto m) {
		if (repo.existsByemail(m.getEmail())) {
			return "User already added";
		}
		else {
		UserModel model=new UserModel();
		model.setEmpId(m.getEmpId());
		model.setName(m.getName());
		model.setEmail(m.getEmail());
		model.setMobileNumber(m.getMobileNumber());
		model.setPassword(m.getPassword());
		model.setRole(m.getRole());
		adminService.saveEmp(model);
		
		return "saved";
		}
		}
      
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<UserModel> deleteEmp(@PathVariable("id") int empId) {
		UserModel user=adminService.deleteEmp(empId);
		return new ResponseEntity<>(user,HttpStatus.OK);	
	}
	
	@PutMapping("/update/{id}")
	public ResponseEntity<UserModel> updateEmp(@PathVariable("id") int empId,@RequestBody UserDto m) {
		UserModel model=new UserModel();
		model.setEmpId(m.getEmpId());
		model.setName(m.getName());
		model.setEmail(m.getEmail());
		model.setMobileNumber(m.getMobileNumber());
		model.setPassword(m.getPassword());
		model.setRole(m.getRole());
		UserModel user=adminService.updateEmp(empId, model);
		return new ResponseEntity<>(user,HttpStatus.OK);
		
	}
	
	@GetMapping("/getallemployee")
	public ResponseEntity<List<UserModel>> getEmp(){
		List<UserModel> user=adminService.getEmp();
		return new ResponseEntity<>(user,HttpStatus.OK);
	}
	
	@PostMapping("/login")
	@CrossOrigin
    public String userLogin(@RequestBody LoginDto dto){
		UserModel user = repo.findByEmail(dto.getEmail());
		if(user!=null) {
			if(user.getEmail().equals(dto.getEmail())&&user.getPassword().equals(dto.getPassword())&& user.getRole().equals(dto.getRole())) {
				return "Login done";
			}
			else {
				return "Bad credentials";
			}
		
		}
		else {
			return "User does not exist";
		}
		
    }
	@GetMapping("/get/{id}")
	public ResponseEntity<UserModel> getUserByJobId(@PathVariable("id") int empId) {
		UserModel user=adminService.getUserById(empId);
		return new ResponseEntity<>(user,HttpStatus.OK);	
	}
}
	


