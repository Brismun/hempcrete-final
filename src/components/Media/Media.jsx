import React from "react";
import Vice from "/src/Photos/vice-logo-white.png";
import Life from "/src/Photos/life.ro.png";

export default function Media() {
  return (
    <div className="flex flex-wrap items-center gg:gap-[130px]">
      <div>
        <a
          className="flex flex-col items-center gap-7"
          href="https://www.vice.com/ro/article/ywyg4b/am-vorbit-cu-romanul-care-face-case-din-canepa-ca-sa-aflu-daca-planta-asta-iti-tine-de-cald"
        >
          <img src={Vice}></img>
          <p className="font-paraF text-white">
            "Am vorbit cu românul care face case din cânepă"
          </p>
        </a>
      </div>
      <div>
        <p className="font-paraF text-[50px] text-white">Interviu</p>
      </div>
      <div>
        <a href="https://life.ro/alexandru-postu-singurului-roman-care-construieste-case-din-canepa-si-ii-invata-pe-altii-cum-sa-traiasca-in-armonie-cu-natura/">
          <img src={Life}></img>
        </a>
      </div>
    </div>
  );
}
