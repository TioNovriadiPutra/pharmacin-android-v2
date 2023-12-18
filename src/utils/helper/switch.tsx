import React from "react";

export const handlePageSwitch = (setPage: React.Dispatch<React.SetStateAction<number>>, index: number) => {
  setPage(index);
};
