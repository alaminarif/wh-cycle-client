import React from "react";

const Footer = () => {
  const today = new Date();
  const date = today.getFullYear();
  return (
    <div className="text-center mt-5">
      <p> copyright &copy; {date} All rights reserved.</p>
    </div>
  );
};

export default Footer;
