import { FC, ReactNode } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Header } from "@/components/auth/header";
import { Social } from "./social";

interface IProps {
  children: ReactNode;
  headerLabel: string;
  backButtonLabel: string;
  backButtonHref: string;
  showSocial?: boolean;
}

export const CardWrapper: FC<IProps> = ({
  children,
  headerLabel,
  backButtonHref,
  backButtonLabel,
  showSocial,
}) => {
  return (
    <Card className=" w-[400px] shadow-md">
      <CardHeader>
        <Header label={headerLabel}></Header>
      </CardHeader>
      <CardContent>{children}</CardContent>
      {showSocial && (
        <CardFooter>
          <Social></Social>
        </CardFooter>
      )}
    </Card>
  );
};
