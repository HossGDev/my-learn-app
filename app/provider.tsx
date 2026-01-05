import { ThemeProvider as NextThemesProvider } from "next-themes";

function AppThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}

export default AppThemeProvider;
