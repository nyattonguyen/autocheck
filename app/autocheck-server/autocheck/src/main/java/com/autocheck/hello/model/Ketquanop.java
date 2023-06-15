package com.autocheck.hello.model;

import java.util.ArrayList;

public class Ketquanop {
	String cauhoi;
	ArrayList<String> traloi = new ArrayList<String>();
	
	
	public Ketquanop() {}
	public Ketquanop(String cauhoi, ArrayList<String> traloi) {
		this.cauhoi = cauhoi;
	
		this.traloi = traloi;
		
	}
	
	public String getCauhoi() {
		return cauhoi;
	}
	public void setCauhoi(String cauhoi) {
		this.cauhoi = cauhoi;
	}

	public ArrayList<String> getTraloi() {
		return traloi;
	}
	public void setTraloi(ArrayList<String> traloi) {
		this.traloi = traloi;
	}
}
