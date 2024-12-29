import type { Metadata } from "next";
import { ReactElement, ReactNode } from "react";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";

export const metadata: Metadata = {
  title: "Patterns",
  description: "Potentially useful patterns in user interfaces",
};

export default function RootLayout(props: {
  children: ReactNode;
}): ReactElement {
  const { children } = props;

  return (
    <html lang="en">
      <body>
        <Theme>
          {children}
        </Theme>
      </body>
    </html>
  );
}
