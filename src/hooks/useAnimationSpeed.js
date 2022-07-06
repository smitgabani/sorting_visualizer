import { useState } from "react";

export const useAnimationSpeed = (speed) => {
    const [animationSpeed, setAnimationSpeed] = useState(speed);
    return [animationSpeed, setAnimationSpeed];
}