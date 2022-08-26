window.addEventListener("load", function () {
  new Glider(document.querySelector(".glider-outstanding"), {
    dots: "#dots-outstanding",
    slidesToScroll: 1,
    dragVelocity: 2,
    scrollLock: true,
    loop: true,
    duration: 2,
    draggable: true,
    arrows: {
      prev: ".glider-prev.glider-prev-outstanding",
      next: ".glider-next.glider-next-outstanding",
    },
    responsive: [
      {
        breakpoint: 0,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
        },
      
      },
    ],
  });
});

window.addEventListener("load", function () {
  new Glider(document.querySelector(".glider-offer"), {
    dots: "#dots-offer",
    slidesToScroll: 1,
    dragVelocity: 2,
    scrollLock: true,
    loop: true,
    duration: 2,
    draggable: true,
    arrows: {
      prev: ".glider-prev.glider-prev-offer",
      next: ".glider-next.glider-next-offer",
    },
    responsive: [
      {
        breakpoint: 0,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
        },
      
      },
    ],
  });
});
