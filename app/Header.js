import { RiShare2Line, RiThreadsLine, RiTwitterXFill, RiVerifiedBadgeFill, RiInstagramLine } from "react-icons/ri";
import React from "react";
import { TbWorld } from "react-icons/tb";
import { PiFilePdfLight } from "react-icons/pi";
import Image from 'next/image'
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import Copy from "@/components/ui/Copy";
import { FiGithub } from "react-icons/fi";

export default function () {

  const text = "Check out this amazing portfolio by a talented full-stack web and mobile application developer! 🚀 Packed with innovative projects and sleek designs. See it here: "
  const url = "https://github.com/"

  return (
    <div>
        <div className='h-60 relative w-full -z-20'>
          <Image className='h-full w-full object-cover blur-md absolute opacity-40'
              src="/earth.png"
              width={400}
              height={400}
              alt="Earth and Moon"
          />
        </div>
        <div className='w-full flex justify-center z-10 relative -top-9'>
          <div className='absolute p-1 rounded-full bg-[#111111]'>
            <Image className='w-16 h-16 rounded-full object-cover'
              src="/pfp.jpeg"
              width={800}
              height={800}
              alt='Profile Picture'
            />
          </div>
        </div>
        <div className='bg-[#111111] h-screen p-3'>
          <div className='h-screen max-w-lg mx-auto bg-[#111111] pt-14'>
            <div className='text-center'>
              <h3 className='font-medium text-2xl text-white flex justify-center items-center gap-x-2'>
                Rishabh Dubey
                <RiVerifiedBadgeFill className="text-blue-600 text-xl"/>
              </h3>
              <div className="mt-3 text-neutral-500 flex justify-center gap-x-2 items-center font-Interegular">
                <p>Est. 2002</p>
                <span className="w-[3px] h-[3px] bg-neutral-600 rounded-full"></span>
                <p>Uttar Pradesh, India</p>
                <span className="w-[3px] h-[3px] bg-neutral-600 rounded-full"></span>
                <p>23yrs</p>
              </div>
            </div>
            <div>
              <p className="font-Intermedium text-neutral-500 text-center my-3">I am a full-stack web & mobile app developer based in India.</p>
              <div className="flex justify-center gap-x-7">
                <a className="flex items-center gap-x-2 hover:bg-neutral-900 transition-all ease-in duration-100 p-1 px-2 rounded-xl" href="https://github.com/rishabhdubeyy">
                  <TbWorld className="text-xl text-neutral-500"/>
                  <p className="text-white">Rexerdev.com</p>
                </a>
              </div>
            </div>
            <div className="flex items-center justify-center gap-x-2 my-6">
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="w-10 h-10 rounded-lg bg-slate-50 hover:bg-slate-50 flex items-center justify-center">
                    <RiShare2Line className="text-neutral-500"/>
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-md bg-[#161616] py-3 px-3 rounded-xl">
                  <DialogTitle className="text-white">Share this Profile</DialogTitle>
                  <Button className="bg-slate-50 hover:bg-gray-300 ">
                    <a href={`https://x.com/intent/tweet?text=${text}: ${url}`} target="_blank" className="flex gap-x-2 text-black items-center justify-center">
                      <RiTwitterXFill />
                      <p>Share on X</p>
                    </a>
                  </Button>
                  <Button className="bg-slate-50 hover:bg-gray-300 ">
                    <a href={`https://threads.net/intent/post?source=${url}&url=${url}&text=${text}: ${url}`} target="_blank" className="flex gap-x-2 text-black items-center justify-center">
                      <RiThreadsLine />
                      <p>Share on Thread</p>
                    </a>
                  </Button>
                </DialogContent>
              </Dialog>
              <Copy />
              <Button className="w-10 h-10 rounded-lg bg-slate-50 hover:bg-slate-50 flex items-center justify-center">
                <a href="https://tinyurl.com/mu9ncz5p" target="_blank" className="flex gap-x-2 text-black items-center justify-center"><PiFilePdfLight /></a>
              </Button>
            </div>
            <div className="flex flex-wrap gap-3 mx-auto mt-8 items-center justify-center">
              <Button className="rounded-full">
                <a href="https://x.com/Rishabhdubeyy" target="_blank" className="flex items-center justify-center gap-2"><RiTwitterXFill/> @Rishabhdubeyy</a>
              </Button>
              <Button className="rounded-full">
                <a href="https://github.com/rishabhdubeyy" target="_blank" className="flex items-center justify-center gap-2"><FiGithub /> /rishabhdubeyy</a>
              </Button>
              <Button className="rounded-full">
                <a href="https://instagram.com/rexer.dev" target="_blank" className="flex items-center justify-center gap-2"><RiInstagramLine /> @rexer.dev</a>
              </Button>
            </div>
          </div>
        </div>
    </div>
  )
}
