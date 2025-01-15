import dipesh from "/dipesh.jpg";
import Typewriter from "typewriter-effect";
import Icon from "./Icon";

const Hero = () => {
  return (
    <div id="hero" className="bg-neutral-900">
      <div className="max-w-7xl mx-auto w-full px-4 lg:px-8 xl:px-16">
        <div className="flex flex-col-reverse md:flex-row justify-between pt-6 lg:pt-12 xl:pt-16 gap-4 lg:gap-8 xl:gap-10">
          <div className="pt-5 md:pt-10">
            <h5 className="text-neutral-400">🖐️ WELCOME TO MY WEBSITE</h5>
            <div className="text-4xl md:text-6xl text-neutral-50 font-bold dark:text-gray-900 mt-4 md:mt-8">
              <h2 className="my-2 md:my-4">
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
            <p className="my-8 text-lg text-neutral-400 md:max-w-2xl">
              A Computer Science graduate with hands-on experience in full-stack development. I specialize in technologies like React.js and Node.js and have a proven track record of creating impactful software solutions (primarily, web applications).
            </p>
          </div>

          <div className="flex items-start md:pt-20">
            <img src={dipesh} className="px-[5%] md:px-0 rounded-full lg:max-w-[350px] md:max-w-[300px]" />
          </div>
        </div>

        <div className="flex flex-wrap justify-between items-start gap-8 md:items-center text-neutral-400 border-b border-black pb-10 w-full">
          <Icon item1 title1 />
          <Icon item2 title2 />
        </div>
      </div>
    </div>
  );
};

export default Hero;
