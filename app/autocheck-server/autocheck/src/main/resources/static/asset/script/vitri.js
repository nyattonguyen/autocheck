function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    console.log("khong ho tro");
  }
}

function showPosition(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  const idmon = document.getElementById("idmon").getAttribute("value");
  const buoihientai = document.getElementById("buoihientai").value;
  console.log(buoihientai);

  fetch(`${baseURL}/diemdanh/` + idmon + "/buoi/" + buoihientai, {
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    method: "POST",
    body: JSON.stringify({ lat, lng }),
  })
    .then((i) => i.json())
    .then((j) => {
      if (j) {
        const key = j.key;
        const boxQr = document.getElementById("qrcode");
        boxQr.setAttribute("style", "display: block");
        function renderQr() {
          const key = j.key;
          const qr = document.getElementById("img-qr");
          qr.style.width = "500px";
          qr.style.height = "500px";
          qr.setAttribute("src", j.qr);
        }
        renderQr();

        const taoqrmoi = () => {
          const qranh = document.querySelector("#modal-create-qr");
          const tat = qranh.getAttribute("tat");

          if (tat == "false") {
            fetch(`${baseURL}/diemdanh/qr/` + key, {
              credentials: "include",
            }).then((ii) => {
              ii.json().then((jj) => {
                const qr = document.getElementById("img-qr");
                qr.style.width = "500px";
                qr.style.height = "500px";
                qr.src = jj.qr;
              });
            });

            setTimeout(taoqrmoi, 7000);
          }
        };
        setTimeout(taoqrmoi, 7000);
      }
    });
}

function nhapfile() {
  const fileInput = document.getElementById("fileimport");
  const formData = new FormData();
  const fileupload = document.querySelector("input[type=file]");
  const idmon = document.querySelector(".js-page-class").id;
  formData.append("file", fileupload.files[0]);
  fetch("baitap/nhap/" + idmon, {
    method: "POST",
    body: formData,
  })
    .then((i) => {
      if (i.status === 200) {
        alert("Import file thành công");
        hiddenModalImportCsv();
        hideModalExercise();
        renderListEx(idmon);
      } else {
        alert("Bạn chưa import file >_<");
      }
    })
    .catch((e) => {
      alert("Import file thất bại >_<");
    });
}
function exportBT() {
  console.log("export");
  const idbaitap = document.querySelector("#idbaitapxuat");
  window.location = `${baseURL}/baitap/xuat/` + idbaitap.value;
}
