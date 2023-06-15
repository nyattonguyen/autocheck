<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Autocheck</title>
        <link rel="stylesheet" href="/asset/css/base.css">
        <link rel="stylesheet" href="/asset/css/loader.css">
        <link rel="stylesheet" href="/asset/css/infoClass.css">
        <link rel="stylesheet" href="/asset/css/style.css">
        <link rel="stylesheet" href="/asset/css/starmain.css">
        <link rel="stylesheet" href="/asset/css/styleExer.css">
        <link rel="stylesheet" href="/asset/css/stylePageListSV.css">
        <link rel="stylesheet" href="/asset/css/selectOption.css">
        <link rel="stylesheet" href="/asset/css/styleTableQA.css">
        <link rel="stylesheet" href="/asset/css/responsive.css">
        <link rel="stylesheet" href="/asset/css/model3d.css">
        <link rel="stylesheet" href="/asset/css/styleImportCsv.css">
        <link rel="shortcut icon" href="/asset/img/logoweb.png" type="image/x-icon" sizes="32x32">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
        <link rel="stylesheet" href="https://cdn.datatables.net/1.13.4/css/jquery.dataTables.min.css">
        <link rel="stylesheet" type="text/css"
            href="https://cdn.datatables.net/autofill/2.5.3/css/autoFill.dataTables.min.css">
        <link href='https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css' rel='stylesheet'>
        <link rel="stylesheet" href="/asset/font/fontawesome-free-6.1.2-web/fontawesome-free-6.1.2-web/css/all.min.css">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/0.151.2/three.min.js"
            integrity="sha512-He29azWb6CQ0yzDGpF61I/SIWlAclbP/Zh95diyYHwpN0VgkH3rtJKJkcApFJG517GxurJQ2UB676HOhB6pyBQ=="
            crossorigin="anonymous" referrerpolicy="no-referrer"></script>
        <script src="https://cdn.datatables.net/autofill/2.5.3/js/dataTables.autoFill.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.1/moment.min.js"></script>
        <script src="https://cdn.datatables.net/1.13.4/js/jquery.dataTables.min.js"></script>
        <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-u1OknCvxWvY5kfmNBILK2hRnQC3Pr17a+RTT6rIHI7NnikvbZlHgTPOOmMi466C8"
            crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js"></script>
    </head>
    </head>

    <body>
        <div class="night">
            <div class="shooting_star"></div>
            <div class="shooting_star"></div>
            <div class="shooting_star"></div>
            <div class="shooting_star"></div>
            <div class="shooting_star"></div>
            <div class="shooting_star"></div>
            <div class="shooting_star"></div>
            <div class="shooting_star"></div>
            <div class="shooting_star"></div>
            <div class="shooting_star"></div>
            <div class="shooting_star"></div>
            <div class="shooting_star"></div>
            <div class="shooting_star"></div>
            <div class="shooting_star"></div>
            <div class="shooting_star"></div>
            <div class="shooting_star"></div>
            <div class="shooting_star"></div>
            <div class="shooting_star"></div>
            <div class="shooting_star"></div>
            <div class="shooting_star"></div>
        </div>
        <div class="app">

            <div class="grid">
                <div class="header">
                    <div class="header__navbar">
                        <ul class="header__navbar-list">
                            <li class="header__navbar-item" style="margin-bottom: 20px;">
                                <div class="header__navbar-subnav ">
                                    <i class="header__navbar-icon ic-toggle1 bx bx-color"></i>
                                </div>
                                <div class="header__navbar-nameapp" onclick="showClassListMain()" href="">
                                    <img src="asset/img/logoweb.png" alt="IconLogo" class="icon-logo-main" width="70px">
                                    <!-- <img src="asset/img/textLogo.png" alt="TextLogo" class="text-logo-main"> -->
                                    <h2 class="app-name">A</h2>
                                    <h2 class="app-name">u</h2>
                                    <h2 class="app-name">t</h2>
                                    <h2 class="app-name">o</h2>
                                    <h2 class="app-name">c</h2>
                                    <h2 class="app-name">h</h2>
                                    <h2 class="app-name">e</h2>
                                    <h2 class="app-name">c</h2>
                                    <h2 class="app-name">k</h2>
                                </div>
                            </li>
                        </ul>
                        <ul class="header__navbar-list" style="padding-bottom: 4px">
                            <li class="header__navbar-item">
                                <div class="header__create-class js-create-class">
                                    <i class=" header__navbar-icons fa-solid fa-plus"></i>
                                    <p>Tạo lớp</p>
                                </div>
                            </li>
                            <li class="header__navbar-item">
                                <div class="header__user">
                                    <img src="https://yt3.ggpht.com/yti/AJo0G0lVjklZlxdA7Xr4SUz_e374JoOUuFIZY0E7bAm2=s88-c-k-c0x00ffffff-no-rj-mo"
                                        class="header__img-user" alt="">
                                    <div class="header__user-item">
                                        <img src="https://yt3.ggpht.com/yti/AJo0G0lVjklZlxdA7Xr4SUz_e374JoOUuFIZY0E7bAm2=s88-c-k-c0x00ffffff-no-rj-mo"
                                            alt="" class="header__user-item-img">
                                        <h3 class="header__user-item-name">example@gmail.com</h3>
                                        <button class="header__user-item-btn btn-shadow btn-primary">Quản lí tài khoản
                                            Google của bạn</button>
                                        <div class="clear"></div>
                                        <button class="header__user-item-btn btn-logout btn-shadow">Đăng xuất</button>

                                    </div>
                            </li>



                    </div>
                    </li>
                    </ul>

                </div>

            </div>
            <div class="sidebar">

                <i class="icon-tog ic-toggle2 bx bx-color"></i>

                <ul class="sidebar-list">

                    <li class="sidebar-list-item js-info-gv">
                        <i class="sidebar-item-icon bx bx-user-circle"></i>
                        <span class="sidebar-item-desc">Hồ sơ cá nhân</span>
                    </li>

                    <li class="sidebar-list-item js-sb-class-list" onclick="showClassListMain()">
                        <i class="sidebar-item-icon bx bx-book-content"></i>
                        <span class="sidebar-item-desc">Danh sách lớp</span>
                    </li>

                    <li class="sidebar-list-item">
                        <i class="sidebar-item-icon bx bx-brightness"></i>
                        <span class="sidebar-item-desc">Cài đặt</span>
                    </li>
                    <li class="sidebar-list-item">
                        <i class=" sidebar-item-icon fa-solid fa-right-from-bracket"></i>
                        <span class="sidebar-item-desc" onclick="gvLogout()">Đăng xuất</span>
                    </li>
                </ul>
            </div>
            <div class="container text-center js-container">
                <span class="loader"></span>
                <div id="list-class"
                    class="row row-cols-2 row-cols-lg-5 g-2 g-lg-3 align-items-start list-class mt-30 js-list-class animate__fadeInDown">


                </div>
            </div>
            <!-- ======================================= -->
            <!-- modal danh sach bai tap  -->
            <div class="wrapper modal-exercise-container js-modal-list-exercise-container animate__fadeIn">
                <div class="tabs p-0 m-0 modal-exercise-list-item container text-center row">
                    <div class="box-close">
                        <i class="fa-solid fa-xmark" style="font-size: 26px; color: gray"></i>
                    </div>
                    <div class="tab col modal-exercise-item p-0">
                        <input type="radio" name="css-tabs" id="tab-1" checked class="tab-switch" />
                        <label for="tab-1" class="tab-label">Danh sách bài tập</label>

                        <div class="tab-content text-center" id="canvas-container">
                            <div class="btn-create-exercise js-btn-create-exercise justify-content-center">
                                <i class="icon-add fa-solid fa-plus"></i>
                                Tạo
                            </div>
                            <span class="loader loader2"></span>
                            <div class="body-exercise-list js-body-exercise-list">
                                <!-- 1 phan tu trong danh sach bai tap  -->


                                <!-- end 1 phan tu trong danh sach bai tap  -->
                            </div>
                        </div>
                    </div>


                </div>
            </div>
            <!--  Modal singleClass  -->
            <div class="container container-single-class text-center js-container-single-class"
                style="display: flex; justify-content: center;">

            </div>
            <!-- END Modal singleClass  -->
            <!-- BEGIN danh sách sinh viên đã làm bài tậpp  -->
            <div class="wapper-page-sv animate__flipInX" id="page-list-sv-bt">

                <div class="body-sv row">
                    <div class="sidebar-sv col">
                        <div class="all-sv">
                            <div class="item-all-sv row item-sv">
                                <div class="img-group-sv col-1">
                                    <i class="fa-solid fa-user-group"></i>
                                </div>
                                <p class="col-5">Tất cả học viên</p>
                                <input type="button" value="Export .csv" onclick="exportBT()"
                                    class="col-2 btn-export-csv">
                            </div>
                            <div class="select-sort-user">
                                <div id="select-box">
                                    <input type="checkbox" id="options-sort-view-button" />
                                    <div id="select-button" class="brd">
                                        <div id="selected-value">
                                            <span style="font-size: 18px">Sắp xếp</span>
                                        </div>
                                        <div id="chevrons">
                                            <i class="fas fa-chevron-up"></i>
                                            <i class="fas fa-chevron-down"></i>
                                        </div>
                                    </div>
                                    <div id="options-sort">
                                        <div class="option-sort" id="option-sort-1">
                                            <input class="s-c top" type="radio" name="platform" value="1" />
                                            <input class="s-c bottom" type="radio" name="platform" value="1" />
                                            <i class="fa-solid fa-arrow-up-1-9"></i>
                                            <span class="label">              theo tên</span>
                                            <span class="opt-val" >              theo tên</span>
                                        </div>
                                        <div class="option-sort" id="option-sort-2">
                                            <input class="s-c top" type="radio" name="platform" value="2" />
                                            <input class="s-c bottom" type="radio" name="platform" value="2" />
                                            <i class="fa-solid fa-arrow-down-1-9"></i>
                                            <span class="label">              theo họ</span>
                                            <span class="opt-val" >              theo họ</span>
                                        </div>

                                        <div id="option-sort-bg"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="list-user-added">

                            </div>
                        </div>
                    </div>
                    <div class="content-sv col-8">
                        <i class="fa-regular fa-circle-xmark btn-close-pgsv" onclick="hidePageExerSv()"></i>
                        <div class="box-info-sv">
                            <div class="btn-close-sv">
                                <i class="fa-solid fa-xmark" style="font-size: 26px; color: gray"></i>
                            </div>
                            <div class="box-name-mask-sv">
                                <div class="name-sv">
                                    <h2 class="text-name-sv">Học viên 1</h2>
                                    <p class="status-exer">Đã giao</p>
                                </div>
                                <div class="mask-sv-no">
                                    <h3>Không có điểm</h3>
                                </div>
                            </div>
                            <div class="box-q-a-sv">
                                <div class="box-q-a">
                                    <section class="intro">
                                        <div class="card-body p-0">
                                            <div class="table-responsive table-scroll" data-mdb-perfect-scrollbar="true"
                                                style="position: relative; height: 700px">
                                                <table class="table table-striped mb-0 table-exer-user">
                                                    <thead class="header-q-a-user" style="background-color: #002d72">
                                                        <tr>
                                                            <th scope="col">Câu hỏi</th>
                                                            <th scope="col">Trả lời</th>
                                                            <!-- <th scope="col">Điểm</th> -->
                                                        </tr>
                                                    </thead>
                                                    <tbody class="body-q-a-user">
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                </div>
                                </section>
                            </div>

                        </div>
                        <!-- Khi click vào sinh viên thì mất trạng thái (status) -->
                        <div class="content-sv-box-main">
                            <div class="content-body">
                                <span class="loader3"></span>
                                <div class="title-exer-main" id="idBaiTap">
                                    <h2 id="">O o o</h2>
                                </div>
                                <div class="mask-sv-amount">
                                    <div class="masked-sv mask">
                                        <h2>0</h2>
                                        <p>Đã nộp</p>
                                    </div>
                                    <div class="unmask-sv mask">
                                        <h2>2</h2>
                                        <p>Đã giao</p>
                                    </div>
                                </div>
                                <div class="select-sort-status">
                                    <div id="select-box">
                                        <input type="checkbox" id="options-sort-view-button" />
                                        <div id="select-button" class="brd">
                                            <div id="selected-value">
                                                <span style="font-size: 18px">Sắp xếp</span>
                                            </div>
                                            <div id="chevrons">
                                                <i class="fas fa-chevron-up"></i>
                                                <i class="fas fa-chevron-down"></i>
                                            </div>
                                        </div>
                                        <div id="options-sort" class="sort-status">
                                            <div class="option-sort">
                                                <input class="s-c top" type="radio" name="platform" value="1" />
                                                <input class="s-c bottom" type="radio" name="platform" value="1" />
                                                <i class="fa-solid fa-arrow-up-1-9"></i>
                                                <span class="label">Đã nộp</span>
                                                <span class="opt-val">Đã nộp</span>
                                            </div>
                                            <div class="option-sort">
                                                <input class="s-c top" type="radio" name="platform" value="2" />
                                                <input class="s-c bottom" type="radio" name="platform" value="2" />
                                                <i class="fa-solid fa-arrow-down-1-9"></i>
                                                <span class="label">Đã giao</span>
                                                <span class="opt-val">Đã giao</span>
                                            </div>
                                            <div class="option-sort">
                                                <input class="s-c top" type="radio" name="platform" value="3" />
                                                <input class="s-c bottom" type="radio" name="platform" value="3" />
                                                <i class="fa-solid fa-arrow-down-1-9"></i>
                                                <span class="label">Đã chấm điểm </span>
                                                <span class="opt-val">Đã chấm điểm </span>
                                            </div>
                                            <div id="option-sort-bg"></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="list-item-user-exer">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- END danh sách sinh viên đã làm bài tậpp  -->


        </div>
        </div>
        <!-- history -->
        <!-- modal thong tin giang vien-->
        <div class="modal js-modal">

        </div>

        <!-- MODAL Reset Password -->
        <div class="modal js-modal-rspassword">
            <div class="modal-container js-modal-rspassword-container">
                <div class="modal-close js-modal-rspassword-close">
                    <i class="fa-solid fa-rectangle-xmark" style="font-size: 28px;" onclick="hideModalRSPS()"></i>
                </div>
                <header class="modal-header">
                    <i class="ti-bag" style="padding-right: 10px;">
                        Điền đủ đầy đủ thông tin
                    </i>
                </header>
                <div class="modal-body">
                    <span class="loader" style="display: none;"></span>
                    <label for="password" class="modal-label">
                        <i class="fa-solid fa-lock"></i>
                        Mật khẩu hiện tại
                    </label>
                    <input id="password" type="password" class="modal-input" placeholder="****************">
                    <label for="newpassword" class="modal-label">
                        <i class="fa-solid fa-lock"></i>
                        Mật khẩu mới
                    </label>
                    <input id="newpassword" type="password" class="modal-input" placeholder="****************">
                    <span id="error-message">Mật khẩu mới không khớp với nhau</span>

                    <label for="cfnewpassword" class="modal-label">
                        <i class="fa-solid fa-lock"></i>
                        Nhập lại mật khẩu mới
                    </label>
                    <input id="cfnewpassword" type="password" class="modal-input" placeholder="****************">

                    <button id="btn-reset-password" onclick="updatePassWord()">
                        Cập nhật
                    </button>


                </div>
            </div>
        </div>
        <!-- Modal edit info  -->

        <!-- Modal create one class  -->
        <div class="modal js-modal-create-class" style=" align-items: center; justify-content: center;">
            <div class="modal-container js-modal-create-class-container">
                <div class="modal-close js-modal-create-class-close">
                    <i class="fa-solid fa-rectangle-xmark header-icon-close"
                        style="font-size: 28px; color: #cacaca"></i>
                </div>
                <header class="modal-header" id="canvas-container">

                    <i class="fa-solid fa-qrcode" style="padding-right: 10px; font-size: 20px; z-index: 1;"></i>
                    <span style="z-index: 1; font-size: 30px;">Điền thông tin lớp học</span>
                    <i class="fa-solid fa-rocket" style="padding-left: 10px; font-size: 20px; z-index: 1;"></i>
                    <img src="asset/img/rocket.png" alt="" id="rocket" class="rocket"
                        style="width: 125px; margin-top: 76px; z-index: 1;">
                </header>
                <div class="modal-body">

                    <label for="mamon" class="modal-label">
                        <i class="fa-solid fa-users-viewfinder"></i>
                        Mã môn
                    </label>
                    <input required id="mamon" name="mamon" type="text"
                        class="modal-input p-create modal-input-name-class" placeholder="JB1">

                    <label for="tenmon" class="modal-label">
                        <i class="fa-solid fa-puzzle-piece"></i>
                        Tên môn
                    </label>
                    <input required id="tenmon" name="tenmon" type="text"
                        class="modal-input p-create modal-input-name-subject" placeholder="CSDLNC">

                    <label for="tongsobuoi" class="modal-label">
                        <i class="fa-solid fa-list-ol"></i>
                        Tổng số buổi
                    </label>
                    <input required id="tongsobuoi" name="tongbuoi" type="text"
                        class="modal-input p-create modal-input-name-subject" placeholder="15">
                    <label for="hocky" class="modal-label">
                        <i class="fa-regular fa-newspaper"></i>
                        Học kỳ
                    </label>
                    <input required id="hocky" name="hocky" type="text"
                        class="modal-input p-create modal-input-name-subject" placeholder="1A">
                    <label for="sotinchi" class="modal-label">
                        <i class="fa-solid fa-list-ol"></i>
                        Số tính chỉ
                    </label>
                    <input required id="sotinchi" name="sotinchi" type="number"
                        class="modal-input p-create modal-input-name-subject" placeholder="3">

                    <label for="thoigianbatdau" class="modal-label">
                        <i class="fa-solid fa-calendar-days"></i>
                        Thời gian bắt đầu
                    </label>
                    <input required id="thoigianbatdau" name="thoigianbatdau" type="date"
                        class="modal-input p-create modal-input-name-subject" placeholder="12/6/2023">
                    <label for="thoigianketthuc" class="modal-label">
                        <i class="fa-solid fa-calendar-days"></i>
                        Thời gian kết thúc
                    </label>
                    <input required id="thoigianketthuc" name="thoigianketthuc" type="date"
                        class="modal-input p-create modal-input-name-subject" placeholder="12/8/2023">

                    <input hidden id="giangvienphutrach" name="giangvienphutrach" type="text" value=""
                        class="modal-input modal-input-name-subject" disabled>

                    <input hidden id="excel" name="excel" type="text" value=""
                        class="modal-input modal-input-name-subject" disabled>
                    <input hidden id="link" name="link" type="text" value=""
                        class="modal-input modal-input-name-subject" disabled>

                    <input hidden id="id" name="id" value="" type="text" class="modal-input modal-input-name-subject"
                        disabled>
                    <button id="btn-update" class="js-btn-update-inf-class">
                        Tạo
                    </button>


                </div>

            </div>
        </div>
        <!-- END Modal create one class  -->

        <!-- Modal create a exercise   -->
        <div class="modal-exercise modal js-modal-exercise" id="header idBaiTap">
            <div class="modal-container modal-exercise-page js-modal-exercise-container" id="">
                <div class="modal-close js-modal-exercise-close">
                    <i class="fa-solid fa-rectangle-xmark" style="font-size: 28px; color: red;"></i>
                </div>
                <header>
                    <div class="modal-exercise-header-title">
                        <label>Tiêu đề: </label>
                        <input id="tieude" name="tieude" type="text" class="modal-input-exercise modal-header-exercise"
                            placeholder="">
                    </div>
                    <div class="modal-exercise-header-desc">
                        <label>Mô tả tiêu đề: </label>
                        <input id="mota" name="mota" type="text"
                            class="modal-input-exercise modal-header-exercise exer-desc" placeholder="">
                        <input id="idBT" name="id" value="" hidden>
                        <input id="thoigian" name="thoigian" value="" hidden>
                        <input id="dagiao" name="dagiao" value="" hidden>
                    </div>

                </header>
                <div>
                    <img src="asset/img/robot2.png" alt="icon-exer" class="icon-exer-animated">
                    <div class="modal-body modal-survey js-modal-survey" id="canvas-container3">
                        <!-- noi dung cau hoi  -->

                        <div class="modal-sidebar">
                            <i class="fa-solid fa-plus modal-btn-add-form js-btn-add-form-survey "
                                id="scrollButton"></i>
                        </div>
                    </div>
                    <!-- more input  -->

                    <div class="btn-submit-exercise">
                        <!-- <button class="btn-post" onclick="nhapfile()" >Submit</button> -->
                        <button class="btn-post" onclick="postExcercise()">Submit</button>
                        <!-- <div class="input-group mb-3">
                        <input type="file" class="form-control" id="" >
                    </div> -->
                        <button class="btn-post" onclick="showModalImportCsv()">Import file .csv</button>


                    </div>


                </div>
                <div class="modal-import-csv">

                </div>
            </div>
        </div>
        <!-- End modal exercise  -->
        <div id="modal-create-qr" class="modal-form modal-create-qr container text-center row animate__fadeIn"
            id="canvas-container" style="width: 60%; height: auto;">
            <i class="fa-solid fa-rectangle-xmark icons-close-popup" style="font-size: 28px; cursor: pointer;"
                onclick="hidePopupQr()"></i>
            <div class="form-qr-left col">
                <img src="asset/img/moon.png" alt="">
            </div>
            <div class="form-qr-right col">
                <div class="modal-header-qr">
                    <span>Nhập thông tin buổi hôm nay</span>
                    <div class="box-day-check-prev">
                        <label for="" class="modal-form-label">Buổi hôm trước</label>
                        <h3 class="day-prev">1</h3>
                    </div>
                </div>

                <div class="modal-body-qr">

                    <input class="modal-form-input" name="idmon" id="idmon" hidden>
                    <label for="" class="modal-form-label">Buổi hôm nay</label>
                    <input type="number" class="modal-form-input input-buoihientai" name="buoihientai" id="buoihientai"
                        placeholder="Vd: 5">
                    <input class="modal-form-input input-ngayhientai " type="date"></input>
                    <input type="submit" class="modal-submit-qr" value="Tạo QR" onclick="getLocation()">
                </div>
            </div>
            <div id="qrcode" class="text-center">
                <img src="asset/img/hutech.png" alt="qr" id="img-qr" width="500px" height="500px" />
            </div>
        </div>

    </body>
    <script src="/asset/script/common.js"></script>
    <script src="/asset/script/listClass.js"></script>
    <script src="/asset/script/historyCheck.js"></script>
    <script src="/asset/script/infoGv.js"></script>
    <script src="/asset/script/app.js"></script>
    <script src="/asset/script/exercise.js"></script>
    <script src="/asset/script/changeInput.js"></script>
    <script src="/asset/script/showBt.js"></script>
    <script src="/asset/script/model3d.js"></script>
    <script src="/asset/script/qr.js"></script>
    <script src="/asset/script/vitri.js"></script>
    <script type="text/javascript"
        src="https://cdn.datatables.net/autofill/2.5.3/js/dataTables.autoFill.min.js"></script>






    </html>