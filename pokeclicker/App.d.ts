/// <reference path="../src/declarations/DataStore/BadgeCase.d.ts" />
/// <reference path="../src/declarations/party/Category.d.ts" />
declare class App {
    static readonly debug = false;
    static game: Game;
    static readonly isUsingClient: boolean;
    static translation: Translate;
    static start(): void;
}
