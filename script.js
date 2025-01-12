let slideIndex = 0;
let currentPage = 'home'; 

// Fungsi untuk menampilkan slideshow
function showSlides() {
  let slides = document.querySelectorAll(".slide");
  slides.forEach((slide, index) => {
    slide.style.display = "none"; 
  });
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 } 
  slides[slideIndex - 1].style.display = "block"; 
  setTimeout(showSlides, 5000); 
}

// Fungsi untuk berpindah slide
function plusSlides(n) {
  let slides = document.querySelectorAll(".slide");
  slideIndex += n;
  if (slideIndex > slides.length) { slideIndex = 1; }
  if (slideIndex < 1) { slideIndex = slides.length; }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; 
  }
  slides[slideIndex - 1].style.display = "block"; 
}

// Fungsi untuk menampilkan konten berdasarkan section
function showContent(section) {
  let sections = document.querySelectorAll(".content");
  sections.forEach((el) => {
    el.style.display = "none";
  });
  document.getElementById(section + "-content").style.display = "block";
  currentPage = section; 
}

// Fungsi untuk berpindah ke halaman berikutnya
function nextPage(section) {
  let currentContent = document.getElementById(currentPage + "-content");
  let nextContent = document.getElementById(section + "-content");
  currentContent.style.display = "none";
  nextContent.style.display = "block";
  currentPage = section;
}

// Fungsi untuk berpindah ke halaman sebelumnya
function previousPage(section) {
  let currentContent = document.getElementById(currentPage + "-content");
  let previousContent = document.getElementById(section + "-content");
  currentContent.style.display = "none";
  previousContent.style.display = "block";
  currentPage = section;
}

// Fungsi untuk menampilkan foto pada About
function showPhoto() {
  let photoTextContainer = document.getElementById("photo-text-container");
  photoTextContainer.style.display = "flex"; 
}

window.onload = function() {
  let sections = document.querySelectorAll(".content");
  sections.forEach((el) => {
    el.style.display = "none";
  });
  showSlides(); 
};
