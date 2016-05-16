<?php
  get_header();
?>

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

              <img src="<?php bloginfo('template_url'); ?>/img/carousel/01.jpg" alt="Chania" width="460" height="345">

            </div>



            <div class="item">

              <img src="<?php bloginfo('template_url'); ?>/img/carousel/02.jpg" alt="Chania" width="460" height="345">

            </div>

          

            <div class="item">

              <img src="<?php bloginfo('template_url'); ?>/img/carousel/03.jpg" alt="Flower" width="460" height="345">

            </div>



            <div class="item">

              <img src="<?php bloginfo('template_url'); ?>/img/carousel/02.jpg" alt="Flower" width="460" height="345">

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

    

<?php get_footer(); ?>