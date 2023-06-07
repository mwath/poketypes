declare class BattleFrontierMilestoneItem extends BattleFrontierMilestone {
    itemName: string;
    amount: number;
    constructor(stage: number, itemName: string, amount: number, requirement?: Requirement);
    get image(): string;
    get description(): string;
}
