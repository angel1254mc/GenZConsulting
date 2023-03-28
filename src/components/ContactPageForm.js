import Link from 'next/link'
import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import { ColorRing } from 'react-loader-spinner';
import { toast } from 'sonner';
const ContactPageForm = () => {
    
    const [loading, setLoading] = useState(false)
    const {register, handleSubmit, reset} = useForm();
    const [error, setError] = useState(null);
    const onSubmit = async (data) => {
        setLoading(true);
        // Submit the data to the server via API request
        // Data vaidation is handled by the `handleSubmit` wrapper
        console.log(data);
        try {
            await fetch("/api/contact", {
              "method": "POST",
              "headers": { "content-type": "application/json" },
              "body": JSON.stringify(data)
            })
            setError(null)
                  //if sucess do whatever you like, i.e toast notification
          } catch (error) {
              // toast error message. whatever you wish 
              console.log("There was an error sending your email: " + error);
          } finally {
            if (error)
                toast.error(error);
            else {
                toast.success("Successfully Sent Email");
                reset();
            }
            setLoading(false);
          }
    }


  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-[95%] md:w-[80%] contact-form h-auto p-4 px-6 xl:p-6 xl:px-8 flex flex-col bg-white rounded-xl">
        <h1 className="mb-4 text-xl md:text-2xl xl:text-4xl font-semibold text-black">Contact Us</h1>
        <div className="flex flex-col md:flex-row text-sm md:text-lg  justify-between">
            <div className="flex flex-col gap-y-2 w-full md:w-[45%] my-2">
                <label for="first-name">First Name</label>
                <input {...register("firstName", {required: "Plese Enter your First Name."})} name="firstName" type="text" className="bg-white px-2 py-2 w-full rounded-md contact-input">

                </input>
            </div>
            <div className="flex flex-col text-sm md:text-lg gap-y-2 w-full md:w-[45%] my-2">
                <label for="last-name">Last Name</label>
                <input {...register("lastName", {required: "Please Enter your Last Name"})} name="lastName" type="text" className="bg-white px-2 py-2 w-full rounded-md contact-input">

                </input>
            </div>
        </div>
        <div className="flex flex-col md:flex-row text-sm md:text-lg justify-between">
            <div className="flex flex-col gap-y-2 w-full md:w-[45%] mb-2">
                <label for="email" >Email</label>
                <input {...register("email", {required: "Please enter your email"})} name="email" type="email" className="bg-white px-2 py-2 w-full rounded-md contact-input">

                </input>
            </div>
            <div className="flex flex-col gap-y-2 w-full md:w-[45%] mb-2">
                <label for="subject">Subject</label>
                <input  {...register("subject", {required: "Please enter your subject"})} name="subject" type="text" className="bg-white px-2 py-2 w-full rounded-md contact-input">

                </input>
            </div>
        </div>
        <div className="flex flex-col gap-y-2 my-1 justify-between">
            <label for="body">Message...</label>
            <textarea {...register("body", {required: "Please enter your message body"})} name="body" className="text-lg w-full min-h-[14rem] textarea-input rounded-md bg-white px-2 py-2">

            </textarea>
        </div>
        <div className="flex gap-y-2 text-lg my-2 justify-start">
            <button type="submit" className="flex w-auto px-8 py-2 text-lg text-black contact-form-submit">
            {!loading ? "Submit" : <ColorRing visible={true} height="40" width="40" colors={["black"]} ariaLabel="submit-loading"/>}
            </button>
        </div>
    </form>

  )
}

export default ContactPageForm