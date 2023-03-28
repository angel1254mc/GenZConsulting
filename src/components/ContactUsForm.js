import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { ColorRing } from 'react-loader-spinner';
import Loader from 'react-loaders';
import { toast } from 'sonner';
import Spacer from './Spacer';

const ContactUsForm = () => {
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
        setLoading(false);
        if (error)
            toast.error(error);
        else {
            // Reset the form
            reset();
            toast.success("Successfully Sent Email");
        }
      }
}

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-3 md:px-4 md:py-5 rounded-md flex flex-col w-full md:max-w-[80%] gap-y-5 form-bg">

        <h3 className="font-medium text-xl xl:text-2xl text-white my-4">Contact Us For Any Questions</h3>
        <input className="text-sm xl:text-lg p-2 text-form font-medium" required placeholder="First Name" {...register("firstName")}/>
        <input className="text-sm xl:text-lg p-2 text-form font-medium" required placeholder="Last Name" {...register("lastName")}/>
        <input className="text-sm xl:text-lg p-2 text-form font-medium" required type="email" placeholder="Email" {...register("email")}/>
        <textarea className="text-sm xl:text-lg p-2 h-24 text-form font-medium" required placeholder="How Can We Help?" {...register("body")}/>
        <div><button disabled={loading} className="text-sm xl:text-lg flex bg-submit p-2 px-8">
          {!loading ? "Submit" : <ColorRing visible={true} height="40" width="40" colors={["black"]} ariaLabel="submit-loading"/>}
        </button></div>
    </form>
  )
}

export default ContactUsForm