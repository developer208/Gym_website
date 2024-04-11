import React, { useState } from "react";
import { delay, motion } from "framer-motion";
import { ReactTyped } from "react-typed";
import { useMutation } from "@tanstack/react-query";
import { useAlert } from "react-alert";
import axios from "axios";
import { data as d } from "../../assets/Data";
const Recommend = () => {
  const alert = useAlert();
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [timing, setTiming] = useState("1");
  const [bmi, setBmi] = useState(0);
  let dataArray = [];
  const [finalArray, setFinalArray] = useState([]);
  const [apioutput, setApioutput] = useState("Stale");
  const mutation1 = useMutation({
    mutationKey: ["weight_loss"],
    mutationFn: () => {
      return axios.post("http://localhost:8000/weight_loss", {
        age: Number(age),
        weight: Number(weight),
        height: Number(height),
        timing: Number(timing),
      });
    },
    onSuccess(data) {
      const arr = data.data.Recommendation;
      arr.forEach((item) => {
        d.forEach((inside) => {
          if (item === inside.name) {
            dataArray.push(inside);
          }
        });
      });
      setFinalArray(dataArray);
      setBmi(data.data.BMI);
      setApioutput(data.data.message);
    },
    onError() {
      alert.error("Api Error");
    },
  });
  const mutation2 = useMutation({
    mutationKey: ["weight_gain"],
    mutationFn: () => {
      return axios.post("http://localhost:8000/weight_gain", {
        age: Number(age),
        weight: Number(weight),
        height: Number(height),
        timing: Number(timing),
      });
    },
    onSuccess(data) {
      const arr = data.data.Recommendation;
      arr.forEach((item) => {
        d.forEach((inside) => {
          if (item === inside.name) {
            dataArray.push(inside);
          }
        });
      });
      setFinalArray(dataArray);
      setBmi(data.data.BMI);
      setApioutput(data.data.message);
    },
    onError() {
      alert.error("Api Error");
    },
  });
  const mutation3 = useMutation({
    mutationKey: ["healthy"],
    mutationFn: () => {
      return axios.post("http://localhost:8000/healthy", {
        age: Number(age),
        weight: Number(weight),
        height: Number(height),
        timing: Number(timing),
      });
    },
    onSuccess(data) {
      const arr = data.data.Recommendation;
      arr.forEach((item) => {
        d.forEach((inside) => {
          if (item === inside.name) {
            dataArray.push(inside);
          }
        });
      });
      setFinalArray(dataArray);
      setBmi(data.data.BMI);
      setApioutput(data.data.message);
    },
    onError() {
      alert.error("Api Error");
    },
  });

  function loss(e) {
    e.preventDefault();
    setFinalArray([]);
    setBmi(0);
    if (age !== "" && weight !== "" && height !== "") {
      setApioutput("");
      mutation1.mutate();
    } else {
      setApioutput("stale");
      alert.error("Field is Empty !");
    }
  }
  function gain(e) {
    e.preventDefault();
    setFinalArray([]);
    setBmi(0);
    if (age !== "" && weight !== "" && height !== "") {
      setApioutput("");
      mutation2.mutate();
    } else {
      setApioutput("stale");
      alert.error("Field is Empty !");
    }
  }
  function healthy(e) {
    e.preventDefault();
    setFinalArray([]);
    setBmi(0);
    if (age !== "" && weight !== "" && height !== "") {
      setApioutput("");
      mutation3.mutate();
    } else {
      setApioutput("stale");
      alert.error("Field is Empty !");
    }
  }
  return (
    <div className="">
      <div className="min-h-[100vh] w-[100vw] overflow-hidden bg-white mb-10 flex flex-col ">
        <div className="min-h-[500px] flex mx-2 ">
          <div className="w-[100%] md:w-[50%] bg-transparent flex flex-col ">
            <motion.h1
              initial={{ y: -200 }}
              animate={{ y: 0 }}
              transition={{ duration: 1 }}
              className="w-full text-3xl md:text-4xl min-h-[70px] md:ml-10 mx-2  mt-[40px] flex items-center bg-gradient-to-t from-cyan-400 to-purple-400 text-transparent bg-clip-text font-bold shadow-sm "
            >
              Personalized Healthy Diet Model
            </motion.h1>
            <motion.h3
              initial={{ opacity: 0 }}
              animate={{ opacity: 100 }}
              transition={{ duration: 1, delay: 1 }}
              className="md:ml-10 my-5 md:block flex justify-center "
            >
              <ReactTyped
                className=" text-2xl md:text-4xl font-semibold text-green-600 "
                strings={["NUTRITION - BALANCE - WELLNESS"]}
                typeSpeed={150}
              />
            </motion.h3>
            <motion.p
              initial={{ x: -500 }}
              animate={{ x: 0 }}
              transition={{ duration: 1 }}
              className="md:ml-10 text-lg md:text-xl "
            >
              The diet recommendation model utilizes KNN to calculate BMI based
              on user input such as height, weight, and age. It then recommends
              personalized meal plans for weight management, tailored to either
              gain, reduce, or maintain weight, providing a holistic approach to
              health and nutrition.
            </motion.p>
            <motion.form
              initial={{ x: -500 }}
              animate={{ x: 0 }}
              transition={{ duration: 1 }}
              className="  md:ml-10 mt-8 w-full md:w-[400px] min-h-[400px] border-2 shadow-lg flex flex-col gap-2 "
            >
              <div className="flex gap-4 justify-center mt-3 ">
                <h1 className="text-3xl font-semibold flex justify-center shadow-md  ">
                  Recommend
                </h1>
                <img
                  src="https://res.cloudinary.com/dqyvomyqy/image/upload/v1712770403/diet/izmawhdsxk8lhelgfweb.svg"
                  alt=""
                  srcset=""
                  width={40}
                  height={40}
                />
              </div>
              <div className="flex flex-col w-[95%]  mx-auto mt-5 ">
                <label htmlFor="" className="mb-4  text-lg text-gray-400 ">
                  Age (in Years)
                </label>
                <input
                  type="number"
                  label="Name"
                  name="name"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  className=" h-[40px] pl-3 rounded-md border text-black border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700  "
                  placeholder="40"
                />
              </div>
              <div className="flex flex-col w-[95%]  mx-auto mt-5 ">
                <label htmlFor="" className="mb-4  text-lg text-gray-400 ">
                  Weight (in Killograms)
                </label>
                <input
                  type="number"
                  label="Name"
                  name="name"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  className=" h-[40px] pl-3 rounded-md border text-black border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700  "
                  placeholder="54"
                />
              </div>
              <div className="flex flex-col w-[95%]  mx-auto mt-5 ">
                <label htmlFor="" className="mb-4  text-lg text-gray-400 ">
                  Height (in Centimeters)
                </label>
                <input
                  type="number"
                  label="Name"
                  name="name"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  className=" h-[40px] pl-3 rounded-md border text-black border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700  "
                  placeholder="160"
                />
              </div>

              <div className="flex gap-2 justify-center my-4 ">
                <div class="flex items-center gap-2">
                  <input
                    checked={timing === "1"}
                    id="default-radio-2"
                    type="radio"
                    value="1"
                    onClick={(e) => setTiming(e.target.value)}
                    name="default-radio"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    for="default-radio-2"
                    class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Breakfast
                  </label>
                </div>
                <div class="flex items-center gap-2">
                  <input
                    id="default-radio-2"
                    type="radio"
                    value="2"
                    checked={timing === "2"}
                    onClick={(e) => setTiming(e.target.value)}
                    name="default-radio"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    for="default-radio-2"
                    class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Lunch
                  </label>
                </div>
                <div class="flex items-center gap-2">
                  <input
                    checked={timing === "3"}
                    id="default-radio-2"
                    type="radio"
                    value="3"
                    onClick={(e) => setTiming(e.target.value)}
                    name="default-radio"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    for="default-radio-2"
                    class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Dinner
                  </label>
                </div>
              </div>

              <div className="flex justify-center   ">
                <button
                  onClick={(e) => loss(e)}
                  className="w-[300px] h-[40px]   font-medium bg-gradient-to-t from-cyan-400 to-purple-400  active:bg-gradient-to-t active:from-cyan-500 active:to-purple-500  text-black border-2 rounded-3xl  "
                >
                  Weight Loss
                </button>
              </div>
              <div className="flex justify-center   ">
                <button
                  onClick={(e) => gain(e)}
                  className="w-[300px] h-[40px]   font-medium bg-gradient-to-t from-cyan-400 to-purple-400  active:bg-gradient-to-t active:from-cyan-500 active:to-purple-500  text-black border-2 rounded-3xl  "
                >
                  Weight Gain
                </button>
              </div>
              <div className="flex justify-center mb-5   ">
                <button
                  onClick={(e) => healthy(e)}
                  className="w-[300px] h-[40px]   font-medium bg-gradient-to-t from-cyan-400 to-purple-400  active:bg-gradient-to-t active:from-cyan-500 active:to-purple-500  text-black border-2 rounded-3xl  "
                >
                  Stay Healthy
                </button>
              </div>
            </motion.form>
          </div>
          <motion.div
            initial={{ x: 1400 }}
            animate={{ x: 0 }}
            transition={{ duration: 1 }}
            className=" w-[50%] hidden md:block "
          >
            <img
              className="mt-8"
              src="https://res.cloudinary.com/dqyvomyqy/image/upload/v1712775409/diet/eqszyjqj0ihw7olsbo2y.png"
              alt=""
              srcset=""
            />
          </motion.div>
        </div>
        <div className="w-[100vw] flex flex-col gap-3 items-center px-10 ">
          <h1 className=" text-3xl md:text-3xl my-5 ">
            Your Body Mass Index (BMI) :
            {apioutput === "stale" ? (
              <span></span>
            ) : (
              <span className="px-2">{bmi.toPrecision(4)}</span>
            )}
          </h1>
          <h1 className="text-3xl my-5 ">Food Items</h1>
          <div className="w-full  flex flex-wrap gap-x-8 gap-y-10 justify-center ">
            {apioutput === "" ? (
              <div role="status">
                <svg
                  aria-hidden="true"
                  class="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
                <span class="sr-only">Loading...</span>
              </div>
            ) : (
              <>
                {finalArray.map((item) => {
                  return (
                    <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                      <p className="w-[100%] bg-black ">
                        <img
                          class="rounded-t-lg"
                          src={item.url}
                          alt=""
                          className="w-[100%]"
                        />
                      </p>
                      <div class="p-5">
                        <p>
                          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            {item.name}
                          </h5>
                        </p>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                          Here are the biggest enterprise technology
                          acquisitions of 2021 so far, in reverse chronological
                          order.
                        </p>
                        <button class="inline-flex gap-x-2 items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 hover:cursor-pointer ">
                          <span className="">Read more</span>
                          <svg
                            className=""
                            class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 14 10"
                          >
                            <path
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M1 5h12m0 0L9 1m4 4L9 9"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  );
                })}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recommend;
