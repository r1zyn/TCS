import Image from 'next/image'
import Link from "next/link";
import Layout from "../components/Layout";
import resume from '../resources/undraw_resume_re_hkth.svg'

import { useEffect, useState } from "react";

export default function Applications() {
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
        <Layout title="TCS - Applications">
            <div className="undefined flex flex-col flex-wrap gap-x-0 gap-y-0 w-full justify-center items-center">
                <main className="tcsDark flex flex-col hover:cursor-default w-full">
                    <div className="desktop">
                        <div className='fixed top-0 z-50 w-screen h-16 bg-lighter shadow-lg flex justify-start items-center px-3'>
                            <div className="w-8/12 flex flex-col justify-start items-start">
                                <p className="font-extrabold text-white">TCS</p>
                                <p className="text-xs text-violet-500">Applications</p>
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
                                <p className="text-xs text-violet-500">Applications</p>
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
                        <div id='applications' className='md:py-0 md:px-20 min-h-screen w-full flex flex-row justify-center items-center content-center py-20 lg:py-10 px-10 gap-y-16 flex-wrap'>
                            <div className='undefined h-full w-full aos-init aos-animate'>
                                <div className='flex flex-row dark:text-mtxWhite items-center'>
                                    <div className='w-max lg:w-1/2 h-full pr-10'>
                                        <div className='text-white text-4xl md:text-6xl lg:text-6xl font-black leading-10 tracking-tighter lg:tracking-tighter'>
                                            Become apart of the
                                            <span className='text-violet-400'> team</span>.
                                        </div>
                                        <p className='py-5 text-white'>
                                            Thanks for taking intrest in being apart of our staff team. We are always looking for positive and professional
                                            applicants. If you're interested in becoming staff scroll below and fill out the form given below. This is also the place where our ban-appeal is at.
                                            If you were banned from TCS, you can appeal your ban here.
                                        </p>
                                        <div className='flex flex-col lg:flex-row gap-y-3 gap-x-5 text-base w-max'>
                                            <a type='a' href='#apply-now' className='cursor-pointer drop-shadow-2xl inline-flex items-center justify-center w-auto px-8 py-4 text-sm font-bold leading-6 text-white bg-indigo-600 border border-transparent rounded-lg md:w-auto hover:bg-indigo-500 transition duration-500 ease-in-out transform hover:-translate-y-1 focus-none'>
                                                Apply
                                            </a>
                                        </div>
                                    </div>
                                    <Image src={resume} />
                                </div>
                            </div>
                        </div>
                        <div style={{ marginTop: "300px" }} id='apply-now' className='tcsDark2 flex flex-col md:flex-row justify-center w-full items-center h-max gap-x-5 gap-y-5 py-20 '>
                            <div style={{ width: "300px", height: "400px" }} className='flex flex-col justify-center items-center rounded-xl bg-violet-400'>
                                <div style={{ textAlign: "center" }} className='flex flex-col py-10 gap-y-3 justify-center items-center rounded-xl'>
                                    <h1 className='font-bold text-2xl tracking-tight  '>
                                        Moderator
                                    </h1>
                                    <a style={{ borderRadius: "5px", color: "white" }} href='https://docs.google.com/forms/d/e/1FAIpQLSeFlOLtw7lnys2RkGNeDwfqWov0mE1QEgtFyYRpU85p3IXnBQ/viewform' target="_blank" className='w-max px-6 py-2 text-xs text-mtxWhite leading-6 text-center bg-violet-800 shadow ripple hover:shadow-lg hover:bg-violet-700 focus:outline-none'>
                                        Apply
                                    </a>
                                    <p className='px-10 pb-10 text-white'>
                                        Looking to become a moderator at TCS? Well, here you can apply for the following role. Please read the form thoroughly before applying.
                                    </p>
                                </div>
                            </div>
                            <div style={{ width: "300px", height: "400px" }} className='flex flex-col justify-center items-center rounded-xl bg-violet-400'>
                                <div style={{ textAlign: "center" }} className='flex flex-col py-10 gap-y-3 justify-center items-center'>
                                    <h1 className='font-bold text-2xl tracking-tight  '>
                                        Server Helper
                                    </h1>
                                    <a style={{ borderRadius: "5px", color: "white" }} className='w-max px-6 py-2 text-xs text-mtxWhite leading-6 text-center bg-violet-800  shadow ripple hover:shadow-lg hover:bg-violet-700 focus:outline-none'>
                                        soon™️
                                    </a>
                                    <p className='px-10 pb-10 text-white'>
                                        Wanting to help newcomers, coding help, etc? This is the perfect staff role for you. Please read the form thoroughly before applying.
                                    </p>
                                </div>
                            </div>
                            <div style={{ width: "300px", height: "400px" }} className='flex flex-col justify-center items-center rounded-xl bg-violet-400'>
                                <div style={{ textAlign: "center" }} className='flex flex-col py-10 gap-y-3 justify-center items-center'>
                                    <h1 className='font-bold text-2xl tracking-tight  '>
                                        Ban Appeal
                                    </h1>
                                    <a style={{ borderRadius: "5px", color: "white" }} href='/ban-appeal' className='w-max px-6 py-2 text-xs text-mtxWhite leading-6 text-center bg-violet-800  shadow ripple hover:shadow-lg hover:bg-violet-700 focus:outline-none'>
                                        Appeal
                                    </a>
                                    <p className='px-10 pb-10 text-white'>
                                        Got banned and want one more chance? Well, you can fill out the following appeal below to <b><span className='text-gray-800'>possibly</span></b> get a second chance.
                                    </p>
                                </div>
                            </div>
                            <div style={{ width: "300px", height: "400px" }} className='flex flex-col justify-center items-center rounded-xl bg-violet-400 '>
                                <div style={{ textAlign: "center" }} className='flex flex-col py-10 gap-y-3 justify-center items-center'>
                                    <h1 className='font-bold text-2xl tracking-tight  '>
                                        Network
                                    </h1>
                                    <Link href="/discord" passHref>
                                        <a style={{ borderRadius: "5px", color: "white" }} target="_blank" className='w-max px-6 py-2 text-xs text-mtxWhite leading-6 text-center bg-violet-800  shadow ripple hover:shadow-lg hover:bg-violet-700 focus:outline-none'>
                                            Apply
                                        </a>
                                    </Link>
                                    <p className='px-10 pb-10 text-white'>
                                        Want to come apart of TCS Network? This will get you a special spot on the website for other developers to use your
                                        service as a resource.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </Layout>
    )
}