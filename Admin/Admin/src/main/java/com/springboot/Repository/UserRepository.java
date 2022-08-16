package com.springboot.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.springboot.Model.UserModel;

public interface UserRepository extends JpaRepository<UserModel,Integer> {
	
    UserModel removeByEmpId(int empId);
	
	UserModel findByEmpId(int empId);
	
	UserModel findByEmail(String email);


}
