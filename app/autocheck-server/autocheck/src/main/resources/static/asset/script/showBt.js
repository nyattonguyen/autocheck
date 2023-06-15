function showBT(id, tieude) {
  $("#page-list-sv-bt").show();
  $(".js-modal-list-exercise-container").hide();
  $(".body-sv").attr("id", `${id}`);
  ///\\\////
  const titleBT = document.querySelector(".title-exer-main h2");
  titleBT.innerHTML = "";
  titleBT.innerHTML = `${tieude}`;
  ///\\\////
  lenghtSVL();
  renderListBTSV(id);
  const sortName = document.getElementById("option-sort-1");
  sortName.setAttribute("onclick", `renderListBTSV('${id}')`);
  const sortFirstName = document.getElementById("option-sort-2");
  sortFirstName.setAttribute("onclick", `sortFirstName('${id}')`);
}
$(document).ready(function closeListBT() {
  $(".box-close").click(function () {
    $(".js-modal-list-exercise-container").hide();
    $(".js-container-single-class").show();
  });
});
$(document).ready(function showListBT() {
  $(".js-exercise-btn").click(function () {
    $(".js-container-single-class").hide();
  });
});
// sort by name

function sortFirstName(id) {
  fetch(`${baseURL}/baitap/sinhvien/list/${id}/ho/tang`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  })
    .then((res) => res.json())
    .then((data) => {
      const allAddedSv = document.querySelector(".list-user-added");
      allAddedSv.innerHTML = "";
      const countUserUnMask = document.querySelector(".masked-sv h2");
      countUserUnMask.textContent = data.length;
      for (let i = 0; i < data.length; i++) {
        const item = data[i];
        const list = document.createElement("div");

        list.setAttribute("class", "item-sv row pl-24");
        list.setAttribute("id", "item-sv");
        list.setAttribute("onclick", `onBTSVClick('${id}', '${item.masv}')`);
        list.innerHTML = `
          <input type="text" value="${item.masv}" hidden >
          <input type="text" id="idbaitapxuat" value="${id}" hidden >
  
          <div class="img-group-sv col-1">
            <i class="fa-solid fa-user-astronaut"></i>
          </div>
          <p class="col text-lg-start" id="idSinhVien">${item.hoten}</p>
          <div class="item-mask-sv col-3">
            <p class="mask-sv" >${item.masv}</p>
            <div class="icon-more" hidden>
              <i
                class="fa-solid fa-ellipsis-vertical"
                style="color: #ebebeb; font-size: 24px"
              ></i>
            </div>
          </div>
        `;
        allAddedSv.appendChild(list);
      }
    })
    .catch((e) => console.log(e));
}
function lenghtSVL() {
  const idmon = document.getElementById("idmon").getAttribute("value");
  const countUserUnMask = document.querySelector(".unmask-sv h2");
  fetch(`${baseURL}/baitap/sinhvien/soluongdagiao/${idmon}`)
    .then((res) => res.json())
    .then((data) => {
      if (data) {
        countUserUnMask.innerHTML = `${data.soluong}`;
      }
    })
    .catch((err) => {
      console.log(err);
    });
}
function renderListBTSV(id) {
  fetch(`${baseURL}/baitap/sinhvien/list/${id}/ten/tang`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  })
    .then((res) => res.json())
    .then((data) => {
      const allAddedSv = document.querySelector(".list-user-added");

      const allAddedSv2 = document.querySelector(".list-item-user-exer");
      allAddedSv2.innerHTML = "";
      allAddedSv.innerHTML = "";
      const countUserUnMask = document.querySelector(".masked-sv h2");
      countUserUnMask.textContent = data.length;

      for (let i = 0; i < data.length; i++) {
        const item = data[i];
        const list = document.createElement("div");
        const list2 = document.createElement("div");

        list.setAttribute("class", "item-sv row pl-24");
        list.setAttribute("id", "item-sv");
        list.setAttribute("onclick", `onBTSVClick('${id}', '${item.masv}')`);
        list.innerHTML = `
          <input type="text" value="${item.masv}" hidden >
          <input type="text" id="idbaitapxuat" value="${id}" hidden >
  
          <div class="img-group-sv col-1">
            <i class="fa-solid fa-user-astronaut"></i>
          </div>
          <p class="col text-lg-start" id="idSinhVien">${item.hoten}</p>
          <div class="item-mask-sv col-3">
            <p class="mask-sv" >${item.masv}</p>
            <div class="icon-more" hidden>
              <i
                class="fa-solid fa-ellipsis-vertical"
                style="color: #ebebeb; font-size: 24px"
              ></i>
            </div>
          </div>
        `;

        allAddedSv.appendChild(list);
        // List 2
        list2.setAttribute("class", "content-body");
        list2.innerHTML = `
      <div class="item-user-exer">
      <input type="text" value="${item.masv}" hidden >
      <input type="text" value="${id}" hidden >
  
      <div class="info-user-exer row container text-center">
        <div class="img-sv col-1">
          <i class="fa-solid fa-user-astronaut"></i>
        </div>
        <p class="col">${item.hoten}</p>
      </div>
      <h3 class="status-user" >Đã giao</h3>
    </div>
      `;
        allAddedSv2.appendChild(list2);
      }
    });
}

function onBTSVClick(idbaitap, idsinhvien) {
  fetch(`${baseURL}/baitap/traloi/${idbaitap}/sinhvien/${idsinhvien}`, {
    headers: { "Content-Type": "application/json" },
    credentials: "include",
  })
    .then((res) => res.json())
    .then((data) => {
      const loaderBT = document.querySelector(".content-body .loader3");
      loaderBT.style.display = "block";
      if (data.length > 0) {
        loaderBT.style.display = "none";

        renderExerUser(data, idsinhvien);
      } else {
        const loaderBT = document.querySelector(".content-body .loader3");
        loaderBT.style.display = "none";
        const allAddedSv = document.querySelector(".list-item-user-exer");
        allAddedSv.innerHTML = "";
        ///\\\////
        const divBtNull = document.createElement("div");
        divBtNull.setAttribute("class", "bt-null");
        divBtNull.innerHTML = `
          <h3 class="item-username-sv">MSSV: ${idsinhvien}</h3>
        <span>Chưa hoàn thành</span>`;
        allAddedSv.appendChild(divBtNull);
      }
    });
}

function renderExerUser(data, idsinhvien) {
  const allAddedSv = document.querySelector(".list-item-user-exer");
  allAddedSv.innerHTML = "";
  const tableExer = document.querySelector(".table-exer-user");
  const usernameSV = document.createElement("h3");
  usernameSV.setAttribute("class", "item-username-sv");
  usernameSV.innerText = `
    ${idsinhvien}
  `;
  usernameSV.classList.add("open");
  for (let i = 0; i < data.length; i++) {
    const item = data[i];
    const tableItemQA = document.createElement("tbody");
    tableItemQA.setAttribute("class", "body-q-a-user");
    tableItemQA.innerHTML = `
          <tr>
                              <td>${item.cauhoi}</td>
                              <td>${item.traloi}</td>
                            </tr>
  
          `;
    tableExer.appendChild(tableItemQA);
  }
  allAddedSv.appendChild(tableExer);
}
const idSV = document.querySelectorAll("#idSinhVien");
$("#idSinhVien").cli;
