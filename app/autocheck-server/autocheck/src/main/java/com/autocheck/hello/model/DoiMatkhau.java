package com.autocheck.hello.model;

public class DoiMatkhau {
	String matkhaucu;
	String matkhaumoi;
	String nhaplaimatkhaumoi;
	
	public DoiMatkhau(String matkhaucu, String matkhaumoi, String nhaplaimatkhaumoi) {
		
		this.matkhaucu = matkhaucu;
		this.matkhaumoi = matkhaumoi;
		this.nhaplaimatkhaumoi = nhaplaimatkhaumoi;
	}
	
	public String getNhaplaimatkhaumoi() {
		return nhaplaimatkhaumoi;
	}

	public void setNhaplaimatkhaumoi(String nhaplaimatkhaumoi) {
		this.nhaplaimatkhaumoi = nhaplaimatkhaumoi;
	}

	public String getMatkhaucu() {
		return matkhaucu;
	}
	public void setMatkhaucu(String matkhaucu) {
		this.matkhaucu = matkhaucu;
	}
	public String getMatkhaumoi() {
		return matkhaumoi;
	}
	public void setMatkhaumoi(String matkhaumoi) {
		this.matkhaumoi = matkhaumoi;
	}
	
}
