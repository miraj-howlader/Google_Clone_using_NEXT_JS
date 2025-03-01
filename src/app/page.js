import HomeHeader from "@/components/HomeHeader";
import HomeSearch from "@/components/HomeSearch";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <HomeHeader />

      <div className=" flex flex-col items-center mt-24">

        <Image 
        src={"/logo.png"} 
        width={300} 
        height={100} 
        alt="Google Logo"
        priority
        className=" text-xs w-[300px]"
        style={{width:'auto'}}
        />
        <HomeSearch />
      </div>
    </>
  );
}
