package com.autocheck.hello.model;

import java.util.ArrayList;

public  class DiemdanhList {
	static public ArrayList<DiemdanhKey> diemdanhs = new ArrayList<DiemdanhKey>();
	
	static public DiemdanhKey getkey1(String key)
	{
		for(int i =0 ; i < diemdanhs.size(); i++ )
		{
			if(diemdanhs.get(i).getKey1().equals(key))
				return diemdanhs.get(i);
		}
		return null;
	}
	static public DiemdanhKey getkey2(String key)
	{
		for(int i =0 ; i < diemdanhs.size(); i++ )
		{
			if(diemdanhs.get(i).getKey2().equals(key))
				return diemdanhs.get(i);
		}
		return null;
	}
	static void add(DiemdanhKey d)
	{
		diemdanhs.add(d);
	}
}