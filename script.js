  const navToggle = document.getElementById("navToggle");
  const navList = document.getElementById("navList");

  navToggle.addEventListener("click", () => {
    navList.classList.toggle("show_menu");
  });
    document.addEventListener("DOMContentLoaded", () => {
    // Foe delay
    setTimeout(() => {
      const header = document.querySelector('.header');
      if (header) header.classList.add('show');
    }, 1000);
 
 // For delay
   setTimeout(() => {
      const heroContent = document.querySelector('.hero_content');
      const heroImage = document.querySelector('.hero_image');

      // Add .show class to trigger CSS transitions
      if (heroContent) heroContent.classList.add('show');
      if (heroImage) heroImage.classList.add('show');
    }, 1100); 

//    Scroll animation for Abort, Skills, project and Contact section 
     const sections = document.querySelectorAll('.section');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          observer.unobserve(entry.target); // ek baar animate hone ke baad band
        }
      });
    }, { threshold: 0.1 }); // 25% visible hone par trigger

    sections.forEach(section => observer.observe(section));
});
