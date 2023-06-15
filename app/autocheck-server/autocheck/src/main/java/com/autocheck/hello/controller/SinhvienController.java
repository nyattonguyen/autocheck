package com.autocheck.hello.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.autocheck.hello.model.DoiMatkhau;
import com.autocheck.hello.model.Giangvien;
import com.autocheck.hello.model.GiangvienFirebase;
import com.autocheck.hello.model.Sinhvien;
import com.autocheck.hello.model.SinhvienDangnhap;
import com.autocheck.hello.model.SinhvienFirebase;
@Controller
@RestController
public class SinhvienController {

	@Value("${firebasefile}")
	String firebasefile2;
	
	@Value("${googleexcel}")
	String excelfile;
	
	@Value("${fileshare}")
	String fileshare;
	
	
	@Autowired
	HttpServletRequest request;
	@Autowired
	HttpServletResponse response;
	
	@GetMapping("sinhvien/dangnhap/thietbicu/{id}")
	public Sinhvien dangnhap(@PathVariable String id) throws Exception
	{
		SinhvienFirebase firebase = new SinhvienFirebase(firebasefile2);
		Sinhvien sv = firebase.dangnhap(id);
		return sv;
	}
	
	@PostMapping("sinhvien/dangnhap/thietbimoi/{id}")
	public Sinhvien dangnhapmoi(@PathVariable String id, @RequestBody SinhvienDangnhap svdn) throws Exception
	{
		SinhvienFirebase firebase = new SinhvienFirebase(firebasefile2);
		Sinhvien sv = firebase.dangnhap(svdn.getEmail(), svdn.getPassword(), id);
		return sv;
	}
	@PostMapping("/sinhvien/capnhat")
	public Sinhvien capnhatsinhvien(@RequestBody Sinhvien sv) throws Exception
	{
		
		SinhvienFirebase firebase = new SinhvienFirebase(firebasefile2);
		Sinhvien g = firebase.capnhatthongtin(sv); 
		return g;
	}
	@PostMapping("/sinhvien/thaydoimatkhau/{id}")
	public Sinhvien thaydoimatkhau(@PathVariable String id, @RequestBody DoiMatkhau mk) throws Exception
	{
		
		SinhvienFirebase firebase = new SinhvienFirebase(firebasefile2);
		Sinhvien g = firebase.thaydoimatkhau(id, mk); 
		return g;
	}
	@PostMapping("sinhvien/dangky")
	public Sinhvien dangky(@RequestBody Sinhvien sv) throws Exception
	{
		SinhvienFirebase firebase = new SinhvienFirebase(firebasefile2);
		firebase.create(sv);
		return sv;
	}
	
	//@PostMapping("sinhvien/edit")
	//public String edit(@RequestPart("body") Sinhvien sv, @RequestPart("file") MultipartFile file)
	//{
		
	//	return "index";
	//}
	
}
