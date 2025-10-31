<template>
  <section
    id="procurementPolicy"
    class="procurementPolicy-area container mb-50">
    <div class="row justify-content-center">
      <!-- data-sal="slide-left" -->
      <!-- data-sal-delay="170" -->
      <!-- data-sal-duration="1000" -->
      <div class="col-12 mb-20">
        <h3>{{ $t("ProcurementPolicyTitle") }}</h3>
      </div>
    </div>
    <div class="row">
      <div class="col-12 col-md-6 left">
        <!--  -->
        <div
          class="banner-Zone"
          data-sal="fade"
          data-sal-delay="170"
          data-sal-duration="1000">
          <img src="../../assets/img/home/HomeProcurementPolicy.png" alt="" />
        </div>
      </div>
      <div class="col-12 col-md-6 right">
        <!--  -->
        <div
          class="Title"
          data-sal="slide-down"
          data-sal-delay="170"
          data-sal-duration="1000">
          <div>
            <div
              style="
                display: flex;
                align-items: flex-start;
                line-height: normal;
              ">
              <div v-html="Q1" class="Quotation-icon1"></div>
              <div class="detail1">
                {{ $t("HomeProcurementPolicy-detail1") }}
              </div>
            </div>
            <div class="detail2">
              {{ $t("HomeProcurementPolicy-detail2.1") }}
            </div>
            <div class="detail2">
              {{ $t("HomeProcurementPolicy-detail2.2") }}
            </div>

            <div style="display: flex; align-items: flex-end">
              <div class="detail3">
                {{ $t("HomeProcurementPolicy-detail3") }}
              </div>

              <div v-html="Q2" class="Quotation-icon2"></div>
            </div>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-12 col-md-12 text-end d-flex justify-content-end">
            <div class="col-6 banner-Btn-Zone">
              <nuxt-link
                :to="localePath('/policyOfProcurement')"
                aria-current="page"
                class="router-link-active router-link-exact-active btn banner-Btn-custom">
                {{ $t("HomeProcurementPolicy-btn") }}</nuxt-link
              >
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
  </section>
</template>

<script>
import SalScrollAnimationMixin from "~/mixins/SalScrollAnimationMixin";

export default {
  mixins: [SalScrollAnimationMixin],
  data() {
    return {
      Q1: `  <svg fill="#fcaf17" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="34px" height="34px" viewBox="0 0 98.829 98.829" xml:space="preserve" transform="matrix(-1, 0, 0, 1, 0, 0)" stroke="#fcaf17"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M96.76,41.603C91.511,22.831,78.562,9.204,65.975,9.204c-1.011,0-2.021,0.088-3.005,0.262 c-0.558,0.098-1.046,0.426-1.348,0.902c-0.301,0.479-0.386,1.061-0.233,1.605l2.591,9.268c0.25,0.895,1.113,1.5,2.01,1.459 l0.206-0.004c4.668,0,13.199,6.996,17.548,22.545c0.172,0.617,0.335,1.248,0.492,1.906c-4.882-2.416-10.706-2.975-15.98-1.506 C56.358,48.97,49.388,61.356,52.714,73.252c2.696,9.639,11.563,16.373,21.563,16.373c2.037,0,4.071-0.281,6.046-0.834 c7.846-2.193,13.745-8.707,16.611-18.338C99.521,61.764,99.456,51.249,96.76,41.603z"></path> <path d="M14.088,9.206c-1.009,0-2.02,0.086-3.003,0.26c-0.557,0.096-1.046,0.426-1.347,0.902 c-0.301,0.479-0.386,1.061-0.234,1.605l2.592,9.268c0.25,0.895,1.097,1.5,2.01,1.459l0.204-0.004 c4.668,0,13.2,6.996,17.549,22.545c0.173,0.621,0.336,1.252,0.492,1.906c-4.884-2.416-10.706-2.975-15.98-1.506 C4.475,48.97-2.497,61.356,0.831,73.252c2.696,9.639,11.563,16.373,21.563,16.373c2.037,0,4.071-0.281,6.047-0.834 c7.845-2.193,13.744-8.707,16.611-18.338c2.586-8.689,2.522-19.205-0.175-28.852C39.625,22.831,26.678,9.206,14.088,9.206z"></path> </g> </g> </g></svg>`,
      Q2: `  <svg fill="#fcaf17" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="34px" height="34px" viewBox="0 0 98.829 98.829" xml:space="preserve" transform="matrix(-1, 0, 0, 1, 0, 0)rotate(180)" stroke="#fcaf17"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M96.76,41.603C91.511,22.831,78.562,9.204,65.975,9.204c-1.011,0-2.021,0.088-3.005,0.262 c-0.558,0.098-1.046,0.426-1.348,0.902c-0.301,0.479-0.386,1.061-0.233,1.605l2.591,9.268c0.25,0.895,1.113,1.5,2.01,1.459 l0.206-0.004c4.668,0,13.199,6.996,17.548,22.545c0.172,0.617,0.335,1.248,0.492,1.906c-4.882-2.416-10.706-2.975-15.98-1.506 C56.358,48.97,49.388,61.356,52.714,73.252c2.696,9.639,11.563,16.373,21.563,16.373c2.037,0,4.071-0.281,6.046-0.834 c7.846-2.193,13.745-8.707,16.611-18.338C99.521,61.764,99.456,51.249,96.76,41.603z"></path> <path d="M14.088,9.206c-1.009,0-2.02,0.086-3.003,0.26c-0.557,0.096-1.046,0.426-1.347,0.902 c-0.301,0.479-0.386,1.061-0.234,1.605l2.592,9.268c0.25,0.895,1.097,1.5,2.01,1.459l0.204-0.004 c4.668,0,13.2,6.996,17.549,22.545c0.173,0.621,0.336,1.252,0.492,1.906c-4.884-2.416-10.706-2.975-15.98-1.506 C4.475,48.97-2.497,61.356,0.831,73.252c2.696,9.639,11.563,16.373,21.563,16.373c2.037,0,4.071-0.281,6.047-0.834 c7.845-2.193,13.744-8.707,16.611-18.338c2.586-8.689,2.522-19.205-0.175-28.852C39.625,22.831,26.678,9.206,14.088,9.206z"></path> </g> </g> </g></svg> `,
    };
  },
};
</script>
