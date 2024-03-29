import Image from "next/image";
import TallGrass from "@assets/tallgrass.png";
import Potion from "@assets/potion.png";
import Trainer from "@assets/trainer.png";
import Header from "@components/Header";
import { cookies } from "next/headers";

const ICON_SIZE = 100;

// The idea is for the location to always come from the cookie.
// If we have a location search param, then we will set it into a cookie.
export default async function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const location = cookies().get("pokehelper-location")?.value;

  return (
    <main className="w-screen h-screen flex flex-col">
      <div className="outline outline-gray-700 w-full h-1/5 centered">
        <Header location={location} />
      </div>
      <div className="w-full h-full flex flex-col lg:flex-row-reverse">
        <div className="main flex flex-col w-full lg:w-2/3 h-full">
          <div className="outline outline-gray-700 w-full h-4/5 centered">
            Map Section
          </div>
          <div className="outline outline-gray-700 w-full h-1/5 centered">
            <div className="outline outline-gray-700 w-1/3 h-full centered">
              <figure>
                <Image
                  src={TallGrass}
                  alt="Encounters"
                  width={ICON_SIZE}
                  height={ICON_SIZE}
                />
                <figcaption className="figure-caption text-center">Encounters</figcaption>
              </figure>
            </div>
            <div className="outline outline-gray-700 w-1/3 h-full centered">
              <figure>
                <Image
                  src={Potion}
                  alt="Items"
                  width={ICON_SIZE}
                  height={ICON_SIZE}
                />
                <figcaption className="figure-caption text-center">Items</figcaption>
              </figure>
            </div>
            <div className="outline outline-gray-700 w-1/3 h-full centered">
              <figure>
                <Image
                  src={Trainer}
                  alt="Trainers"
                  width={ICON_SIZE}
                  height={ICON_SIZE}
                />
                <figcaption className="figure-caption text-center">Trainers</figcaption>
              </figure>
            </div>
          </div>
        </div>
        <div className="outline outline-gray-700 w-full h-full centered lg:w-1/3">
          Timeline Section
          {/* Make its own component - will need access to last major event, next major event, and minor events along the way */}
        </div>
      </div>
    </main>
  );
}
