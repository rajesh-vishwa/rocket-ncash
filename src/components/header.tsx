import React from "react";
import { Button } from "./button.component";

const Header: React.FC = () => {
  return (
    <div>
      <header>
        <ul className="flex">
          <li className="font-bold">Menu-1</li>
          <li className="font-bold">Menu-2</li>
          <li className="font-bold">
            <Button buttonText="login" />
          </li>
        </ul>
      </header>
    </div>
  );
};

export default Header;
