document.addEventListener("DOMContentLoaded", function () {
    const isMobile = () => window.innerWidth < 992;

    document.querySelectorAll('.nav-item.dropdown > .nav-link').forEach(link => {
      link.addEventListener('click', function (e) {
        if (!isMobile()) return;

        e.preventDefault(); 
        const parent = this.closest('.nav-item.dropdown');
       
        parent.classList.toggle('show');
        
        document.querySelectorAll('.nav-item.dropdown').forEach(item => {
          if (item !== parent) {
            item.classList.remove('show');
          }
        });
      });
    });

    window.addEventListener('resize', () => {
      if (!isMobile()) {
        document.querySelectorAll('.nav-item.dropdown').forEach(item => {
          item.classList.remove('show');
        });
      }
    });
  });



  document.addEventListener('click', function(event) {
  const navbarCollapse = document.getElementById('navbarSupportedContent');
  const navbarToggler = document.querySelector('.navbar-toggler');

  if (navbarCollapse.classList.contains('show') &&
      !navbarCollapse.contains(event.target) &&
      !navbarToggler.contains(event.target)) {
    const bsCollapse = new bootstrap.Collapse(navbarCollapse, { toggle: false });
    bsCollapse.hide();
  }
});
