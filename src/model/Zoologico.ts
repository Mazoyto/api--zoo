import { Atracao } from "./Atracao";

export class Zoologico {

    private nome: string;
    private listaAtracao: Array<Atracao>;

    constructor(_nome: string, _listaAtracao: Array<Atracao>) {
        this.nome = _nome;
        this.listaAtracao = _listaAtracao;
    }

    /**
     * Define o nome do Zoologico.
     * 
     * @param nome - O nome a ser definido para o Zoologico.
     */
    public setNome(nome: string): void {
        this.nome = nome;
    }

    /**
     * Retorna o nome do Zoologico.
     * 
     * @returns O nome do Zoologico.
     */
    public getNome(): string {
        return this.nome;
    }

    /**
     * Define a lista de Atracao no Atracao.
     * 
     * @param listaAtracao - A lista de Atracao a ser definida para o Atracao.
     */
    public setListaAtracao(listaAtracao: Array<Atracao>): void {
        this.listaAtracao = listaAtracao;
    }

    /**
     * Retorna a lista de Atracao no Atracao.
     * 
     * @returns A lista de Atracao no Atracao.
     */
    public getListaAtracao(): Array<Atracao> {
        return this.listaAtracao;
    }
}
