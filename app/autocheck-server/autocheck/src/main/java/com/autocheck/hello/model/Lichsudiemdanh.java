package com.autocheck.hello.model;

public class Lichsudiemdanh extends Diemdanh {
	String mon;
	String hotensv;

	

	public Lichsudiemdanh()
	{
		super();
	}
	public Lichsudiemdanh(String mon, String hotensv) {
		super();
		this.mon = mon;
		this.hotensv = hotensv;
	}

	
	public String getHotensv() {
		return hotensv;
	}


	public void setHotensv(String hotensv) {
		this.hotensv = hotensv;
	}


	public String getMon() {
		return mon;
	}

	public void setMon(String mon) {
		this.mon = mon;
	}
	
}
