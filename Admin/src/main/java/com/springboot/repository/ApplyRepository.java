package com.springboot.repository;



import org.springframework.data.jpa.repository.JpaRepository;

import com.springboot.model.ApplyModel;


public interface ApplyRepository extends JpaRepository<ApplyModel,Integer>  {
	
    
	ApplyModel findByjobidAndEmail(int jobid,String email);

	ApplyModel findByjobid(int jobid);

	ApplyModel findByUserId(int userId);

}
