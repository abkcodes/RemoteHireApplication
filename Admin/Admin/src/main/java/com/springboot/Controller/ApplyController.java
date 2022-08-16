package com.springboot.Controller;

import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.springboot.Model.ApplyDto;
import com.springboot.Model.ApplyModel;
import com.springboot.Model.Jobmodel;
import com.springboot.Model.UserModel;
import com.springboot.Service.ApplyServiceImpl;

@RestController
public class ApplyController {
	
	@Autowired
	private ApplyServiceImpl applyService;
	
	@PostMapping("/add")
	public ResponseEntity<ApplyModel> add(@RequestBody ApplyModel admin) {
		ApplyModel user=applyService.add(admin);
		return new ResponseEntity<ApplyModel>(user,HttpStatus.OK);
      
	}
	
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<ApplyModel> deleteEmp(@PathVariable("id") int jobid) {
		ApplyModel user=applyService.deleteEmp(jobid);
		return new ResponseEntity<ApplyModel>(user,HttpStatus.OK);	
	}
	
	
	
	@GetMapping("/")
	public ResponseEntity<List<ApplyModel>> getEmp(){
		List<ApplyModel> user=applyService.getEmp();
		return new ResponseEntity<List<ApplyModel>>(user,HttpStatus.OK);
	}
	
	@GetMapping("/appliedjobstatus/{jobId}")
	public String removed(@PathVariable("jobId") int jobId, @ModelAttribute ApplyModel employee, HttpSession session) {
	
	
	     ApplyModel apply=applyService.getJobById(jobId);
	     String value;
	     if(apply.getStatus()==null) {
	    	 value="Not reviewd";
	    	 System.out.print(value);
	    	 session.setAttribute("value", value);
	     }
	     else if(apply.getStatus().equals("Accept")){
	    	 value="accepted";
	    	 System.out.print(value);
	    	 session.setAttribute("value", value);
	     }
	     else if(apply.getStatus().equals("Reject")){
	    	 value="rejected";
	    	 System.out.print(value);
	    	 session.setAttribute("value", value);
	     }
	    
	    
	     System.out.println("hi");
	     
	   /*  ModelAndView mav = new ModelAndView("accept");
	 	mav.addObject("ty", apply);*/

	 	System.out.println("Adding:" + employee);
	 	return "hI";
		//return new ModelAndView("redirect:/show");
	}
	

}
