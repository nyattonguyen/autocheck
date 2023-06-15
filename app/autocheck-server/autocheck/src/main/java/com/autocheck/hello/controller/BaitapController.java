package com.autocheck.hello.controller;



import java.io.File;
import java.net.URI;
import java.util.ArrayList;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.view.RedirectView;

import com.autocheck.hello.model.Bainop;
import com.autocheck.hello.model.Baitap;
import com.autocheck.hello.model.BaitapFirebase;
import com.autocheck.hello.model.BaitapSoluongDagiao;
import com.autocheck.hello.model.Cauhoi;
import com.autocheck.hello.model.CauhoiXuatExcel;
import com.autocheck.hello.model.Diemdanh;
import com.autocheck.hello.model.DiemdanhFirebase;
import com.autocheck.hello.model.DiemdanhQrKey;
import com.autocheck.hello.model.Giangvien;
import com.autocheck.hello.model.GiangvienFirebase;
import com.autocheck.hello.model.Ketquanop;
import com.autocheck.hello.model.Location;
import com.autocheck.hello.model.Mon;
import com.autocheck.hello.model.MonFirebase;
import com.autocheck.hello.model.NhapCauhoiFirebase;
import com.autocheck.hello.model.Sinhvien;
import com.autocheck.hello.model.SinhvienDangnhap;
import com.autocheck.hello.model.SinhvienDiemdanh;
import com.autocheck.hello.model.SinhvienFirebase;
import com.autocheck.hello.model.SinhvienNopbai;
import com.autocheck.hello.model.XuatCauhoiFirebase;
@Controller
@RestController
public class BaitapController {

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
	
	
	
	@GetMapping("sinhvien/baitap/danggiao/{id}")
	public ArrayList<Baitap> danggiao(@PathVariable String id) throws Exception
	{
		
		BaitapFirebase firebase = new BaitapFirebase(firebasefile2);
		ArrayList<Baitap> bt = firebase.getDanggiao(id);
		return bt;
	}
	@GetMapping("sinhvien/baitap/danop/{id}")
	public ArrayList<Baitap> danop(@PathVariable String id) throws Exception
	{
		
		BaitapFirebase firebase = new BaitapFirebase(firebasefile2);
		ArrayList<Baitap> bt = firebase.getDagiao(id);
		return bt;
	}
	
	@PostMapping("sinhvien/baitap/nop/{id}")
	public ArrayList<Bainop> nop(@PathVariable String id, @RequestBody ArrayList<Bainop> bainop) throws Exception
	{
		
		BaitapFirebase firebase = new BaitapFirebase(firebasefile2);
		ArrayList<Bainop> c = firebase.nopbai(bainop, id);
		return c;
		
	}
	
	@GetMapping("sinhvien/baitap/noidung/{id}")
	public ArrayList<Cauhoi> noidung(@PathVariable String id) throws Exception
	{
		
		BaitapFirebase firebase = new BaitapFirebase(firebasefile2);
		ArrayList<Cauhoi> bt = firebase.getCauhoi(id);
		return bt;
	}
	
	@PostMapping("baitap/taomoi/mon/{id}")
	public Baitap taomoi( @PathVariable String id, @RequestBody Baitap bt ) throws Exception
	{
		Giangvien gv =(Giangvien)httpSession.getAttribute("giangvien");
		BaitapFirebase firebase = new BaitapFirebase(firebasefile2, gv);
		Baitap b = firebase.create(bt, id);
		return b;
	}
	@GetMapping("baitap/vohieuhoa/{id}")
	public Baitap vohieuhoa( @PathVariable String id) throws Exception
	{
		Giangvien gv =(Giangvien)httpSession.getAttribute("giangvien");
		BaitapFirebase firebase = new BaitapFirebase(firebasefile2, gv);
		Baitap b = firebase.vohieuhoa( id);
		return b;
	}
	@GetMapping("baitap/huyvohieuhoa/{id}")
	public Baitap huyvohieuhoa( @PathVariable String id) throws Exception
	{
		Giangvien gv =(Giangvien)httpSession.getAttribute("giangvien");
		BaitapFirebase firebase = new BaitapFirebase(firebasefile2, gv);
		Baitap b = firebase.huyvohieuhoa( id);
		return b;
	}
	@GetMapping("baitap/list/{id}")
	public ArrayList<Baitap> nhanbaitap( @PathVariable String id ) throws Exception
	{
		
		BaitapFirebase firebase = new BaitapFirebase(firebasefile2);
		ArrayList<Baitap>  b = firebase.getBaitap(id);
		return b;
	}
	@GetMapping("baitap/xuat/{id}")
	public ResponseEntity<Void> xuatbaitap( @PathVariable String id ) throws Exception
	{
		Giangvien gv =(Giangvien)httpSession.getAttribute("giangvien");
		XuatCauhoiFirebase firebase = new XuatCauhoiFirebase(firebasefile2, gv);
		String  b = firebase.xuat(id);
		return ResponseEntity.status(HttpStatus.FOUND).location(URI.create(b)).build();
	}
	@PostMapping("baitap/nhap/{id}") 
	  public ResponseEntity<?> nhapbaitap( @RequestParam("file") MultipartFile file ,  @PathVariable String id ) {

		Giangvien gv =(Giangvien)httpSession.getAttribute("giangvien");
		NhapCauhoiFirebase firebase = new NhapCauhoiFirebase(firebasefile2, gv);
		
	    String fileName = file.getOriginalFilename();
	    System.out.println(fileName);
	    try {
	      file.transferTo( new File(firebase.getLuu(id) ));
	      
	      firebase.nhap(id);
	    } catch (Exception e) {
	    	System.out.println(e);
	      return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
	    } 
	    return ResponseEntity.ok("Doc luu lieu thanh cong.");
	  }
	
	
	
	@PostMapping("baitap/cauhoi/them/{id}")
	public ArrayList<Cauhoi> themcauhoi(@PathVariable String id , @RequestBody ArrayList<Cauhoi> ch) throws Exception
	{
		BaitapFirebase firebase = new BaitapFirebase(firebasefile2);
		ArrayList<Cauhoi> c = firebase.createCauhoi(ch, id);
		return c;
	}

	@GetMapping("baitap/traloi/{idbt}/sinhvien/{idsv}")
	public ArrayList<Ketquanop> nhandapan(@PathVariable String idbt ,@PathVariable String idsv) throws Exception
	{
		BaitapFirebase firebase = new BaitapFirebase(firebasefile2);
		ArrayList<Ketquanop>  kq = firebase.getKetquanop(idbt, idsv);	
		return kq;
	}
	@GetMapping("baitap/sinhvien/list/{id}/{loai}/{tang}")
	public ArrayList<SinhvienNopbai> nhandapan(@PathVariable String id,@PathVariable String loai, @PathVariable String tang ) throws Exception
	{
		BaitapFirebase firebase = new BaitapFirebase(firebasefile2);
		ArrayList<SinhvienNopbai>  kq = firebase.getListSV(id, loai, tang);
		return kq;
	}
	@GetMapping("baitap/sinhvien/soluongdagiao/{id}")
	public BaitapSoluongDagiao sodagiao(@PathVariable String id ) throws Exception
	{
		BaitapFirebase firebase = new BaitapFirebase(firebasefile2);
		BaitapSoluongDagiao  kq = firebase.getSodagiao(id);
		return kq;
	}
	
}

