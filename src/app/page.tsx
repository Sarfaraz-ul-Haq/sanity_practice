import Image from "next/image";
import { client } from "../lib/sanityClient";
import { urlForImage } from "../../sanity/lib/image";

const getPlanetsData = async () => {
  const res = await client.fetch(
    `*[_type == "planet"]{planetName, image, diameter, mass}`
  );
  return res;
};

async function Home() {
  const data = await getPlanetsData();
  console.log(data);

  return (
    <main className="flex gap-5 justify-center">
      {data.map((planet: any) => (
        <div key={planet.id} className="border-md border-2">
          <div>{planet.planetName}</div>
          <Image
            src={urlForImage(planet.image)}
            alt={`${planet.planetName} Photo`}
            width={100}
            height={100}
          />
          <div>Diameter: {planet.diameter}</div>
          <div>Mass: {planet.mass}</div>
        </div>
      ))}
    </main>
  );
}

export default Home;
