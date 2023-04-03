/* DESTACADOS - OPCIONES*/
const optionsOutstanding = {
  dots: "#dots-outstanding",
  slidesToScroll: 1,
  dragVelocity: 2,
  scrollLock: true,
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
        slidesToShow: 4,
      },
    },
  ],
};
/* OFERTAS - OPCIONES*/
const optionsOffer = {
  dots: "#dots-offer",
  slidesToScroll: 1,
  dragVelocity: 2,
  scrollLock: true,
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
        slidesToShow: 4,
      },
    },
  ],
};
/* RELACIONADOS - OPCIONES */
const optionsRelated = {
  dots: "#dots-related",
  slidesToScroll: 1,
  dragVelocity: 2,
  scrollLock: true,
  rewind: true,
  duration: 2,
  draggable: true,
  arrows: {
    prev: ".glider-prev.glider-prev-related",
    next: ".glider-next.glider-next-related",
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
};
/* GALERÍA DETALLE DE PRODUCTOS VISTA MOBILE - OPCIONES */
const optionsDetailProducts = {
  dots: "#dots-detail",
  slidesToScroll: 1,
  dragVelocity: 2,
  scrollLock: true,
  loop: true,
  duration: 2,
  draggable: true,
  arrows: {
    prev: ".glider-prev.glider-prev-detail",
    next: ".glider-next.glider-next-detail",
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
        slidesToShow: 1,
      },
    },
  ],
};
/* TODOS LOS PRODUCTOS --> VISTA - OPCIONES */
const optionsProductsAll = {
  dots: "#dots-products",
  slidesToScroll: 1,
  dragVelocity: 2,
  scrollLock: true,
  rewind:true,
  duration: 2,
  draggable: true,
  arrows: {
    prev: ".glider-prev.glider-prev-products",
    next: ".glider-next.glider-next-products",
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
  ],
};

/* TODOS LOS PRODUCTOS --> VISTA - OPCIONES */
const gliderImgAdmin = {
  slidesToScroll: 1,
  duration: 2,
  draggable: true,
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
      breakpoint: 102,
      settings: {
        slidesToShow: 3,
      },
    },
  ],
};

const glidersObj = [
  /* DESTACADOS */
  {
    className: ".glider-outstanding",
    options: optionsOutstanding,
  },
  /* OFERTAS */
  {
    className: ".glider-offer",
    options: optionsOffer,
  },
  /* GALERÍA DETALLE DE PRODUCTOS */
  {
    className: ".glider-detail",
    options: optionsDetailProducts,
  },
  /* DETALLE DE PRODUCTOS --> RELACIONADOS */
  {
    className: ".glider-related",
    options: optionsRelated,
  },
  /* TODOS LOS PRODUCTOS --> VISTA */
  {
    className: ".glider-products",
    options: optionsProductsAll,
  },
  /* IMÁGENES DE PRODUCTOS --> ADMIN */
  {
    className: ".glider-img-admin",
    options: gliderImgAdmin,
  },
];


/* ---------------||||------------- */
glidersObj.forEach((glider, index) => {
  const $glider = document.querySelector(glider.className);
  window.addEventListener("load", function () {
    if ($glider) {
      new Glider($glider, glidersObj[index].options);
    }
  });
});