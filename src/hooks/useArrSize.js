import { useState } from "react";

export const useArrSize = (size) => {
    const [arrSize, setArrSize] = useState(size);
    return [arrSize, setArrSize];
}