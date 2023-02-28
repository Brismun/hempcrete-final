import React from "react";
import TextField from "@mui/material/TextField";
import Logocontact from "/src/Photos/logo-contact.png";
import Phone from "/src/Photos/phone.png";
import Mail from "/src/Photos/mail.png";
import Facebook from "/src/Photos/facebook-svgrepo-com.png";
import Instagram from "/src/Photos/instagram-svgrepo-com.png";
import Location from "/src/Photos/location.png";

export default function ContactForm() {
  return (
    <div className="relative flex flex-wrap">
      <div className="mt-[65px] flex flex-col">
        <img src={Logocontact} alt="img" className="mb-[45px]" />
        <div className="flex items-center">
          <img src={Location} alt="location" />
          <p className="font-paraF text-white">
            Soseaua Pantelimon nr 88,
            <br /> bloc 409A, et 9, ap 39
          </p>
        </div>
        <div className="flex items-center">
          <img src={Phone} alt="location" />
          <p className="font-paraF text-white">0737031881</p>
        </div>
        <div className="mb-[60px] flex items-center">
          <img src={Mail} alt="location" />
          <p className="font-paraF text-white">Alex_bakaj@yahoo.com</p>
        </div>
        <div className="mb-[16px]  flex items-center gap-[5px]">
          <div className="w-[30px] border-t-2"></div>
          <h2 className="text-[18px] text-white ">FALLOW US ON</h2>
        </div>
        <div className="flex gap-5">
          <img src={Facebook} alt="facebook" />
          <img src={Instagram} alt="instagram" />
        </div>
      </div>
      <div className="ml-auto mr-auto flex  flex-col items-center">
        <form
          className="mt-[80px] mb-[45px] flex w-full max-w-[700px] flex-col items-center "
          method="POST"
          action="https://formsubmit.co/alex_bakaj@yahoo.com"
          encType="multipart/form-data"
        >
          <div className="w-full ">
            <div className="mb-[30px]">
              <div className="mb-[16px]  flex items-center gap-[5px]">
                <div className="w-[30px] border-t-2"></div>
                <h2 className="text-[18px] text-white ">Let`s connect</h2>
              </div>
              <h1 className="font-headF text-[25px] text-white">Hire us</h1>
            </div>
            <h1 className=" mb-[15px] font-paraF  text-[16px] text-white">
              Message
            </h1>
            <TextField
              className="bg-blur-ab  text-white"
              id="outlined-multiline-flexible"
              label=""
              multiline
              fullWidth
              rows={5}
              name="message"
            />
          </div>
          <div className="mt-3 flex w-full gap-3">
            <div>
              <p className=" mb-[15px] font-paraF  text-[16px] text-white ">
                Your Name
              </p>
              <TextField
                className="bg-blur-ab"
                size="small"
                id="outlined-basic"
                variant="outlined"
                fullWidth
              />
            </div>
            <div>
              <p className=" mb-[15px] font-paraF  text-[16px] text-white">
                Your Email
              </p>
              <TextField
                className="bg-blur-ab "
                size="small"
                id="outlined-basic"
                name="email"
                variant="outlined"
                fullWidth
              />
            </div>
          </div>
          <div className="mt-[20px] w-full">
            <button variant="contained" type="submit" className="btn-secondary">
              SEND
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
