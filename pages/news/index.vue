<template>
  <LayoutOne>
    <div id="news">
      <HeaderSubPage1 :headData="headData" />

      <div class="latestNews_Page">
        <div class="container">
          <div class="row detail justify-content-center">
            <div class="col-12">
              <div class="newPreviewsZone mt-100">
                <div class="row justify-content-center">
                  <div class="col-sm-12 mb-50 title anifadein-300">
                    <h3>
                      {{
                        this.$i18n.locale == 'th'
                          ? newsdata.media_main_title_th
                          : newsdata.media_main_title_en
                      }}
                    </h3>
                  </div>
                </div>
                <div
                  class="row top-zone"
                  :class="
                    newsdata.media_image_position == 'Right'
                      ? 'flex-row-reverse'
                      : 'flex-row'
                  "
                >
                  <div
                    class="right anifadein-300"
                    :class="
                      newsdata.media_image_position == 'Center'
                        ? 'imgcenter col-12'
                        : 'col-6'
                    "
                  >
                    <div class="banner-Zone">
                      <img
                        v-if="newsdata.mediaFileImg?.path"
                        :src="newsdata.mediaFileImg?.path"
                      />
                    </div>
                  </div>

                  <div
                    class="left anifadein-right-500"
                    :class="
                      newsdata.media_image_position == 'Center'
                        ? 'imgcenter col-12 m-50'
                        : 'col-6'
                    "
                  >
                    <div
                      class="Title custom-shape"
                      v-html="
                        this.$i18n.locale == 'th'
                          ? newsdata.media_main_detail_th
                          : newsdata.media_main_detail_en
                      "
                    />
                  </div>
                </div>
                <div
                  class="row justify-content-center download-pdf anifadein-500"
                  v-if="newsdata.mediaFile?.path"
                >
                  <div class="col-12 col-md-4">
                    <a
                      :href="newsdata.mediaFile?.path"
                      class="card"
                      target="_bank"
                    >
                      <div class="card-body">
                        <div class="row justify-content-center m-0 mb-2">
                          <h4 class="card-title">{{ $t('Download PDF') }}</h4>
                        </div>
                        <div class="row m-0 download-pdf-btn">
                          <div class="btn--outline-link">
                            {{ $t('Download') }}
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
                <hr />
                <div class="row justify-content-between anifadein-right-1500">
                  <div class="col-6 Btn-Back-Zone">
                    <nuxtLink
                      :to="{ path: 'latestNews' }"
                      class="btn Btn-Back-custom"
                    >
                      <svg
                        width="12px"
                        height="12px"
                        viewBox="0 0 1920 1920"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          <g fill-rule="evenodd">
                            <path
                              d="M1052 92.168 959.701 0-.234 959.935 959.701 1920l92.299-92.43-867.636-867.635L1052 92.168Z"
                            ></path>
                            <path
                              d="M1920 92.168 1827.7 0 867.766 959.935 1827.7 1920l92.3-92.43-867.64-867.635L1920 92.168Z"
                            ></path>
                          </g>
                        </g>
                      </svg>
                      {{ this.$i18n.locale == 'th' ? 'ย้อนกลับ' : 'Back' }}
                    </nuxtLink>
                  </div>
                  <div v-if="newsdata.media_link" class="col-6 banner-Btn-Zone">
                    <a :href="newsdata.media_link" target="_blank">
                      <div class="btn banner-Btn-custom">
                        {{
                          this.$i18n.locale == 'th'
                            ? newsdata.media_text_button_th
                            : newsdata.media_text_button_en ||
                              $t('BecomeaPartner')
                        }}
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </LayoutOne>
</template>

<script>
import LayoutOne from '~/layouts/LayoutOne.vue';
import B_News from "../../assets/img/headerPage/B_News.png"; // นำเข้าภาพแบบ ES6

import { fetchGet } from '~/services/fetch'; // Import your fetchPost function
const route = useRoute();

export default {
  components: {
    LayoutOne,
  },
  // /media/get-by-id/{media_id}
  data() {
    return {
      newsdata: {},
      headData: {
        title: 'LatestNews',
        breadcrumbs: ['LatestNews' , ],
         banner: B_News,
      },
    };
  },
  mounted() {
    if (route.query.id) {
      console.log(route.query.id);
    }
    this.fetchData();
  },
  methods: {
    async fetchData() {
      const res = await fetchGet('/media/get-by-id/' + useRoute().query.id);

      this.newsdata = res;
      if (this.$i18n.locale == "en") {
        this.headData.title = res.media_main_title_en;
        this.headData.breadcrumbs.push(res.media_main_title_en) ;
      } else {
        this.headData.title = res.media_main_title_th;
        this.headData.breadcrumbs.push(res.media_main_title_th) ;
      }
    },
  },
};
</script>
