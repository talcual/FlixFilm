import { useState } from 'react'


function Peliculas() {
  const [count, setCount] = useState(0)

  return (
    <>
        <div class="flex justify-center items-center min-h-screen">
            <div class="max-w-[720px] mx-auto">
                <div class="block mb-4 mx-auto border-b border-slate-300 pb-2 max-w-[360px]">
                    <a 
                        target="_blank" 
                        href="https://www.material-tailwind.com/docs/html/card" 
                        class="block w-full px-4 py-2 text-center text-slate-700 transition-all"
                    >
                        More components on <b>Material Tailwind</b>.
                    </a>
                </div>

                <div class="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
                    <div class="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white bg-clip-border rounded-xl h-96">
                        <img
                            src="https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=927&amp;q=80"
                            alt="card-image" class="object-cover w-full h-full" />
                    </div>
                    <div class="p-6">
                        <div class="flex items-center justify-between mb-2">
                            <p class="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                                Apple AirPods
                            </p>
                            <p class="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                                $95.00
                            </p>
                        </div>
                        <p class="block font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75">
                            With plenty of talk and listen time, voice-activated Siri access, and an
                            available wireless charging case.
                        </p>
                    </div>
                    <div class="p-6 pt-0">
                        <button
                            class="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg shadow-gray-900/10 hover:shadow-gray-900/20 focus:opacity-[0.85] active:opacity-[0.85] active:shadow-none block w-full bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                            type="button">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>        
    </>
  )
}


export default Peliculas