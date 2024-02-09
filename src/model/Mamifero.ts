import { Animal } from "./Animal";

export class Mamifero extends Animal {
    // Atributo privado que armazena a raça do mamífero
    private raca: string;

    // Construtor da classe Mamifero que inicializa os atributos do mamífero
    constructor(_raca: string, _nome: string, _idade: number, _genero: string) {
        super(_nome, _idade, _genero);  // Chama o construtor da classe Animal para inicializar os atributos herdados
        this.raca = _raca;  // Inicializa a raça do mamífero
    }

    /**
     * Define a raça do mamífero.
     * 
     * @param raca - A raça a ser atribuída ao mamífero.
     */
    public setRaca(raca: string): void {
        this.raca = raca;  // Define a raça do mamífero
    }

    /**
     * Retorna a raça do mamífero.
     * 
     * @returns A raça do mamífero.
     */
    public getRaca(): string {
        return this.raca;  // Retorna a raça do mamífero
    }
}
