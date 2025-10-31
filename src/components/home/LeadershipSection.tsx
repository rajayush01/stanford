import React from "react";
import kkect from "../../assets/images/logo1.gif";
import director1 from "../../assets/images/director1.jpeg";
import director2 from "../../assets/images/director2.jpeg";

const branches = [
  // 🟤 Local Branches (Ujjain & Sanwer)
  {
    name: "MAIN BRANCH",
    location: "Gram Mindia, Indore Road, Ujjain.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=60",
  },
  {
    name: "MANGAL COLONY BRANCH",
    location: "Mangal Colony, Ujjain.",
    image:
      "https://images.unsplash.com/photo-1596495577886-d920f1fb7238?auto=format&fit=crop&w=1400&q=60",
  },
  {
    name: "INDIRA NAGAR BRANCH",
    location: "Indira Nagar, Ujjain.",
    image:
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1400&q=60",
  },
  {
    name: "SANWER BRANCH",
    location: "Near Moti Talkies Chauraha, Indore Road, Sanwer.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=60",
  },

  // 🟢 DPS Campuses
 
 
];

const LeadershipSection = () => {
  return (
    <div className="bg-[#f5f3f2] py-16 md:py-24">
      {/* ---------------------- BRANCHES SECTION ---------------------- */}
      <div className="max-w-7xl mx-auto px-6 mb-20">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#690B22] mb-14">
          Our Branches
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {branches.map((branch, index) => (
            <div
              key={index}
              className="flex flex-col items-start group transition-all duration-300"
            >
              {/* Image */}
              <div className="w-full h-64 rounded-xl overflow-hidden mb-5 shadow-md">
                <img
                  src={branch.image}
                  alt={branch.name}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
                />
              </div>

              {/* Title */}
              <h3 className="text-lg md:text-xl font-extrabold text-[#690B22] uppercase tracking-wide mb-2">
                {branch.name}
              </h3>

              {/* Accent Line */}
              <div className="w-16 h-[3px] bg-[#690B22] mb-3"></div>

              {/* Address */}
              <p className="text-[#4B2E2B] text-sm leading-relaxed">
                {branch.location}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ---------------------- LEADERSHIP SECTION ---------------------- */}
      <div className="flex flex-col items-center justify-center mb-16">
        <div className="flex flex-wrap items-center justify-center gap-4">
          <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl text-[#690B22] tracking-tight">
            Leadership
          </h1>
          <img
            src={kkect}
            alt="KKECT Logo"
            className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain rounded-full shadow-md"
          />
        </div>
        <p className="text-[#4B2E2B] text-lg md:text-xl mt-4 text-center max-w-2xl px-4">
          Visionary minds leading the path of educational excellence.
        </p>
      </div>

     {/* ---------------------- DIRECTORS SECTION ---------------------- */}
<div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-center items-center gap-10 px-6">
  {/* Director 1 */}
  <div className="relative w-full md:w-1/2 h-[540px] bg-white rounded-2xl shadow-2xl overflow-visible hover:scale-105 transition-transform duration-300">
    <img
      src={director1}
      alt="Mr. Katyan Mishra"
      className="w-full h-full object-cover rounded-2xl"
    />

    {/* Outward L-shape (smaller & softer color) */}
    <div className="absolute -top-4 -right-4 w-28 h-8 bg-[#D9A689] rounded-tr-md"></div>
    <div className="absolute -top-4 -right-4 w-8 h-28 bg-[#D9A689] rounded-tr-md"></div>

    {/* Name Overlay */}
    <div className="absolute bottom-0 left-0 right-0 bg-[#690B22]/95 text-white p-6 text-center rounded-b-2xl">
      <h2 className="text-2xl font-semibold">Mr. Katyan Mishra</h2>
      <p className="text-[#C1886F] text-lg font-medium">Director</p>
    </div>
  </div>

  {/* Director 2 */}
  <div className="relative w-full md:w-1/2 h-[540px] bg-white rounded-2xl shadow-2xl overflow-visible hover:scale-105 transition-transform duration-300">
    <img
      src={director2}
      alt="Ms. Jaya Mishra"
      className="w-full h-full object-cover rounded-2xl"
    />

    {/* Outward L-shape (smaller & softer color) */}
    <div className="absolute -top-4 -left-4 w-28 h-8 bg-[#D9A689] rounded-tl-md"></div>
    <div className="absolute -top-4 -left-4 w-8 h-28 bg-[#D9A689] rounded-tl-md"></div>

    {/* Name Overlay */}
    <div className="absolute bottom-0 left-0 right-0 bg-[#690B22]/95 text-white p-6 text-center rounded-b-2xl">
      <h2 className="text-2xl font-semibold">Ms. Jaya Mishra</h2>
      <p className="text-[#C1886F] text-lg font-medium">Director</p>
    </div>
  </div>
</div>

    </div>
  );
};

export default LeadershipSection;
