import { CustomFilter, Hero, SearchBar, CarCard } from "@/components";
import { fetchCars } from "@/utils";
import { isValidArray } from "@/utils/common";

export default async function Home() {
  const allCars = await fetchCars(); // fetching data on server side

  return (
    <main className="overflow-hidden">
      <Hero />

      <div className="padding-x padding-y max-width mt-12" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>

          <p>Explore the cars you might like</p>
        </div>

        <div className="home__filters">
          <SearchBar />

          <div className="home__filter-container">
            <CustomFilter title="fuel" />
            <CustomFilter title="year" />
          </div>
        </div>

        {isValidArray(allCars) ? (
          <section>
            <div className="home_cars-wrapper">
              {allCars?.map((car: any, i: number) => (
                <CarCard car={car} key={i} />
              ))}
            </div>
          </section>
        ) : (
          <div className="home_error_container">
            <h2 className="text-xl font-bold text-black">Oops, no results</h2>
            <p>{allCars?.error}</p>
          </div>
        )}
      </div>
    </main>
  );
}
