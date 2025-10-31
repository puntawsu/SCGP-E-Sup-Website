<template>
  <LayoutOne>
    <HeaderSubPage1 :headData="headData" />

    <div class="PolicyOfProcurement_Page">
      <div class="container">
        <div
          class="row justify-content-center title"
          data-sal="fade"
          data-sal-delay="100"
          data-sal-duration="700">
          <h3>{{ $t("PolicyofProcurement2") }}</h3>
        </div>
        <div class="row detail justify-content-center">
          <div class="col col-md-10 col-sm-12">
            <div
              class="text"
              v-for="value in PolicyofProcurementDetail"
              data-sal="fade"
              data-sal-delay="300"
              data-sal-duration="700">
              <span> {{ value.title }}  .  </span>
              {{ $t(value.text) }}
              <div class="sub-text" v-for="val in value.supText">
                <span> {{ val.title }}</span>
                {{ $t(val.text) }}
              </div>
            </div>
          </div>
        </div>

        <div
          class="row justify-content-center download-pdf"
          data-sal="slide-up"
          data-sal-delay="300"
          data-sal-duration="700">
          <div class="col-12 col-md-4">
            <a
              :href="
                'https://investor.scgpackaging.com/storage/content/corporate-governance/corporate-governance-policies-and-guidelines-of-scg-packaging/20210309-scgp-procurement-and-vendor-selection-policies-and-guidelines-' +
                this.$i18n.locale +
                '.pdf'
              "
              class="card"
              target="_bank">
              <div class="card-body">
                <div class="row justify-content-center m-0 mb-2">
                  <h4 class="card-title">{{ $t("PolicyofProcurement2") }}</h4>
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
        title: "PolicyofProcurement",
        breadcrumbs: ["Policy", "PolicyofProcurement"],
        banner: policyImage,
      },
      PolicyofProcurementDetail: [
        {
          title: "1",
          text: "PolicyofProcurement3.1",
          supText: [
            {
              title: "- ",
              text: "PolicyofProcurement3.1.1",
            },
            {
              title: "- ",
              text: "PolicyofProcurement3.1.2",
            },
            {
              title: "- ",
              text: "PolicyofProcurement3.1.3",
            },
            {
              title: "- ",
              text: "PolicyofProcurement3.1.4",
            },
            {
              title: "- ",
              text: "PolicyofProcurement3.1.5",
            },
          ],
        },
        {
          title: "2",
          text: "PolicyofProcurement3.2",
          supText: null,
        },
        {
          title: "3",
          text: "PolicyofProcurement3.3",
          supText: null,
        },

        {
          title: "4",
          text: "PolicyofProcurement3.4",
          supText: null,
        },
        {
          title: "5",
          text: "PolicyofProcurement3.5",
          supText: null,
        },
        {
          title: "6",
          text: "PolicyofProcurement3.6",
          supText: null,
        },
        {
          title: "7",
          text: "PolicyofProcurement3.7",
          supText: null,
        },
        {
          title: "8",
          text: "PolicyofProcurement3.8",
          supText: null,
        },
        {
          title: "9",
          text: "PolicyofProcurement3.9",
          supText: null,
        },
        {
          title: "10",
          text: "PolicyofProcurement3.10",
          supText: null,
        },
        {
          title: "11",
          text: "PolicyofProcurement3.11",
          supText: null,
        },
        {
          title: "12",
          text: "PolicyofProcurement3.12",
          supText: null,
        },
        {
          title: "13",
          text: "PolicyofProcurement3.13",
          supText: null,
        },
        {
          title: "14",
          text: "PolicyofProcurement3.14",
          supText: null,
        },
      ],
    };
  },
  mounted() {
    sal();
  },
  components: { LayoutOne, HeaderSubPage1 },
};
</script>
