$(document).ready(function () {
    // เมื่อหน้าถูกโหลดเสร็จ
    // ซ่อนปุ่ม Back to Top ตั้งแต่ต้น
    $('#back-to-top-btn').css({ display: 'none', position: 'fixed', bottom: '20px', right: '20px' });

    // เมื่อมีการสไลด์
    $(window).scroll(function () {
      // ถ้า scroll มากกว่า 300px แสดงปุ่ม Back to Top, ไม่ก็ซ่อน
      if ($(this).scrollTop() > 300) {
        $('#back-to-top-btn').fadeIn();
      } else {
        $('#back-to-top-btn').fadeOut();
      }
    });

    // เมื่อคลิกที่ปุ่ม Back to Top
    $('#back-to-top-btn').click(function () {
      // ให้ scroll ขึ้นไปด้านบน
      $('html, body').animate({ scrollTop: 0 }, 800);
      return false;
    });
  });
  document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll('.fade-in-on-scroll');
    
    function fadeInOnScroll() {
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
  
        if (sectionTop < windowHeight * 0.75) {
          section.classList.add('active');
        } else {
          section.classList.remove('active');
        }
      });
    }
  
    window.addEventListener('scroll', fadeInOnScroll);
    window.addEventListener('resize', fadeInOnScroll);
  
    // Trigger the fade-in on initial load
    fadeInOnScroll();
  });
  document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
      // เมื่อผ่านไป 3 วินาที ให้เรียกฟังก์ชัน removeBlur เพื่อลบการเบลอ
      removeBlur();
    }, 3000);
  });

  function removeBlur() {
    // ให้รูปทั้งหมดกลับมาเป็นปกติ
    document.getElementById("blurredImage").classList.remove("custom-border");
  }
