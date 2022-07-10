import Image from 'next/image'
import Link from "next/link";
import network from '../resources/undraw_connecting_teams_re_hno7.svg'

import { useEffect, useState } from "react";
import Layout from "../components/Layout";

export default function About() {
    const [nav, setNav] = useState(false);

    useEffect(() => {
        const menu = document.getElementById("overlay");

        if (nav) {
            menu.classList.add("menu");
        } else if (!nav) {
            menu.classList.remove("menu");
        }
    });
    return (
        <Layout title="TCS - Network">
            <div className="undefined flex flex-col flex-wrap gap-x-0 gap-y-0 w-full justify-center items-center">
                <main className="tcsDark flex flex-col hover:cursor-default w-full">
                    <div className="desktop">
                        <div className='fixed top-0 z-50 w-screen h-16 bg-lighter shadow-lg flex justify-start items-center px-3'>
                            <div className="w-8/12 flex flex-col justify-start items-start">
                                <p className="font-extrabold text-white">TCS</p>
                                <p className="text-xs text-violet-500">Network</p>
                            </div>
                            <div className=" w-4/12 flex justify-end items-center">
                                <div className="text-white flex text-base md:text-base lg:text-base p-2 py-1 rounded-lg transition-all duration-700">
                                    <Link href="/" passHref>
                                        <a
                                            className="text-center font-bold rounded-xl ml-0.5 hover:text-violet-400"
                                        >
                                            Home
                                        </a>
                                    </Link>
                                </div>
                                <div className="text-white flex text-base md:text-base lg:text-base p-2 py-1 rounded-lg transition-all duration-700">
                                    <Link href="/about" passHref>
                                        <a
                                            className=" font-bold rounded-xl ml-0.5 hover:text-violet-400"
                                        >
                                            About
                                        </a>
                                    </Link>
                                </div>
                                <div className="text-white flex text-base md:text-base lg:text-base p-2 py-1 rounded-lg transition-all duration-700">
                                    <Link href="/applications" passHref>
                                        <a
                                            className=" font-bold rounded-xl ml-0.5 hover:text-violet-400"
                                        >
                                            Applications
                                        </a>
                                    </Link>
                                </div>
                                <div className="text-white flex text-base md:text-base lg:text-base p-2 py-1 rounded-lg transition-all duration-700">
                                    <Link href="/network" passHref>
                                        <a
                                            className=" font-bold rounded-xl ml-0.5 hover:text-violet-400"
                                        >
                                            Network
                                        </a>
                                    </Link>
                                </div>
                                <div className="text-white flex text-base md:text-base lg:text-base p-2 py-1 rounded-lg transition-all duration-700">
                                    <Link href="/login" passHref>
                                        <a
                                            className=" font-bold rounded-xl ml-0.5 hover:text-violet-400"
                                        >
                                            Login
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mobile">
                        <div className='fixed top-0 z-50 w-screen h-16 bg-lighter shadow-lg flex justify-start items-center px-3'>
                            <div className="w-8/12 flex flex-col justify-start items-start">
                                <p className="font-extrabold text-white">TCS</p>
                                <p className="text-xs text-violet-500">Network</p>
                            </div>
                            <div className='w-4/12 flex justify-end items-center'>
                                <div onClick={() => nav ? setNav(false) : setNav(true)} class="burger">
                                    <div class="strip burger-strip-2">
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                    </div>
                                </div>
                                <div id="overlay">
                                    <Link href="/" passHref>
                                        <a
                                            className="font-bold rounded-xl ml-0.5 hover:text-violet-400"
                                        >
                                            Home
                                        </a>
                                    </Link>
                                    <Link href="/about" passHref>
                                        <a
                                            className="font-bold rounded-xl ml-0.5 hover:text-violet-400"
                                        >
                                            About
                                        </a>
                                    </Link>
                                    <Link href="/network" passHref>
                                        <a
                                            className="font-bold rounded-xl ml-0.5 hover:text-violet-400"
                                        >
                                            Network
                                        </a>
                                    </Link>
                                    <Link href="/applications" passHref>
                                        <a
                                            className="font-bold rounded-xl ml-0.5 hover:text-violet-400"
                                        >
                                            Applications
                                        </a>
                                    </Link>
                                    <Link href="/login" passHref>
                                        <a
                                            className="font-bold rounded-xl ml-0.5 hover:text-violet-400"
                                        >
                                            Login
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div onClick={() => setNav(false)} className='undefined min-h-screen w-full flex flex-row flex-wrap justify-center items-center content-center'>

                        <div id='get-to-know' className='md:py-0 md:px-20 min-h-screen w-full flex flex-row justify-center items-center content-center py-20 lg:py-10 px-10 gap-y-16 flex-wrap'>
                            <div className='undefined h-full w-full aos-init aos-animate'>
                                <div className='flex flex-row dark:text-mtxWhite items-center'>
                                    <div className='w-max lg:w-1/2 h-full pr-10'>
                                        <div className='text-white text-4xl md:text-6xl lg:text-6xl font-black leading-10 tracking-tighter lg:tracking-tighter'>
                                            Get some
                                            <span className='text-violet-400'> helpful</span> resources.
                                        </div>
                                        <p className='py-5 text-white'>
                                            Needing some helpful resources to expand your knowledge, help your development, or to host your project. Below you can find
                                            our network to possibly help your development out.
                                        </p>
                                        <div className='flex flex-col lg:flex-row gap-y-3 gap-x-5 text-base w-max'>
                                            <a type='button' className='cursor-pointer drop-shadow-2xl inline-flex items-center justify-center w-auto px-8 py-4 text-sm font-bold leading-6 text-white bg-indigo-600 border border-transparent rounded-lg md:w-auto hover:bg-indigo-500 transition duration-500 ease-in-out transform hover:-translate-y-1 focus-none'>
                                                Resources
                                            </a>
                                        </div>
                                    </div>
                                    <Image src={network} />
                                </div>
                            </div>
                        </div>
                        <div id='who-are-we' className='py-20 md:py-0 px-10 md:px-20 tcsDark2 min-h-screen w-full flex flex-row flex-wrap justify-center items-center content-center'>
                            <div className='undefined h-full w-full aos-init aos-animate'>
                                <div className='flex flex-col md:flex-row justify-start xl:gap-x-10 gap-y-5'>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </Layout>
    )
}