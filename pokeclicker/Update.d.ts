/// <reference path="../src/scripts/GameConstants.d.ts" />
declare class Update implements Saveable {
    defaults: Record<string, any>;
    saveKey: string;
    version: string;
    saveVersion: string;
    updateSteps: {
        '0.4.0': ({ playerData, saveData }: {
            playerData: any;
            saveData: any;
        }) => void;
        '0.4.4': ({ saveData }: {
            saveData: any;
        }) => void;
        '0.4.15': ({ playerData, saveData }: {
            playerData: any;
            saveData: any;
        }) => void;
        '0.4.17': ({ saveData }: {
            saveData: any;
        }) => void;
        '0.4.18': ({ playerData, saveData }: {
            playerData: any;
            saveData: any;
        }) => void;
        '0.5.0': ({ playerData }: {
            playerData: any;
        }) => void;
        '0.5.2': ({ saveData }: {
            saveData: any;
        }) => void;
        '0.5.5': ({ saveData }: {
            saveData: any;
        }) => void;
        '0.5.7': ({ saveData }: {
            saveData: any;
        }) => void;
        '0.5.8': ({ playerData, saveData }: {
            playerData: any;
            saveData: any;
        }) => void;
        '0.6.0': ({ saveData }: {
            saveData: any;
        }) => void;
        '0.6.1': ({ saveData }: {
            saveData: any;
        }) => void;
        '0.6.5': ({ playerData, saveData }: {
            playerData: any;
            saveData: any;
        }) => void;
        '0.7.1': ({ playerData, saveData }: {
            playerData: any;
            saveData: any;
        }) => void;
        '0.7.4': ({ playerData, saveData }: {
            playerData: any;
            saveData: any;
        }) => void;
        '0.7.6': ({ playerData, saveData }: {
            playerData: any;
            saveData: any;
        }) => void;
        '0.8.1': ({ playerData, saveData }: {
            playerData: any;
            saveData: any;
        }) => void;
        '0.8.3': ({ playerData, saveData }: {
            playerData: any;
            saveData: any;
        }) => void;
        '0.8.4': ({ playerData, saveData }: {
            playerData: any;
            saveData: any;
        }) => void;
        '0.8.9': ({ playerData, saveData }: {
            playerData: any;
            saveData: any;
        }) => void;
        '0.8.12': ({ playerData, saveData }: {
            playerData: any;
            saveData: any;
        }) => void;
        '0.8.14': ({ playerData, saveData }: {
            playerData: any;
            saveData: any;
        }) => void;
        '0.8.15': ({ playerData, saveData }: {
            playerData: any;
            saveData: any;
        }) => void;
        '0.9.0': ({ playerData, saveData }: {
            playerData: any;
            saveData: any;
        }) => void;
        '0.9.4': ({ playerData, saveData }: {
            playerData: any;
            saveData: any;
        }) => void;
        '0.9.6': ({ playerData, saveData }: {
            playerData: any;
            saveData: any;
        }) => void;
        '0.9.7': ({ playerData, saveData }: {
            playerData: any;
            saveData: any;
        }) => void;
        '0.9.8': ({ playerData, saveData, settingsData }: {
            playerData: any;
            saveData: any;
            settingsData: any;
        }) => void;
        '0.9.9': ({ playerData, saveData }: {
            playerData: any;
            saveData: any;
        }) => void;
        '0.9.10': ({ playerData, saveData }: {
            playerData: any;
            saveData: any;
        }) => void;
        '0.9.11': ({ playerData, saveData }: {
            playerData: any;
            saveData: any;
        }) => void;
        '0.9.12': ({ playerData, saveData }: {
            playerData: any;
            saveData: any;
        }) => void;
        '0.9.13': ({ playerData, saveData }: {
            playerData: any;
            saveData: any;
        }) => void;
        '0.9.14': ({ playerData, saveData }: {
            playerData: any;
            saveData: any;
        }) => void;
        '0.9.15': ({ playerData, saveData, settingsData }: {
            playerData: any;
            saveData: any;
            settingsData: any;
        }) => void;
        '0.9.16': ({ playerData, saveData }: {
            playerData: any;
            saveData: any;
        }) => void;
        '0.9.17': ({ playerData, saveData, settingsData }: {
            playerData: any;
            saveData: any;
            settingsData: any;
        }) => void;
        '0.10.0': ({ playerData, saveData, settingsData }: {
            playerData: any;
            saveData: any;
            settingsData: any;
        }) => void;
        '0.10.1': ({ playerData, saveData }: {
            playerData: any;
            saveData: any;
        }) => void;
        '0.10.2': ({ playerData, saveData }: {
            playerData: any;
            saveData: any;
        }) => void;
        '0.10.3': ({ playerData, saveData }: {
            playerData: any;
            saveData: any;
        }) => void;
        '0.10.4': ({ playerData, saveData }: {
            playerData: any;
            saveData: any;
        }) => void;
        '0.10.5': ({ playerData, saveData, settingsData }: {
            playerData: any;
            saveData: any;
            settingsData: any;
        }) => void;
        '0.10.6': ({ playerData, saveData }: {
            playerData: any;
            saveData: any;
        }) => void;
        '0.10.7': ({ playerData, saveData }: {
            playerData: any;
            saveData: any;
        }) => void;
        '0.10.8': ({ playerData, saveData }: {
            playerData: any;
            saveData: any;
        }) => void;
        '0.10.9': ({ playerData, saveData }: {
            playerData: any;
            saveData: any;
        }) => void;
        '0.10.10': ({ playerData, saveData, settingsData }: {
            playerData: any;
            saveData: any;
            settingsData: any;
        }) => void;
        '0.10.11': ({ playerData, saveData, settingsData }: {
            playerData: any;
            saveData: any;
            settingsData: any;
        }) => void;
    };
    constructor();
    checkForNewerVersionOnInterval(): void;
    minUpdateVersion(version: any, saveData: any): boolean;
    isNewerVersion(version: any, compareVersion: any): boolean;
    isOlderVersion(version: any, compareVersion: any): boolean;
    getBackupButton(): [HTMLElement, string];
    automaticallyDownloadBackup(button: any, settingsData: any): void;
    check(): void;
    static moveIndex: (arr: any, to: any, from?: number, defaultVal?: number) => any;
    static changeHatcheryKey: (saveData: any, oldName: any, newName: any) => void;
    static rotatePokemonIDs: (saveData: any, rotationlist: number[], keepLast?: boolean) => void;
    static updatePokemonId(saveData: any, oldID: any, newID: any): void;
    static changePokemonNameToId(saveData: any, pokemonArray: any): void;
    static startQuestLine: (saveData: any, questLineName: string) => void;
    static fixTempBattleState: (saveData: any, battleIndex: number, setBattleState: number, questLineName: string, questStep: number) => void;
    static giveMissingQuestLineProgressRewardPokemon(saveData: any, questLineName: string, questStep: number, pokemonId: number): void;
    static giveMissingTempBattleRewardPokemon(saveData: any, tempBattleIndex: number, pokemonId: number): void;
    static giveMissingPokemon(saveData: any, pokemonId: number): void;
    getPlayerData(): any;
    setPlayerData(playerData: any): void;
    getSaveData(): any;
    setSaveData(saveData: any): void;
    getSettingsData(): any;
    setSettingsData(settingsData: any): void;
    fromJSON(json: any, initial?: boolean): void;
    toJSON(): Record<string, any>;
}
