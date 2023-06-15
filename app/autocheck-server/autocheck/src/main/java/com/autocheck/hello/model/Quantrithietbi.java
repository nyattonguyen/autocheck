package com.autocheck.hello.model;

public class Quantrithietbi {

	String id;
	String madinhdanh;
	String ngaykhoa;
	String idsv;
	public Quantrithietbi(String id, String madinhdanh, String ngaykhoa, String idsv) {
		
		this.id = id;
		this.madinhdanh = madinhdanh;
		this.ngaykhoa = ngaykhoa;
		this.idsv = idsv;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getMadinhdanh() {
		return madinhdanh;
	}
	public void setMadinhdanh(String madinhdanh) {
		this.madinhdanh = madinhdanh;
	}
	public String getNgaykhoa() {
		return ngaykhoa;
	}
	public void setNgaykhoa(String ngaykhoa) {
		this.ngaykhoa = ngaykhoa;
	}
	public String getIdsv() {
		return idsv;
	}
	public void setIdsv(String idsv) {
		this.idsv = idsv;
	}
	
}
