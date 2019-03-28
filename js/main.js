window.onscroll = function() {
  var pageY = window.pageYOffset || document.documentElement.scrollTop;
	var innerHeight = document.documentElement.clientHeight;
	var elem = document.getElementById("ticket");


      if (pageY < innerHeight/2) {
				elem.classList.add("notsee")
			}
			else
			{
				elem.classList.remove("notsee")
			}
		}

