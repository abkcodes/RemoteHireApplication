package com.springboot.controller;

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

import com.springboot.dto.JobDto;
import com.springboot.model.Jobmodel;
import com.springboot.service.Jobservice;



@RestController
@RequestMapping("/hr")
public class JobController {
	@Autowired
	Jobservice service;

	

	@PostMapping("/addJob")
	public ResponseEntity<Jobmodel>addjobs(@RequestBody JobDto job) {
		Jobmodel jobs=new Jobmodel();
		jobs.setJobid(job.getJobid());
		jobs.setJobtitle(job.getJobtitle());
		jobs.setJoblocation(job.getJoblocation());
		jobs.setJobtype(job.getJobtype());
		jobs.setJobdesc(job.getJobdesc());
		jobs.setSalary(job.getSalary());
		
		Jobmodel j= service.savejob(jobs);
		return new ResponseEntity<>(j,HttpStatus.OK);
	}
	
	@PutMapping("/update/{jobid}")
	public ResponseEntity<Jobmodel> updatejob(@PathVariable int jobid,@RequestBody Jobmodel m) {
		Jobmodel j= service.updatejob(jobid, m);
		return new ResponseEntity<>(j,HttpStatus.OK);
	
	}
	


	@GetMapping("/getalljobs")
	public ResponseEntity<List<Jobmodel>> getalljob(){
		 List<Jobmodel> job=service.getall();
		 return new ResponseEntity<>(job,HttpStatus.OK);
	}
	
	 @DeleteMapping("/delete/{jobid}")
		public  ResponseEntity<Jobmodel> deleteByid(@PathVariable("jobid")int jobid) {
	    Jobmodel j=	service.deletejob(jobid);

		return new ResponseEntity<>(j,HttpStatus.OK);
		
	 }
	 @GetMapping("/getjobs/{jobid}")
		public Jobmodel getalljobs(@PathVariable("jobid")int jobid){
		
		 return service.getbyid(jobid);
		 

		}
		

}
