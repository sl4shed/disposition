import Welcome from "~/apps/welcome.vue"
import Documentation from "~/apps/documentation.vue"
import type { AppDef } from "~/types/window"
import Winver from "~/apps/winver.vue"

export const APPS: { [key: string]: AppDef } = {
    welcome: {
        appId: 'welcome',
        title: 'Welcome!',
        component: Welcome,

        width: 600,
        height: 310,
        minWidth: 600,
        minHeight: 310,
        
        tool: false,
        resizeable: false
    },

    documentation: {
        appId: 'documentation',
        title: 'DispoDocs',
        component: Documentation,

        width: 1000,
        height: 700,
        minWidth: 800,
        minHeight: 500,
        
        tool: false,
        resizeable: true
    },

    winver: {
        appId: 'winver',
        title: 'DispoVer',
        component: Winver,

        width: 350,
        height: 430,
        minWidth: 350,
        minHeight: 430,

        tool: true,
        resizeable: false
    }
}