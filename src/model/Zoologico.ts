import { Atracao } from "./Atracao";

export class Zoologico {
    // Atributos privados que armazenam informações sobre o zoológico
    private nome: string;  // Nome do zoológico
    private listaAtracao: Array<Atracao>;  // Lista de atrações no zoológico

    // Construtor da classe Zoologico que inicializa os atributos do zoológico
    constructor(_nome: string, _listaAtracao: Array<Atracao>) {
        this.nome = _nome;  // Inicializa o nome do zoológico
        this.listaAtracao = _listaAtracao;  // Inicializa a lista de atrações no zoológico
    }

    /**
     * Define o nome do zoológico.
     * 
     * @param nome - O nome a ser atribuído ao zoológico.
     */
    public setNome(nome: string): void {
        this.nome = nome;  // Define o nome do zoológico
    }

    /**
     * Retorna o nome do zoológico.
     * 
     * @returns O nome do zoológico.
     */
    public getNome(): string {
        return this.nome;  // Retorna o nome do zoológico
    }

    /**
     * Define a lista de atrações no zoológico.
     * 
     * @param listaAtracao - A lista de atrações a ser atribuída ao zoológico.
     */
    public setListaAtracao(listaAtracao: Array<Atracao>): void {
        this.listaAtracao = listaAtracao;  // Define a lista de atrações no zoológico
    }

    /**
     * Retorna a lista de atrações no zoológico.
     * 
     * @returns A lista de atrações no zoológico.
     */
    public getListaAtracao(): Array<Atracao> {
        return this.listaAtracao;  // Retorna a lista de atrações no zoológico
    }
}
