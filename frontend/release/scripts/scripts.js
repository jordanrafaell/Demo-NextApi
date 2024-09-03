// Menu hambúrguer página inicial
const navMenu = document.querySelector('.list_ul');
const btnMenu = document.querySelector('.menu_hamburguer');
const links = navMenu.querySelectorAll('a'); // Seleciona todos os links dentro do menu

btnMenu.addEventListener('click', () => {
  navMenu.classList.toggle('active_menu');
});

// Fecha o menu ao clicar fora dele
document.addEventListener('click', (event) => {
  if (!navMenu.contains(event.target) && !btnMenu.contains(event.target)) {
    navMenu.classList.remove('active_menu');
  }
});

// Fecha o menu ao clicar em um link dentro do menu
links.forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active_menu');
  });
});
