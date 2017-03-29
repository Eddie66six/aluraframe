class MensagemView extends View {

    constructor(elemento) {
        super(elemento);
        //esse super está passando este elemento do dom para a minha classe pai
    }

    template(model) {
        return model.mensagem ? `<p class="alert alert-info">${model.mensagem}</p>` : `<p></p>`;
    }
}