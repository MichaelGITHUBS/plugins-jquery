$(document).ready(function() {
    
    $('#carousel-imagens').slick({
        autoplay: true,
        arrows: false,
        dots: true,
        infinite: true
    });

    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(DDD) 12345-6789'
    });

    $('#cpf').mask('000.000.000-00', {
        placeholder: '123.456.789-00'
    });

    $('#cep').mask('00000-000', {
        placeholder: '01234-567'
    });

    $('#form').validate({
        rules: {
            nome: {
                required: true,
                minlength: 3
            },
            email: {
                required: true,
                email: true
                
            },
            telefone: {
                required: true
                
            },
            cpf: {
                required: true
                
            },
            endereco: {
                required: true
               
            },
            cep: {
                required: true
                
            }
        },
        messages: { 
            nome: {
                required: "Por favor, insira seu nome completo",
                minlength: "O nome precisa ter no mínimo 3 caracteres"
            },
            email: {
                required: "Por favor, insira o email corretamente",
                email: "Por favor, insira um e-mail válido"
            },
            telefone: {
                required: "Por favor, insira seu telefone"
            },
            cep: {
                required: "Por favor, insira seu cep",
                minlength: "O cep precisa ter no mínimo 9 caracteres"
            },
            cpf: {
                required: "Por favor, insira seu cpf",
                minlength: "O cpf precisa ter no mínimo 11 caracteres"
            }
        },
        submitHandler: function (form) {
            alert("Sua requisição foi enviada para análise, parabéns pela aquisição!");
            form.submit();
        },
        invalidHandler: function (evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos > 0)  {
                alert(`Há ${camposIncorretos} campos que apresentam inconformidades. Por favor, corrija-os.`);
            }
        }
    });
});



 
