import About from '../components/sections/about'
import ContactsSection from '../components/sections/contacts'
import Footer from '../components/footer'
import GallerySection from '../components/Gallery'
import Head from 'next/head'
import Header from '../components/sections/header'
import Hero from '../components/sections/hero'
import Projects from '../components/sections/projects'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import React from 'react'
import SimpleReactLightbox from 'simple-react-lightbox'

// import Footer from "../components/footer";
// import ContactsSection from "../components/sections/contacts";

function HomePage() {
  return (
    <>
      <Head>
        <title>Baky Bereket</title>
        <meta name="description" content="Baky Bereket" key="desc" />
        <meta name="robots" content="noindex,nofollow" />
        <link
          rel="canonical"
          href="https://bakybereket.com.tm"
          key="canonical"
        />
        <link rel="icon" href="/favicon.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600;900&display=optional"
          rel="stylesheet"
        />
      </Head>
      <main className="font-sans">
        <Header />
        <div className="mx-5 md:mx-0">
          <div className="max-w-5xl mx-auto">
            <Hero />
            <Projects />
            <About />
          </div>
          <div className="md:max-w-5xl md:mx-auto">
            <SimpleReactLightbox>
              <GallerySection />
            </SimpleReactLightbox>
          </div>

          <div className="max-w-5xl mx-auto">
            <ContactsSection />
          </div>
        </div>
        <Footer />
      </main>
    </>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
})

export default HomePage
