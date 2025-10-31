<template>
  <section
    id="managingSuppliers"
    class="managingSuppliers-area container mt-50 mb-50"
    style="padding-top: 100px; margin-top: -40px"
    v-if="detail.length > 0"> 
    
    <template v-for="(data, k) in detail">
    <div class="row justify-content-center">
      <div class="col-sm-12 mb-50 title">
        <h3>{{ this.$i18n.locale == 'th'
          ? data.media_main_title_th
          : data.media_main_title_en}}</h3>
      </div>
    </div>
   
      <div class="row align-items-center top-zone mb-50"
      :style="data.media_image_position == 'Left' ? 'flex-direction: row-reverse;' : ''"
      >

        <div class="bg-linear hide-on-web right mb-20">
          <div class="banner-Zone">
            <img :src="data.mediaFile.path" alt="" />
          </div>
        </div>
        <div class="col-11 col-lg-4 left">
          <div
            class="Title"
            v-html="
              this.$i18n.locale == 'th'
                ? data.media_main_detail_th
                : data.media_main_detail_en
            "></div>

            <div class="btn-readmore-zone" v-if="data.media_link">
              <div class="btn-readmore">
                <a
                  target="_blank"
                  :href="data.media_link"
                  class=" ">
               {{  this.$i18n.locale == 'th'
                ? data.media_text_button_th
                : data.media_text_button_en }}
                </a>
                <svg
                  class="w-6 h-6 text-gray-800 dark:text-white btn-readmore-icon"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
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
        <div class="col-sm-12 col-lg-8 right hide-on-mobile">
          <div class="banner-Zone">
            <img :src="data.mediaFile.path" alt="" />
          </div>
        </div>
      </div>
    </template>

    <div class="row mt-50 bottom-zone">
      <div class="col-sm-12 col-lg-5 left">
        <div>
          <p>
            <span> {{ $t("SCGP") }}</span>
            {{ $t("HomeManagingSuppliers-detail1") }}
          </p>
        </div>
      </div>

      <div class="col-sm-12 col-lg-7 right">
        <div>
          <p>
            {{ $t("HomeManagingSuppliers-detail2") }}
          </p>
        </div>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-sm-12 col-md-10 text-end d-flex justify-content-end">
        <div class="btn-readmore-zone">
          <div class="btn-readmore">
            <a
              target="_blank"
              href="https://investor.scgpackaging.com/storage/content/corporate-governance/corporate-governance-policies-and-guidelines-of-scg-packaging/20211125-scgp-diversity-and-inclusion-policy-th.pdf"
              class=" ">
              {{ $t("ReadMore") }}
            </a>
            <svg
              class="w-6 h-6 text-gray-800 dark:text-white btn-readmore-icon"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
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
  </section>
</template>

<script>
import SalScrollAnimationMixin from "~/mixins/SalScrollAnimationMixin";
import { fetchGet } from "~/services/fetch"; // Import your fetchPost function

export default {
  mixins: [SalScrollAnimationMixin],
  data() {
    return {
      detail: [],
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      const res = await fetchGet("/media/get-advertise");
      setTimeout(() => {
        this.$nextTick(() => {
          this.detail = res;
        });
      }, 100);
    },
  },
};
</script>
