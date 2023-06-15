showListClass();
const resetForm = () => {
   document.querySelector("#tenmon").value = "";
   document.querySelector("#idGiangvien").value = "";
   document.querySelector("#id").value = "";
   document.querySelector("#mamon").value = "";
   document.querySelector("#thoigianbatdau").value = "";
   document.querySelector("#thoigianketthuc").value = "";
   document.querySelector("#sotinchi").value = "";
   document.querySelector("#hocky").value = "";
   document.querySelector("#excel").value = "";
   document.querySelector("#tongsobuoi").value = "";
   document.querySelector("#link").value = "";
  }
function submitMon() {
  const tenmon = document.querySelector("#tenmon").value;
  const giangvienphutrach = document.querySelector("#idGiangvien").value;
  const id = document.querySelector("#id").value;
  const mamon = document.querySelector("#mamon").value;
  const thoigianbatdau = document.querySelector("#thoigianbatdau").value;
  const thoigianketthuc = document.querySelector("#thoigianketthuc").value;
  const sotinchi = document.querySelector("#sotinchi").value;
  const hocky = document.querySelector("#hocky").value;
  const excel = document.querySelector("#excel").value;
  const tongsobuoi = document.querySelector("#tongsobuoi").value;
  const link = document.querySelector("#link").value;
  console.log("ko co ne ", document.querySelector("#hocky"))
  if (
    !tenmon ||
    !mamon ||
    !thoigianbatdau ||
    !thoigianketthuc ||
    !sotinchi ||
    !hocky ||
    !tongsobuoi
  ) {
    alert("Hãy điền đầy đủ thông tin ^-^!");
    return;
  }
  const data = {
    mamon: mamon,
    tenmon: tenmon,
    tongbuoi: tongsobuoi,
    hocky: hocky,
    sotinchi: sotinchi,
    thoigianbatdau: thoigianbatdau,
    thoigianketthuc: thoigianketthuc,
    giangvienphutrach: giangvienphutrach,
    sotinchi: sotinchi,
    link: link,
    excel: excel,
    id: id,
  };
  fetch(`${baseURL}/mon/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      if (!data.error) {
        alert("Tạo lớp thành công !");
        document
          .querySelector(".js-modal-create-class")
          .classList.remove("open");
        disabledBtn();

        showListClass();
        resetForm();
        undisabledBtn();
      } else {
        alert("Lỗi Server ^-^ Hãy quay lại sau nhé !");
      }
    })
    .catch((error) => console.error(error));
}
const btnSubmitMon = document.querySelector(".js-btn-update-inf-class");
function disabledBtn() {
  btnSubmitMon.setAttribute("disabled", "true");
}
function undisabledBtn() {
  btnSubmitMon.removeAttribute("disabled");
}

btnSubmitMon.addEventListener("click", () => {
  submitMon();
  resetForm();
});
// ==========================================================
//const listBtnCheck = document.querySelector(".js-list-btn-autocheck");

const listClass = document.querySelector("#list-class");

function showListClass() {
  let dataListClass = {};
  fetch(`${baseURL}/mon/list`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  })
    .then((response) => response.json())
    .then((data) => {
      dataListClass = data;
      window.listClass = data;

      const listClass = document.querySelector("#list-class");
      listClass.innerHTML = "";
      // ===============================================================

      for (let i = 0; i < data.length; i++) {
        const itemData = data[i];

        const itemClass = document.createElement("div");

        itemClass.setAttribute("class", "col item-class rounded-3 mb-10");
        itemClass.setAttribute("data-id", `${itemData.id}`);
        itemClass.addEventListener("click", (event) => {
          showSingleClass(event.currentTarget.getAttribute("data-id"));
        });

        itemClass.innerHTML = `
        
        <div class="item_class-item-top">                     	      
        <a class="item_class-title js-item-class" >
            ${itemData.mamon}
        </a>
        <div class="icon-more js-icon-more">
            <i class="fa-solid fa-ellipsis-vertical" style="color: #ebebeb; font-size: 24px;"></i>
        </div>
        <ul class="list-more js-list-more">
            <li style="font-size: 16px; list-style-type: none; display: block;" class="item-more-info-class" data-id="${itemData.id}"  onclick="showClassInfo(${itemData})" >Thông tin lớp học</li>

        </ul>
        </div>
        
        <div class="item_class-item-bottom">
            <div class="item_class-namesub">
                ${itemData.tenmon}
            </div>
        </div>
        `;
        listClass.appendChild(itemClass);

        // =================================================
      }
      const divFirst = document.createElement("h2");

      if (data.length === 0) {
        const loader = document.querySelector(".loader");
        loader.setAttribute("style", "display:none");
        divFirst.setAttribute("class", "title-ichi");
        divFirst.innerText = "Bắt đầu tạo lớp nào ";
        const divContainer = document.querySelector("#list-class");
        divContainer.appendChild(divFirst);
      } else if (data.length > 0) {
        const loader = document.querySelector(".loader");
        loader.setAttribute("style", "display:none");
        divFirst.remove();
      }
      const classInfoButtons = document.querySelectorAll(
        ".item-more-info-class"
      );
      classInfoButtons.forEach((button) => {
        button.addEventListener("click", (event) => {
          event.stopPropagation();
          const itemId = event.currentTarget.getAttribute("data-id");
          showClassInfo(itemId);
        });
      });
    })
    .catch((error) => console.error(error));
}
function hideListClass() {
  listClass.classList.add("close");
}
function showSingleClass(itemId) {
  const itemData = window.listClass.find((item) => item.id === itemId);
  $(".js-container-single-class").attr(
    "style",
    "display:flex; justify-content: center;"
  );
  detailClass(itemData);
  $("#list-class").hide();
}

function detailClass(itemData) {
  const imageSources = [
    "asset/img/rk.png",
    "asset/img/robot.png",
    "asset/img/robot2.png",
    "asset/img/rocket.png",
    "asset/img/rb2.png",
    // add more image sources as needed
  ];

  const randomImageSources = [];
  while (randomImageSources.length < 4) {
    const randomIndex = Math.floor(Math.random() * imageSources.length);
    const randomSource = imageSources[randomIndex];

    if (!randomImageSources.includes(randomSource)) {
      randomImageSources.push(randomSource);
    }
  }

  const pageSgClass = document.querySelector(".js-container-single-class");
  const currentPage = pageSgClass.querySelector(".page-class");
  if (currentPage) {
    pageSgClass.removeChild(currentPage);
  }
  const pageFucntion = document.createElement("div");
  pageSgClass.setAttribute("style", "position:absolute;");
  pageFucntion.setAttribute("class", "page-class js-page-class");
  pageFucntion.setAttribute("id", `${itemData.id}`);
  pageFucntion.setAttribute(
    "style",
    "position: fixed;top: 69px;width: 100%; display: block; justify-content: center; margin: 0px auto;"
  );
  //// rocket
  const rocket = document.querySelector("#rocket");
  rocket.setAttribute("src", `${randomImageSources[0]}`);
  const inputQr = document.querySelector(".modal-body-qr #idmon");
  inputQr.setAttribute("value", `${itemData.id}`);
  pageFucntion.innerHTML = `
    <div class="box-back" onclick="goBackListClass()"><i class="fa-solid fa-arrow-left"></i></div>
      <div class="banner-class model3d-container" id="canvas-container2">
        <img src="${randomImageSources[0]}" alt="imgbaner" class="icon-info_class animate" />
        <div class="banner-class-name">
          <a class="name-class">${itemData.tenmon} </a>
        </div>
      </div>
      <div class="list-item-class-autocheck js-history-check">
          <button class="btn-excel" onClick="window.location.href='${itemData.link}'">Xuất file excel </button>
          <div class="input-group mt-10 box-search-history ">
            <input type="number" value="${itemData.buoihientai + 1}" style="font-size: 16px;" class="form-control" placeholder="Nhập số buổi cần tìm (ví dụ: 2)" aria-describedby="button-addon2">
            <button class="btn btn-outline-secondary" type="button" id="button-search-buoi"><i class="fa-solid fa-magnifying-glass" style="color: white; font-size: 22px"></i></button>
          </div>
      </div>
      <div class="list-item-class-btn js-list-btn-autocheck">
        <button class="history-btn js-history-btn" onclick="showHistoryCheck('${itemData.id}')">Lịch sử điểm danh</button>
        <button class="exercise-btn js-exercise-btn" data-id="${itemData.id}" onclick="showModalListExercise('${itemData.id}')">Tạo khảo sát</button>
        <button class="autocheck-btn js-autocheck-btn" id="" onclick="showPopupQr()" >Điểm danh</button>
      </div>
    `;
    const dayPrev = document.querySelector('.box-day-check-prev .day-prev');
    dayPrev.innerText = itemData.buoihientai;
  pageSgClass.appendChild(pageFucntion);
  model3d();
}

function closeModalQR() {
  $(".js-modal-qr").hide();
}

function hideSingleClass() {
  $(".js-page-class").hide();
}
function goBackListClass(){
  hideSingleClass();
  showClassListMain();

}
function model3d() {
  // Tạo scene, camera và renderer
  var scene = new THREE.Scene();
  var camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  camera.position.z = 5;
  var renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.getElementById("canvas-container2").appendChild(renderer.domElement);

  // Tạo lập phương
  var geometry = new THREE.BoxBufferGeometry(1, 1, 1);
  var material = new THREE.MeshBasicMaterial({ color: 0xffffff });
  var cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  // Tạo các cạnh của lập phương
  var edges = new THREE.EdgesGeometry(geometry);
  var lineMaterial = new THREE.LineBasicMaterial({ color: 0x000000 });
  var edgesLines = new THREE.LineSegments(edges, lineMaterial);
  cube.add(edgesLines);

  // Tạo sao băng
  var starsGeometry = new THREE.BufferGeometry();
  var starsPositions = [];
  for (var i = 0; i < 1000; i++) {
    var x = THREE.MathUtils.randFloatSpread(2000);
    var y = THREE.MathUtils.randFloatSpread(2000);
    var z = THREE.MathUtils.randFloatSpread(2000);
    starsPositions.push(x, y, z);
  }
  starsGeometry.setAttribute(
    "position",
    new THREE.Float32BufferAttribute(starsPositions, 3)
  );
  var starsMaterial = new THREE.PointsMaterial({ color: 0x00aaff, size: 2 });
  var stars = new THREE.Points(starsGeometry, starsMaterial);

  scene.add(stars);
  // Xoay hình lập phương và sao băng liên tục
  function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    stars.rotation.x += 0.005;
    stars.rotation.y += 0.005;
    renderer.render(scene, camera);
  }
  animate();
}

// =================================================

const container = document.querySelector(".js-container");
const itemClass = document.querySelector(".js-item-class");
const listBtnCheck = document.querySelector(".js-list-btn-autocheck");
const historyCheck = document.querySelector(".js-history-check");
const historyBtn = document.querySelector(".js-history-btn");

//hiden list class
function hideListClass() {
  listClass.classList.add("close");
}
// show history
function showHistoryCheck(id) {
  $(".js-history-check").show();
  lichSuDiemDanhSV(id);
  console.log("click on history");
  hiddenListBtnCheck();
}

// hidden history
function hidenHistoryCheck() {
  historyCheck.classList.remove("open");
  showListBtnCheck();
}
// hidden 2 btn single class
function hiddenListBtnCheck() {
  $(".js-list-btn-autocheck").hide();
}

// show 2 btn single class
function showListBtnCheck() {
  listBtnCheck.classList.remove("close");
}
// ===============================================================

function hideInfoClass() {
  $(".js-modal-create-class").hide();
}
// ===============================================================
function showClassInfo(itemId) {
  const imageSources = [
    "asset/img/rk.png",
    "asset/img/robot.png",
    "asset/img/robot2.png",
    "asset/img/rocket.png",
    "asset/img/rb2.png",
    // add more image sources as needed
  ];

  const randomImageSources = [];
  while (randomImageSources.length < 4) {
    const randomIndex = Math.floor(Math.random() * imageSources.length);
    const randomSource = imageSources[randomIndex];

    if (!randomImageSources.includes(randomSource)) {
      randomImageSources.push(randomSource);
    }
  }
  const itemData = window.listClass.find((item) => item.id === itemId);
  const inputMonQr = document.querySelector(".modal-body-qr #idmon");
  inputMonQr.setAttribute("value", `${itemData.id}`);

  const divInfoClass = document.createElement("div");
  divInfoClass.setAttribute("class", "modal js-modal-create-class info--class");
  divInfoClass.setAttribute(
    "style",
    "display: flex; align-items: center; justify-content: center;"
  );
  divInfoClass.innerHTML = `
        <div class="modal-container js-modal-create-class-container">
            <div class="modal-close js-modal-create-class-close" onclick="hideInfoClass()">
                <i class="fa-solid fa-rectangle-xmark" style="font-size: 28px; color: #cacaca"></i>
            </div>
            <header class="modal-header" id="canvas-container">
              <i class="fa-solid fa-qrcode" style="padding-right: 10px; font-size: 20px; z-index: 1;"></i>
              <span style="z-index: 1; font-size: 30px;">Thông tin lớp học</span>
              <i class="fa-solid fa-rocket"  style="padding-left: 10px; font-size: 20px; z-index: 1;"></i>
              <img src="${randomImageSources[0]}" alt="" class="rocket" style="width: 165px; z-index: 1; margin-top: 46px">
              <canvas data-engine="three.js r151" width="1396" height="685" style="display: block; width: 1396px; height: 685px;"></canvas>
            </header>
            <div class="modal-body" id="modal-edit">           

                <label for="mamon" class="modal-label">
                    <i class="fa-solid fa-users-viewfinder"></i>
                    Mã môn 
                </label>
                <input id="mamon" name="mamon" type="text" class="modal-input p-edit modal-input-name-class" value="${itemData.mamon}"  placeholder="JB1"> 

                <label for="tenmon" class="modal-label">
                    <i class="fa-solid fa-puzzle-piece"></i>
                    Tên môn
                </label>
                <input id="tenmon" name="tenmon" type="text" class="modal-input p-edit modal-input-name-subject" value="${itemData.tenmon}" placeholder="CSDLNC">     
                
                <label for="tongsobuoi" class="modal-label">
                    <i class="fa-solid fa-list-ol"></i>
                      Tổng số buổi 
                </label>
                <input id="tongsobuoi" name="tongbuoi" type="text" class="modal-input p-edit modal-input-name-subject" value="${itemData.tongbuoi}" placeholder="15"> 
                <label for="hocky" class="modal-label">
                  <i class="fa-regular fa-newspaper"></i>
                   Học kì 
                </label>
                <input required id="hocky" name="hocky" type="text" value="${itemData.hocky}" class="modal-input p-create modal-input-name-subject"  placeholder="1A"> 
                <label for="sotinchi" class="modal-label">
                  <i class="fa-solid fa-list-ol"></i>
                  Số tính chỉ 
                </label>
                <input required id="sotinchi" name="sotinchi" value="${itemData.sotinchi}" type="number" class="modal-input p-create modal-input-name-subject"  placeholder="3"> 

                <label for="thoigianbatdau" class="modal-label">
                    <i class="fa-solid fa-calendar-days"></i>
                    Thời gian bắt đầu 
                </label>
                <input id="thoigianbatdau" name="thoigianbatdau" type="date" class="modal-input p-edit modal-input-name-subject" value="${itemData.thoigianbatdau}"  placeholder="12/6/2023"> 
                <label for="thoigianketthuc" class="modal-label">
                <i class="fa-solid fa-calendar-days"></i>
                    Thời gian kết thúc
                </label>
                <input required id="thoigianketthuc" name="thoigianketthuc" type="date" class="modal-input p-create modal-input-name-subject" value="${itemData.thoigianketthuc}" placeholder="12/8/2023">
                
                <input hidden id="idgiangvien" name="idgiangvien" type="text" value="${itemData.idgiangvien}" class="modal-input p-edit modal-input-name-subject" disabled > 
                
                <input hidden id="excel" name="excel" type="text" value="${itemData.excel}" class="modal-input p-edit modal-input-name-subject" disabled > 
                <input  hidden id="link" name="link" type="text" value="${itemData.link}" class="modal-input modal-input-name-subject" disabled > 
                
                <input hidden id="id" name="id" value="${itemData.id}" type="text" class="modal-input p-edit modal-input-name-subject" disabled > 
                <div class="modal-info-footer">
                  <button id="btn-edit" class="" onclick="updateMon()" >
                    Cập nhật 
                  </button>
                  <button id="btn-delete" class="" onclick="deleteMon('${itemData.id}')">
                    Xóa 
                  </button>
                </div>

            </div>
            <!-- <div class="modal-footer js-edit-class">
                <i class="fa-regular fa-pen-to-square btn-edit-class js-btn-edit-class" ></i>
                <a class="btn-edit-class">Chỉnh sửa thông tin</a>
            </div> -->
        </div>
  `;
  const app = document.querySelector(".app");
  app.appendChild(divInfoClass);
}
// ===============================================================

function deleteMon(idmon) {
  console.log("day ne", idmon);
  const formInfo = document.querySelector(".info--class");

  fetch(`${baseURL}/mon/xoa/${idmon}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  })
    .then((response) => {
      response.json();
      formInfo.setAttribute("style", "display:none");
      showListClass();
      hideInfoClass();
    })
    .then((err) => console.log("Error delete mon", err));
}

