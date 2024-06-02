import React, { useState } from "react";

const Header = () => {
  const [instargramLink, setInstargramLink] = useState<boolean>(false);

  const handleClick = () => {
    setInstargramLink(!instargramLink);
  };

  return (
    <div className="w-full h-10 fixed top-0 z-10 bg-slate-900 bg-opacity-50 flex justify-between items-center rounded-b-lg">
      <div
        className="m-2 cursor-pointer bg-transparent hover:underline"
        onClick={() => (window.location.href = "/")}
      >
        ImageApp
      </div>
      <div className="m-2 bg-transparent relative">
        출처 :{" "}
        <span
          className="text-red-200 cursor-pointer hover:underline bg-transparent"
          onClick={handleClick}
        >
          {" "}
          instargram
        </span>
        {instargramLink === true ? (
          <ol className="absolute m-auto w-28 border border-white">
            <li className="border-b border-white">
              <a
                href="https://www.instagram.com/saeromssee/"
                target="_blank"
                className=""
              >
                이새롬
              </a>
            </li>
            <li className="border-b border-white">
              <a href="https://www.instagram.com/shy9_29/" target="_blank">
                송하영
              </a>
            </li>
            <li className="border-b border-white">
              <a href="https://www.instagram.com/xjiwonparkx/" target="_blank">
                박지원
              </a>
            </li>
            <li className="border-b border-white">
              <a href="https://www.instagram.com/rosieline_/" target="_blank">
                노지선
              </a>
            </li>
            <li className="border-b border-white">
              <a href="https://www.instagram.com/im_theyeon/" target="_blank">
                이서연
              </a>
            </li>
            <li className="border-b border-white">
              <a href="https://www.instagram.com/chaengrang_/" target="_blank">
                이채영
              </a>
            </li>
            <li className="border-b border-white">
              <a href="https://www.instagram.com/blossomlng_0/" target="_blank">
                이나경
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/jiheonnibaek/" target="_blank">
                백지헌
              </a>
            </li>
          </ol>
        ) : null}
      </div>
    </div>
  );
};

export default Header;
