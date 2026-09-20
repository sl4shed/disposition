import type { Component } from 'vue';

export interface WindowInstance {
    id: string; // actual random id
    appId: string; // something like "welcome" or "docs"
    title: string;
    z: number;
    minimized: Boolean;

    width: number,
    height: number,
    minWidth: number,
    minHeight: number,

    posX: number,
    posY: number,

    tool: Boolean, // just like on windows, this defines if the app shows up in the taskbar and if it can be minimized.
    resizeable: Boolean,
}

export interface AppDef {
    appId: string; // something like "welcome" or "docs"
    title: string;
    component: Component;

    width: number,
    height: number,
    minWidth: number,
    minHeight: number,

    // idk if i should include these or not. for now, i think all apps should spawn in the middle of the screen.
    // theoretically im trying to keep ts framework as simple as possible
    // posX: number,
    // posY: number,

    tool: Boolean, // just like on windows, this defines if the app shows up in the taskbar and if it can be minimized.
    resizeable: Boolean,
}