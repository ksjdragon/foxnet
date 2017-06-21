var tabs = document.getElementsByClassName("navTab");
var selectedTab = "Identifier1";
var themeColor = {
	"highlight": 'red'
}

for(var i = 0; i < tabs.length; i++) {
	tabs[i].onclick = function() {
		selectedTab = this.id; // The identifier for your 'page' will be determined by the id you give to the navTab.
		reloadPage();
	}
}

reloadPage();

function reloadPage() {
	for(var i = 0; i < tabs.length; i++) {
		tabs[i].children[0].style.backgroundColor = "rgba(0,0,0,0)";
	}
	document.getElementById(selectedTab).children[0].style.backgroundColor = themeColor["highlight"];
}