import type { AppProps } from "next/app";
import "../styles/globals.css";
import CursorDot from "./components/cursor-dot";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <CursorDot />
      <Component {...pageProps} />
    </>
  );
}
