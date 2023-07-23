import { CarCard, CustomFilter, Hero, SearchBar, ShowMore } from "@/components";
import { fuels, yearsOfProduction } from "@/constants";
import { fetchCars } from "@/utils";
import { isValidArray } from "@/utils/common";

export default async function Home({ searchParams }: any) {
  // fetching data on server side
  const allCars = await fetchCars({
    manufacturer: searchParams?.manufacturer || "",
    model: searchParams?.model || "",
    fuel: searchParams?.fuel || "",
    year: searchParams?.year || 2022,
    limit: searchParams?.limit || 10,
  });

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
            <CustomFilter title="fuel" options={fuels} />
            <CustomFilter title="year" options={yearsOfProduction} />
          </div>
        </div>

        {isValidArray(allCars) ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars?.map((car: any, i: number) => (
                <CarCard car={car} key={i} />
              ))}
            </div>
            <ShowMore
              pageNumber={(searchParams?.limit || 10) / 10}
              isNext={(searchParams.limit || 10) > allCars.length}
            />
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
