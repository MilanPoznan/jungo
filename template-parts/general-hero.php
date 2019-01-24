<?php if( get_row_layout() == 'general_hero' ): ?>
<section class="g-hero">
  <div class="g-hero__wrapper" style="background-image: url('<?php the_sub_field('background_image'); ?>')">
    <div class="g-hero__background" data-tilt style="background-image: url('<?php the_sub_field('background_image'); ?>')">
      <div class="g-hero__shape-wrapper">
        <div class="g-hero__shape js-image-tilt" style="background-image: url('<?php the_sub_field('shape_object_image'); ?>')">
          <h1 class="g-hero__title js-title-tilt"><?php the_title(); ?></h1>
        </div>
      </div>
    </div>
    <div class="g-hero__shape desktop-hide" style="background-image: url('<?php the_sub_field('shape_object_image'); ?>')">
      <h1 class"g-hero__title"><?php the_title(); ?></h1>
    </div>
  <div class="g-hero__side-scroll">
    <span>SCROLL</span>
  </div>
  <div class="g-hero__side-scroll-text">
    <?php the_sub_field('side_description') ?>
  </div>
</div>
</section>
<?php endif; ?>
