import React from 'react';

export default function About() {
  return (
    <section id='about'>
      <div className='container mx-auto flex flex-col items-center px-10 py-20 text-center'>
        {/* Div 1: Introduction */}
        <div className='mb-8'>
          <h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-white'>
            Hi, meet <span className='text-green-500'>Brian</span>
            <br />
            I build ideas
          </h1>
          <p className='leading-relaxed'>
            Full-stack Developer <br /> Website Developer <br /> Designer
          </p>
        </div>

        {/* Div 3: Call to Action */}
        <div className='flex flex-col items-center'>
          <a
            href='#contact'
            className='inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg mb-4'>
            Work With Me
          </a>
          <a
            href='#projects'
            className='inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg'>
            See My Past Work
          </a>
        </div>
      </div>
    </section>
  );
}
