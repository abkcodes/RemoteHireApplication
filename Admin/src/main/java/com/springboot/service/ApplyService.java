package com.springboot.service;

import java.util.List;



import com.springboot.model.ApplyModel;


public interface ApplyService {
	
	public ApplyModel add(ApplyModel user);
	
	
	
	public ApplyModel deleteEmp(int jobid);
	
	public List<ApplyModel> getEmp();
	
    public ApplyModel getJobById(int jobId); 
    public ApplyModel getbyemail(String email,int jobid);
    public ApplyModel updateStatus(int jobid,String email,ApplyModel apply);
	
}
