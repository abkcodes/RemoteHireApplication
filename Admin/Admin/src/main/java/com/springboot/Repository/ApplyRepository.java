package com.springboot.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;


import com.springboot.Model.ApplyModel;
import com.springboot.Model.Jobmodel;
import com.springboot.Model.UserModel;

public interface ApplyRepository extends JpaRepository<ApplyModel,Integer>  {
	
    /*ApplyModel removeByEmpId(int empId);
	
	ApplyModel findByEmpId(int empId);*/
	//ApplyModel findByjobidAndEmail(Jobmodel jobid,UserModel email);

	ApplyModel findByjobid(int jobid);

	ApplyModel findByUserId(int userId);
//	List<ApplyModel> findByEmpId(int empId);
}
