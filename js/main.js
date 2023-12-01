// all
$('.toggler').click(function(e){
  e.preventDefault();
  $(this).toggleClass('active');
});

// pane
$('.pane-open').click(function(e){
  e.preventDefault();
  $('body').addClass('overflow-none');
  let paneId = $($(this)).attr('href');
  let currentPane = document.querySelector(paneId)
  if(!currentPane.classList.contains('show')){
    $('.pane').removeClass('show');
    $(currentPane).addClass('show');
  } else{
    $(currentPane).removeClass('show');
    $('body').removeClass('overflow-none');
  }
})

$('.pane-close').click(function(e){
  e.preventDefault();
  $('body').addClass('overflow-none');
    let paneId = $($(this)).attr('href');
    let currentPane = document.querySelector(paneId);
    $(currentPane).removeClass('show');
    $('body').removeClass('overflow-none');
})

// dropdown
$('.dropdown__toggle').click(function(e) {
  e.preventDefault();
  let dropdownContainer = $(this).parent();

  dropdownContainer.toggleClass('open');
  $(this).toggleClass('active');

  dropdownContainer.find('.dropdown-menu__close').click(function(e) {
    e.preventDefault();
    dropdownContainer.removeClass('open');
    $(dropdownContainer).find('.dropdown__toggle').removeClass('active');
    dropdownContainer.find('.dropdown-menu__close').off('click');
  });

  $(document).mouseup(function(e) {
    if (dropdownContainer.has(e.target).length === 0) {
      dropdownContainer.removeClass('open');
      $(dropdownContainer).find('.dropdown__toggle').removeClass('active');
      dropdownContainer.find('.dropdown-menu__close').off('click');
    }
  });
});

// fake-select
$(".fake-select__item").click(function(){
  $(this).parents(".fake-select").find(".fake-select__item").removeClass("active");
  $(this).addClass("active");
  $(this).parents(".fake-select").find(".fake-select__value").html(this.innerHTML);
  $(this).parents(".fake-select").find(".fake-select__link").removeClass("active");
  $(this).parents(".fake-select").removeClass("open");
});

// collapse
$(".collapse-link").click(function(e){
  e.preventDefault();

  let target = $(this.getAttribute("href"));

  if($(this).hasClass("active")){
    if(target.hasClass("slow")){
      target.slideUp(600);
    } else{
      target.slideUp(300);
    }
  } else{
    if(target.hasClass("slow")){
      target.slideDown(600);
    } else{
      target.slideDown(300);
    }
  }

  $(this).toggleClass("active");
});

// tabs
$('.tab-link').click(function(e){
    e.preventDefault();
    $(this).parents(".tab-nav").find('.tab-link').removeClass('active');
    $(this).addClass('active');
    $(this).closest('.tab-section').find('.tab-pane').removeClass('active');
    $(this.getAttribute("href")).addClass('active');
});

// modal
$(".modal-open").click(function(e){
  e.preventDefault();
  $(".modal").removeClass("show");
  $(this.getAttribute("href")).addClass("show");
  $('body').removeClass('overflow-none');
  $('body').addClass('overflow-none');
})
$(".modal").mousedown(function(e){
  let closeLinks = document.querySelectorAll(".modal-close");
  let modalsGroup = document.querySelectorAll(".modal");

  for(let elem of closeLinks){
    if(e.target == elem){
      $(this).removeClass("show");
      $('body').removeClass('overflow-none');
    }
  }
  for(let elem of modalsGroup){
    if(e.target == elem){
      $(this).removeClass("show");
      $('body').removeClass('overflow-none');
    }
  }
})