// ===============================================================
function updateMon() {
  const formInfo = document.querySelector(".info--class");
  const tenmon = formInfo.querySelector("#tenmon").value;
  const idgiangvien = formInfo.querySelector("#idgiangvien").value;
  const id = formInfo.querySelector("#id").value;
  const mamon = formInfo.querySelector("#mamon").value;
  const thoigianbatdau = formInfo.querySelector("#thoigianbatdau").value;
  const excel = formInfo.querySelector("#excel").value;
  const tongsobuoi = formInfo.querySelector("#tongsobuoi").value;
  const hocky = formInfo.querySelector("#hocky").value;

  const data = {
    mamon: mamon,
    tenmon: tenmon,
    tongbuoi: tongsobuoi,
    thoigianbatdau: thoigianbatdau,
    idgiangvien: idgiangvien,
    excel: excel,
    hocky:hocky,
    id: id,
  };
  console.log("input", data);
  fetch(`${baseURL}/mon/chinhsua`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      alert("Update môn thành công");
      formInfo.setAttribute("style", "display:none");
      showListClass();
    })
    .catch((error) => console.error(error));

  const btnUpdate = document.querySelector("#btn-edit");
  btnUpdate.addEventListener("click", updateMon);
  btnUpdate.setAttribute("disabled", "true");
}
// const btnEditMon = document.querySelector("#btn-edit");
// if (btnEditMon) {
//   console.log("Click btn edit");
//   btnEditMon.addEventListener("click", updateMon);
// }

// ===============================================================

// SIDEBAR
const iconSidebar1 = document.querySelector(".ic-toggle1");
const iconSidebar2 = document.querySelector(".ic-toggle2");

const sideBar = document.querySelector(".sidebar");

function hideSideBar() {
  $(".sidebar").hide();
}
function showSideBar() {
  $(".sidebar").show();
  $(".sidebar").addClass("acitve");
}
iconSidebar1.addEventListener("click", showSideBar);
iconSidebar2.addEventListener("click", hideSideBar);

// =================================================
function gvLogout() {
  fetch(`${baseURL}/logout`)
    .then((response) => {
      if (response.ok) {
        window.location.assign(`${baseURL}/login`);
      } else {
        console.error("Lỗi khi logout");
      }
    })
    .catch((error) => console.error(error));
}
