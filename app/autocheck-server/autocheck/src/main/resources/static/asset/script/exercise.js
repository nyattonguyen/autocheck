// Begin Danh sach bai tap

const iconMoreExerciseList = document.querySelectorAll(
  ".js-icon-more-exercise"
);
function parseDate(dateString) {
  const parts = dateString.split(/[-/: ]/);
  return new Date(
    parts[0],
    parts[1] - 1,
    parts[2],
    parts[3],
    parts[4],
    parts[5]
  );
}
iconMoreExerciseList.forEach((iconMoreExercise) => {
  iconMoreExercise.addEventListener("click", (e) => {
    e.preventDefault();
    const listItemMoreExer = iconMoreExercise
      .closest(".js-body-exercise-item")
      .querySelector(".js-list-item-more-exer");

    listItemMoreExer.classList.toggle("open");
  });
});
let hasModalListExerciseRendered = false;

function showModalListExercise(id) {
  $(".js-modal-list-exercise-container").show();
  renderListEx(id);
}

function hidePageExerSv() {
  $("#page-list-sv-bt").hide();
}
function renderListEx(id) {
  const boxListEx = document.querySelector(".js-body-exercise-list");
  boxListEx.innerHTML = "";
  return fetch(`${baseURL}/baitap/list/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  })
    .then((data) => data.json())
    .then((data) => {
      if (!Array.isArray(data)) {
        throw new Error("Invalid data format. Expected an array.");
      }
      if (data.length > 0) {
        $(".loader2").hide();
      }
      const dataFilter = data.sort((a, b) => {
        const dateA = parseDate(a.thoigian);
        const dateB = parseDate(b.thoigian);
        return dateB - dateA; // Sắp xếp giảm dần
      });
      dataFilter.sort((a, b) => {
        if (a.dagiao && !b.dagiao) {
          return -1;
        } else if (!a.dagiao && b.dagiao) {
          return 1;
        }
        return 0;
      });
      // add loading

      for (let i = 0; i < dataFilter.length; i++) {
        itemData = dataFilter[i];
        itemData.tieude =
          itemData.tieude.slice(0, 20) +
          (itemData.tieude.length > 20 ? "..." : "");
        const itemEx = document.createElement("div");
        itemEx.setAttribute(
          "class",
          "body-exercise-item mb-10 row js-body-exercise-item"
        );
        itemEx.setAttribute("id", `${itemData.id}`);

        let displayStyle = "none";
        let titleIconMore = "Disable bài tập";
        let isDisabled = true;
        if (itemData.dagiao === false) {
          displayStyle = "block";
          titleIconMore = "Enable bài tập";
          isDisabled = false;
        }
        itemEx.innerHTML = `

      <div class="exercise-item1 col" onclick="showBT('${itemData.id}', '${
          itemData.tieude
        }')">
        <div class="box-icon-item">
          <i class="fa-solid fa-file-lines"></i>
        </div>
        <h4 class="title-exercise">${itemData.tieude}</h4>
      </div>
      <span class="line-disable" style="display: ${displayStyle}"></span>
      <div class="exercise-item2 col">
        <p class="date-exercise">${itemData.thoigian}</p>
        <div class="icon-more-exercise js-icon-more-exercise mt-3" onclick="${
          isDisabled ? "disabledIchiExercise" : "enabledIchiExercise"
        }('${itemData.id}')">
          <i class="fa-regular fa-square-minus" style="font-size: 24px"></i>
          <span>${titleIconMore}</span>
        </div>
      </div>
      `;

        boxListEx.appendChild(itemEx);
      }
    });
}
// End Danh sach bai tap
async function disabledIchiExercise(id) {
  const idMon = document.querySelector(".js-page-class").id;
  $(".loader2").show();
  try {
    const response = await fetch(`${baseURL}/baitap/vohieuhoa/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    const data = await response.json();
    if (data) {
      $(".loader2").hide();
    }
    renderListEx(idMon);
  } catch (err) {
    console.log("Lỗi server >-< Hãy quay lại sau !", err);
  }
}
async function enabledIchiExercise(id) {
  const idMon = document.querySelector(".js-page-class").id;
  $(".loader2").show();
  try {
    const response = await fetch(`${baseURL}/baitap/huyvohieuhoa/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    const data = await response.json();
    if (data) {
      $(".loader2").hide();
    }
    renderListEx(idMon);
  } catch (err) {
    console.log("Lỗi server >-< Hãy quay lại sau !", err);
  }
}
