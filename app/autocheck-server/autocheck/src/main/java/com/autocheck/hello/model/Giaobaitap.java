package com.autocheck.hello.model;

public class Giaobaitap {
	String id;
	String idbaitap;
	String idsinhvien;
	boolean danop;
	public Giaobaitap() {}
	
	public Giaobaitap(String id, String idbaitap, String idsinhvien, boolean danop) {
		super();
		this.id = id;
		this.idbaitap = idbaitap;
		this.idsinhvien = idsinhvien;
		this.danop = danop;
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
	public String getIdsinhvien() {
		return idsinhvien;
	}
	public void setIdsinhvien(String idsinhvien) {
		this.idsinhvien = idsinhvien;
	}
	public boolean isDanop() {
		return danop;
	}
	public void setDanop(boolean danop) {
		this.danop = danop;
	}
	
}
