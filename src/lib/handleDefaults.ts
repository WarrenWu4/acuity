export function getTimerDuration() {
    if (localStorage.getItem("timerDuration")) {
        return parseInt(localStorage.getItem("timerDuration")!);
    }
    return 10;
}

export function prettyTime(t:number) {
    let hours = Math.floor(t / 3600);
    let minutes = Math.floor(t / 60) - (hours * 60);
    let seconds = t % 60;
    return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}