import { FC, ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

const AuthLayuot: FC<IProps> = ({ children }) => {
  return (
    <div className="h-full flex items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))]  from-sky-400 to-blue-800">
      {children}
    </div>
  );
};

export default AuthLayuot;
