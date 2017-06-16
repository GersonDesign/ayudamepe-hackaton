function template(locals) {
    var buf = [];
    var jade_mixins = {};
    var jade_interp;

    buf.push("<!DOCTYPE html><html lang=\"es\"></html><head><meta charset=\"UTF-8\"/><title>Registro</title><meta name=\"viewport\" content=\"initial-scale=1, maximum-scale=1\"/><link rel=\"stylesheet\" href=\"https://bootswatch.com/paper/bootstrap.min.css\"/><link rel=\"stylesheet\" href=\"css/registro.css\"/><link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/bootstrap-validator/0.5.3/css/bootstrapValidator.min.css\"/></head><body><div class=\"container\"><h2>Formulario</h2><form id=\"FormRegistro\" class=\"form-horizontal frmRegistro\"><fieldset><div class=\"form-group\"><label for=\"txtNombre\">Nombre:</label><input type=\"text\" id=\"txtNombre\" name=\"txtNombre\" class=\"form-control\"/></div><div class=\"form-group\"><label for=\"txtApellidoPaterno\">Apellido Paterno:</label><input type=\"text\" id=\"txtApellidoPaterno\" name=\"txtApellidoPaterno\" class=\"form-control\"/></div><div class=\"form-group\"><label for=\"txtApellidoMaterno\">Apellidos Materno:</label><input type=\"text\" id=\"txtApellidoMaterno\" name=\"txtApellidoMaterno\" class=\"form-control\"/></div><div class=\"form-group\"><label for=\"txtEdad\">Edad:</label><input type=\"text\" id=\"txtEdad\" name=\"txtEdad\" class=\"form-control\"/></div><div class=\"form-group\"><label for=\"txtNombre\">DNI:</label><input type=\"text\" id=\"txtDNI\" data-minlength=\"8\" name=\"txtDNI\" class=\"form-control\"/></div><div class=\"form-group\"><label for=\"cbxDistrito\">Distrito:</label><select id=\"cbxDistrito\" class=\"form-control\"><option>SJL</option></select></div><div class=\"form-group\"><label for=\"txtDireccion\">Dirección:</label><input type=\"text\" id=\"txtDireccion\" name=\"txtDireccion\" class=\"form-control\"/></div><div class=\"form-group\"><label for=\"txtTelefono\">Teléfono:</label><input type=\"text\" id=\"txtTelefono\" data-minlength=\"9\" name=\"txtTelefono\" class=\"form-control\"/></div><div class=\"form-group\"><label for=\"txtEmail\">Email:</label><input type=\"email\" id=\"txtEmail\" name=\"txtEmail\" class=\"form-control\"/></div><div class=\"form-group\"><label for=\"txtCaso\">Caso:</label><textarea type=\"text\" id=\"txtCaso\" name=\"txtCaso\" class=\"form-control\"></textarea></div><div class=\"form-group\"><input type=\"submit\" value=\"Enviar\" class=\"btn btn-primary\"/></div></fieldset></form></div><script src=\"https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js\"></script><script src=\"https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/js/bootstrap.min.js\"></script><script src=\"https://cdnjs.cloudflare.com/ajax/libs/bootstrap-validator/0.5.3/js/bootstrapValidator.min.js\"></script><script src=\"js/registro.js\"> </script></body>");;
    return buf.join("");
}

function initMap() {
    var $map = $('#google-map');
    if (!$map.length) return;

    var myLatlng = new google.maps.LatLng(-12.1004989, -77.0317925, 18); // <- Your latitude and longitude

    var mapOptions = {
        zoom: 15,
        center: myLatlng,
        mapTypeControl: true,
        disableDefaultUI: true,
        zoomControl: true,
        scrollwheel: false,
        draggable: true
    }
    map = new google.maps.Map(document.getElementById('google-map'), mapOptions);

    marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        icon: '/static/img/uicacion.png'
    });
}
google.maps.event.addDomListener(window, 'load', initMap);
});