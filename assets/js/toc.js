function tocOpen(id) {
	$("#" + id + "-open").css("display", "none");
	$("#" + id + "-close").css("display", "block");
	$("#" + id + "-items").css("display", "flex");
}

function tocClose(id) {
	$("#" + id + "-close").css("display", "none");
	$("#" + id + "-items").css("display", "none");
	$("#" + id + "-open").css("display", "block");
}