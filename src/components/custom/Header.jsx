import React from "react";
import { Button } from "../ui/button";

const Header = () => {
  return (
    <div className="p-3 px-5 flex justify-between shadow-md">
      <img src="/logo.svg" height={60} width={60}></img>
      <Button>Get Started</Button>
    </div>
  );
};

export default Header;
