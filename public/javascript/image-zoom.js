$(".product-img--main")
  // tile mouse actions
  .on("mouseover", function () {
    $(this)
      .children(".product-img--main__image")
      .css({
        transform:
          "scale(" +
          $(this).attr("data-scale") +
          ")" , 'background-size': 'contain'
      });
    $('.product-image--img').css({opacity:0})
  })
  .on("mouseout", function () {
    $(this)
      .children(".product-img--main__image")
      .css({ transform: "scale(1)" , 'background-size': 'contain'  });
      $('.product-image--img').css({opacity:1})
  })
  $(".product-img--main")
  .on("mousemove", function (e) {
    $(this)
      .children(".product-img--main__image")
      .css({
        "transform-origin":
          ((e.pageX - $(this).offset().left) / $(this).width()) * 100 +
          "% " +
          ((e.pageY - $(this).offset().top) / $(this).height()) * 100 +
          "%",
      });
  })
  .each(function () {
    $(this)
      // add a image container
      .append('<div class="product-img--main__image"></div>')
      // set up a background image for each tile based on data-image attribute
      .children(".product-img--main__image")
      .css({ "background-image": "url(" + $(this).attr("data-image") + ")" });
  });

$(".image-list img").on("mouseover", function (e) {
  console.log("estoy activo");
  $(".product-img--main__image")
    .css({ "background-image": "url(" + e.target.src + ")" })
    .children(".product-img--main__image")
    .css({ "background-size": "cover" });
});
