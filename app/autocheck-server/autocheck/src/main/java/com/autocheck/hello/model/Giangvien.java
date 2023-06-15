package com.autocheck.hello.model;

public class Giangvien {
	String hoten;
	String email;
	String username;
	String password;
	String id;
	boolean vohieuhoa;
	
	public Giangvien() {}
	
	public Giangvien(String hoten, String email, String username, String password, String id, boolean vohieuhoa) {
		
		this.hoten = hoten;
		this.email = email;
		this.username = username;
		this.password = password;
		this.id = id;
		this.vohieuhoa = vohieuhoa;
	}
	public boolean isVohieuhoa() {
		return vohieuhoa;
	}
	public void setVohieuhoa(boolean vohieuhoa) {
		this.vohieuhoa = vohieuhoa;
	}
	public String getHoten() {
		return hoten;
	}
	public void setHoten(String hoten) {
		this.hoten = hoten;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	
}
