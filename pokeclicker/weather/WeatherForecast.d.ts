/// <reference path="knockout.d.ts"/>
/// <reference path="../enums/WeatherForecastStatus.d.ts"/>
/// <reference path="./WeatherType.d.ts"/>
declare class WeatherForecast {
    date: string;
    weatherType: WeatherType;
    status: Observable<WeatherForecastStatus>;
    constructor(date: string, // Date as toLocaleString
    weatherType: WeatherType, status?: WeatherForecastStatus);
    setStatusHasPassed(): void;
}
