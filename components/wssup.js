import Image from 'next/image'
import Link from 'next/link';
import React from 'react';
import wsicon from "../assets/wsicon.png";

export const Wssup = () => {
  return (
    <div className="wssuparea">
      <Link href={"https://wa.me/905523943639"} >
        <Image src={wsicon.src} width={50} height={50} />


      </Link>
    </div>
  )
}
