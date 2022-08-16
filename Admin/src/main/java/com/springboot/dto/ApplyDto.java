package com.springboot.dto;
public class ApplyDto {
	
	private int applyId;
	
	private String email;
	
	private int jobid;
	private int userId;
	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}


	private String status;
	
	

	public int getApplyId() {
		return applyId;
	}

	public void setApplyId(int applyId) {
		this.applyId = applyId;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public int getJobid() {
		return jobid;
	}

	public void setJobid(int jobid) {
		this.jobid = jobid;
	}

	
	public ApplyDto(int applyId, String email, int jobid) {
		super();
		this.applyId = applyId;
		this.email = email;
		this.jobid = jobid;
		
	}
	
	

	

}
