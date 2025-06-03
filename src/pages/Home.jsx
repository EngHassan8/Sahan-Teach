import React from "react";
import { Link } from "react-router-dom";
import hasa from "../assets/hasa.jpg";
import Footer from "../components/Footer";

const projects = [
  {
    name: "Super Market website",
    price: "$10",
    desc: "Website diyaarsan oo school ah – diyaargarow buuxa.",
  },
  {
    name: "Website Coffe ",
    price: "$10",
    desc: "Website shopping ah oo casri ah – waad iibin kartaa alaabtaada.",
  },
  {
    name: "Bank Website ",
    price: "$10",
    desc: "Naqshad qurux badan oo loogu talagalay xirfadlayaasha.",
  },
];

const projectList = [
  {
    title: "Coffe Website",
    price: "$8",
    image: "https://www.americanolounge.com/wp-content/uploads/2024/08/What-is-American-style-coffee_270222935.webp",
    description: "Mobile & Web e-learning platform with quizzes and video lessons.",
    link: "https://enghassan8.github.io/Coffe/"
  }, 
   {
    title: "Super Market website",
    price: "$10",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxjor8zATRMQuZEuWUrYxZMb_AJCt3NcO9Mg&s",
    description: "Admin panel to manage courses, students, and progress tracking.",
    link: "https://enghassan8.github.io/SuperMarket/"
  },
   
   {
    title: "Gym Website",
    price: "$5",
    image: "https://cdn-magazine.nutrabay.com/wp-content/uploads/2023/02/strong-bodybuilder-doing-heavy-weight-exercise-back-machine-1-1067x800.jpg",
    description: "Responsive quiz app with results, timer, and categories.",
    link: "https://enghassan8.github.io/gym/"
  },
 
  
 

];


const Home = () => {
  return (
    <main className="space-y-24">

      {/* Hero Section */}
  <section className="min-h-screen flex flex-col justify-center bg-gradient-to-br from-blue-50 to-purple-100 py-20 px-4 md:px-20">
  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-start">
    <div>
      <h2 className="text-5xl font-extrabold text-blue-700 leading-tight mb-6">
        Waxaan kuu haynaa Website Diyaarsan oo La Iibinayo
      </h2>
      <p className="text-lg text-gray-700 mb-6">
        Haddii aad rabto in aad degdeg u yeelato website tayo leh sida
        School App, Ecommerce, ama Portfolio — waxaad joogtaa meel sax ah.
      </p>
      <div className="flex gap-4">
        <Link
          to="/project"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700"
        >
          All Projects
        </Link>
        <Link
          to="/contact"
          className="bg-white text-blue-600 border border-blue-600 px-6 py-3 rounded-lg text-lg hover:bg-blue-50"
        >
          La Xiriir 
        </Link>
      </div>
    </div>
  <div className="relative overflow-hidden rounded-xl shadow-xl">
  <img
    src={hasa}
    alt="Ready-made Websites"
    className="w-full max-h-[400px] object-cover object-top rounded-xl"
  />
</div>
  </div>
</section>


      {/* About Section */}
      <section className="py-20 px-6 bg-white text-center">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-4xl font-bold text-blue-600 mb-4">Maxaan Bixinaynaa?</h3>
          <p className="text-gray-700 text-lg">
            Waxaan soo bandhignaa website-yo diyaarsan oo casri ah. Waxaad si fudud u iibsan kartaa mashruuc aad u baahan tahay — ma jiro wakhti lumin.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-center text-blue-700 mb-12">Faa'iidooyinka Adeeggayaga</h3>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h4 className="text-xl font-semibold mb-2">Website Diyaarsan</h4>
              <p className="text-gray-600">Mashruucyo 100% diyaarsan, ku rakib oo bilow isticmaal.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h4 className="text-xl font-semibold mb-2">Naqshad Casri ah</h4>
              <p className="text-gray-600">Midab, typography, iyo design loo qaabeeyay in uu soo jiito.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h4 className="text-xl font-semibold mb-2">Qiime Macquul ah</h4>
              <p className="text-gray-600">Qiimo jaban oo aad ku heli karto mashruuc tayo sare leh.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-6 bg-white">
        <h2 className="text-4xl font-bold text-center text-purple-700 mb-12">
          Mashaariic La Iibinayo
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-purple-50 hover:bg-white transition rounded-2xl shadow-lg p-6 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-2xl font-semibold text-purple-800 mb-2">
                  {project.name}
                </h3>
                <p className="text-gray-700 mb-4">{project.desc}</p>
              </div>
              <div className="mt-auto">
                <div className="mb-4">
                  <span className="inline-block bg-purple-200 text-purple-800 px-4 py-1 rounded-full text-sm font-medium">
                    Qiime: {project.price}
                  </span>
                </div>
                <div className="flex gap-2">
                  <Link
                    to="/contact"
                    className="flex-1 bg-purple-700 text-white py-2 rounded-md text-center hover:bg-purple-800 transition"
                  >
                    Iibso
                  </Link>
                  <Link
                    to="/project"
                    className="flex-1 border border-purple-700 text-purple-700 py-2 rounded-md text-center hover:bg-purple-100 transition"
                  >
                    More Project
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <div className="p-8 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold text-center text-blue-700 mb-8">Mashaariicda La Iibinayo</h2>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projectList.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-blue-600 mb-2">{project.title}</h3>
              <p className="text-gray-700 mb-2">{project.description}</p>
              <div className="text-lg font-bold text-green-600 mb-2">{project.price}</div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
              >
                Iibso Mashruuc
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-4xl font-bold mb-4">Ma rabtaa website diyaar ah?</h3>
          <p className="mb-6 text-lg">La xiriir hadda, waana kuu diyaarineynaa.</p>
          <Link
            to="/contact"
            className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-100"
          >
            La Xiriir Hadda
          </Link>
        </div>
      </section>

    <Footer/>
    </main>
  );
};

export default Home;
