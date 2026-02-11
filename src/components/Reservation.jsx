import React from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import userReservationStore from "../store";
import { IoMdArrowBack } from "react-icons/io";


const Reservation = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [phone, setPhone] = useState(0);
  const navigate = useNavigate();
  const closeReservation = userReservationStore(
  (state) => state.closeReservation
);


  const handleReservation=async(e)=>{
    e.preventDefault()
   
    try{
        const {data}=await axios.post("https://restro.up.railway.app/api/reservation",
{firstName,lastName,email,date,time,phone},{
            headers:{"Content-Type":"application/json",},
        withCredentials:true
        });
        toast.success(data.message || "Reservation successful!");
        setDate("");
        setEmail("");
        setFirstName("");
        setLastName("");
        setPhone(0);
        setTime("");
        closeReservation();
        navigate("/success");   

    }
    catch(err){
        const errorMessage = err.response?.data?.message || err.message || "An error occurred";
        toast.error(errorMessage);
    }
};

    return (
    <section className="reservation-section fixed left-0 bg-white">
      <div className="reservation-overlay" onClick={() => closeReservation()}></div>
      <section className="reservation-modal " id="reservation">
        <div className="container flex left-0 items-center gap-4">
          
          <div className="banner">
            <img src="/reservation.png" alt="res" width={400} />
          </div>
          <div className="banner">
            <div></div>
         
         <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-4">
   {/* Form here */}
   <div className="w-[80%] max-w-2xl bg-white shadow-2xl rounded-2xl p-8">
    <button className="border-2 text-xl color-red-900 border-red-900 w-16 h-8 rounded-xl" onClick={closeReservation}>
      <IoMdArrowBack className="w-full from-neutral-500"/>


    </button>
  <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">
    MAKE A RESERVATION
  </h1>

  <p className="text-center text-gray-500 mb-6">
    For Further Questions, Please Call
  </p>

  <form className="space-y-5">

    {/* Name Row */}
    <div className="grid md:grid-cols-2 gap-4">
      <input
        type="text"
        placeholder="First Name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
      />

      <input
        type="text"
        placeholder="Last Name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
      />
    </div>

    {/* Date & Time */}
    <div className="grid md:grid-cols-2 gap-4">
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
      />

      <input
        type="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
      />
    </div>

    {/* Email & Phone */}
    <div className="grid md:grid-cols-2 gap-4">
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
      />

      <input
        type="tel"
        placeholder="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
      />
    </div>

    {/* Submit Button */}
    <button
      type="submit"
      onClick={handleReservation}
      className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg flex items-center justify-center gap-2 transition duration-300"
    >
      RESERVE NOW
      <HiOutlineArrowNarrowRight size={20} />
    </button>
  </form>
</div>

</div>

        </div>
      </div>
        </section>
    </section>
  );
} 
export default Reservation;
