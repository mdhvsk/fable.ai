import React from 'react'

type Props = {}
import Image from 'next/image'
import Head from 'next/head'


const landing = (props: Props) => {
    return (
        <div className="min-h-screen bg-white">
            <Head>
                <title>EduGuide - Explore your student's performance</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <header className="flex justify-between items-center p-5">
                <div className="flex items-center">
                    <Image src="/eduguide-logo.png" alt="EduGuide Logo" width={40} height={40} />
                    <span className="ml-2 text-2xl font-bold text-indigo-600">EduGuide</span>
                </div>
                <nav>
                    <button className="mr-4 text-black hover:text-gray-800 border py-2 px-4 rounded-md hover:bg-indigo-700 hover:text-white">Sign in</button>
                    <button className="bg-navy-blue text-white px-4 py-2 rounded-md hover:bg-indigo-700">Sign up</button>
                </nav>
            </header>

            <main className="container mx-auto px-4 py-16">
                <div className="flex flex-col md:flex-row items-center justify-between">
                    <div className="md:w-1/2 mb-8 md:mb-0">
                        <h1 className="text-4xl text-black md:text-5xl font-bold mb-4">
                            Explore your <span className="text-indigo-600">child's</span><br />
                            <span className="text-indigo-600">performance</span>
                        </h1>
                        <p className="text-xl text-black mb-8">
                            Delve into your students's academic journey<br />
                            and make reading interactive
                        </p>
                        <button className="bg-black text-white px-6 py-3 rounded-md hover:bg-indigo-700 flex items-center">
                            <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                            </svg>
                            Get started now!
                        </button>
                    </div>
                    {/* <div className="md:w-1/2 flex justify-center">
                        <div className="relative">
                            <Image src="/student-studying.jpg" alt="Student studying" width={300} height={300} className="rounded-full" />
                            <div className="absolute -bottom-10 -right-10">
                                <Image src="/teacher-helping.jpg" alt="Teacher helping student" width={200} height={200} className="rounded-full" />
                            </div>
                        </div>
                    </div> */}
                </div>
            </main>
        </div>
    )

}

export default landing