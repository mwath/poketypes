/// <reference path="GrowMutation.d.ts" />
/**
 * Mutation that requires a specific environment near an empty plot.
 */
declare abstract class GrowNearMutation extends GrowMutation {
    constructor(mutationChance: number, mutatedBerry: BerryType, options?: MutationOptions);
    /**
     * Determines which plots can mutate
     * @return The plot indices that can mutate
     */
    getMutationPlots(): number[];
    /**
     * Determines if the plots near fit the requirements
     * @param plots The list of nearby plots
     */
    abstract nearPlotsFitRequirements(plots: number[]): boolean;
}
