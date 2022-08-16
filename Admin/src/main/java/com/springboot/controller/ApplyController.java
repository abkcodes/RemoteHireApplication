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
import org.springframework.web.bind.annotation.RestController;



import com.springboot.model.ApplyModel;
import com.springboot.service.ApplyServiceImpl;

@RestController
public class ApplyController {
	
	
	@Autowired
	private ApplyServiceImpl applyService;
	
	@PostMapping("/add")
	public ResponseEntity<ApplyModel> add(@RequestBody ApplyModel admin) {
		
		ApplyModel user=applyService.add(admin);
		return new ResponseEntity<>(user,HttpStatus.OK);
      
	}
	
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<ApplyModel> deleteEmp(@PathVariable("id") int jobid) {
		ApplyModel user=applyService.deleteEmp(jobid);
		return new ResponseEntity<>(user,HttpStatus.OK);	
	}
	
	
	
	@GetMapping("/")
	public ResponseEntity<List<ApplyModel>> getEmp(){
		List<ApplyModel> user=applyService.getEmp();
		return new ResponseEntity<>(user,HttpStatus.OK);
	}
	
	@GetMapping("/appliedjobstatus/{jobid}")
	public String acceptOrReject(@PathVariable("jobid") int jobid) {
	
	
	     ApplyModel apply=applyService.getJobById(jobid);
	     String value;
	     if(apply.getStatus()!=null) {
	    	  if(apply.getStatus().equals("Accept")){
	    	 value="Accepted";
	    	 
	    	 return value;
	     }
	     else {
	    	 value="Rejected";
	    
	    	 return value;
	    	 
	     }
	     }
	     else
	     {
	    	 value="Not reviewed";
	    	 
	    	 return value;
	     }
	     
	}
	@PostMapping(value = "/submitstatus/{jobid}/{email}")
	public ResponseEntity<ApplyModel> submitstatus(@PathVariable int jobid,@PathVariable String email,@RequestBody ApplyModel employee) {
		ApplyModel apply=applyService.addStatus(jobid,email,employee);
		return new ResponseEntity<>(apply,HttpStatus.OK);
		
	}
	
	 @GetMapping("/getapplys/{email}/{jobid}")
		public ApplyModel getalljobs(@PathVariable String email,@PathVariable("jobid")int jobid){
		
		 return applyService.getbyemail(email, jobid);
		 

		}
	 @PutMapping("/updatestatus/{jobid}/{email}")
		public ResponseEntity<ApplyModel> updateStatus(@PathVariable int jobid,@PathVariable String email,@RequestBody ApplyModel employee) {
			
			ApplyModel user=applyService.updateStatus(jobid,email,employee);
			return new ResponseEntity<>(user,HttpStatus.OK);
			
		}

}
