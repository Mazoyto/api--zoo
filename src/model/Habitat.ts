import { Animal } from "./Animal";

export class Habitat {
    // Atributos privados que armazenam informações sobre o habitat
    private nome: string;  // Nome do habitat
    private listaAnimais: Array<Animal>;  // Lista de animais no habitat

    // Construtor da classe Habitat que inicializa os atributos do habitat
    constructor(_nome: string, _listaAnimais: Array<Animal>) {
        this.nome = _nome;  // Inicializa o nome do habitat
        this.listaAnimais = _listaAnimais;  // Inicializa a lista de animais no habitat
    }

    /**
     * Define o nome do habitat.
     * 
     * @param nome - O nome a ser atribuído ao habitat.
     */
    public setNome(nome: string): void {
        this.nome = nome;  // Define o nome do habitat
    }

    /**
     * Retorna o nome do habitat.
     * 
     * @returns O nome do habitat.
     */
    public getNome(): string {
        return this.nome;  // Retorna o nome do habitat
    }

    /**
     * Define a lista de animais no habitat.
     * 
     * @param listaAnimais - A lista de animais a ser atribuída ao habitat.
     */
    public setListaAnimais(listaAnimais: Array<Animal>): void {
        this.listaAnimais = listaAnimais;  // Define a lista de animais no habitat
    }

    /**
     * Retorna a lista de animais no habitat.
     * 
     * @returns A lista de animais no habitat.
     */
    public getListaAnimais(): Array<Animal> {
        return this.listaAnimais;  // Retorna a lista de animais no habitat
    }
}
