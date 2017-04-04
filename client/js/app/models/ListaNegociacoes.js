class ListaNegociacoes {

    constructor(armadilha) {
        this._negociacoes = [];
        this._armadilha = armadilha;
    }

    adicionaNegociacoes(negociacao) {
        this._negociacoes.push(negociacao);
        this._armadilha(this);
    }

    get negociacao() {
        return [].concat(this._negociacoes);
        //devolvendo um novo array, assim as negociacoes não serão alteradas
    }

    esvazia() {
        this._negociacoes = [];
        this._armadilha(this); //é uma função que será executada dentro do contexto de ListaNegociacoes
    }

}