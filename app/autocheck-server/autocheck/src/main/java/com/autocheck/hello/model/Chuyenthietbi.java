package com.autocheck.hello.model;

public class Chuyenthietbi {
	String id;
	String mathietbicu;
	String thoigian;
	String machuyen;
	public Chuyenthietbi(String id, String mathietbicu, String thoigian, String machuyen) {
		
		this.id = id;
		this.mathietbicu = mathietbicu;
		this.thoigian = thoigian;
		this.machuyen = machuyen;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getMathietbicu() {
		return mathietbicu;
	}
	public void setMathietbicu(String mathietbicu) {
		this.mathietbicu = mathietbicu;
	}
	public String getThoigian() {
		return thoigian;
	}
	public void setThoigian(String thoigian) {
		this.thoigian = thoigian;
	}
	public String getMachuyen() {
		return machuyen;
	}
	public void setMachuyen(String machuyen) {
		this.machuyen = machuyen;
	}
	
}
