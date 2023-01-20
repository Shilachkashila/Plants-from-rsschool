

const burger = document.querySelector('.burger')
const nav = document.querySelector('.nav_header')

function openMenu() {
  nav.style.transform = "translateX(0px)";
}

function closeMenu() {

  if (nav.style.transform == "translateX(0px)") {
    nav.style.transform = "translateX(235px)";
  }  
}

document.addEventListener('click', (e) => {
	const clickNav = e.composedPath().includes(nav) || e.composedPath().includes(burger);
 
	if ( !clickNav ) {
		closeMenu()
	}
}
)

nav.onclick = function(event) {
  let target = event.target;

  if (target.tagName != 'A') return;

  closeMenu();
};

burger.addEventListener("click", openMenu)
nav.addEventListener("click", closeMenu)