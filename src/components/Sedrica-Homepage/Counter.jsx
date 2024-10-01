import React, { useEffect, useRef, useState } from 'react';
import './Statistics.css'

const Counter = ({ targetNumber, val }) => {
    const [count, setCount] = useState(0);
    const isCountingRef = useRef(false);
    const counterRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !isCountingRef.current) {
                        startCounting();
                        isCountingRef.current = true; // Prevent further triggers
                    }
                });
            },
            { threshold: 0.1 } // Trigger when 10% of the component is visible
        );

        if (counterRef.current) {
            observer.observe(counterRef.current);
        }

        return () => {
            if (counterRef.current) {
                observer.unobserve(counterRef.current);
            }
        };
    }, []);

    const startCounting = () => {
        const duration = 1000; // Total duration for the counting (400 ms)
        const steps = 60; // Number of steps to reach the target
        const increment = targetNumber / steps; // Basic increment value

        let step = 0;
        const interval = setInterval(() => {
            setCount((prevCount) => {
                if (step >= steps) {
                    clearInterval(interval);
                    return targetNumber;
                }

                // Calculate dynamic increment based on distance to target
                const remaining = targetNumber - prevCount;
                const dynamicIncrement = Math.max(increment * (steps - step) / steps, 1); // Slow down as we get closer

                step++;
                return Math.min(prevCount + dynamicIncrement, targetNumber);
            });
        }, duration / steps);
    };

    return (
        <div ref={counterRef}>
            <h1 className='num-text'>{Math.floor(count) + val}</h1>
        </div>
    );
};

export default Counter;
