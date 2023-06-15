<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0">
    <title>Autocheck - Dashboard</title>

    <link rel="shortcut icon" type="image/x-icon" href="assets/img/favicon.png">

    <link rel="stylesheet" href="assets/css/bootstrap.min.css">

    <link rel="stylesheet" href="assets/css/font-awesome.min.css">

    <link rel="stylesheet" href="assets/css/feathericon.min.css">

    <link rel="stylesheet" href="assets/plugins/morris/morris.css">

    <link rel="stylesheet" href="assets/css/style.css">
</head>

<body>

    <div class="main-wrapper">

        <div class="header">

            <div class="header-left">
                <a href="index.html" class="logo">
                    <img src="assets/img/logo.png" alt="Logo">
                </a>
                <a href="index.html" class="logo logo-small">
                    <img src="assets/img/logo-small.png" alt="Logo" width="30" height="30">
                </a>
            </div>

            <a href="javascript:void(0);" id="toggle_btn">
                <i class="fe fe-text-align-left"></i>
            </a>
            <div class="top-nav-search">
                <form>
                    <input type="text" class="form-control" placeholder="Search here">
                    <button class="btn" type="submit"><i class="fa fa-search"></i></button>
                </form>
            </div>
            <a class="mobile_btn" id="mobile_btn">
                <i class="fa fa-bars"></i>
            </a>
            <ul class="nav user-menu">
                </li>
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
                        <a class="dropdown-item" href="general.html">My Profile</a>
                        <a class="dropdown-item" href="login.html">Logout</a>
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
                        <li>
                            <a href="index.html"><i class="fe fe-home"></i> <span>Dashboard</span></a>
                        </li>
                        <li class="submenu">
                            <a href="#"><i class="fe fe-users"></i> <span> Users</span> <span
                                    class="menu-arrow"></span></a>
                            <ul style="display: none;">
                                <li><a href="users.html" class="active">Users</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>


        <div class="page-wrapper">
            <div class="content container-fluid">
                <div class="page-header">
                    <div class="row align-items-center">
                        <div class="col">
                            <h3 class="page-title">Users</h3>
                            <ul class="breadcrumb">
                                <li class="breadcrumb-item"><a href="index.html">Dashboard</a></li>
                                
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12 d-flex">

                        <div class="card card-table flex-fill">
                            <div class="card-body">
                                <div class="table-responsive">
                                    <table class="table table-hover table-center mb-0">
                                        <thead>
                                            <tr>
                                                <th>Name</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <h2 class="table-avatar">

                                                        <a href="general.html">Nhat <span></span></a>
                                                    </h2>
                                                </td>
                                                <td class="text-end">
                                                    <div class="actions">
                                                        <a href="#" class="btn btn-sm bg-success-light me-2">
                                                            <i class="fe fe-pencil"></i>
                                                        </a>
                                                        <a href="#" class="btn btn-sm bg-danger-light">
                                                            <i class="fe fe-trash"></i>
                                                        </a>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <h2 class="table-avatar">

                                                        <a href="general.html">Dan <span></span></a>
                                                    </h2>
                                                </td>

                                                <td class="text-end">
                                                    <div class="actions">
                                                        <a href="#" class="btn btn-sm bg-success-light me-2">
                                                            <i class="fe fe-pencil"></i>
                                                        </a>
                                                        <a href="#" class="btn btn-sm bg-danger-light">
                                                            <i class="fe fe-trash"></i>
                                                        </a>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <h2 class="table-avatar">

                                                        <a href="general.html">Ac <span></span></a>
                                                    </h2>
                                                </td>

                                                <td class="text-end">
                                                    <div class="actions">
                                                        <a href="#" class="btn btn-sm bg-success-light me-2">
                                                            <i class="fe fe-pencil"></i>
                                                        </a>
                                                        <a href="#" class="btn btn-sm bg-danger-light">
                                                            <i class="fe fe-trash"></i>
                                                        </a>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <h2 class="table-avatar">

                                                        <a href="general.html">Lun <span></span></a>
                                                    </h2>
                                                </td>

                                                <td class="text-end">
                                                    <div class="actions">
                                                        <a href="#" class="btn btn-sm bg-success-light me-2">
                                                            <i class="fe fe-pencil"></i>
                                                        </a>
                                                        <a href="#" class="btn btn-sm bg-danger-light">
                                                            <i class="fe fe-trash"></i>
                                                        </a>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <h2 class="table-avatar">

                                                        <a href="general.html">Do <span></span></a>
                                                    </h2>
                                                </td>

                                                <td class="text-end">
                                                    <div class="actions">
                                                        <a href="#" class="btn btn-sm bg-success-light me-2">
                                                            <i class="fe fe-pencil"></i>
                                                        </a>
                                                        <a href="#" class="btn btn-sm bg-danger-light">
                                                            <i class="fe fe-trash"></i>
                                                        </a>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <h2 class="table-avatar">

                                                        <a href="general.html">Nha <span></span></a>
                                                    </h2>
                                                </td>

                                                <td class="text-end">
                                                    <div class="actions">
                                                        <a href="#" class="btn btn-sm bg-success-light me-2">
                                                            <i class="fe fe-pencil"></i>
                                                        </a>
                                                        <a href="#" class="btn btn-sm bg-danger-light">
                                                            <i class="fe fe-trash"></i>
                                                        </a>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
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
</body>

</html>