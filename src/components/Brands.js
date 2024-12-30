import { useEffect, useState } from "react"
import Crossicon from "./Crossicon";




export function Brands(){
const[yturl,setyturl] = useState('');
const[brands,setbrands] = useState([
    "https://drive.google.com/file/d/1I-HSDBk09SuYQ2jCIGnXJkwggJa4vIQZ/preview",
    "https://drive.google.com/file/d/1I-HSDBk09SuYQ2jCIGnXJkwggJa4vIQZ/preview"
]);

useEffect(()=>{
    console.log(yturl)
},[yturl])

useEffect(()=>{
console.log(brands)
},[brands])

function onclickhandlerforurl(){
if(yturl){
    console.log(yturl)
    setbrands((prev)=>[...prev,yturl])
    setyturl('');
}
}

function branddeletehandler(index){
    const newarr = brands.filter((_,i)=> i != index);
    setbrands(newarr);
}

    return (
        <div>
            <h1 className="text-xl font-bold mt-4">Brands Section</h1>

            <div className="flex gap-2 items-center">
            <input onChange={(e)=>setyturl(e.target.value)} placeholder="Enter the url" className="rounded-full border border-black p-2 mt-2"/>
            <button className="text-xl text-white px-4 py-2 bg-sky-400 rounded-lg mt-4 ml-2" onClick={onclickhandlerforurl}>Add url</button>
            </div>

            <div className="grid grid-cols-2 gap-2 mt-2">
                {
                    brands.map((url,index)=>{
                        return <div className=" relative">
                            <button onClick={()=>branddeletehandler(index)} className="absolute right-0 top-0 text-white bg-white rounded-full"><Crossicon/></button>
                                <iframe src={url} className="h-full w-full"></iframe>
                            </div>
                    })
                }
            </div>
        </div>
    )
}