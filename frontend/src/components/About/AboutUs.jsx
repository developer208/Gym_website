import { useState } from "react";
import "./About.css";
import Tilt from "react-parallax-tilt"

const callouts = [ 
 
  {

    name: "Vedang Mule",
    description: "Full-Stack Developer 💻 | Coder👨‍💻 | Cyber Security Enthusiast  | competitive programmer",
    imageSrc:
      "https://avatars.githubusercontent.com/u/98508734?s=400&u=07ac59f304af105cac32a13dcc098c41263daf28&v=4",
    imageAlt: "Vedang Mule",
    href: "https://github.com/developer208",
    languages: ["JavaScript",
      "Python",
      "C++","java"]
      
  },
  {

    name: "Shivam Raina",
    description: "Developer | AI ML ",
    imageSrc:
      "https://avatars.githubusercontent.com/u/97681826?v=4",
    imageAlt: "Vedang Mule",
    href: "https://github.com/ShivamRaina66",
    languages: ["JavaScript",
      "Python",
      "java"]
      
  },
  {

    name: "Deepanshu",
    description: "developer",
    imageSrc:
      "https://avatars.githubusercontent.com/u/102850089?v=4",
    imageAlt: "Vedang Mule",
    href: "https://github.com/Deepanshu2440",
    languages: ["JavaScript",
      "Python",
      "C++"]
      
  },
  {

    name: "Sarvesh Damle",
    description: "Full-Stack Developer 💻 | Coder👨‍💻 | Cyber Security Enthusiast  | competitive programmer",
    imageSrc:
      "https://avatars.githubusercontent.com/u/113985665?v=4",
    imageAlt: "Vedang Mule",
    href: "https://github.com/Sarvesh-Damle",
    languages: ["JavaScript",
      "Python",
      "C++","java"]
      
  },




];


export default function AboutUs() {
    const [val, setval] = useState("");
    return (
      <div className="bg-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto py-16 sm:py-24 lg:py-32 lg:max-w-none">
            <h2 className="text-2xl font-bold text-gray-900">
              Contributors
            </h2>
            <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6 ">
              {callouts.map((callout) =>
                callout.name.toLowerCase().includes(val.toLowerCase()) ? (
                <Tilt><div
                    key={callout.name}
                    className="group relative py-6 profile-card text-center"
                  >
                    <div className="relative w-48 h-48 overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 lg:aspect-w-1 lg:aspect-h-1 ">
                      <img
                        style={{ objectFit: "contain" }}
                        src={callout.imageSrc}
                        alt={callout.imageAlt}
                        className="w-full h-full object-center object-cover"
                      />
                    </div>
                    <h3 className="contributor-name mt-6 text-xl font-bold text-black ">
                      <div className="contributor">{callout.name}</div>
                    </h3>
                    <a href={callout.href} target="_blank" rel="noreferrer">
                      <span className="absolute inset-0" />
                    </a>
                    <p className="text-base font-semibold text-gray-900 dark:text-gray-500">
                      {callout.description}
                    </p>
                    
                  
                  </div>
                  </Tilt> 
                ) : null
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
