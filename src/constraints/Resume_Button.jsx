import React from "react";

const Resume_Button = ({ children, className, ...rest }) => {
  return (
    <button
      {...rest}
      className={`group relative flex items-center gap-2 px-4 py-2 font-medium transition-colors duration-[400ms] bg-clip-text text-transparent bg-gradient-to-r from-teal-500 via-blue-500 to-purple-600 rounded-md shadow-lg hover:from-teal-600 hover:via-blue-400 hover:to-purple-700 focus:ring-5 focus:ring-teal-300 active:scale-95 transform ${className}`}
    >
      {children}

      {/* TOP */}
      <span className="absolute left-0 top-0 h-[2px] w-0 bg-indigo-300 transition-all duration-100 group-hover:w-full" />

      {/* RIGHT */}
      <span className="absolute right-0 top-0 h-0 w-[2px] bg-indigo-300 transition-all delay-100 duration-100 group-hover:h-full" />

      {/* BOTTOM */}
      <span className="absolute bottom-0 right-0 h-[2px] w-0 bg-indigo-300 transition-all delay-200 duration-100 group-hover:w-full" />

      {/* LEFT */}
      <span className="absolute bottom-0 left-0 h-0 w-[2px] bg-indigo-300 transition-all delay-300 duration-100 group-hover:h-full" />
    </button>
  );
};

export default Resume_Button;
