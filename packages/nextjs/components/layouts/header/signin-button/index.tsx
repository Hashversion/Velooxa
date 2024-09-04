"use client";

import { useState } from "react";
import LoginModel from "../login-model";
import Button from "@/components/ui/button";

const SignInButton = ({ label }: { label: string }) => {
  const [showModel, setShowModel] = useState(false);
  return (
    <>
      <Button onPress={() => setShowModel(showModel => !showModel)}>{label}</Button>
      <LoginModel isVisible={showModel} onClose={() => setShowModel(showModel => !showModel)} />
    </>
  );
};

export default SignInButton;
