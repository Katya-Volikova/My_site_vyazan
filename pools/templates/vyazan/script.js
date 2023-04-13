const burger = document.querySelector("#burger");
let counter = 0;
burger.onclick = function () {
  const menuList = document.querySelector(".header__nav-left");
  const background = document.querySelector(".header__nav-wrapper-mob");
  if (counter === 0) {
    menuList.style.display = "block";
    background.style.background = "#fff";
    counter++;
  } else {
    menuList.style.display = "none";
    background.style.background = "none";
    counter = 0;
  }
};












const catalog = document.querySelector("#catalog");
catalog.addEventListener("click", (e) => {
  const menu = document.querySelector(".nav__item-catalog");
  const wooman = document.querySelector(".wooman");
  const man = document.querySelector(".man");
  const manBtn = wooman.querySelector(".manBtn");
  const child = document.querySelector(".child");
  const childBtn = wooman.querySelector(".childBtn");
  menu.style.display = "block";


  manBtn.addEventListener("click", () => {
    wooman.style.display = "none";
    child.style.display = "none";
    man.style.display = "flex";
    const childBtn = man.querySelector(".childBtn");
    const woomanBtn = man.querySelector(".woomanBtn");

    woomanBtn.addEventListener("click", () => {
      wooman.style.display = "flex";
      man.style.display = "none";
      child.style.display = "none";

    });
    childBtn.addEventListener("click", () => {
      wooman.style.display = "none";
      man.style.display = "none";
      child.style.display = "flex";
    });
  });

  childBtn.addEventListener("click", () => {
    wooman.style.display = "none";
    child.style.display = "flex";
    man.style.display = "none";
    const manBtn = child.querySelector(".manBtn");
    const woomanBtn = child.querySelector(".woomanBtn");
    const b6 = child.querySelector(".B6-14");
    const w6 = child.querySelector(".W6-14");
    const mb6 = child.querySelector(".b6-5");

    b6.addEventListener("click", () => {
      const w6 = child.querySelector(".W6-14");
      const mb6 = child.querySelector(".b6-5");
      const products1 = child.querySelectorAll(".W6-14-item");
      const products2 = child.querySelectorAll(".B6-14-item");
      const products3 = child.querySelectorAll(".b6-5-item");
      for (let i = 0; i < products1.length; i++) {
        products1[i].style.display = "none";
      }
      for (let i = 0; i < products2.length; i++) {
        products2[i].style.display = "block";
      }
      for (let i = 0; i < products3.length; i++) {
        products3[i].style.display = "none";
      }
      products2[products2.length - 1].style.marginTop = "36px";
      products3[products3.length - 1].style.marginTop = "36px";
      if (w6.classList.contains = "catalog__menu-itemActive") {
      w6.classList.remove("catalog__menu-itemActive");
      } else if (mb6.classList.contains = "catalog__menu-itemActive") {
        mb6.classList.remove("catalog__menu-itemActive");
      }
      b6.classList.add("catalog__menu-itemActive");

      w6.addEventListener("click", () => {
        w6.classList.add("catalog__menu-itemActive");
        if ((b6.classList.contains = "catalog__menu-itemActive")) {
          b6.classList.remove("catalog__menu-itemActive");
        } else if ((mb6.classList.contains = "catalog__menu-itemActive")) {
          mb6.classList.remove("catalog__menu-itemActive");
        }
        for (let i = 0; i < products2.length; i++) {
          products2[i].style.display = "none";
        }
        for (let i = 0; i < products1.length; i++) {
          products1[i].style.display = "block";
        }
        for (let i = 0; i < products3.length; i++) {
          products3[i].style.display = "none";
        }
      });
      mb6.addEventListener("click", () => {
          console.log("fefe");
          mb6.classList.add("catalog__menu-itemActive");
          if (w6.classList.contains = "catalog__menu-itemActive") {
          w6.classList.remove("catalog__menu-itemActive");
          } else if (b6.classList.contains = "catalog__menu-itemActive") {
            b6.classList.remove("catalog__menu-itemActive");
          }
          for (let i = 0; i < products2.length; i++) {
            products2[i].style.display = "none";
          }
          for (let i = 0; i < products3.length; i++) {
            products3[i].style.display = "block";
          }
          for (let i = 0; i < products1.length; i++) {
            products1[i].style.display = "none";
          }
        });







    });







    w6.addEventListener("click", () => {
      const b6 = child.querySelector(".B6-14");
      const mb6 = child.querySelector(".b6-5");
      const products1 = child.querySelectorAll(".W6-14-item");
      const products2 = child.querySelectorAll(".B6-14-item");
      const products3 = child.querySelectorAll(".b6-5-item");
      for (let i = 0; i < products1.length; i++) {
        products1[i].style.display = "none";
      }
      for (let i = 0; i < products2.length; i++) {
        products2[i].style.display = "block";
      }
      for (let i = 0; i < products3.length; i++) {
        products3[i].style.display = "none";
      }
      products2[products2.length - 1].style.marginTop = "36px";
      products3[products3.length - 1].style.marginTop = "36px";
      if (b6.classList.contains = "catalog__menu-itemActive") {
      wb.classList.remove("catalog__menu-itemActive");
      } else if (mb6.classList.contains = "catalog__menu-itemActive") {
        mb6.classList.remove("catalog__menu-itemActive");
      }
      w6.classList.add("catalog__menu-itemActive");

      b6.addEventListener("click", () => {
        b6.classList.add("catalog__menu-itemActive");
        if ((w6.classList.contains = "catalog__menu-itemActive")) {
          w6.classList.remove("catalog__menu-itemActive");
        } else if ((mb6.classList.contains = "catalog__menu-itemActive")) {
          mb6.classList.remove("catalog__menu-itemActive");
        }
        for (let i = 0; i < products2.length; i++) {
          products2[i].style.display = "block";
        }
        for (let i = 0; i < products1.length; i++) {
          products1[i].style.display = "none";
        }
        for (let i = 0; i < products3.length; i++) {
          products3[i].style.display = "none";
        }
      });
      mb6.addEventListener("click", () => {
          console.log("fefe");
          mb6.classList.add("catalog__menu-itemActive");
          if (w6.classList.contains = "catalog__menu-itemActive") {
          w6.classList.remove("catalog__menu-itemActive");
          } else if (b6.classList.contains = "catalog__menu-itemActive") {
            b6.classList.remove("catalog__menu-itemActive");
          }
          for (let i = 0; i < products2.length; i++) {
            products2[i].style.display = "none";
          }
          for (let i = 0; i < products3.length; i++) {
            products3[i].style.display = "block";
          }
          for (let i = 0; i < products1.length; i++) {
            products1[i].style.display = "none";
          }
        });

        





















        




    });



    mb6.addEventListener("click", () => {
      const b6 = child.querySelector(".B6-14");
      const w6 = child.querySelector(".W6-14");
      const products1 = child.querySelectorAll(".W6-14-item");
      const products2 = child.querySelectorAll(".B6-14-item");
      const products3 = child.querySelectorAll(".b6-5-item");
      for (let i = 0; i < products1.length; i++) {
        products1[i].style.display = "none";
      }
      for (let i = 0; i < products2.length; i++) {
        products2[i].style.display = "none";
      }
      for (let i = 0; i < products3.length; i++) {
        products3[i].style.display = "block";
      }
      products2[products2.length - 1].style.marginTop = "36px";
      products3[products3.length - 1].style.marginTop = "36px";
      if (b6.classList.contains = "catalog__menu-itemActive") {
      b6.classList.remove("catalog__menu-itemActive");
      } else if (w6.classList.contains = "catalog__menu-itemActive") {
        w6.classList.remove("catalog__menu-itemActive");
      }
      mb6.classList.add("catalog__menu-itemActive");

      b6.addEventListener("click", () => {
        b6.classList.add("catalog__menu-itemActive");
        if ((w6.classList.contains = "catalog__menu-itemActive")) {
          w6.classList.remove("catalog__menu-itemActive");
        } else if ((mb6.classList.contains = "catalog__menu-itemActive")) {
          mb6.classList.remove("catalog__menu-itemActive");
        }
        for (let i = 0; i < products2.length; i++) {
          products2[i].style.display = "block";
        }
        for (let i = 0; i < products1.length; i++) {
          products1[i].style.display = "none";
        }
        for (let i = 0; i < products3.length; i++) {
          products3[i].style.display = "none";
        }
      });
      w6.addEventListener("click", () => {
          w6.classList.add("catalog__menu-itemActive");
          if (mb6.classList.contains = "catalog__menu-itemActive") {
          mb6.classList.remove("catalog__menu-itemActive");
          } else if (b6.classList.contains = "catalog__menu-itemActive") {
            b6.classList.remove("catalog__menu-itemActive");
          }
          for (let i = 0; i < products2.length; i++) {
            products2[i].style.display = "none";
          }
          for (let i = 0; i < products3.length; i++) {
            products3[i].style.display = "block";
          }
          for (let i = 0; i < products1.length; i++) {
            products1[i].style.display = "none";
          }
        });
    mb6.addEventListener("click", () => {
      const b6 = child.querySelector(".B6-14");
      const w6 = child.querySelector(".W6-14");
      const products1 = child.querySelectorAll(".W6-14-item");
      const products2 = child.querySelectorAll(".B6-14-item");
      const products3 = child.querySelectorAll(".b6-5-item");
      for (let i = 0; i < products1.length; i++) {
        products1[i].style.display = "block";
      }
      for (let i = 0; i < products2.length; i++) {
        products2[i].style.display = "none";
      }
      for (let i = 0; i < products3.length; i++) {
        products3[i].style.display = "none";
      }
      products2[products2.length - 1].style.marginTop = "36px";
      products3[products3.length - 1].style.marginTop = "36px";
      if (b6.classList.contains = "catalog__menu-itemActive") {
      b6.classList.remove("catalog__menu-itemActive");
      } else if (w6.classList.contains = "catalog__menu-itemActive") {
        w6.classList.remove("catalog__menu-itemActive");
      }
      mb6.classList.add("catalog__menu-itemActive");

      b6.addEventListener("click", () => {
        b6.classList.add("catalog__menu-itemActive");
        if ((w6.classList.contains = "catalog__menu-itemActive")) {
          w6.classList.remove("catalog__menu-itemActive");
        } else if ((mb6.classList.contains = "catalog__menu-itemActive")) {
          mb6.classList.remove("catalog__menu-itemActive");
        }
        for (let i = 0; i < products2.length; i++) {
          products2[i].style.display = "block";
        }
        for (let i = 0; i < products1.length; i++) {
          products1[i].style.display = "none";
        }
        for (let i = 0; i < products3.length; i++) {
          products3[i].style.display = "none";
        }
      });
      w6.addEventListener("click", () => {
        w6.classList.add("catalog__menu-itemActive");
        if (mb6.classList.contains = "catalog__menu-itemActive") {
        mb6.classList.remove("catalog__menu-itemActive");
        } else if (b6.classList.contains = "catalog__menu-itemActive") {
          b6.classList.remove("catalog__menu-itemActive");
        }
        for (let i = 0; i < products2.length; i++) {
          products2[i].style.display = "none";
        }
        for (let i = 0; i < products3.length; i++) {
          products3[i].style.display = "block";
        }
        for (let i = 0; i < products1.length; i++) {
          products1[i].style.display = "none";
        }
        });
    });
    woomanBtn.addEventListener("click", () => {
      wooman.style.display = "flex";
      man.style.display = "none";
      child.style.display = "none";
    });
    manBtn.addEventListener("click", () => {
      wooman.style.display = "none";
      man.style.display = "flex";
      child.style.display = "none";
    });
  });
})
});
