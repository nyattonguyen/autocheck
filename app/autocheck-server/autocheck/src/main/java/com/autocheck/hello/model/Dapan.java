package com.autocheck.hello.model;

public class Dapan {
	String id;
	String idcauhoi;
	String noidung;
	boolean istrue;
	public Dapan() {}
	public Dapan(String id, String idcauhoi, String noidung, boolean istrue) {
		
		this.id = id;
		this.idcauhoi = idcauhoi;
		this.noidung = noidung;
		this.istrue = istrue;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getIdcauhoi() {
		return idcauhoi;
	}
	public void setIdcauhoi(String idcauhoi) {
		this.idcauhoi = idcauhoi;
	}
	public String getNoidung() {
		return noidung;
	}
	public void setNoidung(String noidung) {
		this.noidung = noidung;
	}
	public boolean isIstrue() {
		return istrue;
	}
	public void setIstrue(boolean istrue) {
		this.istrue = istrue;
	}
}
