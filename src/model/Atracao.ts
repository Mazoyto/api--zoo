import { Habitat } from "./Habitat";

export class Atracao {

    private nome: string;
    private listaHabitat: Array<Habitat>;

    constructor(_nome: string, _listaHabitat: Array<Habitat>) {
        this.nome = _nome;
        this.listaHabitat = _listaHabitat;
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
     * Define a lista de Habitat no habitat.
     * 
     * @param listaHabitat - A lista de Habitat a ser definida para o habitat.
     */
    public setListaHabitat(listaHabitat: Array<Habitat>): void {
        this.listaHabitat = listaHabitat;
    }

    /**
     * Retorna a lista de Habitat no habitat.
     * 
     * @returns A lista de Habitat no habitat.
     */
    public getListaHabitat(): Array<Habitat> {
        return this.listaHabitat;
    }
}