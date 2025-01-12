import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {};

function Contact({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) =>
    (window.location.href = `mailto:nihat3371@hotmail.com?subject=${formData.subject}&body=My Name Is ${formData.name}. ${formData.message} `);

  return (
    <div className="h-screen relative flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl lg:text-4xl ">
        Contact
      </h3>
      <div className=" flex flex-col space-y-5">
        <h4 className="text-1xl lg:text-3xl font-semibold text-center relative">
          Ready to work with you,
          <p className="decoration-[#F7AB0A]/50 underline">Lets talk!</p>
        </h4>

        <div className="space-y-5">
          <div className=" flex items-center space-x-5 justify-center">
            <PhoneIcon className=" text-[#white] h-7 w-7 animate-pulse" />
            <p className="text-1xl lg:text-3xl ">+90 555 059 74 46</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className=" text-[#white] h-7 w-7 animate-pulse" />
            <p className="text-1xl lg:text-4xl ">nihat3371@hotmail.com</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className=" text-[#white] h-7 w-7 animate-pulse" />
            <p className="text-1xl lg:text-3xl">İzmir</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-full mr-0"
        >
          <div className=" flex  flex-col space-x-2 space-y-1">
            <input
              {...register("name")}
              placeholder="Name"
              className="contactInput"
              type="text"
            />
          </div>
          <input
            {...register("email")}
            placeholder="E-Mail"
            className="contactInput"
            type="email"
          />

          <input
            {...register("subject")}
            placeholder="Title"
            className="contactInput"
            type="text"
          />
          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput"
          />
          <button
            typeof="submit"
            className="bg-gray-500 py-5 px-10 rounded-md text-white font-bold text-lg"
          >
            Send Me
          </button>
        </form>
      </div>
      <Link className="absolute bottom-20" href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="white"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18"
              />
            </svg>
          </div>
        </footer>
      </Link>
    </div>
  );
}

export default Contact;
