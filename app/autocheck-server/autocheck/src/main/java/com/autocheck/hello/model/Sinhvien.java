package com.autocheck.hello.model;

import java.util.ArrayList;
import java.util.Arrays;

public class Sinhvien {
	String hoten;
	String lop;
	String maso;
	String ngaysinh;
	String mathietbi;
	String id;
	long thoigiankhoa;
	String email;
	String password;
	public Sinhvien()
	{}
	
	public Sinhvien(String hoten, String lop, String maso, String ngaysinh, String mathietbi, String id,
			long thoigiankhoa, String email, String password) {
		
		this.hoten = hoten;
		this.lop = lop;
		this.maso = maso;
		this.ngaysinh = ngaysinh;
		this.mathietbi = mathietbi;
		this.id = id;
		this.thoigiankhoa = thoigiankhoa;
		this.email = email;
		this.password = password;
	}

	public ArrayList<String> getHovaTen()
	{
		String[] p = hoten.split(" ");
		
		String[] n = new String[3];
		n[0] = "";
		for(int i =0; i < p.length; i++)
		{
			
			if(i == p.length - 1)
				n[1] = p[i];
			else
				n[0] += " " + p[i];
		}
		ArrayList<String> p2 = new ArrayList<>(Arrays.asList(n));
		return p2;
	}
	public long getThoigiankhoa() {
		return thoigiankhoa;
	}

	public void setThoigiankhoa(long thoigiankhoa) {
		this.thoigiankhoa = thoigiankhoa;
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

	public String getHoten() {
		return hoten;
	}
	public void setHoten(String hoten) {
		this.hoten = hoten;
	}
	public String getLop() {
		return lop;
	}
	public void setLop(String lop) {
		this.lop = lop;
	}
	public String getMaso() {
		return maso;
	}
	public void setMaso(String maso) {
		this.maso = maso;
	}
	public String getNgaysinh() {
		return ngaysinh;
	}
	public void setNgaysinh(String ngaysinh) {
		this.ngaysinh = ngaysinh;
	}
	public String getMathietbi() {
		return mathietbi;
	}
	public void setMathietbi(String mathietbi) {
		this.mathietbi = mathietbi;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	
}
