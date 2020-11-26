<?php
/*
Template Name: Archives
*/
get_header(); ?>

<!-- main -->
<main class="main">

  <!-- title -->
  <section class="title">
    <div class="title-ttl-wrapper">
      <h1 class="title-ttl">Blog</h1>
    </div>
    <!-- <figure class="title-pic">
      <img src="img/service_ttl.png" alt="service_ttl">
    </figure> -->
  </section><!-- /title -->

  <!-- blog -->
  <section class="blog" id="blog">
    <!-- container -->
    <div class="container">
      <ul class="blog-list">
        <?php if(have_posts()) :?>
        <?php while(have_posts()) : the_post(); ?>
        <li class="blog-item">
          <figure class="blog-img">
            <a class="blog-img-link" href="<?php the_permalink(); ?>">
      <?php if( has_post_thumbnail() ):
      $_attachment_id = get_post_thumbnail_id( $_attachment_id );
      $_attachment = wp_get_attachment_image_src( $_attachment_id, "none" );
      echo '<img src="'.$_attachment[0].'" width="100%" />'; ?>
　<?php else: ?>
      <img src="<?php echo get_template_directory_uri(); ?>/images/blog_1.png" alt="blog_1">
<?php endif; ?>
            <figcaption class="blog-cap"><?php the_category(); ?></figcaption>
          </a>
          </figure>
          <time class="blog-item-time"><?php the_time( 'Y/m/d' ); ?></time>
          <p class="blog-item-ttl"><?php the_title(); ?></p>
          <?php the_excerpt(); ?>
        </li>
      <?php endwhile; ?>
      </ul>
    </div><!-- /container -->
  </section><!-- /blog -->
  <!-- navlink -->
  <section class="page">
    <?php the_posts_pagination( array(
  'prev_text' => '<i class="fa fa-chevron-left"></i>',
  'next_text' => '<i class="fa fa-chevron-right"></i>',
) ); ?>
  </section><!-- /navlink -->
<?php else : ?>
  <p>まだ記事がありません</p>
<?php endif; ?>
</main><!-- /main -->
<?php get_footer();
