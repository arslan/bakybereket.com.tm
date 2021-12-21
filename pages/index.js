import ContactsSection from "../components/sections/contacts";
import Footer from "../components/footer";
import Head from "next/head";
import Header from "../components/sections/header";
import MainSection from "../components/MainSection";
import gallerySection from "../components/gallery";

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
        
        <MainSection />
<gallerySection />

        <ContactsSection />
        <Footer />
      </body>
    </>
  );
}

export default HomePage;
