
document.documentElement.style.fontDisplay = "swap";
// class item

// history item

// danh sach lop

function hideContainerSingleClass() {
  pageClass.classList.remove("open");
}
function hiddenSingleClass() {
  $(".js-container-single-class").hide();
}
function showClassListMain() {
  $("#list-class").attr("style", "display:flex");
  hideSideBar();
  hiddenSingleClass();
}

// create one class
const btnCreateClass = document.querySelector(".js-create-class");
const iconMore = document.querySelector(".js-icon-more");
const modalCreateClass = document.querySelector(".js-modal-create-class");
const btnClose = document.querySelector(".js-modal-create-class-close");
// const itemInfoClass = document.querySelector(".item-more-info-class");

function createOneClass() {
  modalCreateClass.classList.add("open");
}
btnCreateClass.addEventListener("click", createOneClass);

// itemInfoClass.addEventListener("click", createOneClass);

btnClose.addEventListener("click", function () {
  modalCreateClass.classList.remove("open");
});
// EDIR ONE CLASS
const btnEditClass = document.querySelector(".js-edit-class");
const inputNameClass = document.querySelector(".modal-input-name-class");
const inputNameSubject = document.querySelector(".modal-input-name-subject");
const btnUpdateInfClass = document.querySelector(".js-btn-update-inf-class");

function removeDisableInputClass() {
  inputNameClass.removeAttribute("disabled");
  inputNameSubject.removeAttribute("disabled");
  btnUpdateInfClass.removeAttribute("disabled");
}

// END create one class
// Begin create excercise
const btnCreateExcercise = document.querySelector(".js-btn-create-exercise");

const modalSheetExercise = document.querySelector(".js-modal-exercise");
const btnCloseExercise = document.querySelector(".js-modal-exercise-close");
const idExcer = document.querySelector(".js-modal-exercise-container");
const btnAddFormAA = document.querySelector(".modal-sidebar");
function showModalExercise() {
  index = [];
  document.querySelector("#tieude").value = "";
  document.querySelector("#mota").value = "";
  const c = document.querySelectorAll(".form-item");
  c.forEach((render) => {
    render.remove();
  });
  renderForm();
  modalSheetExercise.classList.add("open");
  btnAddFormAA.classList.add("open");
  const imageSources = [
    "asset/img/rk.png",
    "asset/img/robot.png",
    "asset/img/robot2.png",
    "asset/img/rocket.png",
    "asset/img/rb2.png",
    "asset/img/robot3.png",
    "asset/img/robot4.png",
    "asset/img/robot5.png",
    // add more image sources as needed
  ];

  const randomImageSourcesExer = [];
  while (randomImageSourcesExer.length < 7) {
    const randomIndex = Math.floor(Math.random() * imageSources.length);
    const randomSource = imageSources[randomIndex];

    if (!randomImageSourcesExer.includes(randomSource)) {
      randomImageSourcesExer.push(randomSource);
    }
  }
  const imgExer = document.querySelector(".icon-exer-animated");
  imgExer.setAttribute("src", `${randomImageSourcesExer[0]}`);
}
function hideModalExercise(e) {
  modalSheetExercise.classList.remove("open");
  btnAddFormAA.classList.remove("open");
}
btnCreateExcercise.addEventListener("click", showModalExercise);
btnCloseExercise.addEventListener("click", hideModalExercise);
// End create excercise

// ---------------Form survey----------------------
var listSurvey = document.querySelector(".js-modal-survey");
var btnAddForm = document.querySelector(".js-btn-add-form-survey");
var formSurvey = document.getElementsByClassName("js-modal-form");
var btnCrash = document.querySelectorAll(".js-btn-crash");
var btnAddAsk = document.getElementsByClassName("btn-submit");

var forms = [
  {
    idQuestion: 1,
    contentQuestion: "dien tich viet nam",
    as: [
      {
        idAS: "1",
        contentAS: "300.000km",
        isTrue: true,
      },
      {
        idAS: "2",
        contentAS: "400.000km",
        isTrue: false,
      },
    ],
  },
];

var index = []; ////////

