<template>
  <LayoutOne>
    <div id="news">
      <HeaderSubPage1 :headData="headData" />
      
      <div class="latestNews_Page">
        <div class="container">
          <div class="row detail justify-content-center">
            <div class="col-12 col-sm-12">
              <news :lim="5" />
            </div>
          </div>
          <div class="row detail justify-content-center" >
            <div class="col-12 col-sm-12">
              <savingRules />
            </div>
          </div>
        </div>
      </div>
    </div>
  </LayoutOne>
</template>

<script>
import LayoutOne from "~/layouts/LayoutOne.vue";
import HeaderSubPage1 from "~/components/header/HeaderSubPage1.vue";
import news from "~/components/news/news.vue";
import savingRules from "~/components/news/savingRules.vue";

import B_News from "../assets/img/headerPage/B_News.png"; // นำเข้าภาพแบบ ES6
import { fetchGet, fetchPost } from '~/services/fetch'; // Update with the correct path

export default {
  components: { LayoutOne, HeaderSubPage1, news, savingRules },
  data() {
    return {
       getData: null,
      headData: {
        title: "LatestNews",
        breadcrumbs: ["LatestNews"],
        banner: B_News,
      },
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
     async fetchData() {
      try {
        this.getData = await fetchGet('/media/get-by-menu/{menu_id}?menu_id=1');
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
  },
};
</script>
