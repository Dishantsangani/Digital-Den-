import React, { useEffect, useState } from "react";
import Navbar from "../Component/Navbar";
import axios from "axios";
import Footer from "../Component/Footer";
// import Model from "../Component/Model";
import { SiTruenas } from "react-icons/si";
import HashLoader from "react-spinners/HashLoader";
function Team() {
  const [team, setTeam] = useState([]);
  const [teams, setTeams] = useState(null);
  const [open, setOpen] = useState(false);

  const [loading, setLoading] = useState(false);
  // Loader
  useEffect(() => {
    setLoading(SiTruenas);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  // API Rendering
  useEffect(() => {
    axios
      .get("http://localhost:3000/users")
      .then((res) => {
        setTeam(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  // Handle Readmore Button
  const handleread = (teamMember) => {
    setTeams(teamMember);
    setOpen(true);
  };
  return (
    <div>
      <Navbar />
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-20 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Our <span className="text-blue-500">Team</span>
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              "Our team thrives on bringing the latest technology to your
              doorstep.."
            </p>
          </div>
          {/* Loading */}

          {loading ? (
            <HashLoader
              color={"#2563EB"}
              loading={loading}
              size={100}
              className="item-center justify-center"
            />
          ) : (
            <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
              {team.map((dev, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center p-8 transition-colors duration-300 transform cursor-pointer group hover:bg-blue-600 rounded-xl"
                >
                  <img
                    className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300"
                    src={dev.image}
                    alt={dev.alt}
                  />
                  <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white group-hover:text-white">
                    {dev.name}
                  </h1>
                  <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-white">
                    {dev.role}
                  </p>
                  <button
                    onClick={() => handleread(dev)}
                    className="px-4 py-2 mt-4 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-white hover:text-blue-600 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
                  >
                    Read More
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
      <Footer />
      {open && <Model isopen={open} setopen={setOpen} teammember={teams} />}
    </div>
  );
}

export default Team;
