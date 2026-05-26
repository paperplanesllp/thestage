import React from "react";
import { benefits } from "../../../constants/Constants";

const ProgramsTable = () => {
  return (
    <div
      className="min-h-screen bg-gray-50 font-light py-10 px-4 sm:px-6 lg:px-8"
      style={{ fontFamily: "Gordita, sans-serif" }}
    >
      <h1 className="text-2xl font-normal text-center mb-15">
        MEMBERSHIP BENEFITS
      </h1>

      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          
          {/* HEADER */}
          <div className="grid grid-cols-[2.5fr_1fr_1fr_1fr] gap-2 px-6 sm:px-10 py-8 border-b-2 border-gray-200">
            <div className="text-left md:text-lg  font-semibold text-gray-800">
              Benefit Area
            </div>
            <div className="text-center md:text-lg font-semibold text-gray-900">
              Group One
            </div>
            <div className="text-center md:text-lg font-semibold text-gray-900">
              Group Two
            </div>
            <div className="text-center md:text-lg font-semibold text-gray-900">
              Students Group
            </div>
          </div>

          {/* TABLE ROWS */}
          <div>
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className={`grid grid-cols-[3fr_1fr_1fr_1fr] gap-4 items-center px-6 sm:px-10 py-4 border-b border-gray-100 transition-colors duration-200 hover:bg-gray-100 ${
                  index % 2 === 1 ? "bg-gray-50" : "bg-white"
                 
                }`} style={{ fontFamily: "'Scope One', serif" }}
              >
                {/* Benefit Name */}
                <div className="md:text-base text-[12px] font-medium text-gray-700 leading-relaxed">
                  {benefit.name}
                </div>

                {/* Group One */}
                <div className="text-center">
                  {benefit.groupOne ? (
                    <span className="text-green-600 md:text-xl text-md font-semibold">
                      ✓
                    </span>
                  ) : (
                    <span className="text-neutral-800 md:text-lg text-md">✕</span>
                  )}
                </div>

                {/* Group Two */}
                <div className="text-center">
                  {benefit.groupTwo ? (
                    <span className="text-green-600 text-xl font-semibold">
                      ✓
                    </span>
                  ) : (
                    <span className="text-neutral-800 text-lg">✕</span>
                  )}
                </div>

                {/* Students Group */}
                <div className="text-center">
                  {benefit.students ? (
                    <span className="text-green-600 text-xl font-semibold">
                      ✓
                    </span>
                  ) : (
                    <span className="text-neutral-800 text-lg">✕</span>
                  )}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProgramsTable;
