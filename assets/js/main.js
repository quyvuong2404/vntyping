new Clipboard('.btn-copy');
VNTYPING.VNID = ["textbody"];
chrome.storage.local.get('typing-mode', function(mode){
	if (mode['typing-mode']) {
		VNTYPING.SetMethod(mode['typing-mode']);
		$('#id'+mode['typing-mode']).addClass('active');
	} else {
		VNTYPING.SetMethod(1);
		$('#id'+1).addClass('active');
	}
});
$(document).on('click', '.btn-group .btn', function(e) {
	var mode = $(this).find('input').attr('value');
	VNTYPING.SetMethod(mode);
	chrome.storage.local.set({'typing-mode': mode});
	$('#textbody').focus();
});