// var listAsk = document.querySelector(".ask-list-id");
var inputAsk = document.querySelector(".form-check-text");
var inputAskOther = document.getElementsByClassName("form-check-text-other");
var btnRemoveIdAsk = document.querySelectorAll(".icon-close-ask");
var itemASK = document.querySelectorAll(".js-modal-item-ask");
// ================================================================
function renderAS(idcauhoi, idcautraloi) {
  const indexcuoi = index.findIndex(
    (i) => i.idcauhoi.toString() === idcauhoi.toString()
  );
  if (indexcuoi < 0) {
    idcautraloi = 0;
  } else {
    idcautraloi = index[indexcuoi].idcautraloi + 1;
  }
  index[indexcuoi].idcautraloi = idcautraloi;
  const aslist = document.querySelector(".askListId" + idcauhoi);
  const nuthem = document.querySelector("#themas" + idcauhoi);
  if (nuthem) nuthem.remove();
  const typeInput = document.querySelector(`.js-form-select${idcauhoi}`).value;

  const cautraloi = document.createElement("div");
  cautraloi.setAttribute("class", "form-check modal-ask askIdQ" + idcauhoi);
  cautraloi.setAttribute("id", "askId" + idcauhoi + idcautraloi);
  cautraloi.innerHTML = `
      
      <input  
        class="form-check-input1"
        type="${typeInput}"
        name="idTrue"
        checked="false"
        for="contentAS"
        ${typeInput === "text" ? "hidden" : ""}
      />
      <input
        class="form-check-text"
        type="text"
        for="flexRadioDefault2"
        name="contentAS"
        value=""
        id="contentAS"
      />
      <input
        class="form-check-text"
        hidden="true"
        type="text"
        for="flexRadioDefault2"
        name="idAS"
        value=""
        id="idAS"
      />
      <i class="fa-solid fa-xmark icon-close-ask" onclick="xoaCautraloi(${idcauhoi}, ${idcautraloi})"></i>
      <div class="form-check modal-ask modal-ask-more" id="themas${idcauhoi}" value="${idcautraloi}">
        <div class="btn-add-ask-other" id="" onClick=
        "themCautraloi(${idcauhoi}, ${idcautraloi})" >Thêm câu trả lời</div>
      </div>
    `;
  aslist.appendChild(cautraloi);
}
// ================================================================

function themCautraloi(idcauhoi, idcautraloi) {
  idcautraloi = Number.parseInt(idcautraloi) + 1;
  renderAS(idcauhoi, idcautraloi);
}
// ================================================================

function xoaCautraloi(idcauhoi, idcautraloi) {
  const cautraloicanxoa = idcautraloi;
  const indexcuoi = index.findIndex(
    (i) => i.idcauhoi.toString() === idcauhoi.toString()
  );
  var idcautraloi = 0;
  if (indexcuoi < 0) {
    return;
  } else {
    idcautraloi = index[indexcuoi].idcautraloi;
  }
  const traloi = document.querySelector("#askId" + idcauhoi + cautraloicanxoa);
  const cautraloi = document.querySelectorAll(".askIdQ" + idcauhoi);

  if (cautraloi.length > 1) {
    if (traloi) traloi.remove();
    const aks = document.querySelectorAll(".askIdQ" + idcauhoi);
    const s = aks.length - 1;
    if (aks[s].innerHTML.includes("themCautraloi")) return;
    aks[
      s
    ].innerHTML += `<div class="form-check modal-ask modal-ask-more" id="themas${idcauhoi}">
    <div class="btn-add-ask-other" id="" onClick=
    "themCautraloi(${idcauhoi}, ${idcautraloi})" >Thêm câu trả lời</div>
  </div>`;
  }
  // this.preventDefault();
}
// ================================================================

function renderForm() {
  const indexcuoi = index.length - 1;
  var idcauhoi = 0;
  var idcautraloi = 0;
  if (indexcuoi < 0) {
    index.push({ idcauhoi: idcauhoi, idcautraloi: idcautraloi });
  } else {
    idcauhoi = index[indexcuoi].idcauhoi + 1;
    idcidcautraloiauhoi = index[indexcuoi].idcautraloi;
    index.push({ idcauhoi: idcauhoi, idcautraloi: idcautraloi });
  }
  const list = document.createElement("div");
  // listSurvey.innerHTML = "";
  for (let i = 0; i < forms.length; i++) {
    const form = forms[i];
    list.setAttribute("class", `form-item idQ${idcauhoi}`);
    list.innerHTML += `<div class="modal-form js-modal-form " id="idQuestion idQuestion${idcauhoi}">
    <div  class="modal-question">
      <label for="" class="modal-label-question"> Câu hỏi ${
        indexcuoi + 2
      }: </label>
      
      <input
        type="text"
        class="modal-input-exercise "
        name="contentQuestion"
        id="contentQuestion"
        placeholder=""
        value=""
      />
      
      <select class="modal-form-select js-form-select${idcauhoi} " id="option" data-id="${indexcuoi}">
        <option value="radio">Trắc nghiệm</option>
        <option value="checkbox">Hộp điểm</option>
        <option value="text">Đoạn</option>
      </select>
    </div>
    <form class="askListId${idcauhoi}" id="askListId">
      
    </form>
    <div class="modal-survey-footer">
      <i class="fa-solid fa-trash-can js-btn-crash" onclick="removeForm(${idcauhoi})"></i>
      
    </div>
  </div>
  <div class="clear"></div>`;
    listSurvey.appendChild(list);
    renderAS(idcauhoi, idcautraloi);
    // scroll auto
    const latestQuestion = document.querySelector(`.askListId${idcauhoi}`);
    latestQuestion.scrollIntoView();
    changeIPQuestion(idcauhoi, idcautraloi);
  }
}
// ================================================================

