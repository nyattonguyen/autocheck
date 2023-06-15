package com.autocheck.hello.model;

public class Keydiemdanh {

	String id;
	String thoigian;
	String key;
	Mon mon;
	
	
	public Keydiemdanh(String id, String thoigian, String key, Mon mon) {
		
		this.id = id;
		this.thoigian = thoigian;
		this.key = key;
		this.mon = mon;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getThoigian() {
		return thoigian;
	}
	public void setThoigian(String thoigian) {
		this.thoigian = thoigian;
	}
	public String getKey() {
		return key;
	}
	public void setKey(String key) {
		this.key = key;
	}
	public Mon getMon() {
		return mon;
	}
	public void setMon(Mon mon) {
		this.mon = mon;
	}
	
}
