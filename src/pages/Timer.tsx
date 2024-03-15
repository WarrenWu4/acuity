import { useEffect, useState } from "react";
import { getTimerDuration, prettyTime } from "../lib/handleDefaults";
import { FaPlay, FaStop, FaRedo } from "react-icons/fa";
import TimerNavigationBar from "../components/NavigationBar/TimerNavigationBar";

export default function Timer() {

    const [timerDuration, setTimerDuration] = useState<number>(getTimerDuration());
    const [isRunning, setIsRunning] = useState<boolean>(false);

    useEffect(() => {

        if (timerDuration <= 0) {
            setTimerDuration(getTimerDuration());
            setIsRunning(r => !r);

            return;
        }

        if (isRunning && timerDuration > 0) {
            const timer = setInterval(() => {
                setTimerDuration(t => t - 1);
            }, 1000)

            return () => clearInterval(timer);
        }

    }, [isRunning, timerDuration])

    return (
        <div className="w-full h-full flex flex-col px-4 py-6">

            <TimerNavigationBar/>

            <div className="w-full h-full flex flex-col justify-center items-center">

                <div className="flex flex-col gap-y-2">

                    <div className="p-6 border-4 rounded-md text-6xl bg-transparent">
                        {prettyTime(timerDuration)}
                    </div>

                    <div className="flex justify-between gap-x-4 items-center">

                        <div className="text-2xl">On <span className={`font-bold ${(isRunning) ? "text-red-400" : "text-green-400"}`}>{(isRunning) ? "FOCUS" : "BREAK"}</span></div>

                        <div className="flex items-center gap-x-2">
                            <button type="button" onClick={() => setIsRunning(r => !r)} className={`rounded-md p-2 ${(isRunning) ? "bg-red-500" : "bg-green-500"}`}>
                                {(isRunning) ? <FaStop/>:<FaPlay/>}
                            </button>
                            <button type="button" onClick={() => {setIsRunning(true); setTimerDuration(0)}} className="rounded-md p-2 bg-blue-500">
                                <FaRedo/>
                            </button>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}