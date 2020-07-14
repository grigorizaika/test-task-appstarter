const TIMER_UPDATE_INTERVAL = 0.01;

export default class Timer {
    constructor(name) {
        this.name = name || "Timer, created at " + (new Date()).toGMTString();
        this._stopped = true;
        this._updateTimerId = -1;
        this.timeCount = 0;
        this.lastUpdate = 0;
    }

    static createFromJSON(timerJSON) {
        let JSONObject = timerJSON;

        if (typeof JSONObject == "string") {
            JSONObject = JSON.parse(JSONObject);
        }

        let name = JSONObject["name"];

        let timer = new Timer(name);
        timer._stopped = JSONObject["_stopped"];
        timer._updateTimerId = JSONObject["_updateTimerId"];
        timer.timeCount = JSONObject["timeCount"];
        timer.lastUpdate = JSONObject["lastUpdate"];

        return timer;
    }

    _updateTimerCount() {
        this.timeCount += Date.now() - this.lastUpdate;
        this.lastUpdate = Date.now();
    }
    
    runTimer() {
        if (!this._stopped) {
            this._updateTimerId = setInterval(
                this._updateTimerCount.bind(this),
                TIMER_UPDATE_INTERVAL * 1000
            );
        } else {
            this.lastUpdate = 0;
            clearInterval(this._updateTimerId);
        }
    }

    startTimer() {
        if (this.lastUpdate == 0) {
            this.lastUpdate = Date.now();
        }

        if (this._stopped) {
            this._stopped = false;
            this.runTimer();
        }
    }

    stopTimer() {
        if(!this._stopped) {
            this._stopped = true;
            this.runTimer();
        }
    }

    getTimeString() {
        let totalSeconds = Math.floor(this.timeCount / 1000);

        let hours = Math.floor(totalSeconds / 3600);
        let minutes = Math.floor((totalSeconds - (hours * 3600)) / 60);
        let seconds = totalSeconds - hours * 3600 - minutes * 60;

        return (hours.toString().padStart(2, "0") + ":" +
                minutes.toString().padStart(2, "0") + ":" +
                seconds.toString().padStart(2, "0"))
    }

    isStopped() {
        return this._stopped;
    }
}