package com.springboot.Service;

import java.util.List;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.DeleteMapping;

import com.springboot.Exception.UserNotFoundException;
import com.springboot.Model.ApplyDto;
import com.springboot.Model.ApplyModel;
import com.springboot.Model.Jobmodel;
import com.springboot.Model.UserModel;
import com.springboot.Repository.ApplyRepository;
import com.springboot.Repository.Jobrepository;
import com.springboot.Repository.UserRepository;


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
		ApplyModel employee = applyRepository.findByjobid(jobid);
		return employee;
	}
	
	

}
