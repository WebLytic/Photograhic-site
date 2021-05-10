// Home page button-borrder animation
$(".home-explore-btn")
  .on("mouseenter", () => {
    if (window.innerWidth <= 767) {
      return;
    }
    $(".border").css("border", "64px solid #FBFBFB");
  })
  .on("mouseout", () => {
    $(".border").css("border", "0px solid #FBFBFB");
  });

  $(".home-explore-btn")
  .on("mouseenter", () => {
    if (window.innerWidth >= 767) {
      return;
    }
    $(".border").css("border-top", "64px solid #FBFBFB");
    $(".border").css("border-bottom", "130px solid #FBFBFB");
    $(".border").css("border-left", "20px solid #FBFBFB");
    $(".border").css("border-right", "20px solid #FBFBFB");
  })
  .on("mouseout", () => {
    $(".border").css("border", "0px solid #FBFBFB");
  });

  $(".home-explore-btn")
  .on("mouseenter", () => {
    if (window.innerWidth >= 376) {
      return;
    }
    $(".border").css("border-top", "64px solid #FBFBFB");
    $(".border").css("border-bottom", "130px solid #FBFBFB");
    $(".border").css("border-left", "11px solid #FBFBFB");
    $(".border").css("border-right", "11px solid #FBFBFB");
  })
  .on("mouseout", () => {
    $(".border").css("border", "0px solid #FBFBFB");
  });

// Shop page buttons-borrder animations
$(".shop-buttons > a")
  .on("mouseenter", () => {
    $(".border").css("border", "0px solid #FBFBFB");
  })
  .on("mouseout", () => {
    if (window.innerWidth <= 375) {
      $(".border").css("border", "64px solid #FBFBFB");
      $(".border").css("border-left", "10px solid #FBFBFB");
      $(".border").css("border-right", "10px solid #FBFBFB");
    } else if (window.innerWidth <= 768) {
      $(".border").css("border", "64px solid #FBFBFB");
      $(".border").css("border-left", "20px solid #FBFBFB");
      $(".border").css("border-right", "20px solid #FBFBFB");
    } else {
      $(".border").css("border", "64px solid #FBFBFB");
    }
  });

// Projects page item text animation
$(".project-content")
  .on("mouseenter", (e) => {
    $(e.delegateTarget).children("p").css("opacity", "1");
  })
  .on("mouseout", (e) => {
    $(e.delegateTarget).children("p").css("opacity", "0");
  })
  .on("click", (e) => {
    $(e.delegateTarget)
      .parent(".project-item")
      .children(".project-undersite")
      .toggleClass("active-undersite");
  });

// Burger menu toggle
$(".burger-menu").click((e) => {
  $(".hamburger").toggleClass("is-active");
  $(".nav-menu-overrlay").toggleClass("nav-menu-active");

  var r = document.querySelector(":root");
  var rs = getComputedStyle(r);
  rs.getPropertyValue("--color") === "#ffffff"
    ? r.style.setProperty("--color", "#242424")
    : r.style.setProperty("--color", "#ffffff");
});

//Scroll animation
window.onscroll = (e) => {
  const scrollAmount = window.scrollY / document.body.scrollHeight;

  $(".scroll-item").css("background-position-x", `${scrollAmount * 100}%`);
};

$(".svg-wrapper")
  .on("mouseenter", (e) => {
    if ($(e.target).parent("ul").length === 0) return;
    $(".active-nav-item").addClass("deactive-nav-item");
  })
  .on("mouseout", (e) => {
    if ($(e.target).parent("ul").length === 0) return;
    $(".active-nav-item").removeClass("deactive-nav-item");
  });
