package com.autocheck.hello.model;

public class Baitap {
	String id;
	String tieude;
	String idmon;
	String idgiangvien;
	String thoigian;
	String mota;
	boolean dagiao;
	
	public Baitap()
	{}
	
	

	


	public Baitap(String id, String tieude, String idmon, String idgiangvien, String thoigian, String mota,
			boolean dagiao) {
		
		this.id = id;
		this.tieude = tieude;
		this.idmon = idmon;
		this.idgiangvien = idgiangvien;
		this.thoigian = thoigian;
		this.mota = mota;
		this.dagiao = dagiao;
	}






	public String getMota() {
		return mota;
	}






	public void setMota(String mota) {
		this.mota = mota;
	}






	public String getIdmon() {
		return idmon;
	}



	public void setIdmon(String idmon) {
		this.idmon = idmon;
	}



	public boolean isDagiao() {
		return dagiao;
	}

	public void setDagiao(boolean dagiao) {
		this.dagiao = dagiao;
	}

	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getTieude() {
		return tieude;
	}
	public void setTieude(String tieude) {
		this.tieude = tieude;
	}
	public String getIdgiangvien() {
		return idgiangvien;
	}
	public void setIdgiangvien(String idgiangvien) {
		this.idgiangvien = idgiangvien;
	}

	public String getThoigian() {
		return thoigian;
	}
	public void setThoigian(String thoigian) {
		this.thoigian = thoigian;
	}
	
}