for (let i = 0; i < btnCrash.length; i++) {
  btnCrash[i].addEventListener("click", removeForm([i]));
}

const btnCrashDisabled = document.querySelector(".modal-survey-footer i");
// ================================================================
function removeForm(id) {
  console.log(id);
  const cauhoi = document.querySelector(`.idQ${id}`);
  cauhoi.remove();
}

function changeIPQuestion(idcauhoi, idcautraloi) {
  let idSelect = document.querySelector(`.js-form-select${idcauhoi}`);
  let previousValue = idSelect.value;
  
  idSelect.addEventListener("change", (event) => {
    const selectedValue = event.target.value;
    idSelect.setAttribute("select",selectedValue );
    let typeInput = document.querySelectorAll(
      `.askListId${idcauhoi} input.form-check-input1`
    );
    const divInput = document.querySelector(`.askListId${idcauhoi}`);
    
    
    if (selectedValue !== previousValue) {
      if (selectedValue === "text") {
        divInput.innerHTML = '';
        typeInput.forEach((item) => {
          item.setAttribute("type", "text");
          item.setAttribute("style", "display:none ");
        });
        
      } else if (selectedValue === "checkbox") {
        if(previousValue === "text") {
          renderAS(idcauhoi, idcautraloi );
        }
        typeInput.forEach((item) => {
          item.setAttribute("type", "checkbox");
          item.setAttribute("style", "display:initial");
        });
      } else if (selectedValue === "radio") {
        if(previousValue === 'text') {
          renderAS(idcauhoi, idcautraloi );
        }
        typeInput.forEach((item) => {
          item.setAttribute("type", "radio");
          item.setAttribute("style", "display:initial");
        });
      }
      previousValue = selectedValue;
    }
  });
}

btnAddForm.addEventListener("click", function (e) {
  renderForm();
});
function inputAs(idcauhoi, idcautraloi, selectedValue) {
  let typeInput = selectedValue;

  const cautraloi = document.createElement("div");
  cautraloi.setAttribute("class", "form-check modal-ask askIdQ" + idcauhoi);
  cautraloi.setAttribute("id", "askId" + idcauhoi + idcautraloi);
  cautraloi.innerHTML = `
  
  <input  
    class="form-check-input1"
    type="${typeInput}"
    name="idTrue"
    checked="false"
    for="contentAS"
    ${typeInput === "text" ? "hidden" : ""}
  />
  <input
    class="form-check-text"
    type="text"
    for="flexRadioDefault2"
    name="contentAS"
    value=""
    id="contentAS"
  />
  <input
    class="form-check-text"
    hidden="true"
    type="text"
    for="flexRadioDefault2"
    name="idAS"
    value=""
    id="idAS"
  />
  <i class="fa-solid fa-xmark icon-close-ask" onclick="xoaCautraloi(${idcauhoi}, ${idcautraloi})"></i>
  <div class="form-check modal-ask modal-ask-more" id="themas${idcauhoi}" value="${idcautraloi}">
    <div class="btn-add-ask-other" id="" onClick=
    "themCautraloi(${idcauhoi}, ${idcautraloi})" >Thêm câu trả lời</div>
  </div>
  `;
  
  return cautraloi; // Trả về phần tử DOM cautraloi
};
// End redux ask

