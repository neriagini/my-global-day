import {IEvent} from "../Interfaces";

export default function Event({color, event}: { color:number, event:IEvent }) {
    const colors = ['#cee9e7', '#ffefe7', '#f8d0cd', '#f0def0', '#cfe4f5', '#e5eaec']
    const borders = ['#a0ded9', '#e8c9ba', '#e6aca8', '#e6bce6', '#a3cdf0', '#b4bec2']

    const styles = {
        background: {
            backgroundColor: colors[color],
            borderLeftColor: borders[color]
        },
    };

    return(
            <div className={`flex flex-row`}>
               <div className={`flex flex-col`}>
                   <p className={`text-stone-500 text-[12px] text-center`}> 08:00 am</p>
                   <div style={styles.background} className={`h-full w-1 rounded-3xl mx-auto`}/>
               </div>

               <div className={`mb-4`}>
                   <div style={styles.background} className={`shadow text-left bg-stone-200  border-l-4  rounded-r-[5px] w-[300px] p-2 mt-2 ml-2`}>
                       <p className={`font-bold`}> {event.summary} </p>
                       <p> {event.description} </p>
                   </div>
               </div>
            </div>
    )
}


