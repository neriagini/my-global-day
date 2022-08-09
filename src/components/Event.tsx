import {IEvent} from "../Interfaces";

export default function Event({event}: { event:IEvent }) {


    return(
            <div className={`flex flex-row`}>
               <div className={`flex flex-col`}>
                   <p className={`text-stone-500 text-[12px] text-center`}> 08:00 am</p>
                   <div className={`h-full w-1 bg-black rounded-3xl mx-auto`}/>
               </div>

               <div className={`mb-4`}>
                   <div className={`shadow-xl text-left bg-stone-200 border-l-black border-l-4  rounded-r-[5px] w-[300px] p-2 mt-2 ml-2`}>
                       <p className={`font-bold`}> {event.summary} </p>
                       <p> {event.description} </p>
                   </div>
               </div>
            </div>
    )
}