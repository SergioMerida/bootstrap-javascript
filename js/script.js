$(document).ready(function(){
    $('#butt').click(function(){
        var b = $('input:text[name=nombre]').val();
        var service_url = 'https://www.googleapis.com/freebase/v1/search';
        var params = {
            'query': b,
            'filter': '(all type:/music/)',
            'limit': 50,
            'indent': true
        };
        $.getJSON(service_url + '?callback=?', params, function(response) {
            $.each(response.result, function(i, result) {
                var obj = {text: result['name']}.text;
                var insertar = "<tr>" + "<td>" + obj + "</td>" + "</tr>";
                $('.mostrar').append(insertar);
            });/*--------------------each----------------------*/
        }); /*---------getjson-----------*/
    }); /*---------click button-----------*/
    $(".clear").click(function() {
        $(".info").empty();
    }); /*-----------Clear function--------------*/
}); /*------------document. ready-------------*/

