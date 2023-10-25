window.onload = function() {
    let slideIndex = 0;
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    function showSlide(index) {
        for (let i = 0; i < totalSlides; i++) {
            slides[i].style.display = 'none';
        }
        slides[index].style.display = 'block';
    }

    document.querySelector('.prev-button').addEventListener('click', function() {
        slideIndex = (slideIndex - 1 + totalSlides) % totalSlides;
        showSlide(slideIndex);
    });

    document.querySelector('.next-button').addEventListener('click', function() {
        slideIndex = (slideIndex + 1) % totalSlides;
        showSlide(slideIndex);
    });

    // แสดงสไลด์แรกเมื่อหน้าเว็บโหลดเสร็จ
    showSlide(slideIndex);
};
