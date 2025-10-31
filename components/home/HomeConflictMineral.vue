<template>
  <section id="conflictMineral" class="conflictMineral-area container mt-50 mb-50"
  
   style="padding-top: 150px; margin-top: -40px"
  >
    <div class="row justify-content-center">
      <!-- data-sal="slide-left" -->
      <!-- data-sal-delay="170" -->
      <!-- data-sal-duration="1000" -->
      <div class="col-12 mb-20">
        <h3>Conflict Mineral</h3>
      </div>
    </div>
    <div class="row align-items-center">
      <div class="col-12 col-md-6 left">
        <!--  -->
        <div
          class="banner-Zone"
          data-sal="slide-left"
          data-sal-delay="170"
          data-sal-duration="1000">
          <img src="~/assets/img/home/conflictminerals.png" alt="" />
        </div>
      </div>
      <div class="col-12 col-md-6 right">
        <!--  -->
        <div
          class="Title"
          data-sal="slide-down"
          data-sal-delay="170"
          data-sal-duration="1000">
          <p>
          {{ $t("HomeConflictMineral-detail1") }}
            <span> {{ $t("SCGP") }} </span>
           {{ $t("HomeConflictMineral-detail2") }}
            {{ $t("HomeConflictMineral-detail3") }}
          </p>
        </div>
        <div
          class="Mineral"
          data-sal="slide-up"
          data-sal-delay="170"
          data-sal-duration="1000">
          <img src="~/assets/img/home/Mineral.png" alt="" />
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
