import Image from 'next/image';
import SocialButtons from './components/SocialButtons.client';

export default function Home() {
  return (
    <div id="about">
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
              <a 
                href="#about"
                className="px-6 p-6 border-none bg-transparent cursor-pointer hover:scale-110 active:scale-95 transition-transform duration-300 text-white"
              >
                About me
              </a>
              <a 
                href="#skills"
                className="px-6 p-6 border-none bg-transparent cursor-pointer hover:scale-110 active:scale-95 transition-transform duration-300 text-white"
              >
                Skills
              </a>
              <a 
                href="#proyect"
                className="px-6 p-6 border-none bg-transparent cursor-pointer hover:scale-110 active:scale-95 transition-transform duration-300 text-white"
              >
                Proyects
              </a>
              <a  href="#contact" className="mt-3 px-6 p-3 rounded bg-[#0a0708] cursor-pointer hover:scale-110 active:scale-10 transition-transform duration-300 text-[#8B5CF6]">
                Contact me
              </a>
            </nav>
          </header>   
          <main className="flex-1 flex items-center mb-50 ml-30">
            <div className="ml-20">
              <div className="max-w-lg">
                <p className="text-3xl text-gray-300">Hello i'm</p>
                <h1 className="text-5xl font-bold text-white my-4">Lucas Chiapella</h1>
                <p className="text-2xl text-[#8B5CF6] mb-10">Developer</p>
                <div className="mt-10">
                  <SocialButtons/>
                </div>
              </div>
            </div>
            <div className="mt-70 ml-65">
              <p className="text-base md:text-2xl text-gray-300 leading-relaxed">
                Systems Analysis student building skills through personal projects. 
                Aspiring professional developer combining academic knowledge with practical experience.
              </p>
            </div>
            <div className="w-1/2 flex items-start pl-20">
              <div className="mt-20">  
                <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-[#8B5CF6]">
                  <Image 
                    src="/lucasfoto1.png" 
                    alt="Lucas Chiapella"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="justify-end mt-20 gap-10 mr-70">
                  <Image 
                    src="/code4.png" 
                    alt="Lucas Chiapella"
                    width={100}
                    height={100}
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </main>
        </div>
      </section>
      <section id="skills" className="relative overflow-hidden py-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#0a0708]"></div>
        </div>  
        <div className="relative z-10 ml-40">
          <h2 className="text-center text-3xl font-bold text-[#8B5CF6] mb-16 mr-53">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto px-4 ml-80">
            <div className="flex flex-col items-center">
              <div className="w-48 h-48 rounded-xl bg-gradient-to-br from-[#0a0708] to-[#1c1c1c] border-2 border-[#8B5CF6]/30 flex flex-col items-center justify-center p-6 shadow-lg">
                <div className="relative w-20 h-20 mb-4">
                  <Image 
                    src="/java.png" 
                    alt="Java"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="text-xl font-bold text-[#8B5CF6] mt-2">Java</div>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-48 h-48 rounded-xl bg-gradient-to-br from-[#0a0708] to-[#1c1c1c] border-2 border-[#8B5CF6]/30 flex flex-col items-center justify-center p-6 shadow-lg">
                <div className="relative w-20 h-20 mb-4">
                  <Image 
                    src="/c1.png" 
                    alt="C"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="text-xl font-bold text-[#8B5CF6] mt-2">C</div>
              </div>
            </div>
            <div className="flex flex-col items-center col-span-2 md:col-span-1">
              <div className="w-48 h-48 rounded-xl bg-gradient-to-br from-[#0a0708] to-[#1c1c1c] border-2 border-[#8B5CF6]/30 flex flex-col items-center justify-center p-6 shadow-lg">
                <div className="relative w-24 h-24 mb-6">
                  <Image 
                    src="/git3.png" 
                    alt="Git"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="text-xl font-bold text-[#8B5CF6] mt-2">Git</div>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-48 h-48 rounded-xl bg-gradient-to-br from-[#0a0708] to-[#1c1c1c] border-2 border-[#8B5CF6]/30 flex flex-col items-center justify-center p-6 shadow-lg">
                <div className="relative w-20 h-20 mb-4">
                  <Image 
                    src="/html.png" 
                    alt="Java"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="text-xl font-bold text-[#8B5CF6] mt-2">HTML & CSS</div>
              </div>
            </div>
          </div>
          <div className="text-center mt-16 max-w-2xl mx-auto px-4">
            <p className="text-gray-400 text-xl mr-60">
              Core technologies I work with daily.
            </p>
          </div>
        </div>
      </section>
      <section id="skills" className="relative overflow-hidden py-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#1c1c1c]"></div>
        </div>  
        <div className="relative z-10 ml-40">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto px-4">
            <div className="flex flex-col items-center">
              <div className="w-48 h-48 rounded-xl bg-gradient-to-br from-[#1c1c1c] to-[#0a0708] border-2 border-[#8B5CF6]/30 flex flex-col items-center justify-center p-6 shadow-lg">
                <div className="relative w-20 h-20 mb-4">
                  <Image 
                    src="/javascript.png" 
                    alt="Java"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="text-xl font-bold text-[#8B5CF6] mt-2">JavaScript</div>
              </div>
            </div>        
            <div className="flex flex-col items-center">
              <div className="w-48 h-48 rounded-xl bg-gradient-to-br from-[#1c1c1c] to-[#0a0708] border-2 border-[#8B5CF6]/30 flex flex-col items-center justify-center p-6 shadow-lg">
                <div className="relative w-20 h-20 mb-4">
                  <Image 
                    src="/python.png" 
                    alt="C"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="text-xl font-bold text-[#8B5CF6] mt-2">Python</div>
              </div>
            </div>
            <div className="flex flex-col items-center col-span-2 md:col-span-1">
              <div className="w-48 h-48 rounded-xl bg-gradient-to-br from-[#1c1c1c] to-[#0a0708] border-2 border-[#8B5CF6]/30 flex flex-col items-center justify-center p-6 shadow-lg">
                <div className="relative w-24 h-24 mb-6">
                  <Image 
                    src="/c++.png" 
                    alt="Git"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="text-xl font-bold text-[#8B5CF6] mt-2">C++</div>
              </div>
            </div>
          </div>
          <div className="mt-16 max-w-2xl mx-auto px-4 ml-45 text-center ml-110">
            <p className="text-gray-400 text-xl">
              Technologies i'm currently learning.
            </p>
          </div>
        </div>
      </section>
            <section id="proyect" className="relative overflow-hidden py-20 min-h-screen">
  <div className="absolute inset-0 z-0">
    <div className="absolute inset-0 bg-[#0a0708]"></div>
  </div>  
  <div className="relative z-10 container mx-auto px-4">
      <h2 className="text-center text-3xl font-bold text-[#8B5CF6] mb-16 mr-15">Proyects</h2>
    <div className="text-center mb-16">
      <p className="text-gray-400 text-3xl font-bold mb-8 mr-15">
        LunAI
      </p>
    </div>
    
    <div className="flex flex-col lg:flex-row gap-12 items-center justify-center">
      {/* Screenshot 1 - Muy grande */}
      <div className="group relative w-full max-w-4xl">
        <div className="rounded-2xl bg-gradient-to-br from-[#1c1c1c] to-[#0a0708] border-4 border-[#8B5CF6]/50 p-6 shadow-2xl transition-all duration-300 group-hover:border-[#8B5CF6]/80 group-hover:scale-[1.02]">
          {/* Aspecto de monitor/laptop */}
          <div className="relative w-full aspect-[16/10] rounded-lg overflow-hidden bg-gray-900">
            {/* Barra superior tipo browser */}
            <div className="absolute top-0 left-0 right-0 h-6 bg-gray-800 flex items-center px-3 z-10">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
            </div>
            
            {/* Imagen real del screenshot */}
            <div className="absolute inset-0 top-6">
              <Image 
                src="/lunai12.png" 
                alt="Screenshot LunAI - Página principal"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Screenshot 2 - Muy grande */}
      <div className="group relative w-full max-w-4xl">
        <div className="rounded-2xl bg-gradient-to-br from-[#1c1c1c] to-[#0a0708] border-4 border-[#8B5CF6]/50 p-6 shadow-2xl transition-all duration-300 group-hover:border-[#8B5CF6]/80 group-hover:scale-[1.02]">
          {/* Aspecto de monitor/laptop */}
          <div className="relative w-full aspect-[16/10] rounded-lg overflow-hidden bg-gray-900">
            {/* Barra superior tipo browser */}
            <div className="absolute top-0 left-0 right-0 h-6 bg-gray-800 flex items-center px-3 z-10">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
            </div>
            
            {/* Imagen real del screenshot */}
            <div className="absolute inset-0 top-6">
              <Image 
                src="/lunai2.png" 
                alt="Screenshot LunAI - Panel de admin"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="mt-16 max-w-2xl mx-auto px-4 ml-45 text-center ml-95">
            <p className="text-gray-400 text-xl">
              LunAI is web application that uses artificial intelligence to classify images of moles as benign or potentially malignant.
            </p>
          </div>
          <div className="mt-16 max-w-2xl mx-auto px-4 ml-45 text-center ml-95">
            <p className="text-white text-xl">
              My role in the project: Frontend Developer & UI/UX
            </p>
          </div>
  </div>
</section>
      <section id="contact" className="relative overflow-hidden py-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#1c1c1c]"></div>
        </div>  
        <div className="relative z-10 ml-35">
          <h2 className="text-center text-3xl font-bold text-[#8B5CF6] mb-16 mr-53">Contact</h2>
          <div className="text-center mt-16 max-w-2xl mx-auto px-4 space-y-2 relative ml-110 flex justify-between">
            <div> 
              <p className="text-gray-400 text-xl mr-60">Lucas Chiapella</p>
              <p className="text-gray-400 text-xl mr-60">lucaschiapella123@gmail.com</p>
              <p className="text-gray-400 text-xl mr-60">Cordoba, Argentina</p>
              <p className="text-gray-400 text-xl mr-60">(+54) 3584027587</p>
            </div>
            <div>
              <SocialButtons></SocialButtons>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}