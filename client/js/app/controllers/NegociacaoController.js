class NegociacaoController {

    constructor() {
        let $ = document.querySelector.bind(document); //mantendo o contexto do querySelector em document
        this._inputData = $('#data');
        this._inputValor = $('#valor');
        this._inputQuantidade = $('#quantidade');
    }

    adiciona(event) {
        event.preventDefault();

        let data = new Date(...this._inputData
            .value.split('-')
            .map((item, indice) => item - indice % 2)); //usando arrow function

        let negociacao = new Negociacao(
            data,
            this._inputQuantidade.value,
            this._inputValor.value
        );

        console.log(negociacao);
    }

}