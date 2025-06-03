import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
const About = () => {
  return (
    <main className="space-y-20">

      {/* Header Section */}
      <section className="bg-blue-600 text-white py-24 text-center">
        <h1 className="text-5xl font-extrabold mb-4">Nagu saabsan</h1>
        <p className="text-xl max-w-3xl mx-auto">
          Waxaan nahay SahanTech Store – Meesha ugu fiican ee aad ka heli karto
          website-yo diyaarsan oo tayo sare leh.
        </p>
      </section>

      {/* Our Story */}
      <section className="max-w-6xl mx-auto px-4 md:px-0 space-y-10">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold text-blue-700 mb-4">Sheekadeena</h2>
            <p className="text-gray-700 text-lg">
              HassTech Store waxaa la aasaasay si ay dadka u siiso xal degdeg ah oo tayo leh 
              marka ay u baahdaan website shaqeynaya sida: School Management Systems, Portfolio, Ecommerce iyo kuwo kale.
              Waxaan leenahay aragti ah in qof kasta uu heli karo web design wanaagsan oo aan qaali ahayn.
            </p>
          </div>
          <img
            src="https://source.unsplash.com/600x400/?startup,website"
            alt="Our story"
            className="rounded-xl shadow-lg"
          />
        </div>
      </section>

      {/* What We Offer */}
      <section className="bg-gray-100 py-20 px-4">
        <div className="max-w-6xl mx-auto text-center space-y-10">
          <h2 className="text-3xl font-bold text-blue-700">Maxaan Bixinaa?</h2>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h4 className="text-xl font-semibold mb-2">School Websites</h4>
              <p className="text-gray-700">Nidaamyo iskuul oo diyaarsan: arday, imtixaan, maamul iyo warbixino.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h4 className="text-xl font-semibold mb-2">Portfolio Templates</h4>
              <p className="text-gray-700">Naqshado casri ah oo loogu talagalay xirfadlayaal ama freelance-yaal.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h4 className="text-xl font-semibold mb-2">E-commerce Websites</h4>
              <p className="text-gray-700">App online ah oo aad ku iibin karto alaabtaada sida dukaan dhameystiran.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-6xl mx-auto px-4 text-center py-20 space-y-10">
        <h2 className="text-3xl font-bold text-blue-700">Maxaad Noo Dooranaysaa?</h2>
        <div className="grid md:grid-cols-4 gap-6">
          <div className="bg-blue-50 p-6 rounded-xl shadow-sm">
            <h4 className="text-lg font-semibold">Tayo Sare</h4>
            <p className="text-sm text-gray-600">Mashruuc kasta wuxuu leeyahay naqshad fiican iyo shaqeyn buuxda.</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-xl shadow-sm">
            <h4 className="text-lg font-semibold">Qiime Macquul ah</h4>
            <p className="text-sm text-gray-600">Waxaan ka jabanahay tartamayaasha—laakiin tayada sareeyso.</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-xl shadow-sm">
            <h4 className="text-lg font-semibold">Support 24/7</h4>
            <p className="text-sm text-gray-600">Waa lagula jirayaa wixii caawin ah oo aad u baahan tahay.</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-xl shadow-sm">
            <h4 className="text-lg font-semibold">Degdeg & Fudud</h4>
            <p className="text-sm text-gray-600">Soo iibso, nuqulso, bilow isticmaal – wax badan lagama maarmaan ah!</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-blue-700 mb-10">Su'aalaha Badan La Is Weydiiyo</h2>
          <div className="space-y-8">
            <div>
              <h4 className="text-lg font-semibold text-blue-600">1. Sideen ku heli karaa mashruuca aan rabo?</h4>
              <p className="text-gray-700">Kaliya gal bogga "Projects", dooro mashruuca, kadibna la xiriir si aad u hesho.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-blue-600">2. Ma la igu caawin karaa rakibista?</h4>
              <p className="text-gray-700">Haa! Waxaan bixinaa caawimaad bilaash ah si mashruucaaga si sax ah u shaqeeyo.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-blue-600">3. Ma heli karaa mashruuc gaar ah?</h4>
              <p className="text-gray-700">Haa, waxaan sidoo kale sameynaa mashruucyo gaar ah oo loo sameeyo si khaas ah.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-blue-700 text-white py-20 text-center">
        <h3 className="text-3xl font-bold mb-4">Ma diyaar baad u tahay inaad bilowdo?</h3>
        <p className="mb-6">Dooro mashruuc ama nala soo xiriir si aan kuu caawino!</p>
        <Link
          to="/projects"
          className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-blue-100"
        >
          Eeg Mashaariicda
        </Link>
      </section>
<Footer/>

    </main>
  );
};

export default About;
