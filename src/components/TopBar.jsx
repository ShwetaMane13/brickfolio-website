import { Buttons } from "./common/Buttons";
import { InputComponent } from "./InputComponent";

import logo from "../assets/logo.svg";

import { buttons } from "../constants";

export const TopBar = () => {
  return (
    <div className="top-bar">
      <div>
        <img src={logo} alt="" />
      </div>
      <div>
        <InputComponent />
      </div>
      <div className="top-bar__buttons">
        {buttons.map((button) => (
          <Buttons key={button.text} icon={button.icon} text={button.text} />
        ))}
      </div>
    </div>
  );
};
