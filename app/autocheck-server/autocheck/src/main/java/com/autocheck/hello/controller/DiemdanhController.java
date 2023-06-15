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

import com.autocheck.hello.model.Diemdanh;
import com.autocheck.hello.model.DiemdanhFirebase;
import com.autocheck.hello.model.DiemdanhQrKey;
import com.autocheck.hello.model.Giangvien;
import com.autocheck.hello.model.GiangvienFirebase;
import com.autocheck.hello.model.Lichsudiemdanh;
import com.autocheck.hello.model.Location;
import com.autocheck.hello.model.Mon;
import com.autocheck.hello.model.MonFirebase;
import com.autocheck.hello.model.Sinhvien;
import com.autocheck.hello.model.SinhvienDangnhap;
import com.autocheck.hello.model.SinhvienDiemdanh;
import com.autocheck.hello.model.SinhvienFirebase;
@Controller
@RestController
public class DiemdanhController {

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
	
	
	
	@PostMapping("diemdanh/{id}/buoi/{buoi}")
	public DiemdanhQrKey taodiemdanh(@PathVariable String id, @PathVariable int buoi,@RequestBody Location lc) throws Exception
	{
		Giangvien gv =(Giangvien)httpSession.getAttribute("giangvien");
		DiemdanhFirebase firebase = new DiemdanhFirebase(firebasefile2, gv);
		DiemdanhQrKey  m = firebase.create(id, lc, buoi);
		return m;
	}
	
	@GetMapping("diemdanh/qr/{key}")
	public DiemdanhQrKey diemdanhGiangvien( @PathVariable String key) throws Exception
	{
		Giangvien gv =(Giangvien)httpSession.getAttribute("giangvien");
		
		DiemdanhFirebase firebase = new DiemdanhFirebase(firebasefile2, gv);
		DiemdanhQrKey qr = firebase.diemdanhGV(key);
		return qr;
	}
	
	@PostMapping("sinhvien/diemdanh")
	public Diemdanh diemdanh(@RequestBody SinhvienDiemdanh sv) throws Exception
	{
		DiemdanhFirebase firebase = new DiemdanhFirebase(firebasefile2,excelfile);
		Diemdanh d = firebase.diemdanhSV(sv);
		return d;
	}
	
	@GetMapping("sinhvien/lichsudiemdanh/{id}")
	public ArrayList<Lichsudiemdanh> lichsudiemdanh( @PathVariable String id) throws Exception
	{
		
		DiemdanhFirebase firebase = new DiemdanhFirebase(firebasefile2);
		ArrayList<Lichsudiemdanh> ls = firebase.lichsudiemdanh(id);
		return ls;
	}
	@GetMapping("mon/lichsudiemdanh/{id}")
	public ArrayList<Lichsudiemdanh> monlichsudiemdanh( @PathVariable String id) throws Exception
	{
		DiemdanhFirebase firebase = new DiemdanhFirebase(firebasefile2);
		ArrayList<Lichsudiemdanh> ls = firebase.lichsudiemdanhMon(id);
		return ls;
	}	
	
}

