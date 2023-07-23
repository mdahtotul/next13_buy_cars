"use client";

import { CarProps } from "@/types";
import { calculateCarRent, generateCarImageUrl } from "@/utils";
import Image from "next/image";
import { FC, useState } from "react";
import CarDetails from "./CarDetails";
import CustomButton from "./CustomButton";

interface CarCardProps {
  car: CarProps;
}

const CarCard: FC<CarCardProps> = ({ car }) => {
  const [open, setIsOpen] = useState(false);
  const {
    city_mpg,
    make,
    combination_mpg,
    cylinders,
    displacement,
    drive,
    fuel_type,
    highway_mpg,
    model,
    transmission,
    year,
  } = car;

  const carRent = calculateCarRent(city_mpg, year);
  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {make} {model}
        </h2>
      </div>

      <p className="mt-6 flex text-[32px] font-extrabold">
        <span className="self-start text-[14px] font-semibold">$</span>
        {carRent}
        <span className="self-end text-[14px] font-medium">/day</span>
      </p>

      <div className="relative my-3 h-40 w-full object-contain">
        <Image
          src={generateCarImageUrl(car)}
          alt="car model"
          fill
          priority
          className="object-contain"
        />
      </div>

      <div className="relative mt-2 flex w-full">
        <div className="flex w-full justify-between text-grey group-hover:invisible">
          <div className="flex flex-col items-center justify-center gap-2 ">
            <Image
              src="/steering-wheel.svg"
              alt="steering wheel"
              width={20}
              height={20}
              className="object-contain"
            />

            <p className="text-[14px]">
              {transmission === "a" ? "Automatic" : "Manual"}
            </p>
          </div>

          <div className="flex flex-col items-center justify-center gap-2">
            <Image
              src="/tire.svg"
              alt="tire"
              width={20}
              height={20}
              className="object-contain"
            />

            <p className="text-[14px]">{drive.toUpperCase()}</p>
          </div>

          <div className="flex flex-col items-center justify-center gap-2">
            <Image
              src="/gas.svg"
              alt="gas"
              width={20}
              height={20}
              className="object-contain"
            />

            <p className="text-[14px]">{city_mpg} MPG</p>
          </div>
        </div>

        <div className="car-card__btn-container">
          <CustomButton
            type="button"
            title="View More"
            containerStyles="w-full py-[16px] rounded-full bg-primary-blue"
            textStyles="text-white text-[14px] leading-[17px] font-bold"
            rightIcon="/right-arrow.svg"
            handleClick={() => setIsOpen(true)}
          />
        </div>
      </div>

      <CarDetails isOpen={open} closeModal={() => setIsOpen(false)} car={car} />
    </div>
  );
};

export default CarCard;
