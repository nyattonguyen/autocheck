package com.autocheckadmin.hello.controller;

import java.util.ArrayList;

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
import org.springframework.web.bind.annotation.RestController;

import com.autocheck.hello.model.Giangvien;
import com.autocheck.hello.model.GiangvienFirebase;

@Controller
@RestController
public class AdminController {

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
	@GetMapping("admin/giangvien/create")
	public String getcreate() throws Exception
	{
		System.out.println("home");
		return "index";
	}
	@PostMapping("admin/giangvien/create")
	public Giangvien postcreate(@RequestBody Giangvien gv) throws Exception
	{
		System.out.println("h9o9 ten"+gv.getHoten());
		//return "index";
	    //model.addAttribute("giangvien", gv);
		GiangvienFirebase firebase = new GiangvienFirebase(firebasefile2);
		Giangvien gvr = firebase.create(gv); 
		//System.out.println(gv.getHoten());
		//return gv.getHoten();
		return gvr ;
	}
	
	@GetMapping("admin/giangvien/list")
	public ArrayList<Giangvien> list() throws Exception
	{
		
		GiangvienFirebase firebase = new GiangvienFirebase(firebasefile2);
		ArrayList<Giangvien> gv = firebase.getAll();
		return gv;
		
	}
	@PostMapping("admin/giangvien/vohieuhoa/{id}")
	//@GetMapping("admin/giangvien/vohieuhoa/{id}")
	public boolean vohieuhoa(@PathVariable String id) throws Exception
	{
		
		GiangvienFirebase firebase = new GiangvienFirebase(firebasefile2);
		firebase.vohieuhoa(id, true);
		
		return true;
		
	}
	@PostMapping("admin/giangvien/huyvohieuhoa/{id}")
	public boolean huyvohieuhoa(@PathVariable String id) throws Exception
	{
		
		GiangvienFirebase firebase = new GiangvienFirebase(firebasefile2);
		firebase.vohieuhoa(id, false);
		
		return true;
		
	}
	
	@PostMapping("admin/giangvien/capnhat")
	public Giangvien capnhat(@RequestBody Giangvien gv) throws Exception
	{
		
		GiangvienFirebase firebase = new GiangvienFirebase(firebasefile2);
		Giangvien g = firebase.update(gv); 
		return g;
	}
	
	@GetMapping("admin/giangvien/resetmatkhau/{id}")
	public Giangvien resetmatkhau(@PathVariable String id) throws Exception
	{
		
		GiangvienFirebase firebase = new GiangvienFirebase(firebasefile2);
		Giangvien gv = firebase.resetMatkhau(id);
		return gv;
		
	}
	
}
