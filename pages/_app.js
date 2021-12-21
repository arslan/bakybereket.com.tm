import "../styles/globals.css";
import SimpleReactLightbox from "simple-react-lightbox";

export default function MyApp({ Component, pageProps }) {
  return (
    <SimpleReactLightbox>
      <Component {...pageProps} />
    </SimpleReactLightbox>
  );
}
