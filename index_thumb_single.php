<!DOCTYPE html>
<html lang="<?php bloginfo('language'); ?>">
<head>
	<meta charset="<?php bloginfo('charset'); ?>">
	<title><?php bloginfo('name'); ?></title>
	<link rel="shortcut icon" href="<?php bloginfo('siteurl'); ?>/favicon.ico" />
	<link rel="stylesheet" type="text/css" href="<?php bloginfo('stylesheet_url');?>">
</head>
<body>
	<h1><?php bloginfo('name'); ?></h1>
	<h2><?php bloginfo('description'); ?></h2>

	<?php bloginfo('template_url'); ?>
	<?php rewind_posts(); ?>
	<?php //query_posts('order=Desc&cat=1'); ?>
	<?php if (have_posts()) : while (have_posts()) : the_post(); ?>
		<article>
			<header>
				<h3><?php the_title(); ?></h3>
			</header>
			<?php the_excerpt(); ?>
			<?php the_category(); ?>
			<strong><?php the_author(); ?></strong> -
			<?php the_date();?>
			<?php the_post_thumbnail('thumbnail');?>
		</article>
	<!-- post -->
	<?php endwhile; ?>
	<!-- post nav -->
	<?php else: ?>
	<!-- no posts found -->
	<?php endif; ?>

</body>
</html>