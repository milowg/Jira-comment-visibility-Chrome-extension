_commentsVisible = false;
_commentsTextAreas = [];
_desiredType = "Users";

function changeCommentVisibility(textarea) {
	textarea.parent().parent().nextAll(".security-level").first().find('#commentLevel-multi-select a span').first().click();
	
	var usersOption = $('div#commentLevel-suggestions a[title="' + _desiredType + '"]')
	usersOption.closest("div").find('li').removeClass("active");
	usersOption.parent().addClass("active");
	usersOption.parent().click();		
}

function checkCommentVisibility() {
	setInterval(function() {
		$('textarea#comment').each(function() {
			var arrayId = $(this).attr("arrayId");
			if (arrayId == undefined) {
				arrayId = ""+_commentsTextAreas.length;
				$(this).attr("arrayId", arrayId);
				_commentsTextAreas[parseInt(arrayId)] = false;
			}
			
			var isVisible = $(this).is(":visible"); 
			if (isVisible != _commentsTextAreas[parseInt(arrayId)]) {
				if (isVisible) {
					_commentsTextAreas[parseInt(arrayId)] = true;
					changeCommentVisibility($(this));
				} else {
					_commentsTextAreas[parseInt(arrayId)] = false;
				}
			}
		});
	}, 100);
}

checkCommentVisibility();