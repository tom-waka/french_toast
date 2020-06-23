'use strict';

{
  const menuModule = (() => {
    return {
        toggleNav: () => {
            document.getElementById('nav_toggle_button').addEventListener('click', event => {
                const classes = document.querySelector('html').classList
                if (classes.value.includes('nav_open')) {
                    classes.remove('nav_open')
                } else {
                    classes.add('nav_open')
                }
            })
        },
        closeNav: () => {
            document.getElementById('js_black_bg').addEventListener('click', event => {
                document.querySelector('html').classList.remove('nav_open')
            })
        }
    }
  })();
  
  menuModule.toggleNav();
  menuModule.closeNav();
}
