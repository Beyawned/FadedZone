/* Bootstrap Carousel JS */
(function () {
    'use strict';
  
    var carousel = document.querySelectorAll('.carousel');
    carousel.forEach(function (carousel) {
      var items = carousel.querySelectorAll('.carousel-item');
      var currentIndex = 0;
      var interval = 5000; // 5 seconds
  
      function showNextItem() {
        items[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % items.length;
        items[currentIndex].classList.add('active');
      }
  
      setInterval(showNextItem, interval);
    });
  
    var prevButtons = document.querySelectorAll('.carousel-control-prev');
    var nextButtons = document.querySelectorAll('.carousel-control-next');
  
    prevButtons.forEach(function (button) {
      button.addEventListener('click', function () {
        var carousel = button.closest('.carousel');
        var items = carousel.querySelectorAll('.carousel-item');
        items[currentIndex].classList.remove('active');
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        items[currentIndex].classList.add('active');
      });
    });
  
    nextButtons.forEach(function (button) {
      button.addEventListener('click', function () {
        var carousel = button.closest('.carousel');
        var items = carousel.querySelectorAll('.carousel-item');
        items[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % items.length;
        items[currentIndex].classList.add('active');
      });
    });
  })();
  