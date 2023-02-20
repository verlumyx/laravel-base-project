<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="icon" type="image/png" href="{{asset('uploads/favicon.png')}}">

    <title>Admin Panel</title>
    <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600;700&display=swap" rel="stylesheet">

    <link rel="stylesheet" href="{{asset('dist/css/bootstrap.min.css')}}">
    <link rel="stylesheet" href="{{asset('dist/css/font_awesome_5_free.min.css')}}">
    <link rel="stylesheet" href="{{asset('dist/css/bootstrap-datepicker.min.css')}}">
    <link rel="stylesheet" href="{{asset('dist/css/style.css')}}">
    <link rel="stylesheet" href="{{asset('dist/css/custom.css')}}">

    <script src="{{asset("dist/js/jquery-3.6.0.min.js")}}"></script>
    <script src="{{asset("dist/js/popper.min.js")}}"></script>
    <script src="{{asset("dist/js/bootstrap.min.js")}}"></script>
    <script src="{{asset("dist/js/jquery.nicescroll.min.js")}}"></script>
    <script src="{{asset("dist/js/bootstrap-datepicker.min.js")}}"></script>

    <!-- Scripts -->
    @routes
    @viteReactRefresh
    @vite('resources/apps/admin/main.jsx')
</head>
<div id="app"></div>
</html>
