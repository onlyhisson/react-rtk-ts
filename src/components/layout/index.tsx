import { Link, Outlet } from "react-router-dom";
import routes from "routes";
import { ThemeProvider } from "styled-components";
import { useTheme } from "context/theme";

const Layout = () => {
  const { theme } = useTheme();
  console.log(theme);
  return (
    <ThemeProvider theme={theme}>
      <header>
        <Link to={routes.home}>
          <span>Home</span>
        </Link>
        <Link to={routes.posts}>
          <span>Posts</span>
        </Link>
        <Link to={routes.addPost}>
          <span>Add Post</span>
        </Link>
      </header>
      <main>
        <Outlet />
      </main>
    </ThemeProvider>
  );
};

export default Layout;
