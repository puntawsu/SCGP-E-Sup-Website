<template>
  <section id="tpabout" class="about__area pb-20 mt-0 container">
    <div class="row">
      <!-- data-sal="slide-right"
        data-sal-delay="170"
        data-sal-duration="300" -->
      <div class="col-xxl-7 col-lg-7 col-lg-7 col-12 about-Text-Zone">
        <div class="about-Text-Zone-Title">
          <!--  -->
          <div class="Title">
            <h3>{{ $t("HomeAbouts-Title") }}</h3>
            <p>
              {{ $t("HomeAbouts-detail1") }}
              <span> {{ $t("SCGP") }} </span>
              {{ $t("HomeAbouts-detail2") }}
            </p>
          </div>
        </div>
      </div>
      <div
        class="col-xxl-5 col-lg-5 col-lg-5 col-12"
        data-sal="slide-right"
        data-sal-delay="170"
        data-sal-duration="300">
        <div class="about-banner-Zone">
          <img src="../../assets/img/home/about_img.png" alt="" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SalScrollAnimationMixin from "~/mixins/SalScrollAnimationMixin";

export default {
  mixins: [SalScrollAnimationMixin],
};
</script>
