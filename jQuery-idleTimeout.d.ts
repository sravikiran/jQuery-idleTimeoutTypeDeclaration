/// <reference path="jquery.d.ts" />

interface JQIdleTimeoutSettings {
    inactivity?: number;
    noconfirm?: number;
    sessionAlive?: number;
    redirect_url?: string;
    click_reset?: bool;
    alive_url?: string;
    logout_url?: string;
    showDialog?: bool;
    }

interface JQueryTimeout extends JQuery {
    idleTimeout(settings: JQIdleTimeoutSettings): JQueryTimeout;
}
