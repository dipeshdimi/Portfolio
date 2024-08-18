import dipesh from "/dipesh.png";
import Typewriter from "typewriter-effect";
import Icon from "./Icon";

const Hero = () => {
  return (
    <div id="hero" className="bg-neutral-900">
      <div className="max-w-7xl mx-auto w-full px-4 lg:px-8 xl:px-16">
        <div className="flex flex-col-reverse lg:flex-row justify-between py-6 lg:py-12 xl:py-16 gap-4 lg:gap-8 xl:gap-10 border-b border-black">
          <div className="lg:basis-3/5 py-10">
            <h5 className="text-neutral-400">🖐️ WELCOME TO MY WEBSITE</h5>
            <div className="text-4xl md:text-6xl text-neutral-50 font-bold dark:text-gray-900 mt-8">
              <h2 className="my-4 ">
                Hi, I&apos;m <span className="text-secondary-500">Dipesh Mishra</span>
              </h2>
              <p>
                <Typewriter
                  options={{
                    strings: ["a Software Engineer", "a Full Stack Developer"],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </p>
            </div>
            <p className="my-8 text-lg text-neutral-400 max-w-xl md:max-w-2xl ">
              A Computer Science graduate with hands-on experience in full-stack development. I specialize in technologies like React.js and Node.js and have a proven track record of creating impactful software solutions (primarily, web applications).
            </p>
            <div className=" max-w-lg md:max-w-xl flex flex-col justify-start items-start md:flex-row gap-8 md:justify-between md:items-center text-neutral-400 ">
              <Icon item1 title1 />
              <Icon item2 title2 />
            </div>
          </div>

          <div className="lg:basis-2/5 relative flex items-center">
            <div className="hidden lg:flex bg-[#1F2125] button-box-shadow w-full mt-auto h-[30rem] "></div>
            <div className="lg:absolute lg:bottom-0 ">
              <img src={dipesh} className="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
