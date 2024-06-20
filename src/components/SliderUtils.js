import { siblings } from "@glidejs/glide/src/utils/dom";

export const CustomActiveClass = (Glide, Components, Events) => {
  const Component = {
    mount() {
      this.changeActiveSlide();
    },

    changeActiveSlide() {
      const slide = Components.Html.slides[Glide.index];
      const bullets = Components.Controls.items[0];
      const bullet = [...bullets.children].find(
        (bullet) => bullet.getAttribute("data-glide-dir") === `=${Glide.index}`
      );

      bullet.classList.remove("is-next", "is-prev");
      bullet.classList.add("is-active");

      siblings(slide).forEach((sibling) => {
        sibling.classList.remove("is-active", "is-next", "is-prev");
      });
      siblings(bullet).forEach((sibling) => {
        sibling.classList.remove("is-active", "is-next", "is-prev");
      });

      if (slide.nextElementSibling) {
        slide.nextElementSibling.classList.add("is-next");
      }

      if (slide.previousElementSibling) {
        slide.previousElementSibling.classList.add("is-prev");
      }
      if (bullet.nextElementSibling) {
        bullet.nextElementSibling.classList.add("is-next");
      }

      if (bullet.previousElementSibling) {
        bullet.previousElementSibling.classList.add("is-prev");
      }
    },
  };

  Events.on("run", () => {
    Component.changeActiveSlide();
  });

  return Component;
};

