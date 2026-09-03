import Header from "@/shared/ui/Header";
import { planetsRealData } from "@/features/space-map/planetsData";
import { useParams } from "react-router-dom";
function PlanetPage() {
  const { planetName } = useParams();
  const planetData = planetsRealData.find(
    (planet) => planet.planetName === planetName,
  );
  if (!planetData || !planetName) return;
  const name = planetName[0].toUpperCase() + planetName.slice(1);
  return (
    <>
      <Header />
      <div className="bg-background flex flex-col items-center gap-4 text-foreground">
        <div
          className={`w-screen h-180 mt-20 bg-no-repeat bg-center bg-black`}
          style={{ backgroundImage: `url('/${planetName}_bg.jpg')` }}
        >
          {planetData.planetName === "earth" ? (
            <p className="relative w-44 left-[20%] top-[50%] text-4xl">
              Earth - the home planet of all known living beings.
            </p>
          ) : (
            ""
          )}
        </div>
        <article className="w-[80%] md:sm:w-[40%]">
          <ul className="flex flex-col gap-4 text-xl">
            <li>
              <span className="text-3xl font-medium">{name} information</span>
              <hr />
              <p>{planetData.description}</p>
            </li>
            <li>
              <span className="text-3xl font-medium">
                {name} characteristics
              </span>
              <hr />
              <p>
                <strong>Distance from sun</strong> {planetData.distance}{" "}
                kilometers
              </p>
              <p>
                <strong>Radius</strong> {planetData.radius} kilometers
              </p>
              <p>
                <strong>Mass</strong> {planetData.mass}x10
                <sup>{planetData.massPow}</sup> kilogramms
              </p>
              <p>
                <strong>Average temperature</strong> {planetData.tempC}&deg;C (
                {planetData.tempF}&deg;F)
              </p>
              <p>
                <strong>Gravity</strong> {planetData.gravity} m/s<sup>2</sup>
              </p>
            </li>
          </ul>
        </article>
      </div>
    </>
  );
}

export default PlanetPage;
