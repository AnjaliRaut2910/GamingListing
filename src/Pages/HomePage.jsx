import React from "react";

function HomePage() {
  return (
    <div className="grid grid-cols-4">
      <div className="bg-red-300 h-full hidden md:block">Genre</div>
      <div className="col-span-4 md:col-span-3 bg-blue-400">main</div>
    </div>
  );
}

export default HomePage;
