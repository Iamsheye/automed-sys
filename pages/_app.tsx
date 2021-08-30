import { createContext, useState, useContext } from "react";
import type { AppProps } from "next/app";
import "../styles/globals.css";

interface CountContext {
  count: number;
  setCount: (count: number) => void;
}

export const countContext = createContext<number | CountContext>(0);

function MyApp({ Component, pageProps }: AppProps) {
  const [count, setCount] = useState<number>(0);

  return (
    <countContext.Provider value={{ count, setCount }}>
      <Component {...pageProps} />
    </countContext.Provider>
  );
}
export default MyApp;
