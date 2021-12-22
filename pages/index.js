import About from "../components/sections/about";
import ContactsSection from "../components/sections/contacts";
import Footer from "../components/footer";
import GallerySection from "../components/Gallery";
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
          <About />
        </div>
        <div className="md:max-w-5xl md:mx-auto">
          <GallerySection />
        </div>

        <div className="max-w-5xl mx-auto">
          <ContactsSection />
        </div>
        <Footer />
      </body>
    </>
  );
}

export default HomePage;
