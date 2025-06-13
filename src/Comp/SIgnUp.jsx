import { Link, useLocation, useNavigate } from "react-router-dom";
import Google from "../assets/google.webp";
import { useContext, useEffect, useState } from "react";

import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { toast } from "react-toastify";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { AuthProvider } from "../Provider/Provider";
// import { Helmet } from "react-helmet-async";

const SignUp = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const { dark } = useContext(AuthProvider);
  const [validation, setValidation] = useState("");
  const [privacy, setPrivacy] = useState(false);
  const pathname = useLocation();
  const locate = pathname.state === null ? "/" : pathname.state;
  const navigate = useNavigate();

//   const handleGoogle = () => {
//     GoogleSignIN()
//       .then((result) => {
//         setUser(result.user);
//         navigate(locate);
//         toast("Welcome Aboard!");
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

  const handleEmailPass = (e) => {
    e.preventDefault();
    setValidation("");
    const email = e.target.email.value;
    const photo = e.target.photo.value;
    const name = e.target.name.value;
    const pass = e.target.pass.value;

    if (!/[A-Z]/.test(pass)) {
      setValidation("Password must contain at least one uppercase letter.");
    } else if (!/[a-z]/.test(pass)) {
      setValidation("Password must contain at least one lowercase letter.");
    } else if (pass.length < 6) {
      setValidation("Password must be at least 6 characters long.");
    }
    if (validation) {
      return;
    }
    setValidation("");
    // EmailPass(email, pass)
    //   .then((result) => {
    //     setUser(result.user);
    //     update({ photoURL: photo, displayName: name })
    //       .then(() => {})
    //       .catch((error) => console.log(error));
    //     navigate(locate);
    //     toast("Welcome Aboard!");
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //     if (error.code === "auth/email-already-in-use") {
    //       setValidation(
    //         "This email is already registered. Please use a different email."
    //       );
    //     } else if (error.code === "auth/invalid-email") {
    //       setValidation("Invalid email format. Please enter a valid email.");
    //     } else {
    //       setValidation("Something went wrong. Please try again.");
    //     }
    //   });
  };

//   useEffect(() => {
//     document.title = "NextStep - Registration";
//   }, []);

  return (
    <div className={`max-w-screen-lg mx-auto lg:h-screen h-screen pb-10 pt-32 lg:pt-0 md:pt-16 ${dark ? "text-white" : "text-black"}`}>
    
      
      <div className="w-full lg:pt-32 p-5">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 12 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col lg:gap-10 items-center justify-center">
            {/* Lottie Animation */}
            {/* <div className="lg:w-full w-full flex items-center mb-32 md:mb-40 lg:mb-0 relative">
              <DotLottieReact
                src="https://lottie.host/5122c510-b8ac-4837-926d-57205cde4774/p9pembxzaF.lottie"
                loop
                autoplay
                className="border-2 border-transparent lg:pb-96 lg:w-full absolute lg:ml-0"
              />
            </div> */}

            {/* Registration Form */}
            <div
              className="lg:w-1/2 w-full lg:my-0 md:my-10 mb-5 lg:ml-0 lg:justify-start"
              data-aos="zoom-in"
            >
              <div className="w-[330px] mx-auto">
                <h2 className="text-2xl font-semibold text-center">
                  Create an account
                </h2>
                <p className="text-gray-500 text-center">
                  Please enter your details
                </p>
                <form className="mt-4" onSubmit={handleEmailPass}>
                  <div>
                    <label className="block text-sm font-medium pl-2 opacity-80">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      className={`w-full border-2 ${dark ? "border-gray-400" : "border-gray-400"} rounded-full p-2 focus:outline-none bg-transparent focus:ring-2 focus:ring-blue-500`}
                      required
                    />
                  </div>
                  <div className="mt-4">
                    <label className="block text-sm font-medium pl-2 opacity-80">Photo URL</label>
                    <input
                      type="url"
                      name="photo"
                      className={`w-full border-2 ${dark ? "border-gray-400" : "border-gray-400"} rounded-full p-2 focus:outline-none bg-transparent focus:ring-2 focus:ring-blue-500`}
                      title="Must be valid URL"
                      required
                    />
                  </div>
                  <div className="mt-4">
                    <label className="block text-sm font-medium pl-2 opacity-80">Email</label>
                    <input
                      type="email"
                      name="email"
                      className={`w-full border-2 ${dark ? "border-gray-400" : "border-gray-400"} rounded-full p-2 focus:outline-none bg-transparent focus:ring-2 focus:ring-blue-500`}
                      required
                    />
                  </div>
                  <div className="mt-4">
                    <label className="block text-sm font-medium pl-2 opacity-80">Password</label>
                    <div className="flex relative">
                      <input
                        type={privacy ? "text" : "password"}
                        name="pass"
                        className={`w-full border-2 ${dark ? "border-gray-400" : "border-gray-400"} rounded-full p-2 focus:outline-none bg-transparent focus:ring-2 focus:ring-blue-500`}
                        required
                      />
                      <button 
                        type="button"
                        className="absolute right-3.5 top-3"
                        onClick={() => setPrivacy(!privacy)}
                      >
                        {privacy ? <FiEye /> : <FiEyeOff />}
                      </button>
                    </div>
                    <p className="text-sm text-red-600 px-2 py-1 opacity-80">
                      {validation}
                    </p>
                  </div>
                  <button
                    type="submit"
                    className={`btn w-full mt-4 rounded-full transition-all duration-200 hover:drop-shadow-2xl ${
                      dark
                        ? "bg-[#FFEB00] text-black hover:bg-black hover:text-[#FFEB00] border-2 border-[#FFEB00]"
                        : "bg-black text-[#FFEB00] border-0 hover:bg-[#FFEB00] hover:text-black"
                    }`}
                  >
                    Sign Up
                  </button>
                </form>
                <button
                //   onClick={handleGoogle}
                  className="mt-2 w-full bg-gray-100 text-black rounded-full py-2 flex items-center justify-center hover:bg-gray-200 transition"
                >
                  <img src={Google} className="w-7 h-7" alt="" />
                </button>
                <p className="text-center text-sm mt-4">
                  Already have an account?{" "}
                  <Link to="/login" className="text-blue-500">
                    Log In
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SignUp;