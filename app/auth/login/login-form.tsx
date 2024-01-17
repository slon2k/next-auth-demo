import { CardWrapper } from "@/components/auth/card-wrapper";
import React from "react";

export const LoginForm = () => {
  return (
    <CardWrapper
      headerLabel="Welcome back!"
      backButtonHref="/auth/register"
      backButtonLabel="Don't have an account?"
      showSocial
    >
      <div>LoginForm</div>
    </CardWrapper>
  );
};
