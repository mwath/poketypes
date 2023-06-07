/// <reference types="knockout" />
/// <reference path="./SpecialEventsNotifiedStatus.d.ts"/>
type EmptyCallback = () => void;
 declare enum SpecialEventStatus {
    none = 0,
    started = 1,
    ended = 2
}
declare class SpecialEvent {
    title: string;
    description: string;
    status: KnockoutObservable<SpecialEventStatus>;
    startTime: Date;
    startFunction: EmptyCallback;
    endTime: Date;
    endFunction: EmptyCallback;
    notified: SpecialEventNotifiedStatus;
    constructor(title: string, description: string, startTime: Date, startFunction: EmptyCallback, endTime: Date, endFunction: EmptyCallback);
    initialize(): void;
    shouldStartNow(): boolean;
    timeTillStart(): number;
    timeTillEnd(): number;
    hasStarted(): boolean;
    hasEnded(): boolean;
    notify(time: string, timeout: number, type?: import("../notifications/NotificationOption").default): void;
    checkStart(): void;
    start(): void;
    checkEnd(): void;
    end(): void;
    updateDate(): void;
}
 {};
