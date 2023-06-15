package com.autocheck.hello.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.autocheck.hello.model.DoiMatkhau;
import com.autocheck.hello.model.Giangvien;
import com.autocheck.hello.model.GiangvienFirebase;
import com.google.gson.Gson;
@Controller
@RestController
public class GiangvienController {

	@Value("${firebasefile}")
	String firebasefile2;
	
	@Value("${googleexcel}")
	String excelfile;
	
	@Value("${fileshare}")
	String fileshare;
	
	@Autowired
	HttpSession httpSession;
	
	@Autowired
	HttpServletRequest request;
	@Autowired
	HttpServletResponse response;
	
	@GetMapping("/giangvien/thongtin")
	@ResponseBody
	public Giangvien createform()
	{
		
		Giangvien gv =(Giangvien)httpSession.getAttribute("giangvien");
		return gv;
	}
	@PostMapping( "/giangvien/capnhat")
	public Giangvien capnhatgiangvien(@RequestBody Giangvien gv) throws Exception
	{
		
		GiangvienFirebase firebase = new GiangvienFirebase(firebasefile2);
		Giangvien g = firebase.capnhatthongtin(gv); 
		return g;
	}
	@PostMapping( "/giangvien/thaydoimatkhau")
	public Giangvien thaydoimatkhau(@RequestBody DoiMatkhau mk) throws Exception
	{
		Giangvien gv =(Giangvien)httpSession.getAttribute("giangvien");
		GiangvienFirebase firebase = new GiangvienFirebase(firebasefile2);
		Giangvien g = firebase.thaydoimatkhau(gv, mk); 
		return g;
	}
	@PostMapping( "/giangvien/create")
	public Giangvien creategiangvien(@RequestBody Giangvien gv) throws Exception
	{
		
		GiangvienFirebase firebase = new GiangvienFirebase(firebasefile2);
		Giangvien g = firebase.create(gv); 
		return g;
	}
}
