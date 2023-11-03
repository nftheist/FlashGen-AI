"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("b3c1f732-d0fd-409d-800f-73b92b00eb08");
  }, []);

  return null;
};
