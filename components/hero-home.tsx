"use client";

import Image from "next/image";
import PageIllustration from "@/components/page-illustration";
import Avatar01 from "@/public/images/avatar-01.jpg";
import Avatar02 from "@/public/images/avatar-02.jpg";
import Avatar03 from "@/public/images/avatar-03.jpg";
import Avatar04 from "@/public/images/avatar-04.jpg";
import Avatar05 from "@/public/images/avatar-05.jpg";
import Avatar06 from "@/public/images/avatar-06.jpg";
import MarqueeText from "react-marquee-text";
import { ref, uploadBytes } from "firebase/storage";
import { db } from "./firebase_config";
import { useState, useEffect } from "react";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";


export default function HeroHome() {
  const [email, setEmail] = useState("");

   
    const addEmail = async (e:any) => {
        e.preventDefault();
        
        
        try {
          const docRef = await addDoc(collection(db, "waitlisted"), {
            email: email,    
          });
          console.log("Document written with ID: ", docRef.id);
        } catch (e) {
          console.error("Error adding document: ", e);
        }

        document.getElementById("success")!.innerHTML="submitted! we'll notify you once we're live :)";
    }
  

  return (
    
    <section className="relative">
      <PageIllustration />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="pb-12 pt-32 md:pb-20 md:pt-40">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-16">
            
            <h1
              className="mb-6 border-y text-5xl font-bold [border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1] md:text-6xl"
              data-aos="zoom-y-out"
              data-aos-delay={150}
            >
              discover. decide. succeed. <br className="max-lg:hidden" />
  
            </h1>
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 text-lg text-gray-700"
                data-aos="zoom-y-out"
                data-aos-delay={300}
              >
                schola is making the admissions process more focused, personalized and accessible by connecting you with mentors from your dream universities.
              </p>
              <div className="relative before:absolute before:inset-0 before:border-y before:[border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1]">
              <p className="text-lg font-medium mx-auto text-gray-800" data-aos="zoom-y-out" data-aos-delay={450}>
                  drop your email to join the waitlist.
                </p>
              <div
                className="mx-auto flex flex-row max-w-md items-center justify-center space-x-4"
                data-aos="zoom-y-out"
                data-aos-delay={450}
              >
                
                <div className="relative flex-1">
                  <input
                    placeholder="scholaisfun@gmail.com"
                    type="email"
                    onChange={(e)=>setEmail(e.target.value)}
                    className="peer h-12 w-full rounded-lg outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-green-400"
                  />
                  <span id="success" className="absolute block pt-1 text-xs font-semibold text-gray-500 opacity-100 transition-all duration-200 ease-in-out group-focus-within:opacity-100">
                    
                    </span>
                </div>
                
                <button onClick={addEmail} type="submit" className="btn h-12 rounded-lg bg-green-600 px-6 text-white shadow hover:bg-green-700">
                  Submit
                </button>
              </div>
              
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
