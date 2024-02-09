import { Animal } from "./Animal";

export class Ave extends Animal {
    // Atributo privado que armazena a envergadura da ave
    private envergadura: number;

    // Construtor da classe Ave que inicializa os atributos da ave
    constructor(_nome: string, _idade: number, _genero: string, _envergadura: number) {
        super(_nome, _idade, _genero);  // Chama o construtor da classe Animal para inicializar os atributos herdados
        this.envergadura = _envergadura;  // Inicializa a envergadura da ave
    }

    /**
     * Define a envergadura da ave.
     * 
     * @param envergadura - A envergadura a ser atribuída à ave.
     */
    public setEnvergadura(envergadura: number): void {
        this.envergadura = envergadura;  // Define a envergadura da ave
    }

    /**
     * Retorna a envergadura da ave.
     * 
     * @returns A envergadura da ave.
     */
    public getEnvergadura(): number {
        return this.envergadura;  // Retorna a envergadura da ave
    }
}
