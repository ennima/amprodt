<?php get_header(); ?>

	<div id="primary" class="content-area">
		<main id="main" class="site-main" role="main">

		<?php
		// Start the loop.
		while ( have_posts() ) : the_post();

			
			?>
			<article class="page_article col-md-9">
			<header>
				<h2><?php the_title(); ?></h2>
				<span class='post_metadata col-md-12'>
                <strong class="col-md-6">
                  Por: <?php the_author(); ?>
                </strong>
                <i class="col-md-6">
                  <?php echo get_the_date();?>
                </i>
              </span>
			</header>
			<hr>
			<?php the_content(); ?>
			<hr>
		</article>

			<?php

			// If comments are open or we have at least one comment, load up the comment template.
			/*
			if ( comments_open() || get_comments_number() ) :
				comments_template();
			endif;*/

					// End the loop.
		endwhile;
		?>

		</main><!-- .site-main -->
	</div><!-- .content-area -->

<?php get_footer(); ?>