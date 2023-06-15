package com.autocheck.hello.model;

import java.util.ArrayList;

public class Cauhoi {
	String id;
	String idbaitap;
	String noidung;
	ArrayList<String> dapan = new ArrayList<>();
	String loai;
	
	public Cauhoi()
	{}
	
	

	public Cauhoi(String id, String idbaitap, String noidung, ArrayList<String> dapan, String loai) {
		
		this.id = id;
		this.idbaitap = idbaitap;
		this.noidung = noidung;
		this.dapan = dapan;
		this.loai = loai;
	}



	public String getLoai() {
		return loai;
	}



	public void setLoai(String loai) {
		this.loai = loai;
	}



	public ArrayList<String> getDapan() {
		return dapan;
	}

	public void setDapan(ArrayList<String> dapan) {
		this.dapan = dapan;
	}

	
	
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getIdbaitap() {
		return idbaitap;
	}
	public void setIdbaitap(String idbaitap) {
		this.idbaitap = idbaitap;
	}
	public String getNoidung() {
		return noidung;
	}
	public void setNoidung(String noidung) {
		this.noidung = noidung;
	}
	
	
}
