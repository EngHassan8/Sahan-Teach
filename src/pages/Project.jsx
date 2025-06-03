import React, { useState } from "react";
import Footer from "../components/Footer";

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
    title: "Bank Website",
    price: "$5",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsUEUO1fH9kKByWeZ2ruXkcUe18kIJhDNmYg&s",
    description: "Admin panel to manage courses, students, and progress tracking.",
    link: "https://enghassan8.github.io/Bank/"
  },
  {
    title: "E-Learning",
    price: "$5",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyBMMmJxMmL0fDxKkovePrTBQRrBOEXfG95g&s",
    description: "Responsive quiz app with results, timer, and categories.",
    link: "https://enghassan8.github.io/e-laerning/"
  },
  {
    title: "School Website",
    price: "$5",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLR5irrQjJRFmaP-3O8BEU9W-xiWsf1hIqY9wQzqsFyUeNZR-izsIBbbMtuwoxLM6A4ck&usqp=CAU",
    description: "Personal portfolio with blog, projects, and contact form.",
    link: "https://enghassan8.github.io/school/"
  },
  {
    title: "Gym Website",
    price: "$5",
    image: "https://cdn-magazine.nutrabay.com/wp-content/uploads/2023/02/strong-bodybuilder-doing-heavy-weight-exercise-back-machine-1-1067x800.jpg",
    description: "Responsive quiz app with results, timer, and categories.",
    link: "https://enghassan8.github.io/gym/"
  },
  {
    title: "SahanTeach",
    price: "$5",
    image: "https://images.theconversation.com/files/193721/original/file-20171108-6766-udash5.jpg?ixlib=rb-4.1.0&q=45&auto=format&w=926&fit=clip",
    description: "Sell your video courses with Stripe integration and dashboard.",
    link: "https://enghassan8.github.io/sahanTeach/"
  },
  {
    title: "Hotel Website",
    price: "$5",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRssj3Dj3envK5KN8AtAcf0YeFBeyyHCDIJxw&s",
    description: "Sell your video courses with Stripe integration and dashboard.",
    link: "https://enghassan8.github.io/hotel/"
  },
  {
    title: "Car Company",
    price: "$5",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCVHKIpk0Y-m0l3ayFPAzpkaGsLo6qGmhn3g&s",
    description: "Sell your video courses with Stripe integration and dashboard.",
    link: "https://enghassan8.github.io/websitecar/"
  },
  {
    title: "Grand School",
    price: "$5",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCVHKIpk0Y-m0l3ayFPAzpkaGsLo6qGmhn3g&s",
    description: "Sell your video courses with Stripe integration and dashboard.",
    link: "https://enghassan8.github.io/wedSchoool/"
  },
  {
    title: "University Website",
    price: "$5",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO_Nx-whawEStoQFKaDLwyoOxqp7Ic-imiwQ&s",
    description: "Admin panel to manage courses, students, and progress tracking.",
    link: "https://enghassan8.github.io/university/"
  },
  {
    title: "School Wad",
    price: "$10",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo0rsjVDUXzPD40H0aYMYTKOrBZ_UljqGT6g&s",
    description: "Admin dashboard for schools with students, teachers, and exams.",
    link: "https://enghassan8.github.io/wedSchoool/"
  },
];

const Project = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter projects by title case-insensitive
  const filteredProjects = projectList.filter(project =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="p-8 bg-gray-100 min-h-screen">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-8">
          Mashaariicda La Iibinayo
        </h2>

        <div className="mb-6 flex justify-center">
          <input
            type="text"
            placeholder="Gali magaca mashruuca..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border border-gray-400 rounded px-4 py-2 w-full max-w-md focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>

        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
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
                  <h3 className="text-xl font-semibold text-blue-600 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-700 mb-2">{project.description}</p>
                  <div className="text-lg font-bold text-green-600 mb-2">
                    {project.price}
                  </div>
                 <a
  href={project.link}
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition mr-2"
>
  Open
</a>

<a
  href="https://wa.me/252619713756"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition cursor-pointer"
>
  Contact
</a>

                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500 col-span-full">
              Ma jirto mashruuc ku habboon.
            </p>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Project;
