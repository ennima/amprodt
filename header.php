<!doctype html>

<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7" lang=""> <![endif]-->

<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8" lang=""> <![endif]-->

<!--[if IE 8]>         <html class="no-js lt-ie9" lang=""> <![endif]-->

<!--[if gt IE 8]><!--> 
<html class="no-js" lang="<?php bloginfo('language'); ?>"> <!--<![endif]-->

    <head>

        <meta charset="<?php bloginfo('charset'); ?>">
        <title><?php bloginfo('name'); ?></title>
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <meta name="description" content="<?php bloginfo('description') ?>">

        <meta name="viewport" content="width=device-width, initial-scale=1">

        <link rel="apple-touch-icon" href="<?php bloginfo('template_url'); ?>/img/apple-touch-icon.png">

        <link rel="shortcut icon" type="image/png" href="<?php bloginfo('template_url'); ?>/img/favicon.ico"/>

        <link rel="stylesheet" href="<?php bloginfo('template_url'); ?>/css/vendor/bootstrap.css">

        <link rel="stylesheet" href="<?php bloginfo('template_url'); ?>/css/nav.css">

        

        <!--<link rel="stylesheet" href="css/bootstrap-theme.min.css">-->
        
        <!--
        <link rel="stylesheet" href="<?php bloginfo('template_url'); ?>/css/main.css">-->

        <link rel="stylesheet" href="<?php bloginfo('template_url'); ?>/style.css">

        <script src="<?php bloginfo('template_url'); ?>/js/vendor/modernizr-2.8.3-respond-1.4.2.min.js"></script>

    </head>

    <body onload="init()">

        <!--[if lt IE 8]>

            <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>

        <![endif]-->

     <!-- Navigation -->

    <nav class="navbar  navbar-default" role="navigation">

        <div class="container">

            <!-- Brand and toggle get grouped for better mobile display -->

            <div class="navbar-header">

                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">

                    <span class="sr-only">Toggle navigation</span>

                    <span class="icon-bar"></span>

                    <span class="icon-bar"></span>

                    <span class="icon-bar"></span>

                </button>

                <a class="navbar-brand" href="#">

                    <img src="logo.jpg" alt="" style="border-radius:10px;">

                </a>

            </div>

            <!-- Collect the nav links, forms, and other content for toggling -->

            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">

                

                <ul class="nav navbar-nav navbar-right col-lg-4 col-md-4 col-sm-4 col-md-3 nav-search-form">

                  <li class="active visible-xs"><a href="./">Menu<span class="sr-only">(current)</span></a></li>

                  <li class="visible-xs dropdown">

                    

                      <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Proceso Atenci&oacute;n de Enfermer&iacute;a<span class="caret"></span></a>

                      <ul class="dropdown-menu">

                        <li><a href="#">ANTECEDENTES</a></li>

                        <li><a href="#">OBJETIVO</a></li>

                        <li><a href="#">M&Eacute;TODO</a></li>

                        <li><a href="#">RESULTADOS</a></li>

                        <li><a href="#">CONCLUSI&Oacute;N</a></li>

                        <li role="separator" class="divider"></li>

                        </ul>

                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Valoraci&oacute;n de enfermer&iacute;a<span class="caret"></span></a>

                        <ul class="dropdown-menu">

                        <li><a href="#">INTRODUCCI&Oacute;N</a></li>

                        <li><a href="#">CONCLUSIONES</a></li>

                        <li role="separator" class="divider"></li>

                        </ul>

                        <li role="separator" class="divider"></li>

                        <!--<li><a href="#">One more separated link</a></li>-->

                      </ul>

                    

                  </li>

                  <li>

                     <!-- <div class="row"> -->

                          

                          <div>

                            <div class="input-group">

                              <input type="text" class="form-control" placeholder="Buscar">

                              <span class="input-group-btn">

                                <button onClick="searchArticle('art');" class="btn btn-default" type="button"><span class="glyphicon glyphicon-search" aria-hidden="true"></span></button>

                              </span>

                            </div><!-- /input-group -->

                          </div><!-- /.col-lg-6 -->

                       <!-- </div> /.row -->

                  </li>



                </ul>

            </div>

            <!-- /.navbar-collapse -->

        </div>

        <!-- /.container -->

    </nav>



    <!-- Main jumbotron for a primary marketing message or call to action -->

    <!--<div class="jumbotron">

      <div class="container">

        <h1>Hello, world!</h1>

        <p>This is a template for a simple marketing or informational website. It includes a large callout called a jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique.</p>

        <p><a class="btn btn-primary btn-lg" href="#" role="button">Learn more &raquo;</a></p>

      </div>

    </div>-->



    <!--<div class="container">-->

    <div class="row">

      <div id="menu-vertical" class="visible-lg col-lg-2 col-xs-0">

        <ul class="nav nav-pills nav-stacked">



          <li class="active"><a href="index.html">Inicio</a></li>

          <li class="dropdown">

            <a class="dropdown-toggle" data-toggle="dropdown" href="#">Proceso Atención de Enfermer&iacute;a <span class="caret"></span></a>

            <ul class="dropdown-menu">

              <li><a href="#">ANTECEDENTES</a></li>

              <li><a href="#">OBJETIVO</a></li>

              <li><a href="#">M&Eacute;TODO</a></li>

              <li><a href="#">RESULTADOS</a></li>

              <li><a href="#">CONCLUSI&Oacute;N</a></li>                        

            </ul>

          </li>          

          <li><a class="dropdown-toggle" data-toggle="dropdown" href="#">Valoración de enfermería

              <span class="caret"></span></a>

            <ul class="dropdown-menu">

              <li><a href="#">INTRODUCCI&Oacute;N</a></li>

              <li><a href="#">CONCLUSIONES</a></li>              

          </li>

        </ul>

          <li><a class="dropdown-toggle" data-toggle="dropdown" href="#">Diagn&oacute;sticos de enfermer&iacute;a NANDA/Taxonom&iacute;as NOC, NIC

              <span class="caret"></span></a>

            <ul class="dropdown-menu">

              <li><a href="#">ANTECEDENTES</a></li>

              <li><a href="#">OBJETIVO</a></li>

              <li><a href="#">M&Eacute;TODO</a></li>

              <li><a href="#">RESULTADOS</a></li> 

              <li><a href="#">CONCLUSI&Oacute;N</a></li>             

          </li>

        </ul>

        <li><a class="dropdown-toggle" data-toggle="dropdown" href="#">Diagn&oacute;sticos de enfermer&iacute;a en la gesti&oacute;n y calidad/Diagn&oacute;sticos de enfermer&iacute;a en la Docencia

              <span class="caret"></span></a>

            <ul class="dropdown-menu">

              <li><a href="#">ANTECEDENTES</a></li>

              <li><a href="#">OBJETIVO</a></li>

              <li><a href="#">M&Eacute;TODO</a></li>

              <li><a href="#">RESULTADOS</a></li> 

              <li><a href="#">CONCLUSI&Oacute;N</a></li>

              <li><a href="#">BIBLIGRAF&Iacute;A</a></li>                  

          </li>

        </ul> 

        <li><a class="dropdown-toggle" data-toggle="dropdown" href="#">Aspectos éticos y legales

              <span class="caret"></span></a>

            <ul class="dropdown-menu">

              <li><a href="#">INTRODUCCION</a></li>

              <li><a href="#">M&Oacute;DULO</a></li>

              <li><a href="#">M&Oacute;DULO I</a></li>

              <li><a href="#">M&Oacute;DULO II</a></li> 

              <li><a href="#">M&Oacute;DULO III</a></li>

              <li><a href="#">M&Oacute;DULO IV</a></li>                  

          </li>

        </ul>            

      </diV>