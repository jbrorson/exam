import React from 'react';
import '../../index.css';


function Home() {
  return (
    <main>
      <div className="absolute object-cover w-full h-full bg-blue-100"></div>
      {/* <img 
      src={""} 
      alt={""} 
      className="absolute object-cover w-full h-full" /> */}
      <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
        <h1 className="text-6xl text-red-300 font-bold cursive leading-none lg:leading-snug">Hi, I'm Josefine</h1>
      </section>
    </main>
  )
}

export default Home
