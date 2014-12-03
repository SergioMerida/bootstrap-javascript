var busqueda = "";
$(document).ready(function(){
    $('.d').hide();
    $('.c').hide();
    $('#butt').click(function(){
    $(".search").empty();
        busqueda = $('input:text[name=nombre]').val();
        var service_url = 'https://www.googleapis.com/freebase/v1/search';
        var params = {
            'query': busqueda,
            'limit': 50,
            'indent': true
    };
        $.getJSON(service_url + '?callback=?', params, function(response) {
            $.each(response.result, function(i, result) {
                var obj = {text: result['name']}.text;
                var notable = {text: result['notable']['name']}.text;                
		var insertar = "<tr class='search'>"+ "<td>"+ (i+1) +"</td>" + "<td>" + obj + "</td>"+ "<td>"+notable+"</td>" + "</tr>";
                $('.mostrar').append(insertar);
            });/*--each--*/
        }); /*--getjson--*/
        $('.check').prop('checked', false);
    }); /*--click--*/
	
    $(".clear").click(function() {
        $(".search").empty();
    }); /*--Clear--*/

}); /*--document--*/


/*------------------*/
$(document).ready(function(){
$('input[name="foo"]').click(function(){
    $('.d').show();
    $('.c').show();
	$('.search').hide();
        if($(this).prop("checked") == true){
            var params = {
        	'query': busqueda[0],
		    'filter': filters[0],
        	'limit': 5,
        	'indent': true
    		};
	    $.getJSON(url[0] + '?callback=?', params, function(response) {
            $.each(response.result, function(i, result) {
                var obj = {text: result['name']}.text;
                var notable = {text: result['notable']['name']}.text;
                var insertar = "<tr class='first'>"+ "<td>"+ (i+1) +"</td>" + "<td>" + obj + "</td>"+ "<td>"+notable+"</td>" + "</tr>";
                $('.mostrar').append(insertar);
            });/*--each--*/
        }); /*--getjson--*/
        }
        else if($(this).prop("checked") == false){
            $(".first").empty();
	    $('.search').show();
            $('.d').hide();
            $('.c').hide();
        }
    });
});

/*------------------------Second filter---------------------------------*/
$(document).ready(function(){
        $('input[name="people"]').click(function(){
	    $('.search').hide();
            if($(this).prop("checked") == true){
        	var params = {
            	'query': busqueda[0],
            	'filter': filters[1],
            	'limit': 5,
            	'indent': true
        	};
        $.getJSON(url[0] + '?callback=?', params, function(response) {
            $.each(response.result, function(i, result) {
                var obj = {text: result['name']}.text;
                var notable = {text: result['notable']['name']}.text;
                var insertar = "<tr class='second'>"+ "<td>"+ (i+1) +"</td>" + "<td>" + obj + "</td>"+ "<td>"+notable+"</td>" + "</tr>";
                $('.mostrar').append(insertar);
			});/*--each--*/
        	}); /*--getjson--*/
            }

            else if($(this).prop("checked") == false){
                $(".second").empty();
		$('.search').show();
            }
        });
    });

/*------------------------Third filter---------------------------------*/
$(document).ready(function(){
        $('input[name="book"]').click(function(){
	    $('.search').hide();
            if($(this).prop("checked") == true){
        	var params = {
            	'query': busqueda[0],
            	'filter': filters[2],
            	'limit': 5,
            	'indent': true
        	};
        $.getJSON(url[0] + '?callback=?', params, function(response) {
            $.each(response.result, function(i, result) {
                var obj = {text: result['name']}.text;
                var notable = {text: result['notable']['name']}.text;
                var insertar = "<tr class='third'>"+ "<td>"+ (i+1) +"</td>" + "<td>" + obj + "</td>"+ "<td>"+notable+"</td>" + "</tr>";
                $('.mostrar').append(insertar);
			});/*--each--*/
        	}); /*--getjson--*/
            }

            else if($(this).prop("checked") == false){
                $(".third").empty();
		$('.search').show();
            }
        });
    });

