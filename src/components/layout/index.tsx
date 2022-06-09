import { Outlet } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { useTheme } from "context/theme";
import { Header } from "./Hearder";
import { Footer } from "./Footer";

const Layout = () => {
  const { theme } = useTheme();
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </ThemeProvider>
  );
};

export default Layout;
