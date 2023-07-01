const removeClassOnScroll = (scroller, para) => {
     window.addEventListener("scroll", () => {
          if (scroller.classList.contains(para)) {
               scroller.classList.remove(para);
          }
     });
};

const box1 = document.querySelector("#box1");
const box2 = document.querySelector("#box2");

removeClassOnScroll(box1, "active");
removeClassOnScroll(box2, "active");