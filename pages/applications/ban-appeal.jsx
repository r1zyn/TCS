import Image from "next/image";
import Link from "next/link";
import appeal from "../../resources/undraw_certification_re_ifll.svg";

import { useEffect, useState } from "react";

export default function BanAppeal() {
    const handleSubmit = async (event) => {
        // Stop the form from submitting and refreshing the page.
        event.preventDefault();

        // Get data from the form.
        const data = {
            first: event.target.first.value,
            last: event.target.last.value,
        };

        // Send the data to the server in JSON format.
        const JSONdata = JSON.stringify(data);

        // API endpoint where we send form data.
        const endpoint = "/api/hello";

        // Form the request for sending data to the server.
        const options = {
            // The method is POST because we are sending data.
            method: "POST",
            // Tell the server we're sending JSON.
            headers: {
                "Content-Type": "application/json",
            },
            // Body of the request is the JSON data we created above.
            body: JSONdata,
        };

        // Send the form data to our forms API on Vercel and get a response.
        const response = await fetch(endpoint, options);

        // Get the response data from server as JSON.
        // If server returns the name submitted, that means the form works.
        const result = await response.json();
        alert(`Is this your full name: ${result.data}`);
    };

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
                        <div className="fixed top-0 z-50 w-screen h-16 bg-lighter shadow-lg flex justify-start items-center px-3">
                            <div className="w-8/12 flex flex-col justify-start items-start">
                                <p className="font-extrabold text-white">TCS</p>
                                <p className="text-xs text-violet-500">Ban Appeal</p>
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
                        <div className="fixed top-0 z-50 w-screen h-16 bg-lighter shadow-lg flex justify-start items-center px-3">
                            <div className="w-8/12 flex flex-col justify-start items-start">
                                <p className="font-extrabold text-white">TCS</p>
                                <p className="text-xs text-violet-500">Ban Appeal</p>
                            </div>
                            <div className="w-4/12 flex justify-end items-center">
                                <div
                                    onClick={() => (nav ? setNav(false) : setNav(true))}
                                    class="burger"
                                >
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
                    <div
                        onClick={() => setNav(false)}
                        className="undefined min-h-screen w-full flex flex-row flex-wrap justify-center items-center content-center"
                    >
                        <div
                            id="mod-app"
                            className="md:py-0 md:px-20 min-h-screen w-full flex flex-row justify-center items-center content-center py-20 lg:py-10 px-10 gap-y-16 flex-wrap"
                        >
                            <div className="undefined h-full w-full aos-init aos-animate">
                                <div className="flex flex-row dark:text-mtxWhite items-center">
                                    <div className="w-max lg:w-1/2 h-full pr-10">
                                        <div className="text-white text-4xl md:text-6xl lg:text-6xl font-black leading-10 tracking-tighter lg:tracking-tighter">
                                            <span className="text-violet-400"> Ban</span> Appeal.
                                        </div>
                                        <p className="py-5 text-white">
                                            Thanks for taking interest of being apart of The Coding
                                            Society's moderation team. Below you can fill out the
                                            following application and have a chance of joining.
                                        </p>
                                        <div className="flex flex-col lg:flex-row gap-y-3 gap-x-5 text-base w-max">
                                            <a
                                                type="button"
                                                href="#mod-app"
                                                className="cursor-pointer drop-shadow-2xl inline-flex items-center justify-center w-auto px-8 py-4 text-sm font-bold leading-6 text-white bg-indigo-600 border border-transparent rounded-lg md:w-auto hover:bg-indigo-500 transition duration-500 ease-in-out transform hover:-translate-y-1 focus-none"
                                            >
                                                Appeal Now
                                            </a>
                                        </div>
                                    </div>
                                    <Image src={appeal} />
                                </div>
                            </div>
                            <div className=' tcsDark2 flex flex-col tcsDark min-h-screen w-full justify-center items-center content-center py-20 lg:py-10 px-10 gap-y-16 flex-wrap'>
                                <div className='flex flex-col gap-y-20 h-full w-full'>
                                    <div className='flex flex-col justify-start gap-y-5 w-full px-0 lg:px-20 pt-20'>
                                        <form onSubmit={handleSubmit}>
                                            <label className='text-white' for="first">First name:</label>
                                            <input type="text" id="first" name="first" />
                                            <label className='text-white' for="last">Last name:</label>
                                            <input type="text" id="last" name="last" />
                                            <button className='text-white' type="submit">Submit</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </Layout>
    );
}
