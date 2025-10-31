<template>
  <section id="tpbanner" class="about__area pb-20">
    <div v-if="images && images.length">
      <!-- <div class="row Bg-banner-img">
        <div class="col-xxl-6 col-xl-6 col-lg-6 pl-30">
        
        </div>
      </div> -->
      <!--  -->
      <div class="carousel-container">
        <div class="curve-zone hide-on-mobile">
          <img src="/assets/img/home/banner_0.png" />
        </div>
        <Carousel
          :perPage="1"
          :wrap-around="true"
          :transition="2000"
       >   
       <!-- :autoplay="5000" -->
          <Slide v-for="(img, index) in images" :key="index">
            <div class="carousel-slide">
              <img class="hide-on-mobile" :src="img.file_web_path" />
              <img class="hide-on-web" :src="img.file_mobile_path" />
              <div class="banner-Text-Zone">
                <div class=" col banner-Text-Zone-Title">
                  <div class=" col Title">
                    <h3>
                      {{ currentLocale == "th" ? img.text_th : img.text_en }}
                    </h3>
                    <div
                      v-html="
                        currentLocale == 'th' ? img.detail_th : img.detail_en
                      "></div>
                  </div>

                  <nuxt-link
                    v-if="img.link_path"
                    :to="
                      img.link_path
                        ? img.link_path
                        : localePath('/becomeaPartner')
                    "
                    class=" col banner-Btn-Zone">
                    <button class="btn banner-Btn-custom">
                      <!-- {{ $t("BecomeaPartner") }} -->
                      {{
                        currentLocale == "th"
                          ? img.button_text_th
                          : img.button_text_en || $t("BecomeaPartner")
                      }}
                    </button>
                  </nuxt-link>
                </div>
              </div>
            </div>
          </Slide>
          <template #addons>
            <Navigation />
            <Pagination />
          </template>
        </Carousel>
      </div>
    </div>
  </section>
</template>

<script>
import { Pagination, Navigation, Carousel, Slide } from "vue3-carousel";
import SalScrollAnimationMixin from "@/mixins/SalScrollAnimationMixin";
import { fetchGet } from "~/services/fetch"; // Import your fetchPost function

export default {
  mixins: [SalScrollAnimationMixin],
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  data() {
    return {
      images: [],
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      const res = await fetchGet("/media/get-homepage-slide");
      console.log(res);
      console.log(res.data[0].link_path);
      setTimeout(() => {
        this.$nextTick(() => {
          this.images = res.data;
        });
      }, 100);
    },
  },
  computed: {
    currentLocale() {
      return this.$i18n.locale;
    },
  },
};
</script>
