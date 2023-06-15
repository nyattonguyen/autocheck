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

public class XuatCauhoiFirebase {

	String filebasefile;
	Giangvien gv;
	
	public XuatCauhoiFirebase(String firebase, Giangvien g) {
		filebasefile = firebase;
		gv = g;
	}
	public String xuat(String id) throws Exception
	{
		FirebaseStatic.setFirebasefile(filebasefile);
		FirebaseModel file = FirebaseStatic.getFirebase();
		DocumentSnapshot ss = file.get("baitap", id);
		Baitap bt = ss.toObject(Baitap.class);
		bt.setId(ss.getId());
		if(bt.getIdgiangvien().equals(gv.getId()))
		{
		List<QueryDocumentSnapshot> documents = file.getAll("bainop");
		ArrayList<BainopSinhvien> bainop = new ArrayList<>();
		for (QueryDocumentSnapshot document : documents) {
			Bainop s = document.toObject(Bainop.class);
			s.setId(document.getId());
			BainopSinhvien bns = new BainopSinhvien();
			bns.setDapansinhvien(s.getDapansinhvien());
			bns.setId(s.getId());
			bns.setIdbaitap(s.getIdbaitap());
			bns.setIdcauhoi(s.getIdcauhoi());
			bns.setMasv(s.getMasv());
			bns.setThoigian(s.getThoigian());
			if(s.getIdbaitap().equals(id))
			bainop.add(bns);
		}
		List<QueryDocumentSnapshot> documentssv = file.getAll("sinhvien");
		ArrayList<Sinhvien> sv = new ArrayList<>();
		for (QueryDocumentSnapshot document : documentssv) {
			Sinhvien s = document.toObject(Sinhvien.class);
			s.setId(document.getId());
			sv.add(s);
		}
		for(BainopSinhvien b: bainop)
		{
			for(Sinhvien s: sv)
			{
				if(b.getMasv().equals(s.getMaso()))
					b.setHoten(s.getHoten());
			}
		}
		List<QueryDocumentSnapshot> documents2 = file.getAll("cauhoi");
		ArrayList<Cauhoi> cauhoi = new ArrayList<>();
		for (QueryDocumentSnapshot document : documents2) {
			Cauhoi s = document.toObject(Cauhoi.class);
			s.setId(document.getId());
			if(s.getIdbaitap().equals(id))
				cauhoi.add(s);
		}
		CauhoiXuatExcel exel = new CauhoiXuatExcel(bt, cauhoi, bainop); 
		String f = exel.xuat();
		return f;
		}
		return null;
	}
	
}
