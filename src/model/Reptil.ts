import { Animal } from "./Animal";

export class Reptil extends Animal {
    // Atributo privado que armazena o tipo de escama do réptil
    private tipo_de_escama: string;

    // Construtor da classe Reptil que inicializa os atributos do réptil
    constructor(_nome: string, _idade: number, _genero: string, _tipo_de_escama: string) {
        super(_nome, _idade, _genero);  // Chama o construtor da classe Animal para inicializar os atributos herdados
        this.tipo_de_escama = _tipo_de_escama;  // Inicializa o tipo de escama do réptil
    }

    /**
     * Define o tipo de escama do réptil.
     * 
     * @param tipo_de_escama - O tipo de escama a ser atribuído ao réptil.
     */
    public setTipo_de_escama(tipo_de_escama: string): void {
        this.tipo_de_escama = tipo_de_escama;  // Define o tipo de escama do réptil
    }

    /**
     * Retorna o tipo de escama do réptil.
     * 
     * @returns O tipo de escama do réptil.
     */
    public getTipo_de_escama(): string {
        return this.tipo_de_escama;  // Retorna o tipo de escama do réptil
    }
}
