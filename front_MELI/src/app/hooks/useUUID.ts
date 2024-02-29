import { useMemo } from "react";
import { v4 as uuidv4 } from "uuid";

export const useUUID = (arraySize: number) => {
    return useMemo(() => Array.from({ length: arraySize }, () => uuidv4()), [arraySize]);
}
