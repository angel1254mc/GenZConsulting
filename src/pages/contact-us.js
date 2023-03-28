import ContactPageForm from "@/components/ContactPageForm";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import Spacer from "@/components/Spacer";
import { Inter } from "next/font/google";
import Head from "next/head";
import Image from "next/image";
import React, { useEffect } from "react";
import { animated as a } from "react-spring";
import { Toaster } from "sonner";
const inter = Inter({ subsets: ["latin"] });

const ContactUs = () => {
  useEffect(() => {
    document.body.scrollTop = 0;
    var myNav = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      let scrollTop = window.scrollY;
      if (scrollTop >= 1) {
        myNav.classList.add("filled");
      } else {
        myNav.classList.remove("filled");
      }
    });
  }, []);
  return (
    <>
      <Head>
        <title>Gen Z Consulting | Contact Us</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Toaster richColors position="bottom-right" />
      <main className="flex flex-col relative">
        <NavBar />
        <div className="contact-background-image flex flex-col items-center">
          <Image
            className="contact-image"
            width={2560}
            height={1948}
            src="/contact-background.png"
          />
          <div className="flex flex-col w-full relative px-8 xl:px-20 md:px-20 items-center z-1">
            <section className="flex flex-col w-full w-max-[1200px] xl:max-w-[1400px] gap-y-8 md:gap-y-12">
              <spacer></spacer>
              <a.h1 className="text-4xl md:text-6xl font-medium text- mt-36 md:w-3/5 xl:text-8xl xl:w-2/3">
                Connect With Our Experts
              </a.h1>
              <a.p className="text-lg font-regular md:font-medium text-black sm:text-2xl xl:text-3xl xl:w-1/2">
                Speak with us to see how we can support your business growth –
                reach out to the Gen Z Consulting team today for tailored
                solutions and lasting partnerships.
              </a.p>
              <Spacer></Spacer>
            </section>
          </div>

          <ContactPageForm />
        </div>
        <Spacer></Spacer>
        <Footer></Footer>
      </main>
    </>
  );
};

export default ContactUs;
