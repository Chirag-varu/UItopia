import { Hero } from "../components/hero";
import { Aside_Comp } from "../components/aside";
import { Moving_card } from "../components/Moving_card";
import { Highlight } from "../components/ui/hero-highlight";
import { Subscribe } from "../components/Subscribe";
import { AnimatedTooltip } from "../components/ui/AnimatedTooltip";
import SocialLinks from "@/components/contact-us/SocialLinks";


const people = [
  {
    id: 1,
    name: "Monil Parikh",
    designation: "Explorer",
    image: "/src/assets/profile3.jpg",
  },
  {
    id: 2,
    name: "Aditya Pai",
    designation: "Full-Stack Developer",
    image: "/src/assets/profile2.jpeg",
  },
  {
    id: 3,
    name: "Chirag Varu",
    designation: "Full-Stack Developer",
    image: "/src/assets/profile1.jpeg",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col h-screen w-full gap-1">
      <div className="flex md:flex-row flex-col p-1 mb-8 mt-40">
        <div className="flex flex-1 justify-around gap-3 w-full mb-2 mr-32">
          <Hero />
        </div>

        <div className="hidden md:block mr-4">
          <Aside_Comp />
          <div className="absolute">
            <Moving_card />
          </div>
        </div>
      </div>

      <div className="mt-10 md:ml-48 mb-14 max-w-lg lg:max-w-xl mx-4 ">
        <h1 className="font-bold md:text-2xl text-xl mb-3 ">
          Only UI Component Library you will ever need{" "}
        </h1>
        <p className="font-semibold text-2xl mb-4">As simple as copy and paste</p>
        <p className="text-lg">Copy paste the code into your ui folder and use the</p>
        <p className="text-lg mb-4">components in your projects. It's that simple, really.</p>
        <Highlight className="text-black dark:text-white">
          Craft Your Perfect Interface.
        </Highlight>
      </div>

      
      <div className="mt-12 mb-16 flex justify-center">
        <div className="w-full max-w-lg lg:max-w-xl mx-4 lg:mx-0">
          <Subscribe />
        </div>
      </div>

      <div className="flex flex-row items-center justify-center w-full mb-5 p-2">
        <p className="text-[#696464] text-lg mb-1 mr-3 dark:text-white">Brought to you by </p>
        <AnimatedTooltip items={people} />
      </div>

      <footer className="bg-gray-900 text-gray-200 mt-auto">
        <div className="container mx-auto p-6">
          <div className="flex flex-col md:flex-row justify-between">
            {/* Logo and Description */}
            <div className="mb-4 md:mb-0">
              <h2 className="text-xl font-bold mb-2">UI-Topia</h2>
              <p className="text-sm">
                Simplify your UI development with our copy-paste-ready component library.
              </p>
            </div>

            
            <div className="flex flex-col md:flex-row md:gap-8">
              <div className="mb-4 md:mb-0">
                <h3 className="font-semibold mb-2">Links</h3>
                <ul>
                  <li className="text-sm hover:text-gray-400">
                    <a href="#">Home</a>
                  </li>
                  <li className="text-sm hover:text-gray-400">
                    <a href="http://localhost:5173/components">Components</a>
                  </li>
                  
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Support</h3>
                <ul>
                  <li className="text-sm hover:text-gray-400">
                    <a href="http://localhost:5173/contact">FAQ</a>
                  </li>
                  <li className="text-sm hover:text-gray-400">
                    <a href="http://localhost:5173/contact">Contact</a>
                  </li>
                 
                </ul>
              </div>
            </div>

            
            <div>
              <h3 className="font-semibold mb-2">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-200 hover:text-gray-400">
                  <i className="fab fa-facebook"></i> Facebook
                </a>
                <a href="#" className="text-gray-200 hover:text-gray-400">
                  <i className="fab fa-twitter"></i> Twitter
                </a>
                <a href="#" className="text-gray-200 hover:text-gray-400">
                  <i className="fab fa-instagram"></i> Instagram
                </a>
              </div>
            </div>
          </div>

          <div className="mt-6 text-center text-sm">
            © {new Date().getFullYear()} UI-Topia. All rights reserved.
          </div>
        </div>
        
      </footer>
  
    </div>
    
  );
}
