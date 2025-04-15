"use client";
import TuxTheme from "@/styles/theme";
import { ThemeProvider } from "@emotion/react";
import React, { ReactNode } from "react";

type Props = { children: ReactNode };

function MainLayout({ children }: Props) {
  return <ThemeProvider theme={TuxTheme}>{children}</ThemeProvider>;
}

export default MainLayout;
