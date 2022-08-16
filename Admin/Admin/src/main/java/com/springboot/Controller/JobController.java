package com.springboot.Controller;

import java.util.List;


import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.springboot.Model.Jobmodel;
import com.springboot.Service.Jobservice;



@RestController
@RequestMapping("/hr")
public class JobController {
	@Autowired
	Jobservice service;

	

	@PostMapping("/addJob")
	public ResponseEntity<Jobmodel>addjobs(@RequestBody Jobmodel job) {
		Jobmodel j= service.savejob(job);
		return new ResponseEntity<Jobmodel>(j,HttpStatus.OK);
	}
	
	@PutMapping("/update/{jobid}")
	public ResponseEntity<Jobmodel> updatejob(@PathVariable int jobid,@RequestBody Jobmodel m) {
		Jobmodel j= service.updatejob(m,jobid);
		return new ResponseEntity<Jobmodel>(j,HttpStatus.OK);
	
	}
	


	@GetMapping("/getalljobs")
	public ResponseEntity<List<Jobmodel>> getalljob(){
		 List<Jobmodel> job=service.getall();
		 return new ResponseEntity<List<Jobmodel>>(job,HttpStatus.OK);
	}
	
	 @DeleteMapping("/delete/{jobid}")
		public  ResponseEntity<Jobmodel> deleteByid(@PathVariable("jobid")int jobid) {
	    Jobmodel j=	service.deletejob(jobid);

		return new ResponseEntity<Jobmodel>(j,HttpStatus.OK);
		
	 }

}
