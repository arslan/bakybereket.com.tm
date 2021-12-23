import "../styles/globals.css";
import SimpleReactLightbox from "simple-react-lightbox";
import { appWithTranslation } from 'next-i18next'

function MyApp({ Component, pageProps }) {
    return <SimpleReactLightbox>
        <Component {...pageProps} />
    </SimpleReactLightbox>;
}

export default appWithTranslation(MyApp)
