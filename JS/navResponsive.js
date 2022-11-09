window.onload=function() {
	const plus = document.querySelector(".plus");
	const hidden = document.querySelector(".hidden");
	const menu = document.getElementById("menu");
	
	const duckTalk = document.getElementById("duckTalk");
	const oogstfeesten = document.getElementById("oogstfeesten");
	const duckTalk_article = document.getElementById("duckTalk_article");
	const oogstfeesten_article = document.getElementById("oogstfeesten_article");
	
	plus?.addEventListener("click", function() {
		plus.style.display = "none";
		menu.classList.remove("hidden");
		menu.classList.add("fadeIn");
	});
	
	duckTalk?.addEventListener("click", function() {
		duckTalk_article.style.display = "block";
		oogstfeesten_article.style.display = "none";
	});
	
	oogstfeesten?.addEventListener("click", function() {
		oogstfeesten_article.style.display = "block";
		duckTalk_article.style.display = "none";
	});
}