<template>
  <LayoutOne>
    <HeaderSubPage1 :headData="headData" />
    <div class="policyOfWaste_Page">
      <div class="container">
        <div
          class="row justify-content-center title"
          data-sal="fade"
          data-sal-delay="100"
          data-sal-duration="700"
        >
          <h3>{{ $t("PolicyofWasteProcurement2") }}</h3>
        </div>
        <div
          class="row detail justify-content-center"
          data-sal="fade"
          data-sal-delay="300"
          data-sal-duration="700"
        >
          <div class="text col-12 col-md-10">
            <span><b> SCGP </b> </span>
            {{ $t("policyOfWaste-datail-main") }}
          </div>
          <div class="text col-12 col-md-10">
            <span class="sub-header"
              ><b> {{ $t("policyOfWaste-datail-subtitle1") }} </b>
            </span>
            <span class="sub-header-per">
              {{ $t("policyOfWaste-datail-perText") }}<b> 100% </b>
            </span>
            ​ {{ $t("policyOfWaste-datail-subdetail1") }}
          </div>
          <div class="text col-12 col-md-10">
            {{ $t("policyOfWaste-datail-subtitle2") }}
            <span class="sub-header"><b> </b> </span>
            <span class="sub-header-per">
              {{ $t("policyOfWaste-datail-perText") }}<b> 100% </b>
            </span>
            ​ {{ $t("policyOfWaste-datail-subdetail2.1") }}

            <div class="sub-text">
              <span><b> - 5% </b> </span>
              ​ {{ $t("policyOfWaste-datail-subdetail2.2") }}
            </div>
            <div class="sub-text">
              <span><b> - 95% </b> </span>
              ​ {{ $t("policyOfWaste-datail-subdetail2.3") }}
            </div>
          </div>
        </div>
        <div class="row detail-img justify-content-center">
          <div
            class="col-12 col-md-4"
            data-sal="fade"
            data-sal-delay="400"
            data-sal-duration="700"
          >
            <div class="img">
              <img src="@/assets/img/policyOfWaste/policyOfWaste1.png" alt="" />
            </div>
          </div>
          <div
            class="col-12 col-md-4"
            data-sal="fade"
            data-sal-delay="500"
            data-sal-duration="700"
          >
            <div class="img">
              <img src="@/assets/img/policyOfWaste/policyOfWaste1.png" alt="" />
            </div>
          </div>
          <div
            class="col-12 col-md-4"
            data-sal="fade"
            data-sal-delay="600"
            data-sal-duration="700"
          >
            <div class="img">
              <img src="@/assets/img/policyOfWaste/policyOfWaste1.png" alt="" />
            </div>
          </div>
        </div>

        <div
          class="row justify-content-center download-pdf"
          data-sal="slide-up"
          data-sal-delay="300"
          data-sal-duration="700"
        >
          <div class="col-12 col-md-4">
            <a
              :href="
                'https://sustainability.scgpackaging.com/storage/content/governance/supply-chain/20230830-scgp-wood-pulp-procurement-policy-' +
                this.$i18n.locale +
                '.pdf'
              "
              class="card"
              target="_bank"
            >
              <div class="card-body">
                <div class="row justify-content-center m-0 mb-2">
                  <h4 class="card-title">
                    {{ $t("PolicyofWasteProcurement2") }}
                  </h4>
                </div>
                <div class="row m-0 download-pdf-btn">
                  <div class="btn--outline-link">
                    {{ $t("Download") }}
                    <svg
                      width="14px"
                      height="14px"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        <path
                          d="M3 15C3 17.8284 3 19.2426 3.87868 20.1213C4.75736 21 6.17157 21 9 21H15C17.8284 21 19.2426 21 20.1213 20.1213C21 19.2426 21 17.8284 21 15"
                          stroke="#888"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M12 3V16M12 16L16 11.625M12 16L8 11.625"
                          stroke="#888"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </LayoutOne>
</template>

<script>
import { useUtilsStore } from "~~/store/utils";
import LayoutOne from "~/layouts/LayoutOne.vue";
import HeaderSubPage1 from "~/components/header/HeaderSubPage1.vue";
import policyImage from "../assets/img/headerPage/B_Policy.png"; // นำเข้าภาพแบบ ES6
import sal from "sal.js";
export default {
  data() {
    return {
      headData: {
        title: "PolicyofWasteProcurement",
        breadcrumbs: ["Policy", "PolicyofWasteProcurement"],
        banner: policyImage,
      },
    };
  },
  mounted() {
    sal();
  },
  components: { LayoutOne, HeaderSubPage1 },
};
</script>
