package com.autocheck.hello.model;

public class SinhvienDangnhap {
	String email;
	String password;
	
	public SinhvienDangnhap() {}
	public SinhvienDangnhap(String email, String password) {
		
		this.email = email;
		this.password = password;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	
}
