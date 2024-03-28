document.addEventListener('DOMContentLoaded', () => {
    // Carrusel
    const elementosCarousel = document.querySelectorAll('.carousel');
    const instances = M.Carousel.init(elementosCarousel, {
      duration: 500,
      dist: -10,
      shift: 5,
      padding: 5,
      numVisible: 5,
      indicators: true,
      noWrap: false,
      onCycleTo: function(activeItem) {
        const items = document.querySelectorAll('.carousel-item');
        items.forEach(item => item.classList.remove('active'));
        activeItem.classList.add('active');
      }
    });
  
    // Avanzar
    function avanzarCarrusel() {
      elementosCarousel.forEach(carousel => {
        const instance = M.Carousel.getInstance(carousel);
        instance.next();
      });
    }
  
    // Menu responsive
    const menuBtn = document.querySelector('.menu-btn');
    const navigation = document.querySelector('.navegacion');
  
    menuBtn.addEventListener('click', () => {
      navigation.classList.toggle('active');
    });
  
    // Menu
    const submenus = document.querySelectorAll('.submenu a');
  
    submenus.forEach(function(submenu) {
      submenu.addEventListener('click', function(event) {
        var submenuParent = this.parentElement;
        var submenuChildren = submenuParent.querySelector('.hijos');
  
        
        if (submenuChildren.style.display === 'block') {
          submenuChildren.style.display = 'none';
        } else {
          
          document.querySelectorAll('.hijos').forEach(function(hijo) {
            hijo.style.display = 'none';
          });
         
          submenuChildren.style.display = 'block';
        }
  
        
        event.preventDefault();
      });
    });
  
    // Avanzar cada 25 seg
    setInterval(avanzarCarrusel, 25000);
  });
  