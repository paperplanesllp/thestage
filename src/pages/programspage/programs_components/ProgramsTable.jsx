import React from 'react';
import {benefits} from '../../../constants/Constants'
const ProgramsTable = () => {
  

  return (
    <div className="min-h-screen bg-gray-50 font-light py-10 px-4 sm:px-6 lg:px-8"style={{ fontFamily: "Gordita, sans-serif" }}>

        <h1 className='text-2xl font-normal text-center mb-15'>Membership Benefits</h1>
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Header with Plan Names and CTA Buttons */}
          <div className="grid grid-cols-4 gap-4 px-6 sm:px-10 py-8 border-b-2 border-gray-200">
            <div className="text-left">
              <div className="text-lg font-semibold text-gray-800">
                Benefit Area
              </div>
            </div>
            <div className="text-center">
              <div className="text-lg font-semibold text-pink-500 mb-3">
                Group One
              </div>
              <button className="px-7 py-2.5 bg-pink-100 text-pink-500 rounded-full text-sm font-semibold hover:bg-pink-500 hover:text-white transition-all duration-300">
                Try now
              </button>
            </div>
            <div className="text-center">
              <div className="text-lg font-semibold text-blue-500 mb-3">
                Group Two
              </div>
              <button className="px-7 py-2.5 bg-blue-500 text-white rounded-full text-sm font-semibold hover:bg-blue-600 transition-all duration-300">
                Try now
              </button>
            </div>
            <div className="text-center">
              <div className="text-lg font-semibold text-gray-900 mb-3">
                Students Group
              </div>
              <button className="px-7 py-2.5 bg-gray-900 text-white rounded-full text-sm font-semibold hover:bg-gray-800 transition-all duration-300">
                Contact
              </button>
            </div>
          </div>

          {/* Benefits Table */}
          <div>
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className={`grid grid-cols-4 gap-4 items-center px-6 sm:px-10 py-6 border-b border-gray-100 transition-colors duration-200 hover:bg-gray-100 ${
                  index % 2 === 1 ? 'bg-gray-50' : 'bg-white'
                }`}
              >
                <div className="text-left">
                  <div className="text-base font-medium text-gray-700">
                    {benefit.name}
                  </div>
                </div>
                <div className="text-center">
                  {benefit.groupOne ? (
                    <span className="text-gray-500 text-xl font-semibold">✓</span>
                  ) : (
                    <span className="text-gray-300 text-lg">x</span>
                  )}
                </div>
                <div className="text-center">
                  {benefit.groupTwo ? (
                    <span className="text-gray-500 text-xl font-semibold">✓</span>
                  ) : (
                    <span className="text-gray-300 text-lg">x</span>
                  )}
                </div>
                <div className="text-center">
                  {benefit.students ? (
                    <span className="text-gray-500 text-xl font-semibold">✓</span>
                  ) : (
                    <span className="text-gray-300 text-lg">x</span>
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