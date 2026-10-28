'use client';

import Image from 'next/image';

export default function SocialButtons() {
  return (
    <div className="flex gap-6">
      <button
        onClick={() => window.open("https://github.com/LucasCh12", '_blank')}
        className="w-20 h-20 p-0 border-none bg-transparent cursor-pointer hover:scale-110 active:scale-95 transition-transform duration-300"
      >
        <Image 
          src="/github.png" 
          alt="GitHub"
          width={80}
          height={80}
          className="rounded-lg hover:brightness-110"
        />
      </button>
      <button
        onClick={() => window.open("https://www.linkedin.com/in/lucas-chiapella-17478b3aa/", '_blank')}
        className="w-20 h-20 p-0 border-none bg-transparent cursor-pointer hover:scale-110 active:scale-95 transition-transform duration-300"
      >
        <Image 
          src="/linkedin.png" 
          alt="Linkedin"
          width={80}
          height={80}
          className="rounded-lg hover:brightness-110"
        />
      </button>
    </div>
  );
}