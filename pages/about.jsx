import Image from 'next/image'
import Link from "next/link";
import knowledge from '../resources/undraw_sharing_knowledge_03vp.svg'

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
        <Layout title="The Coding Society">
            <div className="undefined flex flex-col flex-wrap gap-x-0 gap-y-0 w-full justify-center items-center">
                <main className="tcsDark flex flex-col hover:cursor-default w-full">
                    <div className="desktop">
                        <div className='fixed top-0 z-50 w-screen h-16 bg-lighter shadow-lg flex justify-start items-center px-3'>
                            <div className="w-8/12 flex flex-col justify-start items-start">
                                <p className="font-extrabold text-white">TCS</p>
                                <p className="text-xs text-violet-500">About Us</p>
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
                                <p className="text-xs text-violet-500">About Us</p>
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

                        <div id='get-to-know' className='md:py-0 px-10 md:px-20 min-h-screen w-full flex flex-row justify-center items-center content-center py-20 lg:py-10 gap-y-16 flex-wrap'>
                            <div className='undefined h-full w-full aos-init aos-animate'>
                                <div className='flex flex-row dark:text-mtxWhite items-center'>
                                    <div className='w-max lg:w-1/2 h-full pr-10'>
                                        <div className='text-white text-4xl md:text-6xl lg:text-6xl font-black leading-10 tracking-tighter lg:tracking-tighter'>
                                            Get to know
                                            <span className='text-violet-400'> our</span> community.
                                        </div>
                                        <p className='py-5 text-white'>
                                            Hey There! Thanks for taking in intrest on getting to know more about The Coding Society. Below you can find some of our common questions and some common information about how we got started, our mission, our end-goal, etc.
                                        </p>
                                        <div className='flex flex-col lg:flex-row gap-y-3 gap-x-5 text-base w-max'>
                                            <a type='button' className='cursor-pointer drop-shadow-2xl inline-flex items-center justify-center w-auto px-8 py-4 text-sm font-bold leading-6 text-white bg-indigo-600 border border-transparent rounded-lg md:w-auto hover:bg-indigo-500 transition duration-500 ease-in-out transform hover:-translate-y-1 focus-none'>
                                                Learn More
                                            </a>
                                        </div>
                                    </div>
                                    <Image src={knowledge} />
                                </div>
                            </div>
                        </div>
                        <div id='who-are-we' className='py-20 md:py-0 px-10 md:px-20 tcsDark2 min-h-screen w-full flex flex-row flex-wrap justify-center items-center content-center'>
                            <div className='undefined h-full w-full aos-init aos-animate'>
                                <div className='flex flex-col md:flex-row justify-start xl:gap-x-10 gap-y-5'>
                                    <h1 className='text-white text-4xl md:text-5xl font-black tracking-tighter md:w-1/2 2xl:text-7xl'>
                                        Who are <span className='text-violet-400'>we</span> as a community?
                                    </h1>
                                    <div className='flex flex-col flex-wrap gap-y-10 md:w-1/2 2xl:text-xl'>
                                        <p className='text-white'>
                                            The Coding Society is a community based on Coding. We bring all coders and programmers
                                            together as one to help each other, build networks, and overall maintain a happy, active,
                                            family-friendly community.

                                        </p>
                                        <p className='text-white'>
                                            We often host events and giveaways actively within the community. Soon we are bringing coding competitions
                                            that allow all our coders to compete for a <b><span className='text-violet-500'>cash</span></b> prize. We are
                                            delighted to bring coders and programmers together as one to build an alliance with each other.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id='our-mission' className='py-20 md:py-0 px-10 md:px-20 tcsDark min-h-screen w-full flex flex-row flex-wrap justify-center items-center content-center'>
                            <div className='undefined h-full w-full aos-init aos-animate'>
                                <div className='flex flex-col md:flex-row justify-start xl:gap-x-10 gap-y-5'>
                                    <h1 className='text-white text-4xl md:text-5xl font-black tracking-tighter md:w-1/2 2xl:text-7xl'>
                                        What is <span className='text-violet-400'>our</span> mission as a community?
                                    </h1>
                                    <div className='flex flex-col flex-wrap gap-y-10 md:w-1/2 2xl:text-xl'>
                                        <p className='text-white'>
                                            Our mission as a Discord community based server is to keep a healthy and active community
                                            within Discord. Though this can be hard to maintain, we are happy to bring people together in a postive manner.
                                        </p>
                                        <p className='text-white'>
                                            We are looking to motivate and bring out all of the skill in each of our developers in the server.
                                            We know that developers have some sort of underground skill that they have yet to bring out of them and we look foward
                                            to bringing that out of developers.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id='end-goal' className='py-20 md:py-0 px-10 md:px-20 tcsDark2 min-h-screen w-full flex flex-row flex-wrap justify-center items-center content-center'>
                            <div className='undefined h-full w-full aos-init aos-animate'>
                                <div className='flex flex-col md:flex-row justify-start xl:gap-x-10 gap-y-5'>
                                    <h1 className='text-white text-4xl md:text-5xl font-black tracking-tighter md:w-1/2 2xl:text-7xl'>
                                        What is our <span className='text-violet-400'>end goal</span> as a community?
                                    </h1>
                                    <div className='flex flex-col flex-wrap gap-y-10 md:w-1/2 2xl:text-xl'>
                                        <p className='text-white'>
                                            Our end goal for The Coding Society is not the member count but for others to come together to form friendships,
                                            make projects, and actively help others. We are so eager to be working
                                            with the community to help them with future abilities.
                                        </p>
                                        <p className='text-white'>
                                            We're looking to expand our network to help others looking for beneficial resources,
                                            increasing employer rates for programmers seeking future jobs, and equality and social justice in a
                                            community through organizing and capacity building of the people.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id='owners' className='py-20 md:py-0 px-10 md:px-20 tcsDark min-h-screen w-full flex flex-row flex-wrap justify-center items-center content-center'>
                            <div className='undefined h-full w-full aos-init aos-animate'>
                                <div className='flex flex-col md:flex-row justify-start xl:gap-x-10 gap-y-5'>
                                    <h1 className='text-white text-4xl md:text-5xl font-black tracking-tighter md:w-1/2 2xl:text-7xl'>
                                        Who are the <span className='text-violet-400'>owners</span>?
                                    </h1>
                                    <div className='flex flex-col flex-wrap gap-y-10 md:w-1/2 2xl:text-xl'>
                                        <p className='text-white'>
                                            Hello, I'm Palentier, Chase for short. It was around early April when making a coding serer came to thought,
                                            and I decided to act on that late July. I was so excited to start something that could end up being something
                                            big. My goal for TCS is to help people build a network and find friends within our community.
                                            I truly hope you like the server, and I wish the best for all new and old developers, whether you're
                                            a web developer, game developer, or Discord developer. Feel free to contact me within the Discord
                                            if you have any inquires.
                                        </p>
                                        <p className='text-white'>
                                            Occaecat dolor pariatur ad esse nostrud.
                                            Consequat ea esse nostrud elit.
                                            Consequat fugiat ad aliqua proident veniam ullamco culpa eu minim ad labore id.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col tcsDark2 min-h-screen w-full justify-center items-center content-center py-20 lg:py-10 px-10 gap-y-16 flex-wrap'>
                            <div className='flex flex-col gap-y-20 h-full w-full'>
                                <div className='flex flex-col justify-start gap-y-5 w-full px-0 lg:px-20 pt-20'>
                                    <h1 className='lg:px-0 text-4xl md:text-6xl font-black leading-10 tracking-tighter leading-extratight text-white 2xl:text-7xl'>
                                        Our <span className='text-violet-400'>Staff</span> Team
                                    </h1>
                                    <p className='text-white 2xl:text-xl'>
                                        Officia veniam ex ex eu do.
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