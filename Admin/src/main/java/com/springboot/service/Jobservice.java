package com.springboot.service;

import org.springframework.beans.factory.annotation.Autowired;


import org.springframework.stereotype.Service;

import com.springboot.exception.UserNotFoundException;
import com.springboot.model.Jobmodel;

import com.springboot.repository.Jobrepository;


import java.util.*;

@Service
public class Jobservice {

	@Autowired
	private Jobrepository repo;

	public Jobmodel savejob(Jobmodel j) {
		return repo.save(j);
	}

	public List<Jobmodel> getall() {
		return repo.findAll();
		
	}
	
	public List<Jobmodel> findall(String keyword) {
		if(keyword!=null) {
	return repo.findAll(keyword);
		}
		return repo.findAll();
	}

	

public Jobmodel updatejob(int jobid,Jobmodel j) {
		
		Jobmodel job=repo.findByjobid(jobid);
		
		job.setJobtitle(j.getJobtitle());
		job.setJoblocation(j.getJoblocation());
		job.setJobtype(j.getJobtype());
		job.setJobdesc(j.getJobdesc());
		job.setSalary(j.getSalary());
		return repo.save(job);
		}

	public Jobmodel deletejob(int jobid) {
		Jobmodel job=repo.findByjobid(jobid);
		if(job==null) {
			throw new UserNotFoundException("Job not found");
		}
		repo.delete(job);
		return job;
		
	}
	
	public Jobmodel getbyid(int jobid) {
	
		
		return repo.findByjobid(jobid);
	}
	
}

