$('#FormRegistro').bootstrapValidator({
    trigger: 'blur',
    fields: {
        txtNombre: {
            validators: {
                notEmpty: {
                    message: 'Su nombre es obligatorio'
                },
                regexp: {
                    regexp: /^[a-zA-Z ]+$/,
                    message: 'Su primer nombre no puede tener números o símbolos'
                }
            }
        },
        txtApellidoPaterno: {
            validators: {
                notEmpty: {
                    message: 'Su apellido paterno es obligatorio'
                },
                regexp: {
                    regexp: /^[a-zA-Z ]+$/,
                    message: 'Su apellido paterno no puede tener números o símbolos'
                }
            }
        },
        txtApellidoMaterno: {
            validators: {
                notEmpty: {
                    message: 'Su apellido materno es obligatorio'
                },
                regexp: {
                    regexp: /^[a-zA-Z ]+$/,
                    message: 'Su apellido materno no puede tener números o símbolos'
                }
            }
        },
        txtEdad: {
            validators: {
                notEmpty: {
                    message: 'Su edad es obligatorio.'
                },
                regexp: {
                    regexp: /^[0-9]+$/,
                    message: 'El campo solo admite números'
                }
            }
        },
        txtDNI: {
            validators: {
                notEmpty: {
                    message: 'Su DNI es obligatorio.'
                },
                regexp: {
                    regexp: /^[0-9]+$/,
                    message: 'El campo solo admite números'
                }
            }
        },
        txtDireccion: {
            validators: {
                notEmpty: {
                    message: 'Su dirección es obligatorio'
                },
                regexp: {
                    regexp: /^[a-zA-Z ]+$/,
                    message: 'Su dirección no puede tener números o símbolos'
                }
            }
        },
        txtTelefono: {
            validators: {
                notEmpty: {
                    message: 'El número de teléfono es obligatorio.'
                },
                regexp: {
                    regexp: /^[0-9]+$/,
                    message: 'El campo solo admite números'
                }
            }
        },

        txtEmail: {
            validators: {
                notEmpty: {
                    message: 'El email es obligatorio'
                },
                emailAddress: {
                    message: 'La entrada no es una dirección de correo electrónico válida'
                }
            }
        },
        txtCaso: {
            validators: {
                notEmpty: {
                    message: 'El caso es obligatorio.'
                }
            }
        },

    }
}).on('submit', function(e) {
    if (e.isDefaultPrevented()) {
        alert('form is not valid');
    } else {
        e.preventDefault();
        alert('form is valid');
        // your ajax
    }
});

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
        icon: '/img/lugar.png'
    });
}
google.maps.event.addDomListener(window, 'load', initMap);