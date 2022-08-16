package com.springboot.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

import com.springboot.Exception.UserNotFoundException;
import com.springboot.Model.Jobmodel;
import com.springboot.Repository.Jobrepository;

import java.util.*;

@Service
public class Jobservice {

	@Autowired
	private Jobrepository repo;

	public Jobmodel savejob(Jobmodel j) {
		return repo.save(j);
	}

	public List<Jobmodel> getall() {
		List<Jobmodel> s = repo.findAll();
		return s;
	}
	
	public List<Jobmodel> findall(String keyword) {
		if(keyword!=null) {
	return repo.findAll(keyword);
		}
		return repo.findAll();
	}

	public Jobmodel getEmployeeById(int jobid) {
		Jobmodel employee = repo.findById(jobid).get();
		return employee;
	}

	public Jobmodel updatejob(Jobmodel j, int jobid) {

		if (j.getJobid() == jobid) {
			j.setJobid(j.getJobid());
			j.setJobtitle(j.getJobtitle());
			j.setJoblocation(j.getJoblocation());
			j.setJobtype(j.getJobtype());
			j.setJobdesc(j.getJobdesc());
			j.setSalary(j.getSalary());
		}
		return j;

	}

	public Jobmodel deletejob(int jobid) {
		Jobmodel job=repo.findByjobid(jobid);
		if(job==null) {
			throw new UserNotFoundException("Job not found");
		}
		repo.delete(job);
		return job;
		
	}
	
}

