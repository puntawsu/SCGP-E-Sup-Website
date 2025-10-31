<template>
  <LayoutOne>
    <HeaderSubPage1 :headData="headData" />
  <section
    class="supplierDiversity-area container mt-50 mb-50"
    id="supplierDiversity"
    >
    <div
      class="row justify-content-center"
      data-sal="fade"
      data-sal-delay="170"
      data-sal-duration="800">
      <!-- <div class="col-12 mb-20">
        <h3>{{ $t("HomeSupplierDiversity-Title") }}</h3>
      </div> -->
      <div class="col-12">
        <div class="supplierDiversity-banner-Zone">
          <div class="shadowbanner"></div>

          <img src="../assets/img/home/bannerSupplierDiversity2.jpg" alt="" />
        </div>
      </div>
    </div>
    <div
      class="row supplierDiversity-Text-Zone"
      data-sal="fade"
      data-sal-delay="170"
      data-sal-duration="1000">
      <div class="col-10 col-md-6 left">
        <!--  -->
        <div class="Title">
          <p>
            {{ $t("HomeSupplierDiversity-detail1") }}
            <span> {{ $t("SCGP") }} </span>
            {{ $t("HomeSupplierDiversity-detail2") }}

            <span class="lgbtq" style="color: #002060">L</span>
            <span class="lgbtq" style="color: #0070c0">G</span>
            <span class="lgbtq" style="color: #00b050">B</span>
            <span class="lgbtq" style="color: #ffc000">T</span>
            <span class="lgbtq" style="color: #ff0000">Q</span>
            <span class="lgbtq" style="color: #c00000">+</span>

            {{ $t("HomeSupplierDiversity-detail3") }}
          </p>
        </div>
      </div>
      <div class="col-10 col-md-6 right">
        <!--  -->
        <div class="Title">
          <p>
            {{ $t("HomeSupplierDiversity-detail4") }}
          </p>
        </div>
        <div class="row justify-content-center">
          <div class="col-12 col-md-12 text-end d-flex justify-content-end">
            <div class="btn-download">
              <a
                target="_blank"
                :href="
                  'https://investor.scgpackaging.com/storage/content/corporate-governance/corporate-governance-policies-and-guidelines-of-scg-packaging/20211125-scgp-diversity-and-inclusion-policy-' +
                  this.$i18n.locale +
                  '.pdf'
                "
                class=" ">
                {{ $t("HomeSupplierDiversity-btn") }}
              </a>
              <svg
                class="w-6 h-6 text-gray-800 dark:text-white btn-download-icon"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24">
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m9 5 7 7-7 7" />
              </svg>

              
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>  </LayoutOne>
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
        title: "SupplierDiversity",
        breadcrumbs: ["SupplierDiversity"],
        banner: SupplierCodeofConductImage,
      },
    
    };
  },
  components: { LayoutOne, HeaderSubPage1 },
  mounted() {
    sal();
  },
};
</script>
