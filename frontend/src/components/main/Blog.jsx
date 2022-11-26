import React from "react";
// import Single from "../../assets/images/single.png";
// import Double from "../../assets/images/double.png";
// import Triple from "../../assets/images/triple.png";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <>
      
      <div className="text-2xl  flex justify-center md:text-6xl mt-10">
        Related Articles
      </div>
      <hr class="my-4 h-[2px] mx-10 md:mx-56 bg-black"/>

      <div className="w-full py-[6rem] px-4 bg-white">
        <div className="max-w-[1240px]   mx-auto grid md:grid-cols-3 gap-8">
          <div className="w-full shadow-xl  flex flex-col p-1 my-1 rounded-lg hover:scale-105 duration-300">
            
            <h2 className="text-3xl font-semibold text-center py-8 mx-2">
            How to Gain Muscle, No Matter Who You Are
            </h2>
            <p className="text-center text-2xl font-medium">
            Tips for how to gain muscle
            </p>
            <br/>
            <p className="text-center text-1xl mx-6">
            Muscle growth takes time, persistence, and a long-term commitment
              to the process.
              <br/>
              This article breaks down everything you need to know when it comes
              to building muscle, including how to work out and what to eat.
            </p>
            <div className="text-center">
              <Link to="/Blog1">
                <button className="bg-[#00df9a] hover:bg-[#232222] hover:text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">
                  Read More
                </button>
              </Link>
            </div>
          </div>
          < div className="w-full shadow-xl bg-gray-100 flex flex-col p-1 my-1 md:my-0 rounded-lg hover:scale-105 duration-300">
          
            <h2 className="text-3xl font-semibold text-center py-8 mx-2">
            List Of Protein Rich Food For Vegetarians
            </h2>
            <p className="text-center text-2xl font-medium">
            The Need For Protein
            </p>
            <br />
            <p className="text-center text-1xl mx-6">
            Proteins are an important part of our daily diet. They provide
                our muscles, cells and other vital tissues with the growth
                factors that are required to keep them healthy and functioning
                normally.
            </p>
            <div className="text-center">
              <Link to="/Blog2">
                
                <button className="bg-[#00df9a] hover:bg-[#232222] hover:text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3  text-black">
                  Read More
                </button>
              </Link>
            </div>


          </div>
          <div className="w-full shadow-xl flex flex-col p-1 my-1 md:my-0 4 rounded-lg hover:scale-105 duration-300">
           
            <h2 className="text-3xl font-semibold text-center py-8 mx-2">
              10 Exercises to Tone Every Inch of Your Body
            </h2>
            <p className="text-center text-2xl font-medium">
              Benefits of working out
            </p>
            <br />
            <p className="text-center text-1xl mx-6">
              We know daily exercise is good for optimizing health. But with so
              many options and limitless information available, it’s easy to get
              overwhelmed with what works. But not to worry. We’ve got your back
              (and body)!
            </p>
            <div className="text-center">
              <Link to="/Blog3">
                <button className="bg-[#00df9a] hover:bg-[#232222] hover:text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">
                  Read More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
