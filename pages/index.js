import About from '../components/sections/about'
import ContactsSection from "../components/sections/contacts";
import Footer from "../components/footer";
import GallerySection from "../components/gallery";
import Head from "next/head";
import Header from "../components/sections/header";
import Hero from "../components/sections/hero";
import Projects from "../components/sections/projects";

//import Footer from "../components/footer";
// import ContactsSection from "../components/sections/contacts";

function HomePage() {
  return (
    <>
      <Head>
        <title>Baky Bereket</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600;900&display=optional"
          rel="stylesheet"
        />
      </Head>
      <body className="font-sans">
        <Header />
        <div className="max-w-5xl mx-auto">
          <Hero />
<<<<<<< HEAD
          <Projects />
          <About />
          <GallerySection />
=======
        </div>
        <GallerySection />
        <div className="max-w-5xl mx-auto">
>>>>>>> e1f5497 (feat(lightbox_grid.js,-gallery.js,-_app.js,-index.js): added lightbox feature, fixed the gallery grid)
          <ContactsSection />
        </div>
        <Footer />
      </body>
    </>
  )
}

export default HomePage
