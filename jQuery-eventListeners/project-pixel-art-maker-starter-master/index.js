$(document).ready(() => {
    $('#sizePicked').submit((event) => {
        wipeGrid();
        displayNewGrid();
        event.preventDefault();
    });
});

const displayNewGrid = () => {
    let makeColumns = $('#inputHeight').val();
	let makeRows = $('#inputWidth').val();
	let gridBody = '<tbody>';
	
	for (x = 1; x <= makeColumns; x++) {
		gridBody += '<tr>';
		
		for (y = 1; y <= makeRows; y++) {
			gridBody += '<td>&nbsp;</td>';
		}
		
		gridBody += '</tr></tbody>';	
	}
	
	$('#pixelCanvas').html(gridBody);
};

const wipeGrid = () => {
    $('#pixelCanvas').children().remove();
}

$('#pixelCanvas').delegate('td', 'click', function(event) {
	let currentColor = $('#colorPicked').val();
	
	if (event.shiftKey) {
		$(this).css('background', 'none');
	} else {
		$(this).css('background-color', currentColor);
	};
});

