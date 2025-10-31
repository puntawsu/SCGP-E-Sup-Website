<template>
  <LayoutOne>
    <HeaderSubPage1 :headData="headData" />

    <div class="SupplierCodeofConduct_Page">
      <div class="container">
        <div
          class="title"
          data-sal="slide-left"
          data-sal-delay="170"
          data-sal-duration="1000"
        >
          <h3>​ {{ $t("SupplierCodeofConduct") }}</h3>
        </div>
        <div class="row detail">
          <div class="col-12 col-lg-6">
            <div
              class="img"
              data-sal="slide-left"
              data-sal-delay="170"
              data-sal-duration="1000"
            >
              <img src="../assets/img/SupplierCodeofConduct.jpg" alt="" />
            </div>
          </div>
          <div class="col--12 col-lg-6">
            <div class="top-zone">
              <div
                class="top-text"
                data-sal="fade"
                data-sal-delay="300"
                data-sal-duration="1000"
              >
                <span> {{ $t("SCGP") }} </span>
                {{ $t("supplierCodeofConduct-title") }}
              </div>
            </div>
            <div class="bottom-zone ">
              <div
                class="row"
                v-for="(data, i) in listData"
                data-sal="slide-up"
                data-sal-delay="170"
                data-sal-duration="1000"
              >
                <div class="col-2">
                  <div :class="`numcolor${i} num-padding`">
                    <div class="num">
                      {{ data.num }}
                    </div>
                  </div>
                </div>
                <div class="col-10">
                  <div class="detail">
                    <span>
                      {{ $t("supplierCodeofConduct-subtitle" + data.num) }}
                      :</span
                    >
                    {{ $t("supplierCodeofConduct-detail" + data.num) }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- <div class="row detail">
          <div class="bottom-zone bottom-zone-mobile hide-on-web">
            <div class="row" v-for="(data, i) in listData">
              <div class="col-2">
                <div :class="`numcolor${i} num-padding`">
                  <div class="num">
                    {{ data.num }}
                  </div>
                </div>
              </div>
              <div class="col-10">
                <div class="detail">
                  <span>
                    {{ $t("supplierCodeofConduct-subtitle" + data.num) }}
                    :</span
                  >
                  {{ $t("supplierCodeofConduct-detail" + data.num) }}
                </div>
              </div>
            </div>
          </div>
        </div> -->

        <div
          class="row justify-content-center px-4"
          style="margin-top: 2rem"
          data-sal="slide-right"
          data-sal-delay="300"
          data-sal-duration="700"
        >
                  {{ $t("supplierCodeofConduct-footer") }}
         
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
                'https://sustainability.scgpackaging.com/storage/documents/policies-guidelines-key-stakeholders/scgp-supplier-code-of-conduct-' +
                this.$i18n.locale +
                '.pdf'
              "
              class="card"
              target="_bank"
            >
              <div class="card-body">
                <div class="row justify-content-center m-0 mb-2">
                  <h4 class="card-title">

                  {{ $t("SupplierCodeofConduct") }}

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
import LayoutOne from "~/layouts/LayoutOne.vue";
import HeaderSubPage1 from "~/components/header/HeaderSubPage1.vue";
import SupplierCodeofConductImage from "../assets/img/headerPage/B_ SupplierCodeofConduct.png"; // นำเข้าภาพแบบ ES6

import sal from "sal.js";
export default {
  data() {
    return {
      headData: {
        title: "SupplierCodeofConduct",
        breadcrumbs: ["SupplierCodeofConduct"],
        banner: SupplierCodeofConductImage,
      },
      listData: [
        {
          num: 1,
          title: "จริยธรรมทางธุรกิจ",
          detail:
            "ดำเนินธุรกิจอย่างซื่อสัตย์สุจริต เป็นธรรมกับผู้มีส่วนได้เสียทุกฝ่าย เปิดเผยข้อมูลอย่างถูกต้องครบถ้วน รักษาความลับ และเคารพในทรัพย์สินทางปัญญาของผู้อื่น​",
        },
        {
          num: 2,
          title: "แรงงานและสิทธิมนุษยชน",
          detail:
            "ไม่เลือกปฏิบัติโดยไม่เป็นธรรม ให้ความสำคัญกับการคุ้มครองแรงงานโดยเฉพาะแรงงานเด็ก สตรี และแรงงานต่างด้าว ไม่บังคับใช้แรงงานในลักษณะแรงงานทาสดูแลการจ่ายค่าจ้าง ผลประโยชน์ และการกำหนดระยะเวลาการทำงานอย่างถูกต้องและเป็นธรรม​",
        },
        {
          num: 3,
          title: "อาชีวอนามัย และความปลอดภัย",
          detail:
            "ดูแลสภาพแวดล้อมในการทำงานให้ถูกสุขลักษณะและปลอดภัย ควบคุมความเสี่ยงของการเกิดอุบัติเหตุและผลกระทบต่อสุขภาพที่อาจเกิดจากการปฏิบัติงาน และการจัดให้มีอุปกรณ์ป้องกันอันตรายส่วนบุคคลให้เพียงพอและพร้อมใช้งานเสมอ",
        },
        {
          num: 4,
          title: "สิ่งแวดล้อม",
          detail:
            "ดำเนินธุรกิจโดยคำนึงถึงผลกระทบต่อทรัพยากรธรรมชาติและสิ่งแวดล้อมตามหลัก 3R ได้แก่ การลดปริมาณการใช้ (Reduce) การนำกลับมาใช้ซ้ำหรือใช้ใหม่ (Reuse/Recycle) และการสร้างทดแทน (Replenish)",
        },
        {
          num: 5,
          title: "กฎหมายและข้อกำหนด",
          detail:
            "ปฏิบัติตามกฎหมาย ข้อกำหนด และกฎระเบียบต่างๆ ที่เกี่ยวข้องทั้งหมด",
        },
      ],
    };
  },
  components: { LayoutOne, HeaderSubPage1 },
  mounted() {
    sal();
  },
};
</script>
