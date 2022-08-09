import Event from "./Event";
import {IEvent} from "../Interfaces";

export default function Agenda({events} :any) {
    return(
        <div className={`space-y-1 p-2`}>
            <p className={`text-left text-stone-500 text-[14px]`}> Today </p>
            <p className={`text-left font-bold`}> Thursday, 26 May 2022 </p>
            {
                events.map((event: IEvent, index:number) => {
                        return (
                            <Event key={index} event={event} />
                        )
                    }
                )
            }
        </div>
    )
}