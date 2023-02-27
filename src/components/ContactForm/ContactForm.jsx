import React from "react";
import TextField from "@mui/material/TextField";

export default function ContactForm() {
  return (
    <div className="relative">
      <div className="ml-auto mr-auto flex  flex-col items-center">
        <h1 className="mb-3 mt-3 text-lg font-bold text-orange-500">Text us</h1>

        <form
          className="flex w-full max-w-[700px] flex-col items-center "
          method="POST"
          action="https://formsubmit.co/alex_bakaj@yahoo.com"
          encType="multipart/form-data"
        >
          <div className="w-full ">
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
            <TextField
              className="bg-blur-ab"
              size="small"
              id="outlined-basic"
              label="Name"
              name="name"
              variant="outlined"
              fullWidth
            />
            <TextField
              className="bg-blur-ab "
              size="small"
              id="outlined-basic"
              label="Mail"
              name="email"
              variant="outlined"
              fullWidth
            />
          </div>
          <div className="mt-5 w-full">
            <button variant="contained" type="submit" className="btn-secondary">
              SEND
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
