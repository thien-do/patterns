import { ReactElement, ReactNode } from "react";
import { AppTheme } from "@/app/theme";

export function AppLayout(props: {
  children: ReactNode;
}): ReactElement {
  const { children } = props;

  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <AppTheme>
          {children}
        </AppTheme>
      </body>
    </html>
  );
}
