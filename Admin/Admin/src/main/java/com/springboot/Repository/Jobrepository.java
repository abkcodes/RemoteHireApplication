package com.springboot.Repository;

import java.util.List;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.springboot.Model.Jobmodel;

@Repository
public interface Jobrepository extends JpaRepository<Jobmodel, Integer> {
	
	@Query("SELECT j from Jobmodel j where j.jobtitle LIKE %?1%")
	public List<Jobmodel> findAll(String keyword);
	
	Jobmodel findByjobid(int jobid);

}