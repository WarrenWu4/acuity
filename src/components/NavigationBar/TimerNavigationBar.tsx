import { getTimerType } from "../../lib/handleDefaults";

export default function TimerNavigationBar() {
    
    
    return (
        <div className="w-full flex items-center justify-between gap-x-4">
            <div className="rounded-md bg-stone-700 px-4 pt-2 pb-3 font-semibold text-xl flex items-center gap-x-2">
                <div className="w-3 h-3 relative bg-red-400 rounded-full mt-1">
                    <div className="absolute w-full h-full animate-ping bg-red-400 opacity-80 rounded-full"></div>
                </div>
                <div>
                    {getTimerType()}
                </div>
            </div>
        </div>
    )
}