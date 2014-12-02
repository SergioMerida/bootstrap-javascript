$(document).ready(function(){
    $('#butt').click(function(){
        var b = $('input:text[name=nombre]').val();
        var service_url = 'https://www.googleapis.com/freebase/v1/search';
        var params = {
            'query': b,
            'limit': 5,
            'indent': true
        };
        $.getJSON(service_url + '?callback=?', params, function(response) {
            $.each(response.result, function(i, result) {
                var obj = {text: result['name']}.text;
                var insertar = "<tr>" + "<td>" + obj + "</td>" + "</tr>";
                $('.mostrar').append(insertar);
            });/*--each--*/
        }); /*--getjson--*/
    }); /*--click--*/
	
    $(".clear").click(function() {
        $(".mostrar").empty();
    }); /*--Clear--*/
}); /*--document--*/


/*----------------------First Filter-----------------------------*/
   $(document).ready(function(){
        $('input[name="foo"]').click(function(){
            if($(this).prop("checked") == true){
                var b = $('input:text[name=nombre]').val();
        	var service_url = 'https://www.googleapis.com/freebase/v1/search';
        	var params = {
            	'query': b,
            	'filter': '(all type:/music/)',
            	'limit': 5,
            	'indent': true
        	};
        $.getJSON(service_url + '?callback=?', params, function(response) {
            $.each(response.result, function(i, result) {
                var obj = {text: result['name']}.text;
                var insertar = "<tr>" + "<td>" + obj + "</td>" + "</tr>";
                $('.mostrar').append(insertar);
			});/*--------------------each----------------------*/
        	}); /*---------getjson-----------*/
            }

            else if($(this).prop("checked") == false){
                $(".mostrar").empty();
            }
        });
    });

/*------------------------Second filter---------------------------------*/
$(document).ready(function(){
        $('input[name="people"]').click(function(){
            if($(this).prop("checked") == true){
                var b = $('input:text[name=nombre]').val();
        	var service_url = 'https://www.googleapis.com/freebase/v1/search';
        	var params = {
            	'query': b,
            	'filter': '(all type:/people/)',
            	'limit': 5,
            	'indent': true
        	};
        $.getJSON(service_url + '?callback=?', params, function(response) {
            $.each(response.result, function(i, result) {
                var obj = {text: result['name']}.text;
                var insertar = "<tr>" + "<td>" + obj + "</td>" + "</tr>";
                $('.mostrar').append(insertar);
			});/*--------------------each----------------------*/
        	}); /*---------getjson-----------*/
            }

            else if($(this).prop("checked") == false){
                $(".mostrar").empty();
            }
        });
    });

/*------------------------Third filter---------------------------------*/
$(document).ready(function(){
        $('input[name="book"]').click(function(){
            if($(this).prop("checked") == true){
                var b = $('input:text[name=nombre]').val();
        	var service_url = 'https://www.googleapis.com/freebase/v1/search';
        	var params = {
            	'query': b,
            	'filter': '(all type:/book/)',
            	'limit': 5,
            	'indent': true
        	};
        $.getJSON(service_url + '?callback=?', params, function(response) {
            $.each(response.result, function(i, result) {
                var obj = {text: result['name']}.text;
                var insertar = "<tr>" + "<td>" + obj + "</td>" + "</tr>";
                $('.mostrar').append(insertar);
			});/*--------------------each----------------------*/
        	}); /*---------getjson-----------*/
            }

            else if($(this).prop("checked") == false){
                $(".mostrar").empty();
            }
        });
    });

