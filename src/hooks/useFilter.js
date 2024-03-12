import { useCallback, useState } from "react";
import { filterRegions } from "@/constants/filterRegions";

export default function useFilter() {
  const [filter, setFilter] = useState(null);

  const onFilterByRegionSelected = useCallback(
    (e) => {
      setFilter(
        filterRegions.find((region) => region.id === Number(e.target?.value))
      );
    },
    [filterRegions]
  );

  return { filter, onFilterByRegionSelected, filterRegions };
}
