// Modal-- INFO _ GV----------------------------------------------

function infoGv() {
  return fetch(`${baseURL}/giangvien/thongtin`, {
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  })
    .then((res) => res.json())
    .then((data) => {
      let dataGv = "";
      dataGv = data;
      const info = document.createElement("div");
      info.setAttribute("class", "modal-container js-modal-container js-modal-info-giangvien");

      info.innerHTML = `
            <div class="modal-close js-modal-close" id="modal-close">
                <i class="fa-solid fa-rectangle-xmark" style="font-size: 28px;"></i>
            </div>
            <header class="modal-header">
            <img src="asset/img/rocket.png" alt="" class="rocket info--gv" style="width: 180px; margin-top: -80px">

                <i class="ti-bag" style="padding-right: 10px;">
                    Thông tin giảng viên
                </i>

            </header>
            <div class="modal-body">
                <span class="loader3"></span>
                <input id="idGiangvien" type="text" class="modal-input" disabled value="${dataGv.id}" hidden >
                <label for="email" class="modal-label">
                <i class="fa-regular fa-envelope"></i>
                Email
                </label>
                <span class="title-warn"></span>
                <input id="email" type="email" class="modal-input" disabled value="${dataGv.email}" placeholder="dbn@gmail.com">

                <label for="username" class="modal-label">
                    <i class="fa-solid fa-user"></i>
                    Username
                </label>
                <input id="username" type="text" class="modal-input" disabled value="${dataGv.username}" placeholder="DuongBaoNhat">

                <label for="name" class="modal-label">
                    <i class="fa-solid fa-signature"></i>
                    Họ và tên
                </label>
                <input id="name" type="text" class="modal-input modal-input-name" disabled value="${dataGv.hoten}" placeholder="Duong Bao Nhat">
                <i class="fa-regular fa-pen-to-square btn-edit js-btn-edit" style="color: white;" ></i>
                <button id="btn-update" disabled onclick="updateInfoGV()">
                    Cập nhật
                </button>

            </div>
            <div class="modal-footer">
                <a class="btn-reset-password" onclick="showModalRSPS()">Đổi mật khẩu</a>
            </div>
      `;
      const formGv = document.querySelector(".js-modal");
      formGv.appendChild(info);
      const emailInput = document.getElementById('email');
      const emailSpan = document.querySelector('.title-warn');
      emailInput.addEventListener('focus', () => {
        if (emailInput.classList.contains('active')) {
          emailSpan.innerHTML = '<i class="fa-solid fa-circle-radiation" style="font-size: 20px; color: aqua;margin-right: 8px;"></i>Khi thay đổi email sẽ mất các file excel trước đó';
        }
      });
    })
    .catch((error) => console.log("Loi infoGV", error));

    
}
///\\\///

function updateInfoGV() {
  const formGV = document.querySelector(".js-modal-info-giangvien");
  const update = function() {
    const emailGV = formGV.querySelector("#email").value;
    const idGV = formGV.querySelector("#idGiangvien").value;
    const usernameGV = formGV.querySelector("#username").value;
    const hotenGV = formGV.querySelector("#name").value;
    const data = {
      email: emailGV,
      username: usernameGV,
      hoten: hotenGV,
      id: idGV,
      password: '',
      vohieuhoa: false
    }
    var loader3 = $('.modal-body').children('.loader3');
          loader3.show();
    fetch(`${baseURL}/giangvien/capnhat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(data),
      })
      .then(res => res.json())
      .then(res => {
        if(res) {
          loader3.hide();
          alert("Cập nhật thông tin thành công ^-^");
        }
      })
      .catch(err => alert("Lỗi Server vui lòng thử lại sau vài phút *><* "));
  }
  update();
}



///\\\///
const infmGv = document.querySelector(".js-info-gv");
const modal = document.querySelector(".js-modal");
function showModal() {
  modal.classList.add("open");
}
infmGv.addEventListener("click", showModal);
infoGv().then(function () {
  
  const modalClose = document.querySelector(".js-modal-close i");

  modalClose.addEventListener("click", hideModal);

  const editInput = document.querySelector(".js-btn-edit");
  editInput.addEventListener("click", undisableInput);
});

function undisableInput() {
  const btnUpdate = document.querySelector("#btn-update");
  const input = document.querySelectorAll(".modal-input");
  input.forEach((item) => {
    item.removeAttribute("disabled");
    item.classList.add("active");
  });
  btnUpdate.removeAttribute("disabled");
  btnUpdate.classList.add("active");
}
function hideModal() {
  const modal = document.querySelector(".js-modal");
  modal.classList.remove("open");
}
function showModalRSPS() {
  $(".js-modal-rspassword").show();
  document
    .querySelector(".js-modal-rspassword")
    .setAttribute("style", "display:flex;");
}
function hideModalRSPS() {
  $(".js-modal-rspassword").hide();
}
//
//modal.addEventListener("click", hideModal);

//stopPropagation dừng sự kiện nổi bọt

// modal reset password
///\\\///

///\\\///
function updatePassWord() {
    const modalResetPS = document.querySelector('.js-modal-rspassword');
    const oldPassWord = modalResetPS.querySelector('#password').value;
    const newPassWord = modalResetPS.querySelector('#newpassword').value;
    const confirmNewPassWord = modalResetPS.querySelector('#cfnewpassword').value;
    const loader = modalResetPS.querySelector('.loader');

    if( oldPassWord == '' || newPassWord == '' || confirmNewPassWord == '') {
      const errorMessage = modalResetPS.querySelector('#error-message');
        errorMessage.innerText = 'Hãy điền mật khẩu của bạn !';
        errorMessage.style.display = 'block';
      return;
    }
    else if(newPassWord !== confirmNewPassWord ) {
      const errorMessage = modalResetPS.querySelector('#error-message');
        errorMessage.innerText = 'Mật khẩu nhập lại không khớp với mật khẩu mới !';
        errorMessage.style.display = 'block';
        return;
    }else if(oldPassWord === newPassWord){
      const errorMessage = modalResetPS.querySelector('#error-message');
        errorMessage.innerText = 'Mật khẩu mới của bạn giống với mật khẩu cũ !';
        errorMessage.style.display = 'block';
        return;
    }
    else if(newPassWord.length < 6) {
      const errorMessage = modalResetPS.querySelector('#error-message');
        errorMessage.innerText = 'Mật khẩu phải có ít nhất 6 ký tự';
        errorMessage.style.display = 'block';
        return;
    }
    
    else{
      const errorMessage = modalResetPS.querySelector('#error-message');
        errorMessage.style.display = 'none';
    }
    const data = {
        matkhaucu: oldPassWord,
        matkhaumoi: newPassWord,
        nhaplaimatkhaumoi: confirmNewPassWord
    }
    fetch("http://localhost:9090/giangvien/thaydoimatkhau", {
        headers: {
            "Content-Type": "application/json",
        },
        method: "POST",
        credentials: "include",
        body:JSON.stringify(data) 
    }).then(res => res.json())
        .then(res => {
            alert("Thay đổi mật khẩu thành công ^-^");
            loader.style.display = 'none';
        })
        .catch(err => {
            alert("Lỗi Server vui lòng thử lại sau vài phút *><* ");
            loader.style.display = 'none';

        });

}

///\\\///
