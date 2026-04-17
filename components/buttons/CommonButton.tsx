import { ButtonProps } from "@/types/buttons/button";

const CommonButton = ({buttonStyle,content,clickFunction,type = "button"}: ButtonProps) => {
  return (
    <button
      className={buttonStyle}
      onClick={clickFunction}
      type={type}
    >
      {content}
    </button>
  );
};

export default CommonButton;