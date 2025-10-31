<template>
  <div
    class="latestNews_savingRules_Components"
    style="margin-top: 2rem; padding-top: 10rem"
    id="saving">
    <div class="title">
      <div class="row justify-content-center">
        <div class="col-12 col-sm-12">
          <div class="text">{{ $t("SavingRules") }}</div>
        </div>
      </div>
    </div>
    <div class="detail">
      <div class="row justify-content-center">
        <div
          class="col-12 col-sm-12 col-md-4 img-zone"
          data-sal="slide-right"
          data-sal-delay="500"
          data-sal-duration="700">
          <div class="img">
            <img
              v-if="this.$i18n.locale == 'th'"
              src="~/assets/img/LSR_TH.jpg"
              alt="savingRules" />
            <img v-else src="~/assets/img/LSR_Eng.jpg" alt="savingRules" />
          </div>
        </div>
        <div class="col-12 col-sm-12 col-md-8" v-if="savingRuleslist">
          <div
            class="row_savingRules row justify-content-center"
            v-for="(value, k) in savingRuleslist">
            <template v-if="k <= limit">
              <div class="col-12 col-sm-12 col-md-8 title-savingRules">
                {{
                  this.$i18n.locale == "th"
                    ? value.media_main_title_th
                    : value.media_main_title_en
                }}
              </div>
              <div class="col-2 col-sm-2 hide-on-web"></div>
              <div
                class="col-12 col-sm-12 col-md-2 Download-col"
                @click="downloadPdf(value.mediaFile)">
                <div class="text">Download</div>
                <div class="icon">
                  <svg
                    width="20px"
                    height="20px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                      <g id="Interface / Download">
                        <path
                          id="Vector"
                          d="M6 21H18M12 3V17M12 17L17 12M12 17L7 12"
                          stroke="#747474"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"></path>
                      </g>
                    </g>
                  </svg>
                </div>
              </div>
              <div
                class="col-12 col-sm-12 col-md-2 viewOnline-col"
                @click="viewPdf(value.mediaFile)">
                <div class="text">
                  View Online
                  <div class="underline"></div>
                </div>
                <div class="icon">
                  <svg
                    fill="#747474"
                    width="24px"
                    height="24px"
                    viewBox="0 0 36 36"
                    version="1.1"
                    preserveAspectRatio="xMidYMid meet"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                      <title>world-line</title>
                      <path
                        d="M26.54,18a19.38,19.38,0,0,0-.43-4h3.6a12.3,12.3,0,0,0-.67-1.6H25.69A19.72,19.72,0,0,0,22.8,6.53a12.3,12.3,0,0,0-2.55-.76,17.83,17.83,0,0,1,3.89,6.59H18.75V5.6c-.25,0-.51,0-.77,0s-.49,0-.73,0v6.77H11.86a17.83,17.83,0,0,1,3.9-6.6,12.28,12.28,0,0,0-2.54.75,19.72,19.72,0,0,0-2.91,5.85H6.94A12.3,12.3,0,0,0,6.26,14H9.89a19.38,19.38,0,0,0-.43,4,19.67,19.67,0,0,0,.5,4.37H6.42A12.34,12.34,0,0,0,7.16,24h3.23a19.32,19.32,0,0,0,2.69,5.36,12.28,12.28,0,0,0,2.61.79A17.91,17.91,0,0,1,12,24h5.26v6.34c.24,0,.49,0,.73,0s.51,0,.77,0V24H24a17.9,17.9,0,0,1-3.7,6.15,12.28,12.28,0,0,0,2.62-.81A19.32,19.32,0,0,0,25.61,24h3.2a12.34,12.34,0,0,0,.74-1.6H26A19.67,19.67,0,0,0,26.54,18Zm-9.29,4.37H11.51a17.69,17.69,0,0,1-.09-8.4h5.83Zm7.24,0H18.75V14h5.83A18.21,18.21,0,0,1,25,18,18.12,18.12,0,0,1,24.49,22.37Z"
                        class="clr-i-outline clr-i-outline-path-1"></path>
                      <path
                        d="M18,2A16,16,0,1,0,34,18,16,16,0,0,0,18,2Zm0,30A14,14,0,1,1,32,18,14,14,0,0,1,18,32Z"
                        class="clr-i-outline clr-i-outline-path-2"></path>
                      <rect
                        x="0"
                        y="0"
                        width="36"
                        height="36"
                        fill-opacity="0"></rect>
                    </g>
                  </svg>
                </div>
              </div>
            </template>
            <!-- <div class="col-12 col-sm-12">
              <div class="desc">{{ value.desc }}</div>
            </div> -->
          </div>
          <!-- <div
            class="col-12 col-sm-12 btn-see-all"
            data-sal="slide-up"
            data-sal-delay="700"
            data-sal-duration="700">
            <div class="btn" @click="seeAll()">ดูทั้งหมด</div>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { format } from "date-fns";
import { th } from "date-fns/locale";
import { fetchGet } from "~/services/fetch"; // Import your fetchPost function

import sal from "sal.js";
export default {
  data() {
    return {
      openList: "",
      dataCount: 0,
      limit: 100,
      savingRuleslist: [],
    };
  },
  mounted() {
    this.fetchData();
    sal();
  },
  methods: {
    seeAll() {
      console.log(this.dataCount);
      this.limit = this.dataCount;
      console.log(this.limit);
    },
    async fetchData() {
      const res = await fetchGet("/media/get-report-mosm");

      console.log(res.data);
      setTimeout(() => {
        this.$nextTick(() => {
          this.dataCount = res.count;
          this.savingRuleslist = res.data;
        });
      }, 100);
    },

    formatDate_MY(date) {
      return format(date, "MMMM yyyy", { locale: th });
    },
    formatDate_date(date) {
      return format(date, "dd");
    },
    viewPdf(file) {
      console.log(file);

      if (file?.path) {
        window.open(file.path, "_blank");
      }
    },

    async downloadPdf(file) {
      const pdfUrl = file.path; // URL ของไฟล์ PDF
      try {
        // ส่ง request เพื่อดึงไฟล์ PDF
        const response = await fetch(pdfUrl);
        const blob = await response.blob();

        // สร้าง URL ใหม่สำหรับ blob
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = file.file_name; // ตั้งชื่อไฟล์ที่จะเซฟ
        link.click();

        // ลบ URL ที่สร้างเมื่อเสร็จสิ้นการดาวน์โหลด
        window.URL.revokeObjectURL(url);
      } catch (error) {
        console.error("Error downloading the PDF:", error);
      }
    },
  },
  components: {},
};
</script>
