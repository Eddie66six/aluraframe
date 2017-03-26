class DateHelper {

    constructor() {
        throw new Error('Essa classe não pode ser instanciada');
    }

    static dataParaTexto(data) {
        //usando template string para evitar concatenações
        return `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`;
    }

    static textoParaData(texto) {

        //expressão regular para ver se a data está vindo com o formato 2016-02-02
        if (!/\d{4}-\d{2}-\d{2}/.test(texto))
            throw new Error('A data não pode ser passada com barra');

        return new Date(...texto.split('-')
            .map((item, indice) => item - indice % 2));
    }
}