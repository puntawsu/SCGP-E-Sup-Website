export default {
  data() {
    return {
      menuData: [
        {
          id: 1,
          hasDropdown: true,
          title: "Demos",
          link: "/",
          submenus: [
            { title: "Main Home", link: "/" },
            { title: "Lawyer", link: "/home-lawyer" },
            { title: "Freelancer", link: "/home-freelancer" },
            { title: "Digital Agency", link: "/home-agency" },
            { title: "Photographer", link: "/home-photographer" },
            { title: "Startup", link: "/home-startup" },
            { title: "Creative Agency", link: "/home-creative" },
            { title: "Personal Portfolio", link: "/home-portfolio" },
            { title: "Architecture", link: "/home-architecture" },
            { title: "Vertical Slider", link: "/home-vertical" },
            { title: "Politician", link: "/home-politician" },
            { title: "Minimal Shop", link: "/home-shop" },
            { title: "Swiper Slider", link: "/home-swiper" },
          ],
        },
       
      ],
    };
  },
};
