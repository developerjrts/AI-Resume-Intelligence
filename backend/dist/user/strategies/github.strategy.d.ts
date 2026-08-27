import { Strategy } from "passport-github2";
declare const GithubStrategy_base: new (...args: [options: import("passport-github2").StrategyOptions] | [options: import("passport-github2").StrategyOptionsWithRequest]) => Strategy & {
    validate(...args: any[]): unknown;
};
export declare class GithubStrategy extends GithubStrategy_base {
    constructor();
    validate(accessToken: string, refreshToken: string, profile: any, done: Function): Promise<any>;
}
export {};
