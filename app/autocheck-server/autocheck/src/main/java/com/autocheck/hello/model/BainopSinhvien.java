package com.autocheck.hello.model;
import java.util.ArrayList;
public class BainopSinhvien extends Bainop {
	String hoten;
	

	
	public BainopSinhvien()
	{
		super();
	}
	public BainopSinhvien(String hoten) {
		super();
		this.hoten = hoten;
	}

	public String getHoten() {
		return hoten;
	}

	public void setHoten(String hoten) {
		this.hoten = hoten;
	}
	
}
