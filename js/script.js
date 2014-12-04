var busqueda = "";
$('.d').hide();
$('.c').hide();
$("#butt").click(function( event ) {
	$(".mostrar").empty();
	busqueda = $("#nombre").val();
	$("#nombre").val("");
	var service_url = 'https://www.googleapis.com/freebase/v1/search';
	var params = {
		'query': busqueda,
		'limit': 10,
		'indent': true
	};

	$.getJSON(service_url + '?callback=?', params, function(response) {
		var numero = 0;
		$.each(response.result, function(i, result) {
			var obj = {text: result['name']}.text;
			var notable = {text: result['notable']['name']}.text;
			var insertar = "<tr class='search'>"+ "<td>"+ (i+1) +"</td>" + "<td>" + obj + "</td>"+ "<td>"+notable+"</td>" + "</tr>";
			$('.mostrar').append(insertar);
		});
	});
});


$('input[name="filtros"]').change(function(){
	$(".mostrar").empty();
	var checkedEnable = [];
	var filterUrls = [" type:/music/", " type:/people/", " type:/book/", " type:/music/artist", " type:/music/album"];
	var filterString = "";
	$("input[name=filtros]:checked").each(function(){
		$('.d').show();
		$('.c').show();
		checkedEnable.push(this.value);
	});
	
	for (var i=0;i<checkedEnable.length;i++){
		filterString = filterString + filterUrls[checkedEnable[i]];
	};
	
	filterString = "(all"+filterString+")";
	var service_url = 'https://www.googleapis.com/freebase/v1/search';
	var params = {
		'query': busqueda,
		'filter': filterString,
		'limit': 10,
		'indent': true
	};
	$.getJSON(service_url + '?callback=?', params, function(response) {
		var numero = 0;
		$.each(response.result, function(i, result) {
			var obj = {text: result['name']}.text;
			var notable = {text: result['notable']['name']}.text;
			var insertar = "<tr class='search'>"+ "<td>"+ (i+1) +"</td>" + "<td>" + obj + "</td>"+ "<td>"+notable+"</td>" + "</tr>";
			$('.mostrar').append(insertar);
		});
	});
});


$(".clear").click(function() {
$(".search").empty();
}); /*--Clear--*/

