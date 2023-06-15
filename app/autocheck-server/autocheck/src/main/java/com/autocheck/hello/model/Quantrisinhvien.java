package com.autocheck.hello.model;

public class Quantrisinhvien {

	String id;
	String ngay;
	String anh;
	Sinhvien sinhvienmoi;
	Sinhvien sinhviencu;
	boolean dachapnhan;
	public Quantrisinhvien(String id, String ngay, String anh, Sinhvien sinhvienmoi, Sinhvien sinhviencu,
			boolean dachapnhan) {
		
		this.id = id;
		this.ngay = ngay;
		this.anh = anh;
		this.sinhvienmoi = sinhvienmoi;
		this.sinhviencu = sinhviencu;
		this.dachapnhan = dachapnhan;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getNgay() {
		return ngay;
	}
	public void setNgay(String ngay) {
		this.ngay = ngay;
	}
	public String getAnh() {
		return anh;
	}
	public void setAnh(String anh) {
		this.anh = anh;
	}
	public Sinhvien getSinhvienmoi() {
		return sinhvienmoi;
	}
	public void setSinhvienmoi(Sinhvien sinhvienmoi) {
		this.sinhvienmoi = sinhvienmoi;
	}
	public Sinhvien getSinhviencu() {
		return sinhviencu;
	}
	public void setSinhviencu(Sinhvien sinhviencu) {
		this.sinhviencu = sinhviencu;
	}
	public boolean isDachapnhan() {
		return dachapnhan;
	}
	public void setDachapnhan(boolean dachapnhan) {
		this.dachapnhan = dachapnhan;
	}
	
}
