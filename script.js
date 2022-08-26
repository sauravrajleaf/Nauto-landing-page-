$(window).scroll(() => {
	// var viewport = $(window).height();

	var scroll = $(window).scrollTop();
	console.log(scroll);
	if (scroll !== 0) {
		console.log("active");

		$("nav").css({ "background-color": "#ffffff", transition: "0.2s" });
	} else {
		$("nav").css({ "background-color": "rgba(0,0,0,0)", transition: "0.2s" });
	}
});
console.log(hi);
