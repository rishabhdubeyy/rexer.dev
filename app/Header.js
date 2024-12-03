import { RiShare2Line, RiVerifiedBadgeFill } from "react-icons/ri";
import { TbWorld } from "react-icons/tb";
import Image from 'next/image'
import React from 'react'
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

export default function 
() {
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
                  <Button className="w-10 h-10 rounded-lg bg-slate-50 flex items-center justify-center">
                    <RiShare2Line className="text-neutral-500"/>
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogTitle className="text-white">Share this Profile</DialogTitle>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
    </div>
  )
}
