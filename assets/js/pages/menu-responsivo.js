const menuBtn = document.getElementById('btn-menu-header');
const sideMenu = document.getElementById('menu-lateral');
const overlay = document.getElementById('overlay');

menuBtn.addEventListener('click', () => {
	sideMenu.classList.toggle('open');
	overlay.classList.toggle('show');
	document.body.classList.toggle('menu-open'); // impede rolagem do fundo nao funciona
});

overlay.addEventListener('click', closeMenu);

document.querySelectorAll('#menu-lateral a').forEach(link => {
	link.addEventListener('click', closeMenu);
});

function closeMenu() {
	sideMenu.classList.remove('open');
	overlay.classList.remove('show');
	document.body.classList.remove('menu-open');
}
