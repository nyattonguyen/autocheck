package com.autocheck.hello.controller;



import java.util.ArrayList;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

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

import com.autocheck.hello.model.Giangvien;
import com.autocheck.hello.model.GiangvienFirebase;
import com.autocheck.hello.model.Mon;
import com.autocheck.hello.model.MonFirebase;
import com.autocheck.hello.model.Sinhvien;
import com.autocheck.hello.model.SinhvienDangnhap;
import com.autocheck.hello.model.SinhvienFirebase;
import com.fasterxml.jackson.databind.ObjectMapper;
@Controller
@RestController
public class MonController {

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
	
	@PostMapping("mon/create")
	public Mon create(@RequestBody Mon mon) throws Exception
	{
		Giangvien gv =(Giangvien)httpSession.getAttribute("giangvien");
		System.out.println(gv.getHoten());
		MonFirebase monfire = new MonFirebase(firebasefile2,excelfile,  fileshare, gv);
		monfire.create(mon);
		return mon;
	}
	
	
	@GetMapping("mon/thongtin/{id}")
	public Mon thongtinmon(@PathVariable String id) throws Exception
	{
		Giangvien gv =(Giangvien)httpSession.getAttribute("giangvien");
		MonFirebase firebase = new MonFirebase(firebasefile2, gv);
		Mon  m = firebase.get(id);
		return m;
	}
	@GetMapping("mon/list")
	public ArrayList<Mon> list() throws Exception
	{
		Giangvien gv =(Giangvien)httpSession.getAttribute("giangvien");
		MonFirebase firebase = new MonFirebase(firebasefile2, gv);
		ArrayList<Mon> list = firebase.getAll();
		return list;
	}
	
	
	@PostMapping("mon/chinhsua")
	public Mon chinhsua(@RequestBody Mon mon) throws Exception
	{
		Giangvien gv =(Giangvien)httpSession.getAttribute("giangvien");
		MonFirebase firebase = new MonFirebase(firebasefile2,gv);
		firebase.update(mon);
		return mon;
	}
	@GetMapping("mon/xoa/{id}")
	public String xoa(@PathVariable String id) throws Exception
	{
		Giangvien gv =(Giangvien)httpSession.getAttribute("giangvien");
		MonFirebase firebase = new MonFirebase(firebasefile2,gv);
		firebase.delete(id);
		return "index";
	}

	
}

