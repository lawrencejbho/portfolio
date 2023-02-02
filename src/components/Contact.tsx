import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/20/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {};

function Contact({}: Props) {
  // this automatically redirects you on submit to an email.  May want to modify in the future.
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:lawrence.jb.ho@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} `;
  };

  return (
    <div className="relative mx-auto flex h-screen max-w-7xl flex-col items-center justify-evenly px-10 text-center md:flex-row md:text-left">
      <h3 className="absolute top-24 text-2xl uppercase tracking-[20px] text-gray-500">
        Contact
      </h3>

      <div className="flex flex-col space-y-10">
        <h4 className="text-center text-4xl font-semibold">
          <span className="text-gray-800 underline decoration-[#4682B4]/80">
            Lets talk
          </span>
        </h4>

        <div className="space-y-10">
          <div className="flex items-center space-x-5">
            <PhoneIcon className="h-7 w-7  text-[#4682B4]/90" />
            <p className="text-2xl">+1 510 847 7378</p>
          </div>
          <div className="flex items-center space-x-5">
            <EnvelopeIcon className="h-7 w-7 text-[#4682B4]/90" />
            <p className="text-2xl">lawrence.jb.ho@gmail.com</p>
          </div>
          <div className="flex items-center space-x-5">
            <MapPinIcon className="h-7 w-7  text-[#4682B4]/90" />
            <p className="text-2xl">San Francisco, CA</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mx-auto flex w-fit flex-col space-y-2"
        >
          <div className="flex">
            <input
              {...register("name")}
              placeholder="Name"
              className="contactInput mr-1"
              type="text"
            />
            <input
              {...register("email")}
              placeholder="Email"
              className="contactInput ml-1"
              type="email"
            />
          </div>

          <input
            {...register("subject")}
            placeholder="Subject"
            className="contactInput"
            type="text"
          />
          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput"
          />
          <button
            type="submit"
            className="py-50 rounded-md bg-[#4682B4]/90 px-10 text-lg font-bold text-gray-200 hover:bg-[#4682B4] hover:text-white"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
