import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { IoEye, IoEyeOff } from "react-icons/io5";
import toast, { Toaster } from "react-hot-toast";
import Container from "../components/common/Container";
import ButtonAnimation from "../components/common/ButtonAnimation";

const Login = () => {
  const dispatch = useDispatch(); // dispatch instance
  const navigate = useNavigate(); // navigation instance
  // all state for get user login info
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [passwordToggle, setPasswordToggle] = useState(false);
  const [loading, setLoading] = useState(false);

  // function for login
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    // Regular expression to check for English letters (A-Z, a-z)
    const englishRegex = /^[a-zA-Z\s]*$/;
    const numberRegex = /^[0-9]+$/;

    if (!numberRegex.test(phone)) {
      toast.error("Pls Enter Phone Number In English");
      setLoading(false);
    } else if (phone.length != 11) {
      toast.error("Pls Enter 11 Digit Valid Phone Number");
      setLoading(false);
    } else if (phone && password) {
      let customer = {
        phone,
        password,
      };
      try {
        let res = await axios.post("", customer, {
          headers: {
            "Content-Type": "application/json",
          },
        });

        console.log(res);

        if (res.data.msg == "User Found") {
          toast.success("Signin successful");

          dispatch(signInUser(res.data));

          navigate("/");
        } else {
          setLoading(false);
          toast.error("Invalid User");
        }
      } catch (error) {
        console.log(error);

        setLoading(false);
        toast.error("Something went wrong");
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
      <section className="pt-[100px] pb-[100px] bg-bgScreen bg-cover bg-no-repeat bg-opacity-0">
        <Container>
          <h2 className=" font-bold text-4xl text-white text-center">
            Sign in
          </h2>
        </Container>
      </section>

      <Container>
        <Toaster position="top-right" reverseOrder={false} />

        <form
          onSubmit={handleLogin}
          action=""
          className="  my-8 md:my-20 w-full md:w-[450px] mx-auto p-2 border-[1px] border-[#F0F0F0]"
        >
          <h2 className="font-semibold text-2xl text-center mb-5">
            Login Here
          </h2>

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
              Password
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
              Login
            </button>
          )}

          <p className=" mt-2 text-base font-normal text-center">
            No Account ?
            <Link to="/signup" className="text-red-500">
              Create a new Account
            </Link>
          </p>
        </form>
      </Container>
    </main>
  );
};

export default Login;
