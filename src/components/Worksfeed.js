import { useState } from "react"
import Crossicon from "./Crossicon";


export function Worksfeed(){
const[yturl,setyturl] = useState();
const[data,setdata] = useState([
    "https://www.youtube.com/embed/ZcHTpqWcWFY?si=NMzsGzw8N67z6FFX&amp;controls=0",
   "https://www.youtube.com/embed/ZcHTpqWcWFY?si=NMzsGzw8N67z6FFX&amp;controls=0",
    "https://www.youtube.com/embed/ZcHTpqWcWFY?si=NMzsGzw8N67z6FFX&amp;controls=0",
   "https://www.youtube.com/embed/ZcHTpqWcWFY?si=NMzsGzw8N67z6FFX&amp;controls=0"
]);

function onclickhandlerforurl(){
    if(yturl){
        setdata((prev)=>[...prev,yturl]);
    }
}

function oncrossurlhandler(index){
const newarr = data.filter((_,i)=>i != index);
setdata(newarr)
}


    return (
        <div className="mt-8">
            <h1 className="text-xl font-semibold">Worksfeed section</h1>
            <div className="">
                <input onChange={(e)=>setyturl(e.target.value)} placeholder="Enter the url" className="rounded-full border border-black p-2 mt-2"/>
                <button className="text-xl text-white px-4 py-2 bg-sky-400 rounded-lg mt-4 ml-2" onClick={onclickhandlerforurl}>Add url</button>
            </div>

            <div className="grid grid-cols-2 gap-2 mt-4">
                {
                   (data.length > 0) && data.map((obj,index)=>{
                       return <div className="relative">
                            <button onClick={()=>oncrossurlhandler(index)} className="absolute right-0 top-0 text-white bg-white rounded-full"><Crossicon/></button>
                            <iframe src={obj} className="h-full w-full"></iframe>
                        </div>
                    })
                }
            </div>

            <button className="text-xl text-white px-4 py-2 bg-sky-400 rounded-lg mt-4 ml-2">Submit</button>
        </div>
    )
}