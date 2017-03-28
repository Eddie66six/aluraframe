class NegociacoesView {

    constructor(elemento) {
        this._elemento = elemento;
    }

    _template(model) {

        return ` 
        <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>DATA</th>
                        <th>QUANTIDADE</th>
                        <th>VALOR</th>
                        <th>VOLUME</th>
                    </tr>
                </thead>
                
                <tbody>
                    ${model.negociacao.map(n => `
                        
                            <tr>
                                <td>${DateHelper.dataParaTexto(n.data)}</td>
                                <td>${n.quantidade}</td>
                                <td>${n.valor}</td>
                                <td>${n.volume}</td>
                            </tr>
                        
                    `).join('')}
                </tbody>
                    <td colspan="3"></td>
                    <td>
                        ${model.negociacao.reduce((total, n) => total + n.volume, 0.0)}
                    </td>
                <tfoot>
                </tfoot>
        </table>`

    }

    update(model) {
        return this._elemento.innerHTML = this._template(model);
    }

}