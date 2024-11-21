import axios from "axios";
//import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { TbTopologyStar3 } from "react-icons/tb";
import { IoArrowForward } from "react-icons/io5";
function Contact() {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      name: data.name,
      email: data.email,
      message: data.message,
    };
    try {
      await axios.post("https://getform.io/f/ayvvygdb", userInfo);
      toast.success("Your message has been sent");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  return (
    <>
      <div
        name="Contact"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
      >
        <h1 className="text-3xl relative border-[0px] bottom-4 left-[-15px] hover:underline duration-75s  rounded-md text-[#8892B0] text-center font-bold mb-5 hover:text-[#64FFDA] duration-75s">Contact</h1>

        <div className="flex flex-col items-center justify-center mt-5">
          <form
            onSubmit={handleSubmit(onSubmit)}
            // action="https://getform.io/f/raeqjora"
            // method="POST"
            className="bg-[#0e203e80] border-[1px] border-[#64FFDA] p-1 cursor-pointer shadow-[#64FFDA] shadow-lg  duration-300 w-96 px-8 py-6 rounded-xl"
          >
              <div className="flex gap-4 justify-center flex-wrap"> 
            <h1 className="text-3xl text-white -tracking-tighter">Let,s Connect
            </h1> <TbTopologyStar3 className="text-[#64FFDA] w-[40px] h-[40px]"/>
            </div>
            <div className="flex mt-4 flex-col mb-4">
              <input
                {...register("name", { required: true })}
                className="rounded-lg appearance-none border  py-2 px-3 text-[#8892B0] bg-[#0e203e80] leading-tight focus:outline-none focus:shadow-outline
                hover:shadow-[#8892B0] shadow-lg hover:scale-110 duration-300
                "
                id="name"
                name="name"
                type="text"
                placeholder="Name"
              />
              {errors.name && <span>This field is required</span>}
            </div>
            <div className="flex flex-col mb-4">
              <input
                {...register("email", { required: true })}
                className="rounded-lg appearance-none border  py-2 px-3 text-[#8892B0] bg-[#0e203e80] leading-tight focus:outline-none focus:shadow-outline
                hover:shadow-[#8892B0] shadow-lg hover:scale-110 duration-300
                "
                id="email"
                name="email"
                type="text"
                placeholder="Email"
              />
              {errors.email && <span>This field is required</span>}
            </div>
            <div className="flex flex-col mb-4">
              <input
                {...register("email", { required: true })}
                className="rounded-lg appearance-none border  py-2 px-3 text-[#8892B0] bg-[#0e203e80] leading-tight focus:outline-none focus:shadow-outline
                hover:shadow-[#8892B0] shadow-lg hover:scale-110 duration-300
                "
                id="email"
                name="email"
                type="text"
                placeholder="Phone Number"
              />
              {errors.email && <span>This field is required</span>}
            </div>
            <div className="flex flex-col mb-4">
              <textarea
                {...register("message", { required: true })}
                className="rounded-lg appearance-none border  py-2 px-3 text-[#8892B0] bg-[#0e203e80] leading-tight focus:outline-none focus:shadow-outline
                hover:shadow-[#8892B0] shadow-lg hover:scale-110 duration-300
                "
                id="message"
                name="message"
                type="text"
                placeholder="Message"
              />
              {errors.message && <span>This field is required</span>}
            </div>
            <div className="flex gap-2">
            <button
              type="submit"
              className="bg-[#64FFDA] text-black w-[84px] h-[40px]  rounded-xl  px-3 py-2 hover:scale-110 duration-300"
            >
              <div className="mr-3">Send</div>
              <IoArrowForward className="text-black relative border-[0px] left-14 bottom-5 hover:scale-110 duration-300"/>

            </button>
            
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
