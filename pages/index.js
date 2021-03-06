import Image from 'next/image'
import Link from "next/link";
import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import motivate from '../resources/undraw_breaking_barriers_vnf3.svg'
import inform from '../resources/undraw_online_information_re_erks.svg'
import support from '../resources/undraw_showing_support_re_5f2v.svg'

export default function Home() {
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
        <Layout title="The Coding Society">
            <div className="undefined flex flex-col flex-wrap gap-x-0 gap-y-0 w-full justify-center items-center">
                <main className="tcsDark flex flex-col hover:cursor-default w-full">
                    <div className="desktop">
                        <div className='fixed top-0 z-50 w-screen h-16 bg-lighter shadow-lg flex justify-start items-center px-3'>
                            <div className="w-8/12 flex flex-col justify-start items-start">
                                <p className="font-extrabold text-white">TCS</p>
                                <p className="text-xs text-violet-500">Home</p>
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
                                <p className="text-xs text-violet-500">Home</p>
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
                        <div className="container max-w-lg px-4 py-32 mx-auto my-auto md:max-w-none text-center trackin">
                            <h1 className="  text-white w-full text-4xl font-black leading-10 tracking-tight lg:tracking-tighter sm:leading-none md:text-5xl lg:text-6xl flex flex-col gap-y-2 md:gap-y-0">
                                <span className='inline md:block'>
                                    Join hands with us in <span className=' animation tcsGraident'>
                                        The Coding Society.
                                    </span>
                                </span>
                            </h1>
                            <div className='  mx-auto mt-5 md:mt-12 md:max-w-xl md:text-center lg:text-lg text-white'>
                                <p>
                                    Welcome to The Coding Society's website. Our mission is to bring all developers from across the world to come together as one.
                                </p>
                            </div>
                            <div className='flex flex-row justify-center items-center content-center gap-x-5 gap-y-5 mt-12 text-center'>
                                <span className='  relative inline-flex w-auto'>
                                    <Link href="/discord" passHref>
                                        <a type='button' className='drop-shadow-2xl inline-flex items-center justify-center w-auto px-8 py-4 text-sm md:text-base font-bold leading-6 text-white bg-indigo-500 border border-transparent rounded-lg md:w-auto hover:bg-indigo-300 transition duration-500 ease-in-out transform hover:-translate-y-1 focus-none'>
                                            Join Us
                                        </a>
                                    </Link>
                                </span>
                                <span className='  relative inline-flex w-auto'>
                                    <a type='button' className='drop-shadow-2xl inline-flex items-center justify-center w-auto px-8 py-4 text-sm md:text-base font-bold leading-6 text-black bg-white border border-transparent rounded-lg md:w-auto hover:bg-gray-400 transition duration-500 ease-in-out transform hover:-translate-y-1 focus-none' href='#more'>
                                        Learn More
                                    </a>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className='bg-gray-100 tcsDark2 py-20 md:py-0 md:px-0 min-h-screen w-full flex flex-row flex-wrap justify-center items-center content-center' id="more">
                        <div className="w-full lg:w-1/2 h-full flex flex-col justify-center justify-items-center gap-y-8 px-10 md:px-20 trackin">
                            <h1 className="text-5xl md:text-7xl font-black leading-10 tracking-tight leading-tightest lg:tracking-tighter text-white 2xl:text-7xl">Motivating our <span className='text-violet-400'>developers</span>.
                            </h1>
                            <p className="text-white 2xl:text-xl">Here a the Coding Society, we're inspired to motivate all of our developers no matter the skill level, age, personal matters, etc. We believe in motivating the growth and developers of developers all kind, new or experienced and pride ourselves on the things we can do in order to make a difference to people across the world.
                            </p>
                            <span className="  relative inline-flex w-auto">
                                <Link href="/discord" passHref>
                                    <a type="button" className="drop-shadow-xl inline-flex items-center justify-center w-auto px-8 py-4 text-base font-bold leading-6 text-violet-900 bg-white border border-transparent rounded-lg md:w-auto hover:bg-violet-400 transition duration-500 ease-in-out transform hover:-translate-y-1">Get Started
                                    </a>
                                </Link>
                            </span>
                        </div>
                        <div className='w-0 lg:w-1/2 min-h-screen'>
                            <Image src={motivate} />
                        </div>
                    </div>
                    <div className='text-white tcsDark min-h-screen w-full flex flex-row justify-center items-center content-center py-20 lg:py-10 px-10 gap-y-16 flex-wrap'>
                        <div className='flex flex-row justify-center lg:justify-start items-center h-full w-full lg:w-1/2 px-10 '>
                            <Image src={support} />
                        </div>
                        <div className='flex flex-col gap-y-4 w-full lg:w-1/2 md:px-24 lg:px-10 justify-center lg:justify-end'>
                            <div className=' text-5xl md:text-6xl font-black tracking-tight leading-tighter lg:tracking-tighter text-white 2xl:text-7xl'>
                                Providing <span className='text-violet-400'>support</span> for all developers.
                            </div>
                            <p className=" text-white 2xl:text-xl">
                                Asking for help shouldn't be a struggle. Here at The Coding Society, we provide judgment-free support.
                                No matter your skill base we're here to help, whether it's a big project, school project, or personal project.
                                You can always come into The Coding Society knowing you will get the best help possible.
                            </p>
                        </div>
                    </div>
                    <div className='text-white tcsDark2 min-h-screen w-full flex flex-row justify-center items-center content-center py-20 lg:py-10 px-10 gap-y-16 flex-wrap'>
                        <div className='flex flex-col gap-y-4 w-full lg:w-1/2 md:px-24 lg:px-10 justify-center lg:justify-end'>
                            <div className='  text-5xl md:text-6xl font-black tracking-tight leading-tighter lg:tracking-tighter text-white 2xl:text-7xl'>
                                We keep our developers <span className='text-violet-400'>informed</span>.
                            </div>
                            <p className="  text-white 2xl:text-xl">
                                Here at The Coding Society we make sure to keep all of server members connected and informed with all future events in TCS.
                                It is our mission to keep all developers informed on server changes, events, contests, and any other information developers need to know.
                            </p>
                        </div>
                        <div className='flex flex-row justify-center lg:justify-end items-center h-full w-full lg:w-1/2 px-10'>
                            <Image src={inform} />
                        </div>
                    </div>
                    <div className='flex flex-col tcsDark min-h-screen w-full justify-center items-center content-center py-20 lg:py-10 px-10 gap-y-16 flex-wrap'>
                        <div className='flex flex-col gap-y-20 h-full w-full'>
                            <div className='flex flex-col justify-start gap-y-5 w-full px-0 lg:px-20 pt-20'>
                                <h2 className='  lg:px-0 text-6xl font-black leading-10 tracking-tighter leading-extratight text-white 2xl:text-7xl'>
                                    Features
                                </h2>
                                <p className='text-white 2xl:text-xl'>
                                    Below you can find some of our servers features.
                                </p>
                            </div>
                            <div className='  undefined flex flex-row flex-wrap justify-center md:justify-start gap-y-20 w-full px-0 lg:px-20 pb-20'>
                                <div className='flex flex-col gap-y-1 w-full md:w-1/2 lg:w-1/3 ease-in-out pr-12'>
                                    <span className='mb-4 flex p-2 rounded-lg bg-violet-400 w-10 h-10 justify-center items-center'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                            <path strokeLinecap="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                        </svg>
                                    </span>
                                    <h1 className='font-black tracking-tighter text-xl text-white'>
                                        100 Members
                                    </h1>
                                    <p className='text-white 2xl:text-xl'>
                                        We might have a small community, but don't let that turn you away from our server. We are friendly,
                                        helpful, and so excited to welcome you to <b>our</b> community.
                                    </p>
                                </div>
                                <div className='  flex flex-col gap-y-1 w-full md:w-1/2 lg:w-1/3 ease-in-out pr-12'>
                                    <span className='mb-4 flex p-2 rounded-lg bg-violet-400 w-10 g-10 justify-center items-center'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                            <path strokeLinecap="round" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                                        </svg>
                                    </span>
                                    <h1 className='font-black tracking-tighter text-xl text-white'>
                                        Self Roles
                                    </h1>
                                    <p className='text-white 2xl:text-xl'>
                                        Customize your Discord profile in TCS by selecting some of our self roles.
                                    </p>
                                </div>
                                <div className='  flex flex-col gap-y-1 w-full md:w-1/2 lg:w-1/3 ease-in-out pr-12'>
                                    <span className='mb-4 flex p-2 rounded-lg bg-violet-400 w-10 g-10 justify-center items-center'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                            <path strokeLinecap="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                            <path strokeLinecap="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </span>
                                    <h1 className='font-black tracking-tighter text-xl text-white'>
                                        Support Channels
                                    </h1>
                                    <p className='text-white 2xl:text-xl'>
                                        With our reliable help channels, you can get the help you need with your code.
                                    </p>
                                </div>
                                <div className='  flex flex-col gap-y-1 w-full md:w-1/2 lg:w-1/3 ease-in-out pr-12'>
                                    <span className='mb-4 flex p-2 rounded-lg bg-violet-400 w-10 g-10 justify-center items-center'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                            <path strokeLinecap="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                        </svg>
                                    </span>
                                    <h1 className='font-black tracking-tighter text-xl text-white'>
                                        Friendly Community
                                    </h1>
                                    <p className='text-white 2xl:text-xl'>
                                        One of our best features is our friendly community, we are always looking for developers to succeed whether
                                        its just a hobbie or their future carrer.
                                    </p>
                                </div>
                                <div className='flex flex-col gap-y-1 w-full md:w-1/2 lg:w-1/3 ease-in-out pr-12'>
                                    <span className='mb-4 flex p-2 rounded-lg bg-violet-400 w-10 g-10 justify-center items-center'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                            <path strokeLinecap="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                        </svg>
                                    </span>
                                    <h1 className='font-black tracking-tighter text-xl text-white'>
                                        Best Moderation System
                                    </h1>
                                    <p className='text-white 2xl:text-xl'>
                                        With out amazing and up-to-date moderation system you don't have to worry about anything while being in TCS.
                                    </p>
                                </div>
                                <div className='  flex flex-col gap-y-1 w-full md:w-1/2 lg:w-1/3 ease-in-out pr-12'>
                                    <span className='mb-4 flex p-2 rounded-lg bg-violet-400 w-10 g-10 justify-center items-center'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                            <path strokeLinecap="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                        </svg>
                                    </span>
                                    <h1 className='font-black tracking-tighter text-xl text-white'>
                                        Coding Competitions
                                    </h1>
                                    <p className='text-white 2xl:text-xl'>
                                        One of our favorite things to host our are coding competitions. We offer <b>cash prizes</b>, yes cash prizes.
                                        We hope to see you competiting.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div >
        </Layout>

    )
}
