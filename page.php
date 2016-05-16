<?php
  get_header();
?>

	<?php rewind_posts(); ?>
	<?php //query_posts('order=Desc&cat=1'); ?>
	<?php if (have_posts()) : while (have_posts()) : the_post(); ?>
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
	<!-- post -->
	<?php endwhile; ?>
	<!-- post nav -->
	<?php else: ?>
	<!-- no posts found -->
	<?php endif; ?>



<?php get_footer(); ?>