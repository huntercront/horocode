var avatarElem = document.getElementById('ticket');
var avatarSourceBottom = avatarElem.getBoundingClientRect().bottom + window.pageYOffset;
window.onscroll = function() {
	if (avatarElem.classList.contains('notsee') && window.pageYOffset < avatarSourceBottom) {
		avatarElem.classList.remove('notsee');
	} else if (window.pageYOffset > avatarSourceBottom) {
		avatarElem.classList.add('notsee');
	}
};