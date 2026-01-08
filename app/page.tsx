import { navigate } from "next/dist/client/components/segment-cache/navigation";

export default function Home() {
  return (
    <div>
      <div className="flex justify-end items-center gap-2.5 mr-14 mt-10">
          <button className="h-10 bg-transparent text-white border-none rounded-md text-1xl font-bold cursor-pointer w-[150px] transition-colors duration-500">About me</button>
          <button className="h-10 bg-transparent text-white border-none rounded-md text-1xl font-bold cursor-pointer w-[150px] transition-colors duration-500">Skills</button>
          <button className="h-10 bg-[#555555] text-black border-none rounded-md text-1xl font-bold cursor-pointer w-[150px] transition-colors duration-500">Contact me</button>
      </div>
      <div className="ml-20 mt-40 space-y-4">
        <p className="text-4xl">Hello i'm</p>
        <p className="text-6xl">Lucas Chiapella</p>
        <p className="text-3xl text-gray-400">Developer</p>
      </div>
    </div>
      
  );
}
