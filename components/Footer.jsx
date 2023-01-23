import React from "react";

const Footer = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600">
      <div className=" space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">ABOUT</h5>
        <p>How MySwissHouse works</p>
        <p>Investors</p>
        <p>MSH Plus</p>
        <p>MSH Luxe</p>
      </div>

      <div className=" space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">COMMUNITY</h5>
        <p>Work with us</p>
        <p>Newsroom</p>
        <p>Become a partner</p>
        <p>COVID19 restriction</p>
        <p>Against Discrimination</p>
      </div>

      <div className=" space-y-4 text-xs text-gray-800">
        {" "}
        <h5 className="font-bold">SUPPORT</h5>
        <p>Call-center</p>
        <p>Email</p>
        <p>Headquarters in Zurich</p>
      </div>

      <div className=" space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">SELL</h5>
        <p>Sell your house</p>
        <p>Meet the team</p>
        <p>Our philosophy</p>
        <p>Our commissions</p>
      </div>
    </div>
  );
};

export default Footer;
