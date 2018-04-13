$(document).ready(function() {
    $('#sizePicker').submit(function() {
        clearGrid();
        makeGrid();
        event.preventDefault();
    });
});

function makeGrid() {
    let makeColumns = $('#inputHeight').val();
	let makeRows = $('#inputWidth').val();
	let theTable = '<tbody>';
	for (x = 1; x <= makeColumns; x++) {
		theTable += '<tr>';
		for (y = 1; y <= makeRows; y++) {
			theTable += '<td>&nbsp;</td>';
		}
		theTable += '</tr></tbody>';	
	}
	$('#pixelCanvas').html(theTable);
};

function clearGrid() {
    $('#pixelCanvas').children().remove();
}

$('#pixelCanvas').delegate('td', 'click', function(e) {
	let yourColor = $('#colorPicker').val();
	if (e.shiftKey) {
		$(this).css('background', 'none');
	} else {
		$(this).css('background-color', yourColor);
	};
});

