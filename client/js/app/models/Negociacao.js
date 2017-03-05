class Negociacao {
    constructor(quantidade, data, valor) {
        this._quantidade = quantidade;
        this._data = new Date(data.getTime()); //gera uma nova data a partir da que foi passada
        this._valor = valor;
        Object.freeze(this); //congelando a minha classe no momento em que ela é instanciada
    }

    get volume() {
        return this._quantidade * this._valor;
    }

    get data() {
        //criação da propriedade getter
        return new Date(this._data.getTime());
    }

    get quantidade() {
        return this._quantidade;
    }

    get valor() {
        return this._valor;
    }
}