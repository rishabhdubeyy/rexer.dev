"use client"

import React, { useState } from 'react'
import { Button } from './button';
import { FiCopy } from 'react-icons/fi';

export default function Copy() {
    const [buttonText, setButtonText] = useState("rishabhdubey.28th@gmail.com");
    const email = "rishabhdubey.28th@gmail.com";
  
    const handleCopy = () => {
      navigator.clipboard.writeText(email).then(() => {
        setButtonText("Copied!");
        setTimeout(() => {
          setButtonText(email);
        }, 1000); // Change back after 1 second
      });
    };
    return (
    <Button
      onClick={handleCopy}
      className="text-black w-64 gap-x-3 h-10 rounded-lg bg-slate-50 flex items-center justify-center hover:bg-neutral-100 duration-300 transition-all ease-in"
    >
      {buttonText}
      {buttonText === email && <FiCopy />} {/* Show icon only when email is displayed */}
    </Button>
    )
}
