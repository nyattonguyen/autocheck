package com.autocheck.hello.model;

import java.util.ArrayList;
import java.util.Comparator;

public class SinhvienNopbai implements Comparator<SinhvienNopbai> {

	String hoten;
	String masv;
	ArrayList<String> hovaten = new ArrayList<>();
	public SinhvienNopbai() {}
	public SinhvienNopbai(String hoten, String masv, ArrayList<String> hovaten) {
		
		this.hoten = hoten;
		this.masv = masv;
		this.hovaten = hovaten;
	}
	
	public ArrayList<String> getHovaten() {
		return hovaten;
	}
	public void setHovaten(ArrayList<String> hovaten) {
		this.hovaten = hovaten;
	}
	public String getHoten() {
		return hoten;
	}
	public void setHoten(String hoten) {
		this.hoten = hoten;
	}
	public String getMasv() {
		return masv;
	}
	public void setMasv(String masv) {
		this.masv = masv;
	}
	@Override
	public int compare(SinhvienNopbai o1, SinhvienNopbai o2) {
		// TODO Auto-generated method stub
		return o1.getHovaten().get(0).compareToIgnoreCase(o2.getHovaten().get(0));
	}
	
}
