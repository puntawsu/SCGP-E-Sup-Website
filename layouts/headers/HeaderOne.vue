<template>
  <header>
    <div class="header__area">
      <div
        :class="`header__bottom header__sticky  ${
          isSticky ? 'header-sticky' : ''
        }`"
        id="header-sticky">
        <div class="container">
          <div class="mega-menu-wrapper p-relative">
            <div class="row align-items-center justify-content-between">
              <div class="col-xxl-2 col-xl-2 col-lg-2">
                <div
                  class="col-xxl-2 col-xl-2 col-lg-2 col-md-4 col-sm-5 col-8">
                  <div class="logo logo-border">
                    <nuxt-link :to="localePath('/')">
                      <img
                        src="~/assets/img/SCGP_Logo_Full-Version_Isolated.webp"
                        alt="logo" />
                    </nuxt-link>
                  </div>
                </div>
              </div>
              <div class="col-xxl-10 col-xl-10 col-lg-10">
                <div class="row align-items-center justify-content-between">
                  <div
                    class="col-xxl-12 col-xl-12 col-lg-12 hide-on-mobile text-end">
                    <div class="main-menu-top main-menu main-menu-ff-space">
                      <nav id="">
                        <ul>
                          <li class="border-r">
                            <a href="/" class="search-open-btn">
                              <svg
                                class="w-6 h-6 text-gray-800 dark:text-white"
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
                                  d="m4 12 8-8 8 8M6 10.5V19a1 1 0 0 0 1 1h3v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h3a1 1 0 0 0 1-1v-8.5" />
                              </svg>
                            </a>
                          </li>

                          <li class="border-r">
                            <a
                              @click.prevent="handleSearch"
                              href="#"
                              class="search-open-btn">
                              <svg
                                class="w-6 h-6 text-gray-800 dark:text-white"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="none"
                                viewBox="0 0 24 24">
                                <path
                                  stroke="currentColor"
                                  stroke-linecap="round"
                                  stroke-width="2"
                                  d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" />
                              </svg>
                            </a>
                          </li>
                          <li>
                            <NuxtLink>{{ $t("la") }}</NuxtLink>
                            <ul class="submenu submenu-lang">
                              <li
                                :class="
                                  currentLocale == 'th' ? 'select-lang' : ''
                                ">
                                <NuxtLink @click="switchLocale('th')">
                                  TH
                                </NuxtLink>
                              </li>
                              <li
                                :class="
                                  currentLocale == 'en' ? 'select-lang' : ''
                                ">
                                <NuxtLink @click="switchLocale('en')">
                                  EN
                                </NuxtLink>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
                <div class="row align-items-center justify-content-between">
                  <div
                    class="col-xxl-12 col-xl-12 col-lg-12 hide-on-mobile text-end">
                    <div class="main-menu main-menu-ff-space">
                      <nav id="">
                        <ul>
                          <li
                            class="li-menu"
                            v-for="(menu, i) in menuData"
                            :key="i"
                            :class="`${
                              menu.hasDropdown ? 'has-dropdown' : ''
                            }`">
                            <!-- <div v-if="!menu.link" class="notlink">
                              {{ $t(menu.title) }}
                            </div> -->
                            <a
                              v-if="isValidURL(menu.link)"
                              :href="menu.link"
                              target="_blank"
                              rel="noopener noreferrer">
                              {{ $t(menu.title) }}
                            </a>
                            <NuxtLink
                              v-else
                              :to="menu.link ? localePath(menu.link) : ''">
                              {{ $t(menu.title) }}
                            </NuxtLink>

                            <ul class="submenu" v-if="menu.hasDropdown">
                              <li v-for="(sub, i) in menu.submenus" :key="i">
                                <a
                                  v-if="isValidURL(sub.link)"
                                  :href="sub.link"
                                  target="_blank"
                                  rel="noopener noreferrer">
                                  {{
                                    currentLocale == "th" && sub.title_th
                                      ? sub.title_th
                                      : $t(sub.title)
                                  }}
                                </a>
                                <NuxtLink v-else :to="localePath(sub.link)">
                                  {{
                                    currentLocale == "th" && sub.title_th
                                      ? sub.title_th
                                      : $t(sub.title)
                                  }}
                                </NuxtLink>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="hamburger-menu hide-on-web" @click="toggleMenu">
          <div :class="{ bar: true, open: isOpen }"></div>
          <div :class="{ bar: true, open: isOpen }"></div>
          <div :class="{ bar: true, open: isOpen }"></div>
        </div>
        <div class="side-menu" :class="{ open: isOpen }">
          <ul>
            <li v-for="item in menuData" :key="item.id">
              <nuxt-link @click="setSupMenuOpen(item)">
                {{ $t(item.title) }}
              </nuxt-link>
              <ul v-if="item.hasDropdown && item.title == SupMenuOpen">
                <li v-for="submenu in item.submenus" :key="submenu.title">
                  <a
                    v-if="isValidURL(submenu.link)"
                    :href="submenu.link"
                    target="_blank"
                    rel="noopener noreferrer">
                    {{ $t(submenu.title) }}
                  </a>
                  <nuxt-link v-else :to="localePath(submenu.link)">
                    {{ $t(submenu.title) }}
                  </nuxt-link>
                </li>
              </ul>
            </li>
          </ul>

          <div class="row lang-mobile">
            <div class="lang-mobile-col col-3 col-xs-3">
              <a href="/" class="search-open-btn">
                <svg
                  class="w-6 h-6 text-gray-800 dark:text-white"
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
                    d="m4 12 8-8 8 8M6 10.5V19a1 1 0 0 0 1 1h3v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h3a1 1 0 0 0 1-1v-8.5" />
                </svg>
              </a>
            </div>
          </div>
          <div class="row lang-mobile">
            <div
              class="lang-mobile-col col-3 col-xs-3"
              :class="currentLocale == 'th' ? 'select-lang-mobile' : ''"
              style="border-right: 1px solid #0083ca">
              <NuxtLink @click="switchLocale('th')">TH</NuxtLink>
            </div>
            <div
              class="lang-mobile-col col-3 col-xs-3"
              :class="currentLocale == 'en' ? 'select-lang-mobile' : ''">
              <NuxtLink @click="switchLocale('en')">EN</NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- search popup start -->
    <SearchPopup ref="SearchPopup" />
    <!-- search popup end -->
  </header>

  <!-- off canvas full start -->
  <off-canvas-main ref="off_canvas" v-if="!commonOffcanvas" />
  <!-- off canvas full end -->

  <!-- commonOffcanvas start -->
  <off-canvas-six ref="off_canvas" v-if="commonOffcanvas" />
  <!-- commonOffcanvas end -->
</template>

<script>
import { useUtilsStore } from "~~/store/utils";
import { fetchGet } from "~/services/fetch"; // Import your fetchPost function
export default {
  data() {
    return {
      isSticky: false,
      isOpen: false,
      SupMenuOpen: "",
      menuData: [
        {
          id: 1,
          hasDropdown: true,
          title: "Policy",
          link: null,
          submenus: [
            { title: "PolicyofProcurement", link: "/policyOfProcurement" },
            { title: "PolicyofWasteProcurement", link: "/policyOfWaste" },
            { title: "SupplierDiversity", link: "/supplierDiversity" },
            { title: "Conflictmineral", link: "/conflictmineral" },
            { title: "HumanRight", link: "" },
          ],
        },
        {
          id: 2,
          hasDropdown: true,
          title: "SustainableSupplierManagement",
          link: null,
          submenus: [
            {
              title: "ESG",
              link: "https://sustainability.scgpackaging.com/th/governance/supply-chain-stewardship",
            },
            // { title: "SupplierManagement", link: "/supplierManagement" },
            // { title: "EmpoweringBusinessPartnersforSustainability​", link: "/supplierManagement" },
          ],
        },
        {
          id: 3,
          hasDropdown: false,
          title: "SupplierCodeofConduct",
          link: "/supplierCodeofConduct",
          submenus: [],
        },
        {
          id: 4,
          hasDropdown: true,
          title: "News",
          link: null,
          submenus: [
            { title: "LatestNews", link: "/latestNews" },
            { title: "SavingRules", link: "/latestNews/#saving" },
          ],
        },
        {
          id: 5,
          hasDropdown: false,
          title: "BecomeaPartner",
          link: "/becomeaPartner",
        },
        {
          id: 6,
          hasDropdown: false,
          title: "ContactUs",
          // link: '#',
          link: "https://www.scgpackaging.com/en/contact",
        },
      ],
    };
  },
  props: {
    commonOffcanvas: {
      type: Boolean,
      default: false,
    },
  },
  components: {},

  methods: {
    isValidURL(str) {
      try {
        // ใช้ URL object ตรวจสอบว่าเป็น URL ที่ถูกต้อง
        new URL(str);
        return true;
      } catch (_) {
        return false;
      }
    },
    async getmenuData() {
      if (this.$i18n.locale == "th") {
        console.log("th");

        this.menuData[0].submenus.find(
          (item) => item.title == "HumanRight"
        ).link =
          "https://sustainability.scgpackaging.com/th/social/human-rights ​";
      } else {
        this.menuData[0].submenus.find(
          (item) => item.title == "HumanRight"
        ).link =
          "https://sustainability.scgpackaging.com/en/social/human-rights ​";
        console.log("en");
      }
      const res = await fetchGet("/media/get-advertise");
      setTimeout(() => {
        console.log(res);
        let menu = this.menuData.filter((item) => {
          return item.id == 2;
        });
        // return;
        console.log(menu[0].submenus);
        console.log(res.reverse());
        this.$nextTick(() => {
          res.forEach((element) => {
            console.log(element);

            menu[0].submenus.push({
              title: element.media_main_title_en,
              title_th: element.media_main_title_th,
              link: "/contentorther?id=" + element.id,
            });

            console.log(menu);
          });
        });
      }, 100);
    },

    setSupMenuOpen(item) {
      if (item.hasDropdown) {
        this.SupMenuOpen = item.title;
      } else {
        if (this.isValidURL(item.link)) {
          window.open(item.link, "_blank");
        } else {
          this.$router.push(item.link);
        }
      }
    },

    toggleMenu() {
      this.isOpen = !this.isOpen;
    },
    switchLocale(locale) {
      this.$i18n.setLocale(locale);
    },
    handleSearch() {
      this.$refs.SearchPopup.show();
    },
    handleOffCanvas() {
      this.$refs.off_canvas.openOffcanvas();
    },
    handleSticky() {
      if (window.scrollY > 80) {
        this.isSticky = true;
      } else {
        this.isSticky = false;
      }
    },
  },
  computed: {
    currentLocale() {
      return this.$i18n.locale;
    },
  },
  setup() {
    const utils = useUtilsStore();
    return { utils };
  },
  mounted() {
    this.getmenuData();
    window.addEventListener("scroll", this.handleSticky);
  },
};
</script>
