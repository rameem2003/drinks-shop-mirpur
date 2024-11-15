import React, { useEffect, useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { Link, useNavigate } from "react-router-dom";
import { IoEye, IoEyeOff } from "react-icons/io5";
import toast, { Toaster } from "react-hot-toast";
import ButtonAnimation from "../components/common/ButtonAnimation";
import Container from "../components/common/Container";

const Signup = () => {
  const navigate = useNavigate(); // navigation instance
  // states for get the user signup info
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [passwordToggle, setPasswordToggle] = useState(false);
  const [loading, setLoading] = useState(false);

  // function for signup user
  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Regular expression to check for English letters (A-Z, a-z)
    const englishRegex = /^[a-zA-Z\s]*$/;
    const numberRegex = /^[0-9]+$/;

    if (!englishRegex.test(name)) {
      toast.error("Pls Enter Name In English");
      setLoading(false);
    }

    if (!numberRegex.test(phone)) {
      toast.error("Pls Enter Phone Number In English");
      setLoading(false);
    }

    if (phone.length != 11) {
      toast.error("Pls Enter 11 Digit Valid Phone Number");
      setLoading(false);
    } else if (name && phone && password) {
      let newCustomer = {
        id: uuidv4(),
        name,
        phone,
        password,
        created: new Date().toLocaleString(),
      };

      try {
        const res = await axios.post("", newCustomer, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        console.log(res);

        if (res.data.msg == "User is exist with same number.") {
          setLoading(false);
          toast.error(res.data.msg);
        } else {
          toast.success("Signup successful");
          setTimeout(() => {
            navigate("/login");
          }, 2000);
        }
      } catch (error) {
        console.log(error);
        setLoading(false);
        toast.error("Signup unsuccessfull");
      }
    }
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <main>
      <Toaster position="top-right" reverseOrder={false} />
      <section className="pt-[100px] pb-[100px] bg-bgScreen bg-cover bg-no-repeat bg-opacity-0">
        <Container>
          <h2 className=" font-bold text-4xl text-white text-center">
            Sign Up
          </h2>
        </Container>
      </section>
      <Container>
        <form
          onSubmit={handleSignup}
          action=""
          className=" my-2 md:my-20 w-full md:w-[450px] mx-auto p-2 border-[1px] border-[#F0F0F0] mt-10"
        >
          <h2 className="font-semibold text-2xl text-center mb-5">
            New Account
          </h2>

          <div className=" mb-5 w-full">
            <label className=" font-medium text-base text-black" htmlFor="">
              Your Full Name
            </label>

            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              className="w-full h-full border-[1px] border-black p-2  font-kanit font-medium text-base xl:text-xl"
              type="text"
              required
            />
          </div>
          <div className=" mb-5 w-full">
            <label className=" font-medium text-base text-black" htmlFor="">
              Your Mobile Number
            </label>

            <input
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
              className="w-full h-full border-[1px] border-black p-2  font-kanit font-medium text-base xl:text-xl"
              type="text"
              placeholder="01*********"
              required
            />
          </div>

          <div className=" mb-5 w-full">
            <label className=" font-medium text-base text-black" htmlFor="">
              Create New Password
            </label>
            <div className=" relative">
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                className="w-full h-full border-[1px] border-black p-2 font-kanit font-medium text-base xl:text-xl"
                type={passwordToggle ? "text" : "password"}
                required
              />

              {passwordToggle ? (
                <IoEyeOff
                  onClick={() => setPasswordToggle(!passwordToggle)}
                  className=" absolute cursor-pointer top-[50%] translate-y-[-50%] right-2 lg:text-2xl text-black"
                />
              ) : (
                <IoEye
                  onClick={() => setPasswordToggle(!passwordToggle)}
                  className=" absolute cursor-pointer top-[50%] translate-y-[-50%] right-2 lg:text-2xl text-black"
                />
              )}
            </div>
          </div>

          {loading ? (
            <ButtonAnimation />
          ) : (
            <button
              type="submit"
              className="w-full p-3 bg-slate-800 font-medium text-xl text-white"
            >
              Signup
            </button>
          )}

          <p className=" mt-2 text-base font-normal text-center">
            <Link to="/login" className="text-red-500">
              Go to Login
            </Link>
          </p>
        </form>
      </Container>
    </main>
  );
};

export default Signup;
