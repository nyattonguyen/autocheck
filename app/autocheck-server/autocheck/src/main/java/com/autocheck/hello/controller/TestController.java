package com.autocheck.hello.controller;



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
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.autocheck.hello.model.GiangvienFirebase;
import com.autocheck.hello.model.Ketquanop;
import com.autocheck.hello.model.Sinhvien;
import com.autocheck.hello.model.SinhvienDangnhap;
import com.autocheck.hello.model.SinhvienFirebase;
@Controller
@RestController
public class TestController {

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
	
	@RequestMapping("test/cauhoi")
	public ArrayList<Ketquanop> testcauhoi2() throws Exception
	{
		Ketquanop kq = new Ketquanop();
		kq.setCauhoi("sdfsf");
		ArrayList<String> dapan = new ArrayList<>();
		dapan.add("dap an 1");
		kq.setTraloi(dapan);
		ArrayList<Ketquanop> sv = new ArrayList<Ketquanop>();
		sv.add(kq);
		
		return sv;
		
		
	}
	
	
	
}
