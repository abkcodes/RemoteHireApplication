package com.springboot.service;

import java.util.List;

import com.springboot.model.Jobmodel;

public interface JobserviceImpl {

	public Jobmodel savejob(Jobmodel j);

	public List<Jobmodel> getall();

	public List<Jobmodel> findall(String keyword);

	public Jobmodel updatejob(Jobmodel j, int jobid);

	public Jobmodel deletejob(int jobid);

}
