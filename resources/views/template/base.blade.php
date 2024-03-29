<!DOCTYPE html>
<html lang="en">
<head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>NET</title>

        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
        
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.2/css/all.css"
        integrity="sha384-vSIIfh2YWi9wW0r9iZe7RJPrKwp6bG+s9QZMoITbCckVJqGCCRhc+ccxNcdpHuYu" crossorigin="anonymous">

        <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">

        <link rel="stylesheet" href="{{ URL::asset('css/main.css')}}" />

<style>
.error {
        color: #c05f5f;
        font-style: italic;
    }
</style>
    
        
</head> 
<body>

<nav class="navbar navbar-expand-lg navbar-dark">
    <div class="container-fluid">
        <a href="#" class="navbar-brand nav-link link" data-id="home"><img src="../img/logo.png" class="card-img-top" alt="..." style="width: 65px; height:65px;"></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
            <li class="nav-item">
            <a href="#" class="nav-link link" style="color: #F3F7F9;" data-id="eonet">EONET</a>
            </li>
            <li class="nav-item">
            <a href="#" class="nav-link link" style="color: #F3F7F9;" data-id="news">News</a>
            </li>
            <li class="nav-item">
            <a href="#" class="nav-link link" style="color: #F3F7F9;" data-id="globalgiving">Global Giving</a>
            </li>
            <li class="nav-item">
            <a href="#" class="nav-link link" style="color: #F3F7F9;" data-id="database">Database</a>
            </li>
            
        </ul>

        <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul class="navbar-nav mr-auto">
            <li class="nav-item">
                <a href="#" class="nav-link link" id="myaccount-nav" style="color: #F3F7F9;" data-id="myacc">My Account</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link link" id="logout-nav" style="color: #F3F7F9;" data-id="logout">Logout</a>
            </li>
            <li class="nav-item">
                <button type="submit" id="login-btn-nav" style="color: #F3F7F9;" class="btn  mr-sm-2" data-bs-toggle="modal" data-bs-target="#loginModal">LOGIN</button>
            </li>
            <li class="nav-item">
                <button type="submit" id="register-btn-nav" style="color: #F3F7F9;" class="btn  mr-sm-2" data-bs-toggle="modal" data-bs-target="#registerModal">REGISTER</button>
            </li>
        </ul>
    </div>
            
        </div>
    </div>
</nav>
        @yield('body')

        
        

        <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>   

        <script src="https://code.jquery.com/jquery-3.1.1.min.js"></script>
        
        <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.min.js"
                integrity="sha256-VazP97ZCwtekAsvgPBSUwPFKdrwD3unUfSGVYrahUqU=" crossorigin="anonymous"></script>

        <script src="https://cdn.jsdelivr.net/jquery.validation/1.16.0/jquery.validate.min.js"></script>
        <script src="https://cdn.jsdelivr.net/jquery.validation/1.16.0/additional-methods.min.js"></script>
        
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"
        integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
        
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js" 
        integrity="sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0" crossorigin="anonymous"></script>
    
        <script type="text/javascript" src="{{ URL::asset('js/main.js')}}"></script>
        <script type="text/javascript" src="{{ URL::asset('js/app.js')}}"></script>
            
</body>

</html>