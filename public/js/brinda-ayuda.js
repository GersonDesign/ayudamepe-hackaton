$('#FormAyudaTiempo').bootstrapValidator({
	trigger: 'blur',
	fields: {
		
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
		}
		
	}
}).on('submit', function (e) {
	if (e.isDefaultPrevented()) {
		alert('form is not valid');
	} else {
		e.preventDefault();
		alert('form is valid');
		// your ajax
	}
});

