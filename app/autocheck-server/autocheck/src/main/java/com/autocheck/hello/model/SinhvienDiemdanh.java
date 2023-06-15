package com.autocheck.hello.model;

public class SinhvienDiemdanh {
	String masv;
	String khoadt;
	String khoadiemdanh;
	String idsv;
	double lat;
	double lng;
	public SinhvienDiemdanh(){}
	
	public SinhvienDiemdanh(String masv, String khoadt, String khoadiemdanh, String idsv, double lat, double lng) {
		
		this.masv = masv;
		this.khoadt = khoadt;
		this.khoadiemdanh = khoadiemdanh;
		this.idsv = idsv;
		this.lat = lat;
		this.lng = lng;
	}

	public String getIdsv() {
		return idsv;
	}

	public void setIdsv(String idsv) {
		this.idsv = idsv;
	}

	public String getMasv() {
		return masv;
	}
	public void setMasv(String masv) {
		this.masv = masv;
	}
	public String getKhoadt() {
		return khoadt;
	}
	public void setKhoadt(String khoadt) {
		this.khoadt = khoadt;
	}
	public String getKhoadiemdanh() {
		return khoadiemdanh;
	}
	public void setKhoadiemdanh(String khoadiemdanh) {
		this.khoadiemdanh = khoadiemdanh;
	}
	public double getLat() {
		return lat;
	}
	public void setLat(double lat) {
		this.lat = lat;
	}
	public double getLng() {
		return lng;
	}
	public void setLng(double lng) {
		this.lng = lng;
	}
	

}
