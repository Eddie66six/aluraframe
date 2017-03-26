class NegociacaoController {

    constructor() {
        let $ = document.querySelector.bind(document); //mantendo o contexto do querySelector em document
        this._inputData = $('#data');
        this._inputValor = $('#valor');
        this._inputQuantidade = $('#quantidade');
        this._listaNegociacoes = new ListaNegociacoes();
    }

    adiciona(event) {
        event.preventDefault();

        this._listaNegociacoes.adicionaNegociacoes(this._criaNegociacao());
        this._limparFormulario();

        console.log(this._listaNegociacoes.negociacao);
    }

    _criaNegociacao() {
        return new Negociacao(
            DateHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value);
    }

    _limparFormulario() {
        //esse underline na frente indica que esse metodo só é acessivel nessa classe
        this._inputData.value = '';
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0.0;
    }

}