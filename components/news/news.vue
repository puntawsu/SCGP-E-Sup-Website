<template>
  <div class="latestNews_News_Components">
    <div class="title">
      <div class="row justify-content-center">
        <div class="col-12 col-sm-12 anifadein-300">
          <div class="text">{{ $t('LatestNews') }}</div>
        </div>
      </div>
    </div>
    <div class="detail">
      <div class="row justify-content-center">
        <div class="col-12 col-sm-12 col-md-10" v-if="newslist.length > 0">
          <div :class="'anifadein-' + k * 100" v-for="(value, k) in newslist">
            <div v-if="k + 1 <= lim" class="row_news row">
              <div class="col-2 col-sm-2 date">
                <div class="day">
                  {{ formatDate_date(value.media_main_start_date) }}
                </div>
                <div class="monthYear">
                  {{ formatDate_MY(value.media_main_start_date) }}
                </div>
              </div>
              <div class="col-8 col-sm-9 title-news">
                {{
                  this.$i18n.locale == 'th'
                    ? value.media_main_title_th
                    : value.media_main_title_en
                }}
              </div>
              <div class="col-2 col-sm-1 icon-col">
                <nuxt-link :to="{ path: 'news', query: { id: value.id } }">
                  <div class="icon">
                    <svg
                      fill="#fcaf17"
                      width="24px"
                      height="24px"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      enable-background="new 0 0 24 24"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        <path
                          d="M9.9,17.2c-0.6,0-1-0.4-1-1c0-0.3,0.1-0.5,0.3-0.7l3.5-3.5L9.2,8.5c-0.4-0.4-0.4-1,0-1.4c0.4-0.4,1-0.4,1.4,0l4.2,4.2c0.4,0.4,0.4,1,0,1.4c0,0,0,0,0,0l-4.2,4.2C10.4,17.1,10.1,17.2,9.9,17.2z"
                        ></path>
                      </g>
                    </svg>
                  </div>
                </nuxt-link>
              </div>
              <hr style="margin-top: 1rem" />
            </div>
          </div>
        </div>

        <div
          v-if="newslist.length > 5 && showSeeAll"
          class="col-12 col-sm-12 btn-see-all"
        >
          <nuxt-link :to="localePath('/newsList')">
            <div class="btn">
              {{ $t('seeall') }}
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { format } from 'date-fns';
import { fetchGet } from '~/services/fetch'; // Import your fetchPost function

import { th,enUS  } from 'date-fns/locale';
import sal from 'sal.js';
export default {
  data() {
    return {
      openList: '',
      newslist: [],
    };
  },
  props: {
    showSeeAll: {
      type: Boolean,
      default: true,
    },
    lim: {
      type: Number,
      required: true,
    },
  },
  mounted() {
    this.fetchData();
    sal();
  },
  methods: {
    async fetchData() {
      const res = await fetchGet('/media/get-news');
      console.log(res);
      console.log(res.data);
      setTimeout(() => {
        this.$nextTick(() => {
          this.newslist = res.data;
        });
      }, 100);
    },
    formatDate_MY(date) {
      console.log(this.$i18n.locale);
      let locale = enUS
      if (this.$i18n.locale == 'th') {
        locale = th
      }
      // this.$i18n.locale


      return format(date, 'MMMM yyyy', { locale: locale });
    },
    formatDate_date(date) {
      return format(date, 'dd');
    },
  },
  components: {},
};
</script>
