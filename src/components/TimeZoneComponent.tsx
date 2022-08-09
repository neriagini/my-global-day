import Agenda from "./Agenda";
import {events} from "../events";


export default function TimeZoneComponent() {
    return(
        <>
            <Agenda events={events}/>
        </>
    )
}