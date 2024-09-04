
   const menuIcon = document.querySelector('.menu-icon');
   const cancelIcon = document.querySelector('.cancel-icon');
   const navItems = document.querySelector('.nav-items');

   menuIcon.addEventListener('click', () => {
      navItems.classList.add('active');
      menuIcon.style.display = 'none';
      cancelIcon.style.display = 'block';
   });

   cancelIcon.addEventListener('click', () => {
      navItems.classList.remove('active');
      cancelIcon.style.display = 'none';
      menuIcon.style.display = 'block';
   });

