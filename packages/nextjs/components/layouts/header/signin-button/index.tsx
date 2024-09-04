"use client";

import { useState } from "react";
import LoginModel from "../login-model";
import Button from "@/components/ui/button";

const SignInButton = () => {
  const [showModel, setShowModel] = useState(false);
  return (
    <>
      <Button onPress={() => setShowModel(showModel => !showModel)}>Login</Button>
      <LoginModel isVisible={showModel} onClose={() => setShowModel(showModel => !showModel)} />
    </>
  );
};

export default SignInButton;
