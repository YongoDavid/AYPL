import { GlobalStyle } from "./globalStyles";
import { lazy, Suspense } from "react";
import { ChakraProvider } from '@chakra-ui/react';

const Home = lazy(() => import("./Pages/Home"));
const Header = lazy(() => import("./components/Header/index"));
const Footer = lazy(() => import("./components/Footer/index"));
const ScrollToTop = lazy(() => import("./components/ScrollToTop/index"));

function App() {
  return (
    <>
      <ChakraProvider>
        <Suspense fallback={null}>
          <GlobalStyle />
          <ScrollToTop />
          <Header />
          <Home />
          <Footer />
        </Suspense>
      </ChakraProvider>
    </>
  );
}

export default App;