// home
new Swiper(".configuration-slider", {
  slidesPerView: 1,
  spaceBetween: 30,
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },
    1400: {
      slidesPerView: 4,
    },
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// range
let priceRange = document.getElementById('price-range');

if(priceRange){
  noUiSlider.create(priceRange, {
    connect: true,
    start: [0, 150000],
    range: {
      'min': 0,
      'max': 150000
    },
  });

  let nodes = [
    document.getElementById('lower-value'),
    document.getElementById('upper-value')
  ];

  priceRange.noUiSlider.on('update', function (values, handle) {

    if(handle){
      nodes[handle].value = "до " + Math.ceil(values[handle]);
    } else{
      nodes[handle].value = "від " + Math.ceil(values[handle]);
    }
  });
}


// sort
$(".sort-arrow").click(function(e){
  e.preventDefault();
  $(this).parents(".sort-arrows").find(".sort-arrow").removeClass("active");
  $(this).addClass("active");
});

// fixed nav
document.addEventListener("DOMContentLoaded", function(){
  let componentsNav = document.querySelector('.components-nav');
  let componentsNavTop = componentsNav.offsetTop;

  window.onscroll = function(){
    if(window.pageYOffset > componentsNavTop){
      $(componentsNav).addClass("fixed");
    } else{
      $(componentsNav).removeClass("fixed");
    }
  }
});

// video
$('.video-block').each(function() {
  let video = $(this).find('.embed-responsive-item')[0];
  let playBtn = $(this).find(".play-btn");

  playBtn.on('click', function(e) {
    e.preventDefault();
    $(this).hide();
    video.play();
    video.controls = true;
  });

  video.addEventListener('click', function() {
    if (!video.paused) {
      video.pause();
      playBtn.show();
      video.controls = false;
    }
  });

  video.onended = function() {
    playBtn.show();
    video.controls = false;
  };
});

new Swiper(".videos-slider", {
  loop: true,
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  thumbs: {
    swiper: {
      el: ".videos-slider-thumbs",
      slidesPerView: 4,
      spaceBetween: 43,
      breakpoints: {
        "@0.00": {
          slidesPerView: 3,
        },
        992: {
          slidesPerView: 4,
        },
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
    },
  },
});

if(window.innerWidth < 768){
  new Swiper(".question-slider", {
    slidesPerView: 1,
    spaceBetween: 15,
    loop: true,
    autoHeight: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
}

// input number
jQuery(($) => {
  $(document).on('click', '.input-number__minus', function () {
      let total = $(this).next();
      if (total.val() > 1) {
        total.val(+total.val() - 1);
      }
  });
  $(document).on('click', '.input-number__plus', function () {
      let total = $(this).prev();
      total.val(+total.val() + 1);
  });
  document.querySelectorAll('.input-number__input').forEach(function (el) {
      el.addEventListener('input', function () {
          this.value = this.value.replace(/[^\d]/g, '');
      });
  });
});

$(".packing-link").click(function(){
  $("body").toggleClass("overflow-none")
})

// login
$(".pass-view").click(function(e){
  e.preventDefault();

  $(this).toggleClass('active')

  let inputPass = $(this).parents(".form-group").find('.form-control');

  if (inputPass.prop("type") === "password"){
    inputPass.prop("type", "text");
  } else{
    inputPass.prop("type", "password");
  }
})

// compare
let compareSlider =  new Swiper(".compare-slider", {
  slidesPerView: 1,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    576: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },
  },
});

let compareTableHeadingRows = document.querySelectorAll(".compare-table-heading tr");
let compareTables = document.querySelectorAll(".swiper-slide .compare-item__table");


for(let table of compareTables){
  for(let i = 0; i < compareTableHeadingRows.length; i++){
    let rowHeightHeading = parseInt(getComputedStyle(compareTableHeadingRows[i]).height);
    let rowHeight = parseInt(getComputedStyle(table.rows[i]).height);

    if(rowHeightHeading > rowHeight){
      table.rows[i].style.height = rowHeightHeading + "px"
    }

    if(rowHeightHeading < rowHeight){
      compareTableHeadingRows[i].style.height = rowHeight + "px"
    }
  }
}

// remove
$(".remove-link").click(function(e){
  e.preventDefault();
  $(this).parents(".remove-block").remove();

  if($(this).parents(".swiper")){
    compareSlider.update();
  }
})


// theme
const themeToggle = document.getElementById('checkbox-switch');
const body = document.body;
const currentTheme = localStorage.getItem('theme');


function toggleTheme() {
  if (body.classList.contains('dark-theme')) {
    body.classList.remove('dark-theme');
    localStorage.setItem('theme', 'light-theme');
  } else {
    body.classList.add('dark-theme');
    localStorage.setItem('theme', 'dark-theme');
  }
}

if (currentTheme) {
  body.classList.add(currentTheme);

  if(currentTheme === 'dark-theme'){
    themeToggle.checked = true;
  }
}

themeToggle.addEventListener('click', toggleTheme);

// add
if(window.innerWidth < 768){
  $('.btn-add').click(function(e){
    e.preventDefault();
    let curentID = $(this).attr('href');
    let name = $(this).parents('.catalogue-item').find('.catalogue-item__name').text();
    let image = $(this).parents('.catalogue-item').find('.catalogue-item__image img').attr('src');
    let price = $(this).parents('.catalogue-item').find('.catalogue-item__price').html();

    $(`${curentID}`).after(`
    <div class="packing-item d-flex align-items-center packing-item_swipe">
      <a href="#" class="packing-item__image"><img src="${image}" alt="" class="img-fluid"></a>
      <div class="packing-item__content">
          <a href="#" class="packing-item__name">${name}</a>
          <div class="packing-item__amount">
              <div class="input-number">
                  <div class="input-number__minus"></div>
                  <input type="text" class="input-number__input" value="1">
                  <div class="input-number__plus"></div>
              </div>
          </div>
          <div class="packing-item__price">${price}</div>
      </div>
      <div class="btn-group packing-item__btn-group">
          <a href="#" class="btn btn_secondary btn_size-sm w-100">Замінити</a>
          <a href="#" class="btn btn_outline btn_size-sm w-100">Видалити</a>
      </div>
      <div class="icon-del-md icon packing-item__del"></div>
    </div>
    `);

    $(this).parents('.modal').removeClass("show");
    $('body').removeClass('overflow-none');
  });

  $(document).on('mousedown touchstart', '.packing-item_swipe', function(event) {
    // Запоминаем начальную позицию прикосновения
    $(this).data('startX', event.pageX || event.originalEvent.touches[0].pageX);
  });

  $(document).on('mouseup touchend', '.packing-item_swipe', function(event) {
      const startX = $(this).data('startX');
      // Определяем конечную позицию прикосновения
      const endX = event.pageX || event.originalEvent.changedTouches[0].pageX;

      // Расстояние, на которое был совершен свайп
      const distance = endX - startX;

      // Если свайп был влево (отрицательное расстояние), смещаем элемент влево и удаляем
      if (distance < -50) {
          $(this).animate({ margin: '0 100% 0 -100%' }, 500, function() {
              $(this).remove();
          });
      }
  });

}

