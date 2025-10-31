<template>
  <section class="news-area">
    <div class="container news-container card">
      <div class="row align-items-end">
        <div
          class="col-xxl-12 col-sm-12"
          data-sal="slide-down"
          data-sal-delay="170"
          data-sal-duration="1000">
          <div class="news-title-wrapper mb-30 mt-20">
            <p class="news-title">News & Events</p>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-xxl-12">
          <div
            class="team__slider wow fadeInUp"
            data-sal="slide-up"
            data-sal-delay="130"
            data-sal-duration="1200">
            <swiper
              :slidesPerView="2"
              :spaceBetween="20"
              class="team__slider-active swiper-container"
              :loop="false"
              :modules="modules"
              :pagination="{
                el: '.team-slider-dot',
                clickable: true,
              }"
              :breakpoints="{
                1200: {
                  slidesPerView: 2,
                },
                992: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 1,
                },
                576: {
                  slidesPerView: 1,
                },
                0: {
                  slidesPerView: 1,
                },
              }">
              <swiper-slide
                v-for="(item, i) in NewsData"
                :key="i">
                <SingleNews :item="item" />
              </swiper-slide>
            </swiper>
            <div class="team-slider-dot tp-swiper-dot text-center mt-50"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// external
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Navigation, EffectFade } from "swiper";
// internal
import teamData from "~~/mixins/teamData";
import SingleNews from "../news/SingleNews.vue";
import SalScrollAnimationMixin from "~/mixins/SalScrollAnimationMixin";

export default {
  mixins: [teamData, SalScrollAnimationMixin],
  props: {
    el_style: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    Swiper,
    SwiperSlide,
    SingleNews,
  },
  setup() {
    return {
      modules: [Pagination, Navigation, EffectFade],
    };
  },
  data() {
    return {
      NewsData: [
        // home teams
        {
          id: 1,
          img: "../assets/img/home/newsmocup.jpg",
          date: "2021-09-01",
          title:
            "VKPC ติดอันดับ 1 ใน 100 บริษัทด้านความยั่งยืน ในประเทศเวียดนาม",
          desc: "เว็บไซต์นี้มีข้อมูลและทรัพยากรที่มีค่าสำหรับการทำธุรกิจกับ เอสซีจีพีซึ่งเป็นแหล่งข้อมูลศูนย์กลาง เกี่ยวกับองค์กรจัดซื้อจัดจ้าง นโยบาย และขั้นตอนของ SCGP นอกจากนี้ยังเชื่อมโยงซัพพลายเออร์ ปัจจุบันกับ Coupa Resource Portal แนวทางปฏิบัติ และทรัพยากรอื่นๆ ซัพพลายเออร์ของเราเป็น สิ่งสำคัญต่อความสำเร็จของเรา ไม่ว่าคุณจะเป็นซัพพลายเออร์ปัจจุบันหรือผู้ที่มีศักยภาพ เราขอเชิญ ชวนคุณสำรวจเว็บไซต์เพื่อเรียนรู้เพิ่มเติมเกี่ยวกับองค์กรของเราและวิธีการร่วมมือกับเรา ",
        },
        {
          id: 2,
          img: "../../assets/img/home/bannerSupplierDiversity.jpg",
          date: "2021-09-01",
          title:
            "VKPC ติดอันดับ 1 ใน 100 บริษัทด้านความยั่งยืน ในประเทศเวียดนาม",
          desc: "เว็บไซต์นี้มีข้อมูลและทรัพยากรที่มีค่าสำหรับการทำธุรกิจกับ เอสซีจีพีซึ่งเป็นแหล่งข้อมูลศูนย์กลาง เกี่ยวกับองค์กรจัดซื้อจัดจ้าง นโยบาย และขั้นตอนของ SCGP นอกจากนี้ยังเชื่อมโยงซัพพลายเออร์ ปัจจุบันกับ Coupa Resource Portal แนวทางปฏิบัติ และทรัพยากรอื่นๆ ซัพพลายเออร์ของเราเป็น สิ่งสำคัญต่อความสำเร็จของเรา ไม่ว่าคุณจะเป็นซัพพลายเออร์ปัจจุบันหรือผู้ที่มีศักยภาพ เราขอเชิญ ชวนคุณสำรวจเว็บไซต์เพื่อเรียนรู้เพิ่มเติมเกี่ยวกับองค์กรของเราและวิธีการร่วมมือกับเรา ",
        },
        {
          id: 3,
          img: "../../assets/img/home/bannerSupplierDiversity.jpg",
          date: "2021-09-01",
          title:
            "VKPC ติดอันดับ 1 ใน 100 บริษัทด้านความยั่งยืน ในประเทศเวียดนาม",
          desc: "เว็บไซต์นี้มีข้อมูลและทรัพยากรที่มีค่าสำหรับการทำธุรกิจกับ เอสซีจีพีซึ่งเป็นแหล่งข้อมูลศูนย์กลาง เกี่ยวกับองค์กรจัดซื้อจัดจ้าง นโยบาย และขั้นตอนของ SCGP นอกจากนี้ยังเชื่อมโยงซัพพลายเออร์ ปัจจุบันกับ Coupa Resource Portal แนวทางปฏิบัติ และทรัพยากรอื่นๆ ซัพพลายเออร์ของเราเป็น สิ่งสำคัญต่อความสำเร็จของเรา ไม่ว่าคุณจะเป็นซัพพลายเออร์ปัจจุบันหรือผู้ที่มีศักยภาพ เราขอเชิญ ชวนคุณสำรวจเว็บไซต์เพื่อเรียนรู้เพิ่มเติมเกี่ยวกับองค์กรของเราและวิธีการร่วมมือกับเรา ",
        },
        {
          id: 4,
          img: "../../assets/img/home/bannerSupplierDiversity.jpg",
          date: "2021-09-01",
          title:
            "VKPC ติดอันดับ 1 ใน 100 บริษัทด้านความยั่งยืน ในประเทศเวียดนาม",
          desc: "เว็บไซต์นี้มีข้อมูลและทรัพยากรที่มีค่าสำหรับการทำธุรกิจกับ เอสซีจีพีซึ่งเป็นแหล่งข้อมูลศูนย์กลาง เกี่ยวกับองค์กรจัดซื้อจัดจ้าง นโยบาย และขั้นตอนของ SCGP นอกจากนี้ยังเชื่อมโยงซัพพลายเออร์ ปัจจุบันกับ Coupa Resource Portal แนวทางปฏิบัติ และทรัพยากรอื่นๆ ซัพพลายเออร์ของเราเป็น สิ่งสำคัญต่อความสำเร็จของเรา ไม่ว่าคุณจะเป็นซัพพลายเออร์ปัจจุบันหรือผู้ที่มีศักยภาพ เราขอเชิญ ชวนคุณสำรวจเว็บไซต์เพื่อเรียนรู้เพิ่มเติมเกี่ยวกับองค์กรของเราและวิธีการร่วมมือกับเรา ",
        },
      ],
    };
  },
};
</script>
