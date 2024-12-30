


export function Home(){

    return (
        <div className="grid grid-rows-10 grid-cols-10 h-4/5">
            <div className="bg-white shadow rounded row-start-2 row-span-8 col-start-2 col-span-8 p-4 overflow-auto"> 
                    <div>
                        <h1 className="text-xl font-semibold">Hero Section</h1>
                        <div className="mt-4">
                            <p>Title</p>
                            <input placeholder="Enter the title" className="rounded-full border border-black p-2 mt-2"/>
                        </div>

                        <div className="mt-4">
                            <p>Background Image</p>
                            <input placeholder="Enter the url" className="rounded-full border border-black p-2 mt-2"/>
                        </div>

                        <button className="text-xl text-white px-4 py-2 bg-sky-400 rounded-lg mt-4">Submit</button>
                    </div>

            </div>
        </div>
    )
}