package com.autocheck.hello.model;

public class Diemdanh {

	String id;
	String masv;
	String idmon;
	String thoigian;
	int buoiso;
	public Diemdanh() {}
	public Diemdanh(String id, String masv, String idmon, String thoigian, int buoiso) {
		
		this.id = id;
		this.masv = masv;
		this.idmon = idmon;
		this.thoigian = thoigian;
		this.buoiso = buoiso;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getMasv() {
		return masv;
	}
	public void setMasv(String masv) {
		this.masv = masv;
	}
	public String getIdmon() {
		return idmon;
	}
	public void setIdmon(String idmon) {
		this.idmon = idmon;
	}
	public String getThoigian() {
		return thoigian;
	}
	public void setThoigian(String thoigian) {
		this.thoigian = thoigian;
	}
	public int getBuoiso() {
		return buoiso;
	}
	public void setBuoiso(int buoiso) {
		this.buoiso = buoiso;
	}
	
}
