function lichSuDiemDanhSV(id) {
    fetch(`${baseURL}/mon/lichsudiemdanh/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: "include",
        
    }).then(res => res.json())
    .then(data => {
        jQuery.noConflict();
    jQuery(document).ready(function($) {
    $("#list-item-checked").DataTable({
        autoFill: {
            enable: true,
            paging: true,
            searching: true,
            columns: 'all',
            focus: 'click',
            horizontal: false,
            increment: true,
            editor: null,
            alwaysAsk: false,
            dataSource: null,
            preFill: [],
            fillCallback: null,
            cancelCallback: null
        }
    });
    });
    const divListHistory = document.querySelector(".js-history-check");
    if (divListHistory) {
        const tableHistory = document.createElement("table");
        tableHistory.setAttribute("id", "list-item-checked");
        tableHistory.innerHTML = `
            <thead>
                <tr class="row">
                    <th class="col-1">Stt</th>
                    <th class="col-3">Ngày && giờ</th>
                    <th class="col-2">Buổi số</th>
                    <th class="col-3">Mã số sinh viên</th>
                    <th class="col">Họ và tên</th>
                </tr>
            </thead>
            <tbody>
            </tbody>
        `;
        divListHistory.appendChild(tableHistory);
        ////\\\\////
        const tableBody = tableHistory.querySelector("tbody");
        const btnSearchBuoi = document.querySelector('#button-search-buoi');
        btnSearchBuoi.addEventListener('click', function() {
            const buoi = document.querySelector('.box-search-history input[type="number"]').value;

            const filteredData = data.filter(item => item.buoiso === parseInt(buoi));
            console.log("day ne", data )

            tableBody.innerHTML = '';

            for (let i = 0; i < filteredData.length; i++) {
                // const momentNgay = moment(filteredData[i].ngay, "DD/MM/YYYY");
                // const momentGio = moment(filteredData[i].gio, "h:mm");

                // const ngayGio = momentNgay.format("DD/MM/YYYY") + " " + momentGio.format("HH:mm");

                const tr = document.createElement("tr");
                tr.setAttribute("class", "row")
                tr.innerHTML = `
                    <td class="col-1">${ i+1 }</td>
                    <td class="col-3">${filteredData[i].thoigian}</td>
                    <td class="col-2 pl-38">${filteredData[i].buoiso}</td>
                    <td class="col-3">${filteredData[i].masv}</td>
                    <td class="col">${filteredData[i].hotensv}</td>
                `;
                tableBody.appendChild(tr);
            }
        });
    }
    })
    
}  
