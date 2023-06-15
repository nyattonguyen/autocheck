package com.autocheck.hello.model;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.concurrent.ExecutionException;

import com.google.cloud.firestore.DocumentSnapshot;
import com.google.cloud.firestore.QueryDocumentSnapshot;
import com.google.gson.Gson;

public class SinhvienFirebase {

	String filebasefile;
	
	public SinhvienFirebase(String firebase) {
		filebasefile = firebase;
	}
	public Sinhvien create(Sinhvien sv) throws Exception
	{
		if(sv.getMaso().isEmpty())
			return null;
		FirebaseStatic.setFirebasefile(filebasefile);
		FirebaseModel file = FirebaseStatic.getFirebase();
		List<QueryDocumentSnapshot> documents = file.getAll("sinhvien");
		for (QueryDocumentSnapshot document : documents) {
			Sinhvien s = document.toObject(Sinhvien.class);
			s.setId(document.getId());
			if(s.getMaso().equals(sv.getMaso()))
			{
				return null;
			}
		
		}
		sv.setThoigiankhoa(0);
		String id = file.create("sinhvien", sv);
		sv.setId(id);
		return sv;
	}
	public Sinhvien dangnhap(String email, String password, String idmoi) throws Exception
	{
		FirebaseStatic.setFirebasefile(filebasefile);
		FirebaseModel file = FirebaseStatic.getFirebase();
		List<QueryDocumentSnapshot> documents = file.getAll("sinhvien");
		for (QueryDocumentSnapshot document : documents) {
			Sinhvien s = document.toObject(Sinhvien.class);
			s.setId(document.getId());
			if(s.getEmail().equals(email) && s.getPassword().equals(password))
			{
				DateTimeFormatter dtf = DateTimeFormatter.ofPattern("yyyy/MM/dd HH:mm:ss");  
				LocalDateTime now = LocalDateTime.now();
				long t = new Date().getTime();
				if(s.getMathietbi().equals(idmoi) == false)
				{
				s.setMathietbi(idmoi);
				s.setThoigiankhoa(t);
				update(s);
				}
				return s;
			}
		
		}
		return null;
	}
	public Sinhvien capnhatthongtin(Sinhvien sv) throws Exception
	{
		FirebaseStatic.setFirebasefile(filebasefile);
		FirebaseModel file = FirebaseStatic.getFirebase();
		DocumentSnapshot d = file.get("sinhvien", sv.getId());
		Sinhvien s = d.toObject(Sinhvien.class);
		sv.setId(d.getId());
		sv.setThoigiankhoa(s.getThoigiankhoa());
		sv.setPassword(s.getPassword());
		sv.setMaso(s.getMaso());
		
		update(sv);
		sv.setPassword("");
		return sv;
	}
	public Sinhvien thaydoimatkhau(String id, DoiMatkhau mk) throws Exception
	{
		
		FirebaseStatic.setFirebasefile(filebasefile);
		FirebaseModel file = FirebaseStatic.getFirebase();
		DocumentSnapshot d = file.get("sinhvien", id);
		Sinhvien s = d.toObject(Sinhvien.class);
		s.setId(d.getId());
		if(mk.getMatkhaumoi().equals(mk.getNhaplaimatkhaumoi()))
		{
		if(s.getPassword().equals(mk.getMatkhaucu()))
		{
			s.setPassword(mk.getMatkhaumoi());
			update(s);
			s.setPassword("");
			return s;
		}
		}
		return null;
	}
	public String update(Sinhvien sv) throws Exception
	{
		FirebaseStatic.setFirebasefile(filebasefile);
		FirebaseModel file = FirebaseStatic.getFirebase();
		file.update("sinhvien",sv,sv.getId());
		return null;
		
	}
	public Sinhvien dangnhap(String id) throws Exception
	{
		FirebaseStatic.setFirebasefile(filebasefile);
		FirebaseModel file = FirebaseStatic.getFirebase();
		DocumentSnapshot s = file.get("sinhvien", id);
		System.out.println(s);
		if(s == null)
			return null;
		Sinhvien sv = s.toObject(Sinhvien.class);
		sv.setId(s.getId());
		if(sv.getId().equals(id))
		{
			DateTimeFormatter dtf = DateTimeFormatter.ofPattern("yyyy/MM/dd HH:mm:ss");  
			LocalDateTime now = LocalDateTime.now();
			long t = new Date().getTime();
			return sv;
		}
		else
			return null;
		
	}
}
