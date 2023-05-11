function meuEscopo () {
    const form = document.querySelector(".form");

    function recebeFormulario (evento) {
        
        evento.preventDefault();

        const nome = form.querySelector(".nome");
        const altura = form.querySelector(".altura");
        const peso = form.querySelector(".peso");

        let numPeso = parseFloat(peso.value);
        let numAltura = parseFloat(altura.value);

        const resultado = (numPeso / (numAltura * numAltura));
        const imcValor = resultado.toFixed(1);

        console.log(imcValor);
        
        const resultadoNome = document.querySelector(".resultadoNome");
        resultadoNome.innerHTML = nome.value;

    }

    


    form.addEventListener ('submit', recebeFormulario);
}

meuEscopo();
