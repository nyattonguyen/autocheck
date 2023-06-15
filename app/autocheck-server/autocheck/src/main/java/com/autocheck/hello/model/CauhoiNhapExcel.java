package com.autocheck.hello.model;



import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
 
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.CellType;
import org.apache.poi.ss.usermodel.FormulaEvaluator;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
 
public class CauhoiNhapExcel {
    ArrayList<Cauhoi> cauhoi = new ArrayList<>();
    Baitap bt = new Baitap();
    String fileexcel;
    String mon;
    
     
    public CauhoiNhapExcel(String f, String m)
    {
    	fileexcel = f;
    	mon = m;
    }
    
 
    public ArrayList<Cauhoi> getCauhoi() {
		return cauhoi;
	}


	public void setCauhoi(ArrayList<Cauhoi> cauhoi) {
		this.cauhoi = cauhoi;
	}


	public Baitap getBt() {
		return bt;
	}


	public void setBt(Baitap bt) {
		this.bt = bt;
	}


	public String nhap() throws IOException
    {
    	
	    readExcel(fileexcel);
	    return fileexcel;
    }
    public void readExcel(String excelFilePath) throws IOException {
        
 
        // Get file
        InputStream inputStream = new FileInputStream(new File(excelFilePath));
 
        // Get workbook
        Workbook workbook = getWorkbook(inputStream, excelFilePath);
 
        // Get sheet
        Sheet sheet = workbook.getSheetAt(0);
 
        // Get all rows
        Iterator<Row> iterator = sheet.iterator();
        while (iterator.hasNext()) {
            Row nextRow = iterator.next();
            Iterator<Cell> cellIterator = nextRow.cellIterator();
            
            if (nextRow.getRowNum() == 0) {
            	Cell cell = cellIterator.next();
            	Object cellValue = getCellValue(cell);
                bt.setTieude( cellValue.toString());
                continue;
            }
            if (nextRow.getRowNum() == 1) {
            	Cell cell = cellIterator.next();
            	Object cellValue = getCellValue(cell);
                bt.setMota(cellValue.toString());
                continue;
            }
 
            // Get all cells
            
 
            // Read cells and set value for book object
            Cauhoi c = new Cauhoi();
            ArrayList<String> da = new ArrayList<>();
            while (cellIterator.hasNext()) {
                //Read cell
                Cell cell = cellIterator.next();
                Object cellValue = getCellValue(cell);
                if (cellValue == null || cellValue.toString().isEmpty()) {
                    continue;
                }
                // Set value for book object
                int columnIndex = cell.getColumnIndex();
                if(columnIndex == 0)
                {
                
                	c.setNoidung(cellValue.toString());
                	continue;
                }
                if(columnIndex == 1)
                {
                	c.setLoai(cellValue.toString());
                	continue;
                }
                da.add(cellValue.toString());
                
                
 
            }
            c.setDapan(da);
            cauhoi.add(c);
        }
 
        workbook.close();
        inputStream.close();
 
        
    }
 
    // Get Workbook
    private static Workbook getWorkbook(InputStream inputStream, String excelFilePath) throws IOException {
        Workbook workbook = null;
        if (excelFilePath.endsWith("xlsx")) {
            workbook = new XSSFWorkbook(inputStream);
        } else if (excelFilePath.endsWith("xls")) {
            workbook = new HSSFWorkbook(inputStream);
        } else {
            throw new IllegalArgumentException("The specified file is not Excel file");
        }
 
        return workbook;
    }
 
    // Get cell value
    private static Object getCellValue(Cell cell) {
        CellType cellType = cell.getCellType();
        Object cellValue = null;
        switch (cellType) {
        case BOOLEAN:
            cellValue = cell.getBooleanCellValue();
            break;
        case FORMULA:
            Workbook workbook = cell.getSheet().getWorkbook();
            FormulaEvaluator evaluator = workbook.getCreationHelper().createFormulaEvaluator();
            cellValue = evaluator.evaluate(cell).getNumberValue();
            break;
        case NUMERIC:
            cellValue = cell.getNumericCellValue();
            break;
        case STRING:
            cellValue = cell.getStringCellValue();
            break;
        case _NONE:
        case BLANK:
        case ERROR:
            break;
        default:
            break;
        }
 
        return cellValue;
    }
 
}

