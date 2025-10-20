const menuBtn = document.getElementById('btn-menu-header');
const sideMenu = document.getElementById('menu-lateral');
const overlay = document.getElementById('overlay');

menuBtn.addEventListener('click', () => {
	const isOpen = sideMenu.classList.toggle('open');
	overlay.classList.toggle('show');
	document.body.classList.toggle('menu-open', isOpen); // impede rolagem do fundo. nao funciona

	// alterna o ícone
	menuBtn.textContent = isOpen ? 'X' : '☰';
});



// const iconeBtnHeader = menuBtn.textContent;

// if (iconeBtnHeader == 'X') {
// 	menuBtn.addEventListener('click', () => {
// 		menuBtn.innerHTML = '☰';
// 	});
// }
// console.log(iconeBtnHeader)

// quando clicar na parte de fora tbm vai fechar o menu
overlay.addEventListener('click', closeMenu);

document.querySelectorAll('#menu-lateral a').forEach(link => {
	link.addEventListener('click', closeMenu);
});

function closeMenu() {
	sideMenu.classList.remove('open');
	overlay.classList.remove('show');
	document.body.classList.remove('menu-open');
	menuBtn.textContent = '☰';
}
