import React, { useState, useEffect } from "react";
import { jobsData } from "../assets/data/jobsData";
import { useLocation } from "react-router-dom";

const Career = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const location = useLocation();

  // Smooth scroll on hash change
  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen pt-20 bg-gray-50 flex flex-col">
      {/* Header Section */}
      <section className="relative py-32 flex flex-col items-center justify-center bg-gradient-to-r from-teal-900 to-slate-800 text-white text-center px-6 overflow-hidden">
        <div className="container mx-auto px-4 flex flex-col items-center text-center">
          <p className="text-5xl text-white font-bold mb-6">
            Careers at AR Industries
          </p>
          <p className="text-xl max-w-3xl text-white">
            Join our team of innovators and problem-solvers. Explore current
            openings and be a part of our growing journey.
          </p>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-4xl text-blue-900 font-bold mb-6">Open Positions</p>
            <p className="text-lg text-gray-600">
              We’re looking for passionate professionals to join us.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {jobsData.map((job) => (
              <div
                key={job.id}
                className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg transition cursor-pointer"
                onClick={() => setSelectedJob(job)}
              >
                <p className="text-xl font-bold text-blue-900 mb-2">{job.title}</p>
                <p className="text-gray-600 mb-3">{job.department}</p>
                <p className="text-sm text-gray-500">Location: {job.location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Details Modal */}
      {selectedJob && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-lg shadow-lg max-w-lg w-full p-6 relative">
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
              onClick={() => setSelectedJob(null)}
            >
              ✖
            </button>
            <h2 className="text-2xl font-bold text-blue-900 mb-4">
              {selectedJob.title}
            </h2>
            <p className="text-gray-700 mb-4">{selectedJob.description}</p>
            <ul className="list-disc list-inside text-gray-600 mb-6">
              {selectedJob.requirements.map((req, i) => (
                <li key={i}>{req}</li>
              ))}
            </ul>
            <a
              href="#application-form"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Apply Now
            </a>
          </div>
        </div>
      )}

      {/* Application Form */}
      <section
        id="application-form"
        className="py-24 bg-gradient-to-r from-blue-900 to-slate-800 flex justify-center items-center"
      >
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="bg-white shadow-2xl p-10 rounded-2xl">
            {/* Heading */}
            <p className="text-4xl font-extrabold text-blue-900 text-center mb-4">
              Apply for a Job
            </p>
            <p className="text-gray-600 text-center mb-10">
              Fill out the form below and attach your resume. Our HR team will get
              back to you soon.
            </p>

            {/* Form */}
            <form className="space-y-6">
              <div className="text-left">
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full border px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  required
                />
              </div>

              <div className="text-left">
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full border px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  required
                />
              </div>

              <div className="text-left">
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="text"
                  placeholder="Enter your phone number"
                  className="w-full border px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              <div className="text-left">
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Select Job Role
                </label>
                <select className="w-full border px-4 py-3 rounded-lg text-black focus:ring-2 focus:ring-blue-500 focus:outline-none">
                  <option value=""></option>
                  {jobsData.map((job) => (
                    <option key={job.id} value={job.title}>
                      {job.title}
                    </option>
                  ))}
                </select>
              </div>

              <div className="text-left">
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Why should we hire you?
                </label>
                <textarea
                  placeholder="Write a short statement"
                  rows="4"
                  className="w-full border px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                ></textarea>
              </div>

              <div className="text-left">
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Upload Resume
                </label>
                <input
                  type="file"
                  className="w-full border px-4 py-3 rounded-lg cursor-pointer bg-gray-50"
                  accept=".pdf,.doc,.docx"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-teal-600 to-slate-700 text-white py-3 rounded-lg font-semibold shadow-md hover:from-teal-900 hover:to-slate-900 transition-all duration-300"
              >
                Submit Application
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Career;
