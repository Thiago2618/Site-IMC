function meuEscopo () {
    const form = document.querySelector(".form");

    function recebeFormulario (evento) {
        
        evento.preventDefault();

        const nome = form.querySelector(".nome");
        const altura = form.querySelector(".altura");
        const peso = form.querySelector(".peso");

        let resultado = Number(peso) / (Number(altura) * Number(altura))
        console.log(resultado);
        console.log(nome.value, peso.value, altura.value);
        console.log(typeof peso);
        

    
    }

    form.addEventListener ('submit', recebeFormulario);
}

meuEscopo();
