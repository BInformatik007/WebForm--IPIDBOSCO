// FORMATO DE NÚMERO DE TELÉFONO

function formatPhoneNumber(input) {
    // Elimina todos los caracteres no numéricos
    let value = input.value.replace(/\D/g, '');
    
    // Verifica que solo se ingresen hasta 10 dígitos
    if (value.length > 10) {
        alert("El número de teléfono no puede tener más de 10 dígitos.");
        value = value.slice(0, 10); // Recorta el valor a 10 dígitos
    }

    // Aplica el formato (000) 000 - 0000
    if (value.length <= 3) {
        input.value = '(' + value;
    } else if (value.length <= 6) {
        input.value = '(' + value.slice(0, 3) + ') ' + value.slice(3);
    } else if (value.length <= 10) {
        input.value = '(' + value.slice(0, 3) + ') ' + value.slice(3, 6) + ' - ' + value.slice(6, 10);
    }
    
    // Muestra una alerta si el valor es incorrecto (menos de 10 dígitos)
    if (value.length === 10 && !/^\(\d{3}\) \d{3} - \d{4}$/.test(input.value)) {
        alert("Formato incorrecto. El número debe ser en el formato (000) 000 - 0000.");
    }
}

// FORMATO DE CÉDULA DE IDENTIDAD

function formatDNI(input) {
    // Elimina cualquier caracter no numérico
    let value = input.value.replace(/\D/g, '');
    
    // Limita el valor a 11 caracteres (el formato debe ser 000-0000000-0)
    if (value.length > 11) {
        value = value.slice(0, 11);
    }

    // Aplica la máscara (000-0000000-0)
    if (value.length <= 3) {
        input.value = value;
    } else if (value.length <= 9) {
        input.value = value.slice(0, 3) + '-' + value.slice(3);
    } else {
        input.value = value.slice(0, 3) + '-' + value.slice(3, 10) + '-' + value.slice(10, 11);
    }

    // Alerta si el valor ingresado no es válido
    if (value.length === 11 && !/^\d{3}-\d{7}-\d{1}$/.test(input.value)) {
        alert("Formato incorrecto. El número de cédula debe ser en el formato 000-0000000-0.");
    }
}
