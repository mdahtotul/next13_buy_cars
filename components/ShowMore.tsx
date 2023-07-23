"use client";
import { ShowMoreProps } from "@/types";
import { updateSearchParams } from "@/utils";
import { useRouter } from "next/navigation";
import { FC } from "react";
import CustomButton from "./CustomButton";

const ShowMore: FC<ShowMoreProps> = ({ pageNumber, isNext }) => {
  const router = useRouter();

  const handleNavigation = () => {
    const newLimit = (pageNumber + 1) * 10;
    const newPathname = updateSearchParams("limit", `${newLimit}`);
    router.push(newPathname);
  };

  return (
    <div className="flex-center mt-10 flex w-full gap-5">
      {!isNext && (
        <CustomButton
          title="Show More"
          type="button"
          containerStyles="bg-primary-blue rounded-full text-white"
          handleClick={handleNavigation}
        />
      )}
    </div>
  );
};

export default ShowMore;
