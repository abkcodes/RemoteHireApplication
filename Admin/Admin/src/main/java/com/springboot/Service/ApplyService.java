package com.springboot.Service;

import java.util.List;

import com.springboot.Model.ApplyDto;
import com.springboot.Model.ApplyModel;
import com.springboot.Model.Jobmodel;
import com.springboot.Model.UserModel;

public interface ApplyService {
	
	public ApplyModel add(ApplyModel user);
	
	//public ApplyModel addUser(ApplyDto dto);
	
	public ApplyModel deleteEmp(int jobid);
	
	public List<ApplyModel> getEmp();
 ApplyModel getJobById(int jobId); 
		
	//ApplyModel deleteEmp(int applyId);

}
