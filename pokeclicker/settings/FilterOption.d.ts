/// <reference path="knockout.d.ts"/>
/// <reference path="./SettingOption.d.ts"/>
declare class FilterOption<T = any> {
    displayName: string;
    value: Observable<T>;
    optionName: string;
    options: SettingOption<string>[];
    constructor(displayName: string, value: Observable<T>, optionName?: string, options?: SettingOption<string>[]);
}
