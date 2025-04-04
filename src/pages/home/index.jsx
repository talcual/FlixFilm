
import { useState } from 'react'
import { Link } from 'react-router-dom'


function Home() {
  const [count, setCount] = useState(0)

  return (
    <>
<div class="flex flex-col justify-center items-center h-[100vh]">
            <div
                class="relative flex max-w-[500px] w-full flex-col rounded-[10px] border-[1px] border-gray-200 bg-white bg-clip-border shadow-md shadow-[#F3F3F3] dark:border-[#ffffff33] dark:!bg-navy-800 dark:text-white dark:shadow-none"
            >
                <div class="!z-5 relative flex h-full w-full flex-col rounded-[20px] bg-white bg-clip-border p-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:shadow-none">
                    <div class="mb-8 w-full">
                        <h4 class="text-xl font-bold text-navy-700 dark:text-white">
                         Flix Film
                        </h4>
                        <p class="mt-2 text-base text-gray-600">
                        Here you can find more details about your projects. Keep you user
                        engaged by providing meaningful information.
                        </p>
                    </div>
                    
                    <Link to="/login">
                        <div class="flex w-full items-center justify-between rounded-2xl bg-white p-3 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                            <div class="flex items-center">
                            <div class="">
                                <img
                                class="h-[83px] w-[83px] rounded-lg"
                                src="https://github.com/horizon-ui/horizon-tailwind-react-ts-corporate/blob/main/src/assets/img/profile/image1.png?raw=true"
                                alt=""
                                />
                            </div>
                            <div class="ml-4">
                                <p class="text-base font-medium text-navy-700 dark:text-white">
                                Login
                                </p>
                                <p class="mt-2 text-sm text-gray-600">
                            
                                </p>
                            </div>
                            </div>
                            <div class="mr-4 flex items-center justify-center text-gray-600 dark:text-white">

                            </div>
                        </div>
                    </Link>

                    <Link to="/register">
                        <div class="mt-3 flex w-full items-center justify-between rounded-2xl bg-white p-3 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                            <div class="flex items-center">
                            <div class="">
                                <img
                                class="h-[83px] w-[83px] rounded-lg"
                                src="https://github.com/horizon-ui/horizon-tailwind-react-ts-corporate/blob/main/src/assets/img/profile/image2.png?raw=true"
                                alt=""
                                />
                            </div>
                            <div class="ml-4">
                                <p class="text-base font-medium text-navy-700 dark:text-white">
                                Register
                                </p>
                                <p class="mt-2 text-sm text-gray-600">

                                </p>
                            </div>
                            </div>
                            <div class="mr-4 flex items-center justify-center text-gray-600 dark:text-white">

                            </div>
                        </div>
                    </Link>

                    <div class="mt-3 flex w-full items-center justify-between rounded-2xl bg-white p-3 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                        <div class="flex items-center">
                        <div class="">
                            <img
                            class="h-[83px] w-[83px] rounded-lg"
                            src="https://github.com/horizon-ui/horizon-tailwind-react-ts-corporate/blob/main/src/assets/img/profile/image3.png?raw=true"
                            alt=""
                            />
                        </div>
                        <div class="ml-4">
                            <p class="text-base font-medium text-navy-700 dark:text-white">
                            Technology behind the Blockchain
                            </p>
                            <p class="mt-2 text-sm text-gray-600">
                            Project #1 .
                            <a
                                class="ml-1 font-medium text-brand-500 hover:text-brand-500 dark:text-white"
                                href=" "
                            >
                                See product details
                            </a>
                            </p>
                        </div>
                        </div>
                        <div class="mr-4 flex items-center justify-center text-gray-600 dark:text-white">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Home