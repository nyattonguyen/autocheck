package com.autocheck.hello.model;

import java.text.SimpleDateFormat;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.Date;
import java.util.List;
import java.util.concurrent.ExecutionException;

import com.google.cloud.firestore.DocumentSnapshot;
import com.google.cloud.firestore.QueryDocumentSnapshot;
import com.google.gson.Gson;

public class BaitapFirebase {

	String filebasefile;
	Giangvien gv;
	
	public BaitapFirebase(String firebase, Giangvien g) {
		filebasefile = firebase;
		gv =g;
	}
	public BaitapFirebase(String firebase) {
		filebasefile = firebase;
	}
	
	public Baitap create(Baitap bt, String id) throws Exception
	{
		FirebaseStatic.setFirebasefile(filebasefile);
		FirebaseModel file = FirebaseStatic.getFirebase();
		Date t = new Date();
		bt.setIdgiangvien(gv.getId());
		bt.setIdmon(id);
		String d = new SimpleDateFormat("yyyy/MM/dd HH:mm:ss").format(t);
		bt.setThoigian(d);
		bt.setDagiao(true);
		String ib = file.create("baitap", bt);
		bt.setId(ib);
		return bt;
	}
	public Baitap vohieuhoa(String id) throws Exception
	{
		FirebaseStatic.setFirebasefile(filebasefile);
		FirebaseModel file = FirebaseStatic.getFirebase();
		DocumentSnapshot s = file.get("baitap", id);
		Baitap m = s.toObject(Baitap.class);
		m.setId(s.getId());
		if(m.getIdgiangvien().equals(gv.getId()))
		{
		m.setDagiao(false);
		update(m);
		return m;
		}
		return null;
	}
	public Baitap huyvohieuhoa(String id) throws Exception
	{
		FirebaseStatic.setFirebasefile(filebasefile);
		FirebaseModel file = FirebaseStatic.getFirebase();
		DocumentSnapshot s = file.get("baitap", id);
		Baitap m = s.toObject(Baitap.class);
		m.setId(s.getId());
		if(m.getIdgiangvien().equals(gv.getId()))
		{
		m.setDagiao(true);
		update(m);
		return m;
		}
		return null;
	}
	public String update(Baitap bt) throws Exception
	{
		FirebaseStatic.setFirebasefile(filebasefile);
		FirebaseModel file = FirebaseStatic.getFirebase();
		file.update("baitap",bt,bt.getId());
		return null;
		
	}
	public ArrayList<Cauhoi> createCauhoi(ArrayList<Cauhoi> cauhoi, String id) throws Exception
	{
		FirebaseStatic.setFirebasefile(filebasefile);
		FirebaseModel file = FirebaseStatic.getFirebase();
		for(Cauhoi c: cauhoi)
		{
			c.setIdbaitap(id);
			String ic = file.create("cauhoi", c);
			c.setId(ic);
		}
		return cauhoi;
	}
	public ArrayList<Baitap> getBaitap(String id) throws Exception
	{
		FirebaseStatic.setFirebasefile(filebasefile);
		FirebaseModel file = FirebaseStatic.getFirebase();
		ArrayList<Baitap> bt = new ArrayList<>();
		List<QueryDocumentSnapshot> documents = file.getAll("baitap");
		for (QueryDocumentSnapshot document : documents) {
			Baitap s = document.toObject(Baitap.class);
			s.setId(document.getId());
			if(s.getIdmon().equals(id))
			bt.add(s);
		
		}
		return bt;
		
	}
	public ArrayList<Bainop> nopbai(ArrayList<Bainop> bainop, String masv) throws Exception
	{
		FirebaseStatic.setFirebasefile(filebasefile);
		FirebaseModel file = FirebaseStatic.getFirebase();
		Date t = new Date();
		String d = new SimpleDateFormat("yyyy/MM/dd HH:mm:ss").format(t);
		System.out.println(bainop.size() + "so bai nop");
		for(Bainop c: bainop)
		{
			c.setThoigian(d);
			c.setMasv(masv);
			String ic = file.create("bainop", c);
			c.setId(ic);
		}
		return bainop;
		
	}
	public ArrayList<Cauhoi> getCauhoi(String idbt) throws Exception
	{
		FirebaseStatic.setFirebasefile(filebasefile);
		FirebaseModel file = FirebaseStatic.getFirebase();
		ArrayList<Cauhoi> bt = new ArrayList<>();
		List<QueryDocumentSnapshot> documents = file.getAll("cauhoi");
		for (QueryDocumentSnapshot document : documents) {
			Cauhoi s = document.toObject(Cauhoi.class);
			s.setId(document.getId());
			if(s.getIdbaitap().equals(idbt))
			bt.add(s);
		
		}
		return bt;
	}
	public ArrayList<Baitap> getDanggiao(String masv) throws Exception
	{
		FirebaseStatic.setFirebasefile(filebasefile);
		FirebaseModel file = FirebaseStatic.getFirebase();
		ArrayList<Baitap> bt = new ArrayList<>();
		ArrayList<Baitap> btsv = getBTsv(masv);
		System.out.println(btsv.size() + "size");
		List<QueryDocumentSnapshot> documents = file.getAll("bainop");
		ArrayList<String> bainop = new ArrayList<>();
		for (QueryDocumentSnapshot document : documents) {
			Bainop s = document.toObject(Bainop.class);
			s.setId(document.getId());
			bainop.add(s.getIdbaitap());
		}
		for(Baitap b : btsv)
		{
			
			if(b.isDagiao() == false)
			{
				
				//btsv.remove(b);
			}
			else if(bainop.contains(b.getId()))
			{
				
				//btsv.remove(b);
				
			}
			else
			{
				if(bt.contains(b) == false)
				bt.add(b);
			}
		}
		
		return bt;
	}
	public ArrayList<Baitap> getDagiao(String masv) throws Exception
	{
		FirebaseStatic.setFirebasefile(filebasefile);
		FirebaseModel file = FirebaseStatic.getFirebase();
		ArrayList<Baitap> bt = new ArrayList<>();
		ArrayList<Baitap> btsv = getBTsv(masv);
		List<QueryDocumentSnapshot> documents = file.getAll("bainop");
		for (QueryDocumentSnapshot document : documents) {
			Bainop s = document.toObject(Bainop.class);
			s.setId(document.getId());
			if(s.getMasv().equals(masv))
			{
				for(Baitap b : btsv)
				{
					if(b.getId().equals(s.getIdbaitap()))
					{
						if(bt.contains(b) == false)
						{
							b.setThoigian(s.getThoigian());
							bt.add(b);
						}
					}
				}
			}
		}
		
		return bt;
	}
	public ArrayList<Baitap> getBTsv(String masv) throws Exception
	{
		FirebaseStatic.setFirebasefile(filebasefile);
		FirebaseModel file = FirebaseStatic.getFirebase();
		ArrayList<Baitap> bt = new ArrayList<>();
		ArrayList<Sinhvienlop> svl = new ArrayList<>();
		List<QueryDocumentSnapshot> documents = file.getAll("sinhvienlop");
		for (QueryDocumentSnapshot document : documents) {
			Sinhvienlop s = document.toObject(Sinhvienlop.class);
			if(s.getIdsv().equals(masv))
			svl.add(s);
		}
		ArrayList<Baitap> svbt = new ArrayList<>();
		List<QueryDocumentSnapshot> dcbt = file.getAll("baitap");
		for (QueryDocumentSnapshot document : dcbt) {
			Baitap b = document.toObject(Baitap.class);
			b.setId(document.getId());
			for(Sinhvienlop sv: svl)
			{
				if(sv.getIdmon().equals(b.getIdmon()))
				{
					
					svbt.add(b);
				}
			}
		}
		
		return svbt;
	}
	public BaitapSoluongDagiao getSodagiao(String idmon) throws Exception
	{
		FirebaseStatic.setFirebasefile(filebasefile);
		FirebaseModel file = FirebaseStatic.getFirebase();
		List<QueryDocumentSnapshot> documents = file.getAll("sinhvienlop");
		int k = 0;
		for (QueryDocumentSnapshot document : documents) {
			Sinhvienlop s = document.toObject(Sinhvienlop.class);
			if(s.getIdmon().equals(idmon))
				k++;
		}
		BaitapSoluongDagiao b = new BaitapSoluongDagiao();
		b.setSoluong(k);
		return b;
	}
	public ArrayList<SinhvienNopbai> getListSV(String idbt, String loai, String tang) throws Exception
	{
		FirebaseStatic.setFirebasefile(filebasefile);
		FirebaseModel file = FirebaseStatic.getFirebase();
		ArrayList<SinhvienNopbai> listsv = new ArrayList<>();
		ArrayList<Sinhvien> svs = new ArrayList<>();
		List<QueryDocumentSnapshot> documentsv = file.getAll("sinhvien");
		for (QueryDocumentSnapshot document : documentsv) {
			Sinhvien s = document.toObject(Sinhvien.class);
			s.setId(document.getId());
			svs.add(s);
		}
		ArrayList<String> ls = new ArrayList<>();
		List<QueryDocumentSnapshot> documents = file.getAll("bainop");
		for (QueryDocumentSnapshot document : documents) {
			Bainop s = document.toObject(Bainop.class);
			s.setId(document.getId());
			if(ls.contains(s.getMasv()) == false)
			ls.add(s.getMasv());
		}
		for(String ma : ls)
		{
			for(Sinhvien s: svs)
			{
				if(s.getMaso().equals(ma))
				{
					SinhvienNopbai n = new SinhvienNopbai();
					n.setHoten(s.getHoten());
					n.setMasv(ma);
					n.setHovaten(s.getHovaTen());
					listsv.add(n);
				}
			}
		}
		if(loai.equals("ho"))
		{
			if(tang.equals("tang"))
			{
				Collections.sort(listsv, new Comparator<SinhvienNopbai>() {
		            public int compare(SinhvienNopbai o1, SinhvienNopbai o2) {
		                return o1.getHovaten().get(0).compareToIgnoreCase(o2.getHovaten().get(0));
		            }
		        });
				
			}
			else
			{
				Collections.sort(listsv, new Comparator<SinhvienNopbai>() {
		            public int compare(SinhvienNopbai o1, SinhvienNopbai o2) {
		                return o2.getHovaten().get(0).compareToIgnoreCase(o1.getHovaten().get(0));
		            }
		        });
			}
		}
		if(loai.equals("ten"))
		{
			if(tang.equals("tang"))
			{
				Collections.sort(listsv, new Comparator<SinhvienNopbai>() {
		            public int compare(SinhvienNopbai o1, SinhvienNopbai o2) {
		                return o1.getHovaten().get(1).compareToIgnoreCase(o2.getHovaten().get(1));
		            }
		        });
				
			}
			else
			{
				Collections.sort(listsv, new Comparator<SinhvienNopbai>() {
		            public int compare(SinhvienNopbai o1, SinhvienNopbai o2) {
		                return o2.getHovaten().get(1).compareToIgnoreCase(o1.getHovaten().get(1));
		            }
		        });
			}
		}
		return listsv;
	}
	public ArrayList<Ketquanop> getKetquanop(String idbt, String idsv) throws Exception
	{
		FirebaseStatic.setFirebasefile(filebasefile);
		FirebaseModel file = FirebaseStatic.getFirebase();
		ArrayList<Ketquanop> bt = new ArrayList<>();
		List<QueryDocumentSnapshot> documents = file.getAll("bainop");
		ArrayList<Bainop> bnop = new ArrayList<>();
		for (QueryDocumentSnapshot document : documents) {
			Bainop s = document.toObject(Bainop.class);
			s.setId(document.getId());
			if(s.getMasv().equals(idsv) && s.getIdbaitap().equals(idbt))
			{
				if(bnop.contains(s) == false)
				bnop.add(s);
			}
			
		
		}
		System.out.println("Da tim thay bai nop" + bnop.size());
		List<QueryDocumentSnapshot> documentsn = file.getAll("cauhoi");
		for (QueryDocumentSnapshot document : documentsn) {
			Cauhoi s = document.toObject(Cauhoi.class);
			s.setId(document.getId());
			for(Bainop b: bnop)
			{
				if(s.getId().equals(b.getIdcauhoi()) && s.getIdbaitap().equals(idbt))
				{
					Ketquanop k = new Ketquanop();
					k.setCauhoi(s.getNoidung());
					k.setTraloi(b.getDapansinhvien());
					if(bt.contains(k) == false)
					bt.add(k);
				}
			}
		
		}
		return bt;
		
	}
}