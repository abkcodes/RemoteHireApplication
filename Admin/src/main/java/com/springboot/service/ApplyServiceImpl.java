package com.springboot.service;

import java.util.List;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.springboot.exception.UserNotFoundException;

import com.springboot.model.ApplyModel;


import com.springboot.repository.ApplyRepository;
import com.springboot.repository.Jobrepository;
import com.springboot.repository.UserRepository;


@Service
public class ApplyServiceImpl implements ApplyService {
	
	@Autowired
	private ApplyRepository applyRepository;
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private Jobrepository jobRepo;
	
	@Autowired
	private UserService userService;
	
	@Override
	public ApplyModel add(ApplyModel user) {
		return applyRepository.save(user);
	}
	
	@Override
	public ApplyModel deleteEmp(int jobid) {
		ApplyModel hr =applyRepository.findByjobid(jobid);
        if(hr==null) {
        	throw new UserNotFoundException("User not found");
        }
        applyRepository.delete(hr);
        return hr;
        
    }
	
	@Override
	public List<ApplyModel> getEmp()
	{
		return applyRepository.findAll();
	}
	
	public ApplyModel getJobById(int jobid) {
		return applyRepository.findByjobid(jobid);
	
	}
	public ApplyModel addStatus(int jobid,String email,ApplyModel user) {
		ApplyModel employee = applyRepository.findByjobidAndEmail(jobid,email);
		employee.setStatus(user.getStatus());
		return applyRepository.save(employee);
	}
	public ApplyModel getbyemail(String email,int jobid) {
		
	
		return applyRepository.findByjobidAndEmail(jobid, email);
	}
	
	public ApplyModel updateStatus(int jobid,String email,ApplyModel apply)
    {
		ApplyModel employee = applyRepository.findByjobidAndEmail(jobid,email);
		if(employee==null) {
			throw new UserNotFoundException("User Not Applied");
		}
		employee.setStatus(apply.getStatus());
		
		return applyRepository.save(employee);
    }
	

}
