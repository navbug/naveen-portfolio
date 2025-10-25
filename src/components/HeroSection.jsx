import { Download } from "lucide-react";
import Typewriter from "typewriter-effect";
import heroImage from "../assets/heroImage.jpg";

const HeroSection = () => {
  return (
    <section className="pt-20 pb-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-center px-10">
          <div className="flex flex-col sm:flex-row items-center space-x-4 md:space-x-6 animate-slideRight">
            <div className="flex items-center space-x-3">
              <div className="w-40 h-40 rounded-3xl overflow-hidden border-4 border-primary-500 shadow-xl animate-float bg-gradient-to-br from-primary-400 to-accent-500 text-white text-3xl font-bold">
                <img
                  src={heroImage}
                  alt="Profile"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="flex flex-col items-center">
              <h1 className="text-2xl sm:text-3xl font-bold text-text-primary">
                <span className="text-xl sm:text-3xl animate-wave inline-block">
                  🙏{" "}
                </span>
                Namaste, I'm{" "}
                <span className="gradient-text">Naveen Bugalia</span>
              </h1>
              <div className="flex text-2xl text-text-secondary mt-2 font-bold">
                <span>I'm a</span>
                <span className="ml-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent text-text-secondary">
                  <Typewriter
                    options={{
                      strings: [
                        "Frontent Developer",
                        "Backend Developer",
                        "Full Stack Developer",
                      ],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </span>
              </div>
              <div className="mt-4 text-md font-semibold italic tracking-wide max-w-2xl text-center">
                I focus on building responsive, scalable, and highly performant
                websites using React.js. My full-stack capabilities include
                developing robust APIs and server-side logic with Node.js to
                tackle real-world problems through innovative and efficient
                solutions.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
