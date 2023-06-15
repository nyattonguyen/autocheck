<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>

    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0">
        <title>Autocheck - Dashboard</title>

        <link rel="shortcut icon" type="image/x-icon" href="assets/img/logoweb.png">

        <link rel="stylesheet" href="assets/css/bootstrap.min.css">

        <link rel="stylesheet" href="assets/css/font-awesome.min.css">

        <link rel="stylesheet" href="assets/css/feathericon.min.css">

        <link rel="stylesheet" href="assets/plugins/morris/morris.css">

        <link rel="stylesheet" href="assets/css/style.css">
        <link rel="stylesheet" href="assets/css/loader.css">
        <link rel="stylesheet" href="assets/css/logo.css">
        <link rel="stylesheet" href="assets/css/styleformcreateGV.css">
        <link rel="stylesheet" href="assets/css/switchIp.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css"
            integrity="sha512-SzlrxWUlpfuzQ+pcUCosxcglQRNAq/DZjVsC0lE40xsADsfeQoEypE+enwcOiGjk/bSuGGKHEyjSoQ1zVisanQ=="
            crossorigin="anonymous" referrerpolicy="no-referrer" />

    </head>

    <body>

        <div class="main-wrapper">

            <div class="header">

                <div class="header-left">
                    <div class="content">
                        <h2>Autocheck</h2>

                    </div>
                    <a href="index.html" class="logo logo-small">
                        <img src="assets/img/loggweb.png" alt="Logo" width="30" height="30">
                    </a>
                </div>

                <a href="javascript:void(0);" id="toggle_btn">
                    <i class="fe fe-text-align-left"></i>
                </a>
                <a class="mobile_btn" id="mobile_btn">
                    <i class="fa fa-bars"></i>
                </a>
                <ul class="nav user-menu">
                    <li class="nav-item dropdown has-arrow">
                        <a href="#" class="dropdown-toggle nav-link" data-bs-toggle="dropdown">
                            <span class="user-img"><img class="rounded-circle" src="assets/img/profiles/avatar-01.jpg"
                                    width="31" alt="Seema Sisty"></span>
                        </a>
                        <div class="dropdown-menu">
                            <div class="user-header">
                                <div class="avatar avatar-sm">
                                    <img src="assets/img/profiles/avatar-01.jpg" alt="User Image"
                                        class="avatar-img rounded-circle">
                                </div>
                                <div class="user-text">
                                    <h6>Luna</h6>
                                    <p class="text-muted mb-0">Administrator</p>
                                </div>
                            </div>

                            <a class="dropdown-item" href="">Logout</a>
                        </div>
                    </li>
                </ul>
            </div>

            <div class="sidebar" id="sidebar">

                <div class="sidebar-inner slimscroll">
                    <div id="sidebar-menu" class="sidebar-menu">
                        <ul>
                            <li class="menu-title">
                            </li>
                            <li class="active">
                                <a href="index"><i class="fe fe-home"></i> <span>Dashboard</span></a>
                            </li>
                            <li class="submenu">
                                <a href="#"><i class="fe fe-users"></i> <span> Users</span>
                                    <!-- <span
                                    class="menu-arrow">
                                </span> -->
                                </a>
                                <!-- <ul style="display: none;">
                                <li><a href="users.html">Users</a></li>
                            </ul> -->
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="modal js-modal" tabindex="-1">

            </div>
            <div class="page-wrapper">
                <div class="content container-fluid">
                    <div class="row">
                        <div class="col-xl-4 col-sm-4 col-12">

                            <div class="form-qc-giangvien">
                                <div class="box-up">
                                    <i class="fa-solid fa-chevron-up" style="font-size: 30px; color: rgb(79, 79, 79); float: right;
                                margin-right: 24px; cursor: pointer;" onclick="hideBoxCreate()"></i>
                                </div>
                                <form class="modal-create-acc-gv" id="myForm" method="POST"
                                    action="admin/giangvien/create">
                                    <label for="hoten">Họ tên</label>
                                    <input required name="hoten" type="text" value="" id="hoten">
                                    <label for="email">Email</label>
                                    <input required name="email" type="email" value="" id="email">
                                    <label for="username">Username</label>
                                    <input required name="username" type="text" value="" id="username">
                                    <label for="password">Password</label>
                                    <input required name="password" type="password" value="" id="password">
                                    <input name="id" type="text" value="" id="id" hidden>
                                    <div class="btn-create-acc-gv col-1">
                                    </div>
                                </form>
                                <button class="btn-create-gv" onclick="tao()">Tạo</button>
                            </div>
                            <button class="btn-show-form-gv">
                                <i class="fa-solid fa-plus"
                                    style="font-size: 30px; font-weight: bold; color: black;"></i>
                            </button>

                            <div class="card">
                                <div class="card-body">
                                    <div class="dash-widget-header">
                                        <span class="dash-widget-icon bg-primary">
                                            <i class="fe fe-users"></i>
                                        </span>
                                        <div class="dash-count">
                                            <a href="#" class="count-title">User Count</a>
                                            <a href="#" class="count"> 10</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card card-table flex-fill">

                            <div class="card-header">
                                <h4 class="card-title float-start">User List</h4>
                                <div class="table-search float-end">
                                    <input type="text" class="form-control" placeholder="Search">
                                    <button class="btn" type="submit"><i class="fa fa-search"></i></button>
                                </div>
                            </div>
                            <div class="card-body">
                                <div class="table-responsive no-radius">
                                    <table class="table table-hover table-center table-list-gv">
                                        <thead>
                                            <tr>
                                                <th>STT</th>
                                                <th class="text-center">Họ tên</th>
                                                <th class="text-center">Email</th>
                                                <th class="text-center">Username</th>
                                                <th class="text-center" hidden>Id</th>
                                                <th class="text-center">Status</th>
                                                <th class="text-end">Reset Password</th>

                                            </tr>
                                        </thead>
                                        <tbody class="list-info-giangvien">

                                        </tbody>
                                    </table>

                                </div>
                                <span class="loader"></span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

        </div>


        <script src="assets/js/jquery-3.6.0.min.js"></script>

        <script src="assets/js/bootstrap.bundle.min.js"></script>

        <script src="assets/plugins/slimscroll/jquery.slimscroll.min.js"></script>

        <script src="assets/js/script.js"></script>
        <script>
            $('.btn-create-gv').click(function () {
                $(".modal-create-acc-gv").show();
            })
            function clearForm() {
                var form = document.getElementById("myForm");
                form.reset();
            }
            function tao() {
                const form = document.getElementById('myForm');
                const formData = new FormData(form);

                const object = {};
                formData.forEach(function (value, key) {
                    object[key] = value;
                });

                const json = JSON.stringify(object);
                console.log(json);

                fetch("http://localhost:9091/admin/giangvien/create",
                    {
                        headers: { "Content-Type": "application/json" },
                        credentials: "include", method: "POST",
                        body: JSON.stringify(object)
                    })
                    .then(res => res.json())
                    .then((res) => {
                        renderAccGV();
                        clearForm();
                    }).catch((e) => {
                        console.log(e)
                        alert("Tạo account thất bại.Bạn hãy xem lại có trùng email không ?");
                    })
            }


            function Loading() {
                if ($('.list-info-giangvien').length > 0) {
                    $('.loader').hide();
                }
            };
            function renderTable(listData) {
                var html = "";
                var htmlCount = "";
                listData.forEach((item, index) => {
                    html += "<tr>";
                    html += "<td class='text-nowrap'>" + (index + 1) + "</td>";
                    html += "<td class='text-center'>" + item.hoten + "</td>";
                    html += "<td class='text-center'>" + item.email + "</td>";
                    html += "<td class='text-center'>" + item.username + "</td>";
                    html += "<td class='text-center' hidden>" + item.id + "</td>";

                    html += "<td class='text-center'>"
                    html += "<div class='form-check form-switch font-weight-600 text-danger'>"
                    var checked = 'checked';
                    if (item.vohieuhoa === true)
                        checked = '';
                    html += "<input class='form-check-input' type='checkbox' role='switch' id='switchIp' " + checked + "  onclick='handleAcc(`" + item.id + "`," + item.vohieuhoa + ")'>" + item.vohieuhoa + "</div>"


                    html += "</td>"
                    html += "<td class='text-end btn-reset'>" + "<button type='button' class='btn btn-primary' onclick='resetPS(`"+item.id+"`)'`>Reset</button>" + "</td>";
                    html += "</tr>";

                });
                $('.loader').hide();
                const listGV = document.querySelector('.list-info-giangvien');
                listGV.innerHTML = '';
                listGV.innerHTML += html;
                const dashCount = document.querySelector('.dash-count .count').innerText = listData.length;
            }

            function renderAccGV() {

                var listData;

                fetch("http://localhost:9091/admin/giangvien/list", {
                    headers: { "Content-Type": "application/json" },
                    credentials: "include",
                    method: "GET"
                }).then(res => res.json())
                    .then(data => {
                        listData = data;
                        const searchInput = document.querySelector(".table-search input");
                        searchInput.addEventListener("keyup", () => {
                            const searchValue = searchInput.value.trim().toLowerCase();
                            const filteredList = listData.filter(item => item.email.toLowerCase().includes(searchValue));
                            renderTable(filteredList);
                        });
                        renderTable(listData);
                    }
                    )
                    .catch(err => console.log(err));
                // Loading();
            }
            renderAccGV()


            function handleAcc(id, vohieuhoa) {
                let item = vohieuhoa;
                if (!item) {
                    let arr = '';
                    fetch(`http://localhost:9091/admin/giangvien/vohieuhoa/` + id, {
                        headers: { "Content-Type": "application/json" },
                        credentials: "include",
                        method: "POST"
                    }).then(res => res.json())
                        .then(() => {
                            renderAccGV();
                        }
                        )

                } else {
                    let arr = '';
                    fetch(`http://localhost:9091/admin/giangvien/huyvohieuhoa/` + id, {
                        headers: { "Content-Type": "application/json" },
                        credentials: "include",
                        method: "POST"
                    }).then(res => res.json())
                        .then((res) => {
                            renderAccGV();
                        }
                    ).catch(e => console.log(e));
                }

            }
            function closePopup() {
                const divMain = document.querySelector(".modal");
                divMain.setAttribute('style', 'display: none');

            }
            function resetPS(id) {
                const divMain = document.querySelector(".modal");
                divMain.setAttribute('style', 'display: block');

                divMain.innerHTML = "";
                fetch("http://localhost:9091/admin/giangvien/resetmatkhau/"+id, {
                    method: 'GET',
                    headers: { "Content-Type": "application/json" },
                    credentials: "include",
                }).then(res => res.json())
                    .then(res => {
                        // fix neu co cho hien popup hien password moi (tao fe)
                        const divPopup = document.createElement('div');
                        divPopup.innerHTML = `
                        
                        <div class="modal-dialog">
                            <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title">New password</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" onclick="closePopup()"></button>
                            </div>
                            <div class="modal-body">
                                <p>`+res.password+`</p>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" onclick="closePopup()">Close</button>
                            </div>
                            </div>
                        </div>
                        `;
                        divMain.appendChild(divPopup);
                        renderAccGV();
                        alert("Reset thành công account");
                    })
                    .catch(err => {
                        alert("Lỗi server xin quay lại sau >-<");
                        console.log("Lỗi server", err)
                    });
            }
            function hideBoxCreate() {
                $('.form-qc-giangvien').hide();
                $('.btn-show-form-gv').show();
            }
            // ==========================================================
            $('.form-qc-giangvien').hide();
            $('.btn-show-form-gv').click(function () {
                $('.form-qc-giangvien').show();
                $('.btn-show-form-gv').hide();
            })


        </script>
    </body>

    </html>