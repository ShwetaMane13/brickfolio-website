import { Buttons } from "./common/Buttons";

import { buttons } from "../constants";
import logo from "../assets/logo.svg";
import { InputComponent } from "./InputComponent";

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
          <Buttons icon={button.icon} text={button.text} />
        ))}
      </div>
    </div>
  );
};
