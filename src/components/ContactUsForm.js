import React from 'react'
import { useForm } from 'react-hook-form'
import Spacer from './Spacer';

const ContactUsForm = () => {
  const {register, handleSubmit, watch, formState: {errors}} = useForm();
  const onSubmit = data => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-3 md:px-4 md:py-5 rounded-md flex flex-col w-full md:max-w-[80%] gap-y-5 form-bg">

        <h3 className="font-medium text-xl xl:text-2xl text-white my-4">Contact Us For Any Questions</h3>
        <input className="text-sm xl:text-lg p-2 text-form font-medium" placeholder="First Name" {...register("first-name")}/>
        <input className="text-sm xl:text-lg p-2 text-form font-medium" placeholder="Last Name" {...register("last-name")}/>
        <input className="text-sm xl:text-lg p-2 text-form font-medium" required placeholder="Email" {...register("email")}/>
        <textarea className="text-sm xl:text-lg p-2 h-24 text-form font-medium" required placeholder="How Can We Help?" {...register("subject")}/>
        <div><button className="text-sm xl:text-lg flex bg-submit p-2 px-8">Submit</button></div>
    </form>
  )
}

export default ContactUsForm