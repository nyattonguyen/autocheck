package com.autocheck.hello.model;

public class Mon {
	String mamon;
	String tenmon;
	int tongbuoi;
	int buoihientai;
	String idgiangvien;
	String thoigianbatdau;
	String hocky;
	String sotinchi;
	String thoigianketthuc;
	String excel;
	String id;
	String link;
	public Mon() {}
	
	

	
	




	public Mon(String mamon, String tenmon, int tongbuoi, int buoihientai, String idgiangvien, String thoigianbatdau,
			String hocky, String sotinchi, String thoigianketthuc, String excel, String id, String link) {
		
		this.mamon = mamon;
		this.tenmon = tenmon;
		this.tongbuoi = tongbuoi;
		this.buoihientai = buoihientai;
		this.idgiangvien = idgiangvien;
		this.thoigianbatdau = thoigianbatdau;
		this.hocky = hocky;
		this.sotinchi = sotinchi;
		this.thoigianketthuc = thoigianketthuc;
		this.excel = excel;
		this.id = id;
		this.link = link;
	}









	public String getLink() {
		return link;
	}




	public void setLink(String link) {
		this.link = "https://docs.google.com/spreadsheets/d/" +excel;
	}




	public String getHocky() {
		return hocky;
	}

	public void setHocky(String hocky) {
		this.hocky = hocky;
	}

	public String getSotinchi() {
		return sotinchi;
	}

	public void setSotinchi(String sotinchi) {
		this.sotinchi = sotinchi;
	}


	public String getThoigianketthuc() {
		return thoigianketthuc;
	}


	public void setThoigianketthuc(String thoigianketthuc) {
		this.thoigianketthuc = thoigianketthuc;
	}

	public String getMamon() {
		return mamon;
	}
	public void setMamon(String mamon) {
		this.mamon = mamon;
	}
	public String getTenmon() {
		return tenmon;
	}
	public void setTenmon(String tenmon) {
		this.tenmon = tenmon;
	}
	
	public int getTongbuoi() {
		return tongbuoi;
	}
	public void setTongbuoi(int tongbuoi) {
		this.tongbuoi = tongbuoi;
	}
	public int getBuoihientai() {
		return buoihientai;
	}
	public void setBuoihientai(int buoihientai) {
		this.buoihientai = buoihientai;
	}
	public String getIdgiangvien() {
		return idgiangvien;
	}
	public void setIdgiangvien(String idgiangvien) {
		this.idgiangvien = idgiangvien;
	}
	public String getThoigianbatdau() {
		return thoigianbatdau;
	}
	public void setThoigianbatdau(String thoigianbatdau) {
		this.thoigianbatdau = thoigianbatdau;
	}
	public String getExcel() {
		return excel;
	}
	public void setExcel(String excel) {
		this.excel = excel;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	
}
