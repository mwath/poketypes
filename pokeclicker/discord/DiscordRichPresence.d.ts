declare class DiscordRichPresence {
    static focusedElement: HTMLInputElement;
    static clientVersion: string;
    static startTimestamp: number;
    static currentArea: string;
    static cycleSmallImageIndex: number;
    static cycleOptions: string[];
    static outputOptions: Array<{
        key: string;
        value: () => string | number;
        default: string | number;
    }>;
    static replaceDiscordText(input: any): any;
    static getRichPresenceData(): Record<string, any>;
}
