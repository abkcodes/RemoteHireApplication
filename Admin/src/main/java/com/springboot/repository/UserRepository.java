package com.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.springboot.model.UserModel;

public interface UserRepository extends JpaRepository<UserModel,Integer> {
	
    UserModel removeByEmpId(int empId);
	
	UserModel findByEmpId(int empId);
	
	UserModel findByEmail(String email);

	boolean existsByemail(String email);
}
