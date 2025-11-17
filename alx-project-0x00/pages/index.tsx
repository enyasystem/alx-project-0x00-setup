//Import the React library (needed to use JSX and components)
import React from 'react';


//Define a functional React component using arrow and Typescript type (React.FC = React Fuctional Component)
const Home: React.FC = () => {
  //Return the statement defines what get's rendered on the webpage
  return (
    //<main/> tag is the root HTML element for the hompage layout
  <main className="flex flex-col h-screen justify-center items-center text-4xl font-semibold">
    {/* Heading text */}
    <h1>Airbnb Application Clone system</h1>

    {/* A simple button with Tailwind CSS styling */}
    <button className="mt-8 px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-yellow-700 transition duration-300">
      Get Started</button>
  </main>
  )
};

//Export the component as default so Next.js can display it as the root (/)
export default Home;
