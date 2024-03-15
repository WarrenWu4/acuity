import { useEffect, useState } from "react";
import { getTimerDuration, prettyTime } from "../lib/handleDefaults";

export default function Timer() {

    let timerDuration:number = getTimerDuration();
    const [timer, setTimer] = useState<any>();
    const [time, setTime] = useState<string>(prettyTime(timerDuration));
    const [isRunning, setIsRunning] = useState<boolean>(false);

    function startStopTime() {
        if (isRunning) {
            clearInterval(timer);
            setIsRunning(false);
        } else {
            setTimer(setInterval(() => {
                if(timerDuration > 0) {
                    timerDuration--;
                    setTime(prettyTime(timerDuration));
                } else {
                    clearInterval(timer);
                    timerDuration = getTimerDuration();
                    setTime(prettyTime(timerDuration));
                    setIsRunning(false);
                }
            }, 1000));
            setIsRunning(true);
        }
    }

    return (
        <div className="w-full h-full flex flex-col">

            <div className="w-full h-full flex justify-center items-center">

                <div className="p-6 border-4 rounded-md text-6xl">
                    {time}
                </div>

                <button type="button" onClick={startStopTime}>timer</button>

            </div>

        </div>
    )
}