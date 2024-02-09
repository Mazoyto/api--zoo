import { Animal } from "./Animal";

export class Habitat {

    private nome: string;
    private listaAnimais: Array<Animal>;

    constructor(_nome: string, _listaAnimais: Array<Animal>) {
        this.nome = _nome;
        this.listaAnimais = _listaAnimais;
    }

    /**
     * Define o nome do habitat.
     * 
     * @param nome - O nome a ser definido para o habitat.
     */
    public setNome(nome: string): void {
        this.nome = nome;
    }

    /**
     * Retorna o nome do habitat.
     * 
     * @returns O nome do habitat.
     */
    public getNome(): string {
        return this.nome;
    }

    /**
     * Define a lista de animais no habitat.
     * 
     * @param listaAnimais - A lista de animais a ser definida para o habitat.
     */
    public setListaAnimais(listaAnimais: Array<Animal>): void {
        this.listaAnimais = listaAnimais;
    }

    /**
     * Retorna a lista de animais no habitat.
     * 
     * @returns A lista de animais no habitat.
     */
    public getListaAnimais(): Array<Animal> {
        return this.listaAnimais;
    }
}
