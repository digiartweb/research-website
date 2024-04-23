function searchFunction() {
	let input = document.getElementById("search");
	let filter = input.value.toUpperCase();
	let div = document.getElementById("search-results");
	let h3s = div.getElementsByTagName("h3");
  
	for (let i = 0; i < h3s.length; i++) {
	  if (h3s[i].textContent.toUpperCase().indexOf(filter) > -1) {
		h3s[i].style.display = "";
	  } else {
		h3s[i].style.display = "none";
	  }
	}
  
	div.style.display = h3s.length > 0 ? "block" : "none";
  }