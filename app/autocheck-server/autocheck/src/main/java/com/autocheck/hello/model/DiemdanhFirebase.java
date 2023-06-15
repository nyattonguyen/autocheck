package com.autocheck.hello.model;

import java.io.IOException;
import java.text.SimpleDateFormat;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import com.google.cloud.firestore.DocumentSnapshot;
import com.google.cloud.firestore.QueryDocumentSnapshot;
import com.google.zxing.WriterException;

public class DiemdanhFirebase {
	String filebasefile;
	String excelfile;
	String sharefile;
	Giangvien gv;
	
	public DiemdanhFirebase(String firebase)
	{
		filebasefile = firebase;
	}
	public DiemdanhFirebase(String firebase, Giangvien g)
	{
		gv = g;
		filebasefile = firebase;
	}
	public DiemdanhFirebase(String firebase, String excel)
	{
		excelfile = excel;
		filebasefile = firebase;
	}
	public DiemdanhQrKey create(String id, Location l,  int buoi) throws Exception
	{
		FirebaseStatic.setFirebasefile(filebasefile);
		FirebaseModel file = FirebaseStatic.getFirebase();
		DocumentSnapshot s = file.get("mon", id);
		Mon m = s.toObject(Mon.class);
		m.setId(s.getId());
		int buoihientai = m.getBuoihientai() +1;
		if(buoi != 0)
			buoihientai = buoi;
		
		if(gv.getId().equals(m.getIdgiangvien()))
		{
			DiemdanhKey dk = new DiemdanhKey(filebasefile);
			m.setBuoihientai(buoihientai);
			file.update("mon", m, m.getId());
			dk.setKey1(dk.create());
			dk.setMon(m);
			dk.setLc(l);
			dk.setDate(new Date());
			DiemdanhList.add(dk);
			DiemdanhQrKey k = diemdanhGV(dk.getKey1());
			return k;
		}
		return null;
	}
	private double distance(double lat1, double lon1, double lat2, double lon2, char unit) {
	      double theta = lon1 - lon2;
	      double dist = Math.sin(deg2rad(lat1)) * Math.sin(deg2rad(lat2)) + Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * Math.cos(deg2rad(theta));
	      dist = Math.acos(dist);
	      dist = rad2deg(dist);
	      dist = dist * 60 * 1.1515;
	      if (unit == 'K') {
	        dist = dist * 1.609344;
	      } else if (unit == 'N') {
	        dist = dist * 0.8684;
	        }
	      return (dist);
	    }
	    
