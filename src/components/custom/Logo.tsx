import {signup} from "@/index" 
const Logo = () => {
  return (
    <div className=" flex overflow-hidden w-full relative items-center justify-center">
     <section className=" overflow-hidden bg-red w-1/2 h-12 rounded-full">
       <video muted autoPlay loop className="relative w-full">
        <source src={signup}/>
       </video>
     </section>
    </div>
  );
};

export default Logo;
