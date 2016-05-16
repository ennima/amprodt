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

                        <li><a href="#">One more separated link</a></li>

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

      <div id="contenido" class="col-lg-10 col-xs-12">

        <div id="myCarousel" class="carousel slide" data-ride="carousel">

          <!-- Indicators -->

          <ol class="carousel-indicators">

            <li data-target="#myCarousel" data-slide-to="0" class="active"></li>

            <li data-target="#myCarousel" data-slide-to="1"></li>

            <li data-target="#myCarousel" data-slide-to="2"></li>

            <li data-target="#myCarousel" data-slide-to="3"></li>

          </ol>



          <!-- Wrapper for slides -->

          <div class="carousel-inner" role="listbox">

            <div class="item active">

              <img src="img/01.jpg" alt="Chania" width="460" height="345">

            </div>



            <div class="item">

              <img src="img/02.jpg" alt="Chania" width="460" height="345">

            </div>

          

            <div class="item">

              <img src="img/03.jpg" alt="Flower" width="460" height="345">

            </div>



            <div class="item">

              <img src="img/02.jpg" alt="Flower" width="460" height="345">

            </div>

          </div>



          <!-- Left and right controls -->

          <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">

            <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>

            <span class="sr-only">Previous</span>

          </a>

          <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">

            <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>

            <span class="sr-only">Next</span>

          </a>

        </div>

        <!--</div>-->

      

        <div class="container">

          <!-- Example row of columns -->

          <div class="row col-md-12">
            <?php rewind_posts(); ?>
            <?php query_posts('posts_per_page=6'); ?>
        
            <?php if (have_posts()) : while (have_posts()) : the_post(); ?>

            
            <div class="col-md-4">

              <h3><?php the_title(); ?></h3>
              <figure>
                <?php the_post_thumbnail('thumb-small');?>
              </figure>
              <span class='post_metadata col-md-12'>
                <strong class="col-md-6">
                  Por: <?php the_author(); ?>
                </strong>
                <i class="col-md-6">
                  <?php echo get_the_date();?>
                </i>
              </span>
              <span class="post_category col-md-12">
                  <?php 
                  $categories = get_the_category();
                  $separator = ' ';
                  $output = '';
                  if ( ! empty( $categories ) ) {
                      foreach( $categories as $category ) {
                          $output .= '<a href="' . esc_url( get_category_link( $category->term_id ) ) . '" alt="' . esc_attr( sprintf( __( 'View all posts in %s', 'textdomain' ), $category->name ) ) . '">' . esc_html( $category->name ) . '</a>' . $separator;
                      }
                      echo trim( $output, $separator );
                  }

                  ?>
              </span>  
              
              <p><?php the_excerpt(); ?></p>
        

            </div>

            <!-- post -->
            <?php endwhile; ?>
            <!-- post nav -->
            <?php else: ?>
            <!-- no posts found -->
            <?php endif; ?>
            <?php wp_reset_query(); ?>

          </div>


          <div class="row col-md-12">
            <?php rewind_posts(); ?>
            <?php query_posts('cat=2&posts_per_page=3'); ?>
            <?php if (have_posts()) : while (have_posts()) : the_post(); ?>
 
            <div class="col-md-4">

              <h3><?php the_title(); ?></h3>
              <figure>
                <?php the_post_thumbnail('thumb-small');?>
              </figure>
              <span class='post_metadata col-md-12'>
                <strong class="col-md-6">
                  Por: <?php the_author(); ?>
                </strong>
                <i class="col-md-6">
                  <?php echo get_the_date();?>
                </i>
              </span>
              <p><?php the_excerpt(); ?></p>
        

            </div>

            <!-- post -->
            <?php endwhile; ?>
            <!-- post nav -->
            <?php else: ?>
            <!-- no posts found -->
            <?php endif; ?>
            <?php wp_reset_query(); ?>

          </div>


        <hr>



        

        </div>

      </div>

    </div>

    <footer class="footer">

            

            <canvas id="canvas_footer" width="1024" height="115"></canvas>

            <div class="footer-content">

                <p>&copy; amprodt-nanda 2015</p>

                <div class="container">

                    <div class="container">

                      <p>Datos de la instituciòn direccion calle colonia municipio cp 0989802 tel. +52 55 51525354 y otros datos màs</p>

                    </div>

                    



                </div>

            </div>

    </footer>

     <!-- /container -->        <script src="<?php bloginfo('template_url'); ?>/js/vendor/jquery-1.11.2.min.js"></script>

       

        <script src="<?php bloginfo('template_url'); ?>/js/vendor/bootstrap.min.js"></script>



        <script src="<?php bloginfo('template_url'); ?>/js/main.js"></script>



        <!-- Google Analytics: change UA-XXXXX-X to be your site's ID. -->

        

    </body>

</html>