<template>
  <LayoutOne>
    <HeaderSubPage1 :headData="headData" />
    
  <section id="conflictMineral" class="conflictMineral-area container"
  
  
  >
    <div class="row justify-content-center">
      <!-- data-sal="slide-left" -->
      <!-- data-sal-delay="170" -->
      <!-- data-sal-duration="1000" -->
      
    </div>
    <div class="row align-items-center">
      <div class="col-12 col-md-6 left">
        <!--  -->
        <div
          class="banner-Zone"
          data-sal="slide-left"
          data-sal-delay="170"
          data-sal-duration="1000">
          <img src="../assets/img/home/conflictminerals.png" alt="" />
        </div>
      </div>
      <div class="col-12 col-md-6 right">
        <!--  -->
        <div
          class="Title"
          data-sal="fade"
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
          data-sal="fade"
          data-sal-delay="170"
          data-sal-duration="1000">
          <img src="../assets/img/home/Mineral.png" alt="" />
        </div>
      </div>
    </div>
  </section>

  </LayoutOne>
</template>

<script>
import SalScrollAnimationMixin from "~/mixins/SalScrollAnimationMixin";
import LayoutOne from "~/layouts/LayoutOne.vue";
import SupplierCodeofConductImage from "../assets/img/headerPage/B_ SupplierCodeofConduct.png"; // นำเข้าภาพแบบ ES6
import HeaderSubPage1 from "~/components/header/HeaderSubPage1.vue";
import sal from "sal.js";
export default {
  data() {
    return {
      headData: {
        title: "Conflictmineral",
        breadcrumbs: ["Conflictmineral"],
        banner: SupplierCodeofConductImage,
      },
    
    };
  },
  components: { LayoutOne, HeaderSubPage1 },
  mounted() {
    sal();
  },
}
</script>
