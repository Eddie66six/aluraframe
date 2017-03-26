class ListaNegociacoes{

    constructor(){
        this._negociacoes = [];
    }

    adicionaNegociacoes(negociacao){
        this._negociacoes.push(negociacao);
    }

    get negociacao(){
        return [].concat(this._negociacoes);
        //devolvendo um novo array, assim as negociacoes não serão alteradas
    }

}