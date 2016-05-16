<?php 

	add_theme_support( 'post-thumbnails' );

	add_action( 'after_setup_theme', 'mytheme_custom_thumbnail_size' );
	function mytheme_custom_thumbnail_size(){
	    add_image_size( 'thumb-small', 330, 180, true ); // Hard crop to exact dimensions (crops sides or top and bottom)
	    add_image_size( 'thumb-medium', 520, 9999 ); // Crop to 520px width, unlimited height
	    add_image_size( 'thumb-large', 720, 340 ); // Soft proprtional crop to max 720px width, max 340px height
	}


	// Changing excerpt more

   function new_excerpt_more($more) {

   global $post;

   return '<p><a class="btn btn-default btn-leer" href="'. get_permalink($post->ID) . '" role="button">' . 'Leer &raquo;' . '</a></p>';

   }

   add_filter('excerpt_more', 'new_excerpt_more');

?>