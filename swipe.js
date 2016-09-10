var currentPage = 0;
var Seiten = new Array();

function currentPageAnalyse() {
	var activePage = $.mobile.activePage[0].id;
	
	for(var i = 0; i< Seiten.lenght;i++){
		if(Seiten[i] == activePage) {
			currentPage = i;
			break;
			}
		}
	}
}

$(document).ready(function() {
	var SeitenAnzahl = $("div[data-role=page").size();
	
	for(var a =1; a <= SeitenAnzahl;a++) {
		Seiten.push($("div[data-role=page]").get(a-1).id;
	}
}

jQuery(document).ready(function() {
	$(document).on('pageboforeshow',currentPageAnalyse);
	$(document).on('swipeleft',swipeleft);
	$(document).on('swiperight',swipeRight);
	
	function swipeLeft(event) {
		$.mobile.changPage("#" + Seiten[currentPage + 1],{transition: "slide"});
	}
	function swipeRight(event) {
		$.mobile.changPage("#" + Seiten[currentPage + 1],{transition: "slide",reverse: true});
	}
}