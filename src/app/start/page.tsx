
import { useEffect } from "react";
import { GymLeaders, GymLeader } from "components/GymLeaders";
import crying_psyduck from "assets/crying_psyduck.png";

export default function Start() {
  return (
    <main className="w-screen h-screen">
      <div className="w-full h-40 flex justify-center items-center">
        <div className="w-4/5 h-20 bg-gray-500 flex justify-center items-center">
          <h1 className="font-bold text-4xl text-white">
            Pokemon Platinum Helper
          </h1>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="mb-8 text-4xl font-bold">
          Which gym did you last defeat?
        </h1>
        {/* Start New Game */}
        <GymLeader
          src={crying_psyduck}
          alt="Crying Psyduck"
          gymLocation="twinleaf-town-area"
          index={0}
        />
        {/* Start Existing Game */}
        <GymLeaders />
      </div>
    </main>
  );
}
