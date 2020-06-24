'use strict';

{
  document.addEventListener('DOMContentLoaded', () => {
      const menu_btn = document.getElementById('menu_btn');
      const header_nav = document.getElementById('header_nav');
      const black_bg = document.getElementById('black_bg');

      menu_btn.addEventListener('click', () => {
          menu_btn.classList.toggle('active');
          header_nav.classList.toggle('active');
          black_bg.classList.toggle('active');
      })

      black_bg.addEventListener('click', () => {
        menu_btn.classList.toggle('active');
        header_nav.classList.toggle('active');
        black_bg.classList.toggle('active');
      })
  });
}
