import Image from 'next/image';
import SocialButtons from './components/SocialButtons.client';

export default function Home() {
  return (
    <div>
      <section className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#0a0708]"></div>
          <div 
            className="absolute inset-0 bg-[#1c1c1c]"
            style={{ 
              clipPath: 'polygon(70% 0, 100% 0, 100% 100%, 0 100%)' 
            }}
          ></div>
        </div>
        <div className="relative z-10 min-h-screen flex flex-col">
          <header className="flex justify-end p-8">
            <nav className="flex gap-4">
              <button className="px-6 py-2 text-white hover:scale-100 transition-transform">
                About me
              </button>
              <button className="px-6 py-2 text-white hover:scale-100 transition-transform">
                Skills
              </button>
              <button className="px-6 py-2 bg-[#0a0708] text-white rounded hover:scale-100 transition-transform">
                Contact me
              </button>
            </nav>
          </header>
          <main className="flex-1 flex items-center mb-50 ml-40">
            <div className="ml-20">
              <div className="max-w-lg">
                <p className="text-3xl text-gray-300">Hello i'm</p>
                <h1 className="text-5xl font-bold text-white my-4">Lucas Chiapella</h1>
                <p className="text-2xl text-gray-400 mb-10">Developer</p>
                <div className="mt-10">
                  <SocialButtons/>
                </div>
              </div>
            </div>
            <div className="mt-60 ml-70">
              <p className="text-base md:text-xl text-gray-300 leading-relaxed">Systems Analysis student building skills through personal projects. Aspiring professional developer blending academic knowledge with practical experience.</p>
            </div>
            <div className="w-1/2 flex items-start pl-20">
              <div className="mt-20">  
                <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-white/10">
                  <Image 
                    src="/1.jpeg" 
                    alt="Lucas Chiapella"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="justify-end mt-20 gap-10 mr-70">
                  <Image 
                    src="/code3.png" 
                    alt="Lucas Chiapella"
                    width={100}
                    height={101}
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </main>
        </div>
      </section>
      <section className="min-h-screen bg-[#0a0708] py-20 px-8">
      </section>
    </div>
  );
}