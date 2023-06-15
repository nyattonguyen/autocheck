package com.autocheck.hello.model;

import java.util.ArrayList;

public class Bainop {
	String masv;
	String idbaitap;
	String idcauhoi;
	String id;
	String thoigian;
	ArrayList<String> dapansinhvien = new ArrayList<>();
	public Bainop() {}




	public Bainop(String masv, String idbaitap, String idcauhoi, String id, String thoigian,
			ArrayList<String> dapansinhvien) {
		this.masv = masv;
		this.idbaitap = idbaitap;
		this.idcauhoi = idcauhoi;
		this.id = id;
		this.thoigian = thoigian;
		this.dapansinhvien = dapansinhvien;
	}









	public String getThoigian() {
		return thoigian;
	}




	public void setThoigian(String thoigian) {
		this.thoigian = thoigian;
	}




	public ArrayList<String> getDapansinhvien() {
		return dapansinhvien;
	}

	public void setDapansinhvien(ArrayList<String> dapansinhvien) {
		this.dapansinhvien = dapansinhvien;
	}

	public String getMasv() {
		return masv;
	}



	public void setMasv(String masv) {
		this.masv = masv;
	}
	
	public String getIdbaitap() {
		return idbaitap;
	}




	public void setIdbaitap(String idbaitap) {
		this.idbaitap = idbaitap;
	}




	public String getIdcauhoi() {
		return idcauhoi;
	}
	public void setIdcauhoi(String idcauhoi) {
		this.idcauhoi = idcauhoi;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	
}