//POST Excercise
function resetFormEX() {
  const postE = document.querySelector(".js-modal-exercise-container");
  const tieude = postE.querySelector("#tieude").value;
  const mota = postE.querySelector("#mota").value;
  tieude = "";
  mota = "";
}
function postExcercise() {
  const postE = document.querySelector(".js-modal-exercise-container");
  // const id = postE.querySelector("#id").value;
  const tieude = postE.querySelector("#tieude").value;
  const idmon = document.querySelector(".js-page-class");
  const mota = postE.querySelector("#mota").value;
  const thoigian = postE.querySelector("#thoigian").value;
  const data = {
    id: "",
    tieude: tieude,
    mota: mota,
    idmon: idmon.id,
    thoigian: thoigian,
    dagiao: true,
  };
  if(tieude == "") {
    alert("Hãy điền Tiêu đề");
    return;
  }
  fetch(`${baseURL}/baitap/taomoi/mon/${idmon.id}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((res) => {
      const cauhois = document.querySelectorAll(".js-modal-form");
      console.log(cauhois.length);
      var ql = [];
      var index = 0;
      cauhois.forEach((cauhoi) => {
        const noidungs = document.querySelectorAll("#contentQuestion");
        const dapan = cauhoi.querySelector("#askListId");
		const idLoai = document.querySelectorAll("select");
        const formData = new FormData(dapan);

        const datadapan = [];
        for (const [key, value] of formData.entries()) {
          if (key == "contentAS") datadapan.push(value);
        }
        
        var loaichon = idLoai[index];
        var loai = loaichon.getAttribute("select");
        if(loai == null)
        loai = "radio";
        var noidungcauhoi = {
          noidung: noidungs[index].value,
          idbaitap: res.id,
          dapan: datadapan,
          loai: loai,
        };
        // fix error loai [text]
        ql.push(noidungcauhoi);
        index++;
      });

      fetch(`${baseURL}/baitap/cauhoi/them/${res.id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(ql),
      })
        .then((response) => response.json())
        .then((data) => {
          alert("Tạo bài khảo sát thành công !");
        })
        .catch((err) => {
          alert("Lỗi server >-< Hãy quay lại sau nhé !");
        });
      // resetFormEX();
      hideModalExercise();
      renderListEx(idmon.id);
    })
    .catch((error) => console.log(error));
}

//-----------------------------------------------------------------------------------//
function showModalImportCsv() {
  $(".modal-import-csv").show();
  const boxImport = document.querySelector(".modal-import-csv");
  boxImport.innerHTML = "";
  const divImport = document.createElement("div");
  divImport.setAttribute("class", "container box-import-csv text-center");
  divImport.innerHTML = `
  <i class="fa-solid fa-rectangle-xmark" style="font-size: 28px; color: red; float: right; cursor: pointer;" onclick="hiddenModalImportCsv()"></i>
  <div class="header-box-import-csv ">
      <h2>Định dạng file .csv</h2>
      <div class="item-question container text-center row">
          <span class="title-import-csv col ml-15">Câu hỏi</span>
          <span class="title-import-csv col">loại câu</span>
          <span class="title-import-csv col">câu trả lời 1</span>
          <span class="title-import-csv col">câu trả lời 2</span>
          <span class="title-import-csv col">câu trả lời n</span>
          <span class="title-import-csv col">câu trả lời đúng</span>
      </div>
      <div class="item-icon row text-center">
          <i class="fa-solid fa-angles-down col"></i>
          <i class="fa-solid fa-angles-down col"></i>
          <i class="fa-solid fa-angles-down col"></i>
          <i class="fa-solid fa-angles-down col"></i>
          <i class="fa-solid fa-angles-down col"></i>
          <i class="fa-solid fa-angles-down col mr-35"></i>

      </div>
      <div class="item-ask row text-center">
          <span class="item_dot col">,</span>
          <span class="item_dot col">,</span>
          <span class="item_dot col">,</span>
          <span class="item_dot col">,</span>
          <span class="item_dot col">,</span>
          <span class="item_dot col mr-20">.</span>

      </div>
      <div class="line-ask"></div>
  </div>
  <div class="body-box-import-csv">
      <div class="input-group mb-3">
          <input type="file" class="form-control" id="fileimport" style="height: 50px; width: 100%;
          font-size: 20px;">
          <div class="note-import row">
              <div class="box-item-note1 col">
                  <span class="item-note">Loại câu hỏi</span>
                  <span class="item-note">- Dạng text:</span>
                  <span class="item-note">- Dạng radio:</span>
                  <span class="item-note">- Dạng checkbox:</span>

              </div>
              <div class="box-item-note2 col">
                  <span class="item-note" style="margin-top: 30px;"></span>
                  <span class="item-note"> 1</span>
                  <span class="item-note"> 2</span>
                  <span class="item-note"> 3</span>

              </div>
          </div>
      </div>
      <button class="btn-import" onclick="nhapfile()" >Import file .csv</button>
  </div>
  `;
  boxImport.appendChild(divImport);
}
function hiddenModalImportCsv() {
  $(".modal-import-csv").hide();
}

//-----------------------------------------------------------------------------------//

// -----------------End Form survey------------------
// padding top when scroll
const header = document.querySelector(".header");
const scrollButton = document.getElementById("scrollButton");
window.addEventListener("scroll", function () {
  if (window.pageYOffset > header.offsetHeight) {
    scrollButton.style.top = `${header.offsetHeight + 50}px`;
  } else {
    scrollButton.style.top = "50px";
  }
});
// -----------------------------------
//  post survey
const tieuDe = document.querySelector("#tieuDe");
const moTa = document.querySelector("#moTa");
//End   post survey
