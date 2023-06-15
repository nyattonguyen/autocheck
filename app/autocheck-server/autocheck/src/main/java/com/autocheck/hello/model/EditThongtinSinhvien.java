package com.autocheck.hello.model;

import org.springframework.web.multipart.MultipartFile;

public class EditThongtinSinhvien {
	private String hoten;
	private String maso;
	private String lop;
	private String ngaysinh;
	private String mathietbi;
	private String id;
    private MultipartFile file;
	public EditThongtinSinhvien(String hoten, String maso, String lop, String ngaysinh, String mathietbi, String id,
			MultipartFile file) {
		super();
		this.hoten = hoten;
		this.maso = maso;
		this.lop = lop;
		this.ngaysinh = ngaysinh;
		this.mathietbi = mathietbi;
		this.id = id;
		this.file = file;
	}
	
	public String getHoten() {
		return hoten;
	}
	public void setHoten(String hoten) {
		this.hoten = hoten;
	}
	public String getMaso() {
		return maso;
	}
	public void setMaso(String maso) {
		this.maso = maso;
	}
	public String getLop() {
		return lop;
	}
	public void setLop(String lop) {
		this.lop = lop;
	}
	public String getNgaysinh() {
		return ngaysinh;
	}
	public void setNgaysinh(String ngaysinh) {
		this.ngaysinh = ngaysinh;
	}
	public String getMathietbi() {
		return mathietbi;
	}
	public void setMathietbi(String mathietbi) {
		this.mathietbi = mathietbi;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}

	public MultipartFile getFile() {
		return file;
	}

	public void setFile(MultipartFile file) {
		this.file = file;
	}
	
}
