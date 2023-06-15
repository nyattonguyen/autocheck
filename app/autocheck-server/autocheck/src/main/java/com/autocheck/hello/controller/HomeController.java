package com.autocheck.hello.controller;

import java.io.FileInputStream;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.autocheck.hello.model.*;
@Controller
@RestController
public class HomeController {

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
	@RequestMapping("index")
	public String home()
	{
		return "index";
	}
	@RequestMapping("home")
	public String index() throws Exception
	{
		//FirebaseStatic file = new FirebaseStatic();
		//file.setFirebasefile2(firebasefile2);
		//file.getFirebase();
		//ExcelModel excel = new ExcelModel(excelfile); // day ne1
		//Mon m = new Mon();
		//m.setBuoihientai(10);
		//m.setExcel("1U5EEl8dnopwr142C35WKKTiAdeova6kYGI95xmYqXWQ");
		//FirebaseStatic.setExcelfile(fileshare);
		//ExcelModel excel = FirebaseStatic.getExcel();
		//excel.run(); // day ne 1
		//excel.readDulieu(m);
		//excel.readDulieu("1U5EEl8dnopwr142C35WKKTiAdeova6kYGI95xmYqXWQ");
		//String id = excel.createMau("mon nao do", 10);
		//System.out.println(id);
		//Qrcode qr = new Qrcode();
		//String anh = qr.create("noidung", "key");
		//return "redirect:"+anh;
		//System.out.println(d);
		//return d;
		//FirebaseModel firebase = new FirebaseModel(firebasefile2);
		//firebase.get("1", "t6cxCNBJpTlvVGUdoOpn");
		//firebase.get("demo");
		FileShare file = new FileShare(excelfile); 
		file.run(); 
		//file.share("nhat250701@gmail.com", "1aTZ0hkOD_UdU4Ms0I5WQzEk7l7minGrIpJk29ggyRuY");
		
		
		//request.setAttribute("id","file");
		return "index";
	}
	
	@PostMapping("/editSinhvien")
	//@RequestPart Employee employee, @RequestPart MultipartFile document
	 
	public String submit(@ModelAttribute EditThongtinSinhvien sv, ModelMap modelMap) {

	    modelMap.addAttribute("sv", sv);
	    System.out.println(sv.getHoten());
	    return sv.getFile().getName();
	    //return "index";
	}
	
	
}
