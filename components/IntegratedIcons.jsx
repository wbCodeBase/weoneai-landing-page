"use client";


import Tumblr from "@/public/integration/001-tumblr.png";
import Pinterest from "@/public/integration/002-pinterest.png";
import YouTube from "@/public/integration/003-youtube.png";
import Threads from "@/public/integration/004-threads.png";
import Communication from "@/public/integration/005-communication.png";
import WhatsApp from "@/public/integration/006-whatsapp.png";
import Instagram from "@/public/integration/007-instagram.png";
import Twitter from "@/public/integration/008-twitter.png";
import LinkedIn from "@/public/integration/009-linkedin.png";
import Telegram from "@/public/integration/010-telegram.png";


import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import { Medal } from "lucide-react";

const platforms = [
    { name: "WhatsApp", icon: WhatsApp },
    { name: "Facebook", icon: Communication },
    { name: "Instagram", icon: Instagram },
    { name: "Threads", icon: Threads },
    { name: "Twitter", icon: Twitter },
    { name: "YouTube", icon: YouTube },
    { name: "LinkedIn", icon: LinkedIn },
    { name: "Pinterest", icon: Pinterest },
    { name: "Telegram", icon: Telegram },
    { name: "Tumblr", icon: Tumblr },
    // { name: "Windows", icon: Communication },
    //   { name: "Reddit", icon: Reddit },
    // { name: "Google", icon: Google },
    //   { name: "Dropbox", icon: Dropbox },
    // { name: "OpenAI", icon: OpenAI },
    // { name: "GoHighLevel", icon: GoHighLevel },
    // { name: "Shopify", icon: Shopify },
];

export default function IntegratedIcons() {
    return (
        <div className="bg-blue-50 md:py-20 py-16 px-4 text-center">

            {/* <span className="inline-block text-sm font-medium px-4 py-2 bg-[#3399ff]/5 text-[#3399ff] border border-[#3399ff] rounded-full mb-4">
                Success Stories
            </span> */}

            <h2 className="text-3xl text-gray-700 md:text-5xl font-bold mb-6">
                Integrated With <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3399ff] to-[#3399ff]/60">Top Platforms</span>
            </h2>



            <div className="max-w-5xl md:py-20 py-10 mx-auto grid grid-cols-3 sm:grid-cols-6 md:grid-cols-6 md:gap-16 gap-6 items-center justify-center">
                {platforms.map((platform) => (
                    <div key={platform.name} className="flex justify-center">
                        <div title={platform.name} className="tooltip">
                            <Image src={platform?.icon} width={100} height={100} alt="icons" className="md:w-16 w-10" />
                        </div>
                    </div>
                ))}
            </div>




            <div className="flex justify-center items-center">
                <Link href="/">
                    <Button
                        variant="default" className="px-5 cursor-pointer rounded-full sm:px-8 py-8 bg-yellow-500 hover:bg-yellow-400 text-white font-medium text-sm md:text-base">
                        <span className="flex items-center gap-6">
                            <Medal className="w-12 h-12 transition-transform duration-300 group-hover:rotate-12" />
                            <div className='flex flex-col'>
                                <span className="whitespace-nowrap text-xl font-semibold tracking-wide">Become A Pioneer</span>
                                <span className='text-sm text-left'>Get Your Own AI Platform</span>
                            </div>
                        </span>
                    </Button>
                </Link>
            </div>



        </div>
    );
}






