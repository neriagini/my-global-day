import Agenda from "./Agenda";
import {events} from "../events";
import Time from "./Time";
import Weather from "./Weather";


export default function TimeZoneComponent({timeZone}: {timeZone:string}) {
    return(
        <div className={`flex flex-col`}>
            <Time timeZone={timeZone} />
            <Agenda events={events}/>
            <Weather />
        </div>
    )
}