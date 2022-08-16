package com.springboot.Model;

import java.util.List;

import javax.persistence.*;

@Entity
@Table(name = "jobmodel")
public class Jobmodel {
	@Id
	@Column(name = "jobid")
	private int jobid;
	@Column(name = "jobtitle")
	private String jobtitle;
	@Column(name = "joblocation")
	private String joblocation;
	@Column(name = "jobtype")
	private String jobtype;
	@Column(name = "jobdesc")
	private String jobdesc;
	@Column(name = "salary")
	private String salary;

	public Jobmodel(int jobid, String jobtitle, String joblocation, String jobtype, String jobdesc, String salary) {
		super();
		this.jobid = jobid;
		this.jobtitle = jobtitle;
		this.joblocation = joblocation;
		this.jobtype = jobtype;
		this.jobdesc = jobdesc;
		this.salary = salary;
		
	}

	

	public Jobmodel() {

	}

	public int getJobid() {
		return jobid;
	}

	public void setJobid(int jobid) {
		this.jobid = jobid;
	}

	public String getJobtitle() {
		return jobtitle;
	}

	public void setJobtitle(String jobtitle) {
		this.jobtitle = jobtitle;
	}

	public String getJoblocation() {
		return joblocation;
	}

	public void setJoblocation(String joblocation) {
		this.joblocation = joblocation;
	}

	public String getJobtype() {
		return jobtype;
	}

	public void setJobtype(String jobtype) {
		this.jobtype = jobtype;
	}

	public String getJobdesc() {
		return jobdesc;
	}

	public void setJobdesc(String jobdesc) {
		this.jobdesc = jobdesc;
	}

	public String getSalary() {
		return salary;
	}

	public void setSalary(String salary) {
		this.salary = salary;
	}

}
