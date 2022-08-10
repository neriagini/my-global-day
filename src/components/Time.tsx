export default function Time({timeZone} : {timeZone:string}) {

    return(
       <div className={`shadow w-[200px] h-[200px] bg-stone-100 mx-auto justify-center flex flex-col items-center`}>
           <p> CLOCK GOES HERE </p>
           <p className={`font-bold`}> {timeZone}</p>
       </div>
    )
}