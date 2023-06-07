/// <reference types="knockout" />
type NPCOptionalArgument = {
    requirement?: Requirement | MultiRequirement | OneFromManyRequirement;
    image?: string;
};
declare class NPC {
    name: string;
    dialog: string[];
    options: NPCOptionalArgument;
    talkedTo: KnockoutObservable<boolean>;
    constructor(name: string, dialog: string[], options?: NPCOptionalArgument);
    get dialogHTML(): string;
    isVisible(): boolean;
    openDialog(): void;
}
