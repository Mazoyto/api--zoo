import { Habitat } from "./Habitat";

export class Atracao {
    // Atributos privados que armazenam informações sobre a atração
    private nome: string;  // Nome da atração
    private listaHabitat: Array<Habitat>;  // Lista de habitats na atração

    // Construtor da classe Atracao que inicializa os atributos da atração
    constructor(_nome: string, _listaHabitat: Array<Habitat>) {
        this.nome = _nome;  // Inicializa o nome da atração
        this.listaHabitat = _listaHabitat;  // Inicializa a lista de habitats na atração
    }

    /**
     * Define o nome da atração.
     * 
     * @param nome - O nome a ser atribuído à atração.
     */
    public setNome(nome: string): void {
        this.nome = nome;  // Define o nome da atração
    }

    /**
     * Retorna o nome da atração.
     * 
     * @returns O nome da atração.
     */
    public getNome(): string {
        return this.nome;  // Retorna o nome da atração
    }

    /**
     * Define a lista de habitats na atração.
     * 
     * @param listaHabitat - A lista de habitats a ser atribuída à atração.
     */
    public setListaHabitat(listaHabitat: Array<Habitat>): void {
        this.listaHabitat = listaHabitat;  // Define a lista de habitats na atração
    }

    /**
     * Retorna a lista de habitats na atração.
     * 
     * @returns A lista de habitats na atração.
     */
    public getListaHabitat(): Array<Habitat> {
        return this.listaHabitat;  // Retorna a lista de habitats na atração
    }
}
