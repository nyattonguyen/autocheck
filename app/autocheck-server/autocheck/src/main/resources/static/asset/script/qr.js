function showPopupQr() {
    const modalQR = document.querySelector("#modal-create-qr");
    modalQR.setAttribute("style", "display: block !important; ");
    modalQR.setAttribute("tat", "false");
    const inputDate = document.querySelector('.input-ngayhientai');
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Thêm số 0 vào đầu nếu tháng < 10
    const day = String(today.getDate()).padStart(2, '0');
    const dateStr = `${year}-${month}-${day}`;
    inputDate.value = dateStr;
    const dayPrev = document.querySelector('.day-prev');
    const contentDayPrev = dayPrev.innerHTML;
    const dayNext = document.querySelector('.input-buoihientai');
    dayNext.value = parseInt(contentDayPrev) + 1;
    $("#qrcode").hide();
    isFirstClick = false;
}

function hidePopupQr() {
	const modalQR = document.querySelector("#modal-create-qr");
  modalQR.setAttribute("tat", "true");
  $(".modal-create-qr").hide();
}
