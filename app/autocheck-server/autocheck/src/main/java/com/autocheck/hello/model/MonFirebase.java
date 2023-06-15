package com.autocheck.hello.model;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import com.google.cloud.firestore.DocumentSnapshot;
import com.google.cloud.firestore.QueryDocumentSnapshot;

public class MonFirebase {
	String filebasefile;
	String excelfile;
	String sharefile;
	Giangvien gv;
	
	public MonFirebase(String firebase, Giangvien g)
	{
		gv = g;
		filebasefile = firebase;
	}
	public MonFirebase(String firebase, String ex, String sh,Giangvien g) {
		filebasefile = firebase;
		gv = g;
		excelfile = ex;
		sharefile = sh;
	} 
	public Mon get(String id) throws Exception
	{
		FirebaseStatic.setFirebasefile(filebasefile);
		FirebaseModel file = FirebaseStatic.getFirebase();
		DocumentSnapshot s = file.get("mon", id);
		Mon m = s.toObject(Mon.class);
		m.setId(s.getId());
		if(gv.getId().equals(m.getIdgiangvien()))
		return m;
		return null;
	}
	public ArrayList<Mon> getAll() throws Exception
	{
		ArrayList<Mon> listmon = new ArrayList<>();
		FirebaseStatic.setFirebasefile(filebasefile);
		FirebaseModel file = FirebaseStatic.getFirebase();
		List<QueryDocumentSnapshot> documents = file.getAll("mon");
		for (QueryDocumentSnapshot document : documents) {
			
			Mon s = document.toObject(Mon.class);
			s.setId(document.getId());
			if(gv.getId().equals(s.getIdgiangvien()))
			listmon.add(s);
		
		}
		return listmon;
		
	}
	public String update(Mon m) throws Exception
	{
		FirebaseStatic.setFirebasefile(filebasefile);
		FirebaseModel file = FirebaseStatic.getFirebase();
		file.update("mon",m,m.getId());
		return null;
		
	}
	public void delete(String id) throws Exception
	{
		FirebaseStatic.setFirebasefile(filebasefile);
		FirebaseModel file = FirebaseStatic.getFirebase();
		file.delete("mon",id);
		
	}
	public Mon create(Mon m) throws Exception
	{
		m.setIdgiangvien(gv.getId());
		Mon mn = createExcel(m);
		FirebaseStatic.setFirebasefile(filebasefile);
		FirebaseModel file = FirebaseStatic.getFirebase();
		String id = file.create("mon", m);
		mn.setId(id);
		return mn;
	}
	public Mon createExcel( Mon m) throws Exception
	{
		
		String e = gv.getEmail();
		FirebaseStatic.setExcelfile(excelfile);
		ExcelModel excel = FirebaseStatic.getExcel();
		String i = excel.createMau(m.getTenmon() , m.getTongbuoi());
		m.setExcel(i);
		m.setLink(i);
		share(m);
		return m;
	}
	public void share(Mon m ) throws Exception
	{
		String e = gv.getEmail();
		FirebaseStatic.setFileshare(sharefile);
		FileShare share = FirebaseStatic.getShare();
		share.share(e, m.getExcel());
	}
}
