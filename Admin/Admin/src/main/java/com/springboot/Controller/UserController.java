package com.springboot.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.springboot.Exception.UserNotFoundException;
import com.springboot.Model.UserDto;
import com.springboot.Model.UserModel;
import com.springboot.Service.UserServiceImpl;

@RestController
@RequestMapping("/admin")
public class UserController {
	
	@Autowired
	private UserServiceImpl adminService;
	
	
	
	@PostMapping("/adds")
	public String saveEmp(@RequestBody UserModel m) {
		adminService.saveEmp(m);
		return "saved";
      
		
	}
	
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<UserModel> deleteEmp(@PathVariable("id") int empId) {
		UserModel user=adminService.deleteEmp(empId);
		return new ResponseEntity<UserModel>(user,HttpStatus.OK);	
	}
	
	@PutMapping("/update/{id}")
	public ResponseEntity<UserModel> updateEmp(@PathVariable("id") int empId,@RequestBody UserModel admin) {
		UserModel user=adminService.updateEmp(empId, admin);
		return new ResponseEntity<UserModel>(user,HttpStatus.OK);
		
	}
	
	@GetMapping("/")
	public ResponseEntity<List<UserModel>> getEmp(){
		List<UserModel> user=adminService.getEmp();
		return new ResponseEntity<List<UserModel>>(user,HttpStatus.OK);
	}

}
