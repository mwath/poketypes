declare class EvolutionHandler {
    static isSatisfied(data: EvoData): boolean;
    static evolve(data: EvoData, notification?: boolean): boolean;
}
