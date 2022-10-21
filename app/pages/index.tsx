import { passwordStrength } from "check-password-strength";
import { generatePashword } from "@pashword/pashword-lib";
import React, { useEffect, useState } from "react";
import { BiCopy, BiMouse } from "react-icons/bi";
import { toast, ToastContainer } from "react-toastify";
import ReactTooltip from "react-tooltip";
import Dropdown from "../components/Dropdown";

import {
  AiFillEye,
  AiFillEyeInvisible,
  AiFillQuestionCircle,
} from "react-icons/ai";
import Link from "next/link";

interface IProps {
  passwordLength: number;
  setPasswordLength: (arg: number) => void;
}

const Home = ({ passwordLength, setPasswordLength }: IProps) => {
  const toastId = React.useRef<any>(null);

  const [opacity, setOpacity] = useState(1);
  const [website, setWebsite] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [pashword, setPashword] = useState("");
  const [notWorking, setNotWorking] = useState(false);
  const [passStrength, setPassStrength] = useState(0);
  const [showSecretKey, setShowSecretKey] = useState(false);
  const [generating, setGenerating] = useState(false);
  const [notWorkingForm, setNotWorkingForm] = useState({
    noSymbols: false,
    noNumbers: false,
    min: -1,
    max: -1,
    additionalMessage: "",
  });

  useEffect(() => {
    const handleScroll = () => {
      setOpacity(1 - (window.scrollY * 1.7) / window.innerHeight);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setPassStrength(passwordStrength(password).id);
    console.log(passwordStrength(password).id);
  }, [password]);

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    let toHash = {
      website,
      username,
      password,
    };

    if (website.length < 1) {
      if (!toast.isActive(toastId.current)) {
        toastId.current = toast.error("Please enter a website");
      }
      return;
    }

    if (!website.includes(".")) {
      if (!toast.isActive(toastId.current)) {
        toastId.current = toast.error(
          "Please enter a proper website address. For example: web.telegram.org OR protonmail.com",
          { autoClose: 3000 }
        );
      }

      return;
    }

    if (username.length < 1) {
      if (!toast.isActive(toastId.current)) {
        toastId.current = toast.error("Please enter a username");
      }
      return;
    }
    if (password.length < 1) {
      if (!toast.isActive(toastId.current)) {
        toastId.current = toast.error("Please enter a password");
      }
      return;
    }

    setPashword("");
    setGenerating(true);

    let pashedPassword = await generatePashword(
      JSON.stringify(toHash),
      passwordLength,
      website,
      username
    );

    setGenerating(false);

    setPashword(pashedPassword);

    if (!toast.isActive(toastId.current)) {
      toastId.current = toast.success(
        "Pashword generated! Please click it to copy it!"
      );
    }
  };

  const copyPashword = async () => {
    navigator.clipboard
      .writeText(pashword)
      .then(() => {
        if (!toast.isActive(toastId.current)) {
          toastId.current = toast.success("Pashword copied to clipboard!");
        }
      })
      .catch((e) => {
        console.error(e);
        if (!toast.isActive(toastId.current)) {
          toastId.current = toast.error(
            "Could not copy Pashword! Please copy it manually."
          );
        }
      });
  };

  return (
    <section className="background-image animate page-root animate relative min-w-[300px] pt-5">
      {/* TOP SECTION */}
      <main className="flex flex-col items-center justify-center">
        {/* LOGO */}
        <h1 className="background-animate z-10 text-2xl font-bold text-slate-50 xxs:text-6xl xs:text-7xl sm:text-8xl">
          Pashword
        </h1>
        {/* SUB-HEADING */}
        <h5 className="z-10 text-center text-xs font-medium text-slate-400 xxs:text-lg xs:self-end sm:text-xl">
          Passwords done right
        </h5>

        {/* FORM */}
        <form
          className="z-10 mt-5 flex w-4/5 flex-col items-center justify-center gap-y-1 text-center text-xs xxs:gap-y-5 xxs:text-base"
          onSubmit={submitHandler}
        >
          {/* WEBSITE */}
          <div className="flex w-full flex-col items-center justify-center">
            <label
              className="input-label"
              data-tip="Enter the website address here. For example: maglit.me OR brave.com OR google.com"
            >
              Website <AiFillQuestionCircle className="inline-block" />
            </label>
            <input
              type="text"
              name="website"
              className="input-text"
              placeholder="Example: reddit.com, forum.zorin.com"
              value={website}
              onChange={(e) => {
                setWebsite(
                  e.target.value.toLowerCase().replace(/[^a-z0-9\:\.\-]/, "")
                );
              }}
            />
          </div>
          {/* USERNAME */}
          <div className="flex w-full flex-col items-center justify-center">
            <label
              className="input-label"
              data-tip="Enter the username on that website you're trying to generate the pashword for."
            >
              Username <AiFillQuestionCircle className="inline-block" />
            </label>
            <input
              type="text"
              name="username"
              className="input-text"
              placeholder="Example: nayam_amarshe"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          {/* SECRET CODE */}
          <div className="flex w-full flex-col items-center justify-center">
            <label
              className="input-label"
              data-tip="Enter a strong secret key here. It should contain lower/uppercase letters, numbers and symbols. The color represents the strength, green is good, red is bad. Use the same secret key everytime you generate a pashword."
            >
              Secret Key <AiFillQuestionCircle className="inline-block" />{" "}
            </label>
            <div className="relative w-full">
              <input
                type={showSecretKey ? "text" : "password"}
                name="passphrase"
                className={`input-password 
                ${password.length === 0 && "bg-slate-400/20"} 
                ${
                  password.length > 0 &&
                  (passStrength === 0 || passStrength === 1) &&
                  "bg-red-400/50"
                }
                ${passStrength === 2 && "bg-yellow-400/50"}
                ${passStrength === 3 && "bg-green-400/50"}
                `}
                placeholder="Example: JimmyNeutron10$"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {showSecretKey ? (
                <AiFillEye
                  className="absolute top-1/2 right-2 -translate-y-1/2 cursor-pointer text-xl text-slate-200 xxs:right-4"
                  onClick={() => {
                    setShowSecretKey(false);
                  }}
                />
              ) : (
                <AiFillEyeInvisible
                  className="absolute top-1/2 right-2 -translate-y-1/2 cursor-pointer text-xl text-slate-300/60 xxs:right-4"
                  onClick={() => {
                    setShowSecretKey(true);
                  }}
                />
              )}
              <Link href="#key" passHref>
                <a className="absolute right-2 hidden text-slate-500 xxs:-bottom-6 xxs:block md:-bottom-7">
                  Read This
                </a>
              </Link>
            </div>
            {/* <AiFillEyeInvisible /> */}
          </div>
          {/* PASSWORD LENGTH */}
          <div className="relative flex w-full flex-col items-center justify-center">
            <label
              className="input-label"
              data-tip="If the website complains about password character length, you can change it here."
            >
              Pashword Length <AiFillQuestionCircle className="inline-block" />
            </label>
            <Dropdown
              passwordLength={passwordLength}
              setPasswordLength={setPasswordLength}
            />
          </div>
          {/* GET PASHWORD BUTTON */}
          <button
            type="submit"
            className={`submit-button ${
              generating ? "opacity-50 cursor-wait" : ""
            }`}
            disabled={generating}
          >
            {generating ? "Generating Pashword ⌛" : "Get Pashword 😎"}
          </button>
          {/* PASHWORD POPUP */}
          <div
            className={`${
              pashword.length < 1
                ? "scale-y-0 opacity-0"
                : "scale-y-100 opacity-100"
            } animate relative mt-4 w-full cursor-pointer rounded-xl bg-green-500 py-2 backdrop-blur-xl duration-500 hover:shadow-lg hover:shadow-green-400/30 hover:ring-1 hover:ring-green-200`}
            onClick={() => copyPashword()}
            id="pashword"
          >
            <p className="select-none font-medium text-green-300">Pashword</p>
            <p className="mx-auto w-3/5 select-all truncate font-medium text-green-100 md:w-full">
              {pashword}
            </p>
            <BiCopy className="absolute right-3 top-5 select-none text-sm text-green-300 xs:text-base sm:text-2xl" />
          </div>
        </form>
        {pashword.length > 0 && (
          <button
            type="submit"
            className="mt-1 text-xs font-medium text-slate-500 sm:text-base"
            onClick={() => setNotWorking(true)}
          >
            Not Working?
          </button>
        )}
        {/* <NotWorkingModal
          notWorking={notWorking}
          setNotWorking={setNotWorking}
          notWorkingForm={notWorkingForm}
          setNotWorkingForm={setNotWorkingForm}
          website={website}
          password={password}
          username={username}
          pashword={pashword}
          setPashword={setPashword}
        /> */}
      </main>

      <ReactTooltip className="w-72 bg-white" />
      <ToastContainer
        position="top-center"
        theme="colored"
        limit={1}
        autoClose={1000}
      />
    </section>
  );
};

export default Home;