	    /*:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/
	    /*::  This function converts decimal degrees to radians             :*/
	    /*:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/
	    private double deg2rad(double deg) {
	      return (deg * Math.PI / 180.0);
	    }
	    
	    /*:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/
	    /*::  This function converts radians to decimal degrees             :*/
	    /*:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/
	    private double rad2deg(double rad) {
	      return (rad * 180.0 / Math.PI);
	    }
	    
	public Diemdanh diemdanhSV(SinhvienDiemdanh svd) throws Exception
	{
		DiemdanhKey dk = DiemdanhList.getkey2(svd.getKhoadiemdanh());
		loi();
		if(dk != null)
		{
			Sinhvien sv = khoaSvDiemdanh(svd.getIdsv());
			if(sv != null)
			{
			double dtc = distance(svd.getLat(), svd.getLng(), dk.getLc().getLat(), dk.getLc().getLng(), 'M');
			Date dte = new Date();
			long time = dte.getTime() - dk.getDate().getTime();
			if(dtc < 500 && time < 10000 )
			{
			Diemdanh d = new Diemdanh();
			d.setBuoiso(dk.getMon().getBuoihientai());
			d.setMasv(svd.getMasv());
			d.setIdmon(dk.getMon().getId());
			Date dt = new Date();
			String dd = new SimpleDateFormat("yyyy/MM/dd HH:mm:ss").format(dt);
			d.setThoigian(dd);
			FirebaseStatic.setFirebasefile(filebasefile);
			FirebaseModel file = FirebaseStatic.getFirebase();
			file.create("diemdanh", d);
			FirebaseStatic.setExcelfile(excelfile);
			ExcelModel excel = FirebaseStatic.getExcel();
			boolean c = excel.readDulieu(dk.getMon(), sv);
			if(c == true)
			capnhatSV(d);
			return d;
			}
			}
		}
		return null;
	}
	public Sinhvien khoaSvDiemdanh(String id) throws Exception
	{
		FirebaseStatic.setFirebasefile(filebasefile);
		FirebaseModel file = FirebaseStatic.getFirebase();
		DocumentSnapshot s = file.get("sinhvien", id);
		Sinhvien m = s.toObject(Sinhvien.class);
		m.setId(s.getId());
		long t = new Date().getTime();
		if(m.getThoigiankhoa() > t - 432000)
		{
			return null;
		}
		return m;
	}
	public DiemdanhQrKey diemdanhGV(String key1) throws WriterException, IOException
	{
		
		DiemdanhKey dk = DiemdanhList.getkey1(key1);
		if(dk != null)
		{
			dk.setKey2(dk.create());
			Date t = new Date();
			dk.setDate(t);
			Qrcode qr = new Qrcode();
			DiemdanhQrKey d = new DiemdanhQrKey();
			d.setKey(dk.getKey1());
			d.setQr(qr.create(dk.getKey2(), dk.getMon().getId() ));
			return d;
		}
		return null;
		
	}
	public void loi()
	{
		for(DiemdanhKey k : DiemdanhList.diemdanhs)
		{
			System.out.println("loi "+  k.getKey2());
		}
	}
	public ArrayList<Lichsudiemdanh> lichsudiemdanh(String masv) throws Exception
	{
		FirebaseStatic.setFirebasefile(filebasefile);
		FirebaseModel file = FirebaseStatic.getFirebase();
		ArrayList<Lichsudiemdanh> dd = new ArrayList<>();
		ArrayList<Mon> m = new ArrayList<>();
		List<QueryDocumentSnapshot> documentsm = file.getAll("mon");
		for (QueryDocumentSnapshot document : documentsm) {
			Mon s = document.toObject(Mon.class);
			s.setId(document.getId());
			m.add(s);
		}
		List<QueryDocumentSnapshot> documents = file.getAll("diemdanh");
		for (QueryDocumentSnapshot document : documents) {
			Diemdanh s = document.toObject(Diemdanh.class);
			s.setId(document.getId());
			Lichsudiemdanh ls = new Lichsudiemdanh();
			ls.setBuoiso(s.getBuoiso());
			ls.setId(s.getId());
			ls.setIdmon(s.getIdmon());
			ls.setMasv(s.getMasv());
			ls.setThoigian(s.getThoigian());
			if(s.getMasv().equals(masv))
			{
				for(Mon n : m)
				{
					if(n.getId().equals(s.getIdmon()))
					{
						ls.setMon(n.getTenmon());
						dd.add(ls);
					}
				}
			}
		}
		return dd;
	}
	public ArrayList<Lichsudiemdanh> lichsudiemdanhMon(String idmon) throws Exception
	{
		FirebaseStatic.setFirebasefile(filebasefile);
		FirebaseModel file = FirebaseStatic.getFirebase();
		ArrayList<Lichsudiemdanh> dd = new ArrayList<>();
		ArrayList<Sinhvien> m = new ArrayList<>();
		List<QueryDocumentSnapshot> documentsm = file.getAll("sinhvien");
		for (QueryDocumentSnapshot document : documentsm) {
			Sinhvien s = document.toObject(Sinhvien.class);
			s.setId(document.getId());
			m.add(s);
		}
		List<QueryDocumentSnapshot> documents = file.getAll("diemdanh");
		
		for (QueryDocumentSnapshot document : documents) {
			Diemdanh s = document.toObject(Diemdanh.class);
			s.setId(document.getId());
			Lichsudiemdanh ls = new Lichsudiemdanh();
			ls.setBuoiso(s.getBuoiso());
			ls.setId(s.getId());
			ls.setIdmon(s.getIdmon());
			ls.setMasv(s.getMasv());
			ls.setThoigian(s.getThoigian());
			if(s.getIdmon().equals(idmon))
			{
				
				for(Sinhvien n : m)
				{
					if(n.getMaso().equals(s.getMasv() ))
					{
						ls.setHotensv(n.getHoten());
						dd.add(ls);
					}
				}
			}
		}
		
		return dd;
	}
	public void capnhatSV(Diemdanh d) throws Exception
	{
		FirebaseStatic.setFirebasefile(filebasefile);
		FirebaseModel file = FirebaseStatic.getFirebase();
		boolean n = false;
		List<QueryDocumentSnapshot> documents = file.getAll("sinhvienlop");
		for (QueryDocumentSnapshot document : documents) {
			Sinhvienlop s = document.toObject(Sinhvienlop.class);
			if(s.getIdsv().equals(d.getMasv()) && s.getIdmon().equals(d.getIdmon()))
			{
				n = true;
			}
			
		}
		if(n == false)
		{
			Sinhvienlop sv = new Sinhvienlop();
			sv.setIdmon(d.getIdmon());
			sv.setIdsv(d.getMasv());
			file.create("sinhvienlop", sv);
		}
	}
	
}