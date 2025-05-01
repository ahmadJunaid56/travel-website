(function ($) {
  "use strict";

  // Dropdown on mouse hover
  $(document).ready(function () {
    function toggleNavbarMethod() {
      if ($(window).width() > 992) {
        $(".navbar .dropdown")
          .on("mouseover", function () {
            $(".dropdown-toggle", this).trigger("click");
          })
          .on("mouseout", function () {
            $(".dropdown-toggle", this).trigger("click").blur();
          });
      } else {
        $(".navbar .dropdown").off("mouseover").off("mouseout");
      }
    }
    toggleNavbarMethod();
    $(window).resize(toggleNavbarMethod);
  });

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });
  $(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
    return false;
  });

  // Date and time picker
  $(".date").datetimepicker({
    format: "L",
  });
  $(".time").datetimepicker({
    format: "LT",
  });

  // Testimonials carousel
  $(".testimonial-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1500,
    margin: 30,
    dots: true,
    loop: true,
    center: true,
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
    },
  });
})(jQuery);

function searchItems() {
  const searchTerm = document.getElementById("searchInput").value.toLowerCase();

  // Example search logic
  if (searchTerm.includes("beach")) {
    alert("Recommended Beaches:\n1. Bali\n2. Maldives");
  } else if (searchTerm.includes("temple")) {
    alert("Recommended Temples:\n1. Angkor Wat\n2. Meenakshi Temple");
  } else if (searchTerm.includes("country")) {
    alert("Recommended Countries:\n1. Japan\n2. Italy");
  } else {
    alert("No recommendations found.");
  }
}

function clearSearch() {
  document.getElementById("searchInput").value = "";
}
const beaches = [
  { name: "Beach 1", img: "img/beach1.jpeg" },
  { name: "Beach 2", img: "img/beach2.jpeg" },
];

const temples = [
  { name: "Temple 1", img: "img/temple1.jpeg" },
  { name: "Temple 2", img: "img/temple2.jpeg" },
];

const countries = [
  { name: "Country 1", img: "img/country1.jpeg" },
  { name: "Country 2", img: "img/country2.jpeg" },
];

function searchItems() {
  const searchTerm = document.getElementById("searchInput").value.toLowerCase();

  // Clear previous results
  document.getElementById("beachResults").innerHTML = "";
  document.getElementById("templeResults").innerHTML = "";
  document.getElementById("countryResults").innerHTML = "";

  // Beach Search
  if (searchTerm.includes("beach")) {
    displayResults(beaches, "beachResults");
  }

  // Temple Search
  if (searchTerm.includes("temple")) {
    displayResults(temples, "templeResults");
  }

  // Country Search
  if (searchTerm.includes("country")) {
    displayResults(countries, "countryResults");
  }
}

function displayResults(items, containerId) {
  const container = document.getElementById(containerId);
  items.forEach((item) => {
    const div = document.createElement("div");
    div.classList.add("col-lg-4", "col-md-6", "mb-4");
    div.innerHTML = `
      <div class="destination-item position-relative overflow-hidden mb-2">
          <img class="img-fluid" src="${item.img}" alt="${item.name}" data-toggle="modal" data-target="#imageModal" onclick="openModal('${item.img}')">
          <div class="destination-overlay text-white text-decoration-none">
              <h5 class="text-white">${item.name}</h5>
          </div>
      </div>
    `;
    container.appendChild(div);
  });
}

function openModal(imageUrl) {
  // Set the image source for the modal
  document.getElementById("modalImage").src = imageUrl;
}
