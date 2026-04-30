import { ButtonProps } from "@/types/buttons/button";

const CommonButton = ({buttonStyle,content,clickFunction,type = "button",disabled=false}: ButtonProps) => {
  return (
    <button
      className={buttonStyle}
      onClick={clickFunction}
      type={type}
      disabled={disabled}
    >
      {content}
    </button>
  );
};

export default CommonButton;