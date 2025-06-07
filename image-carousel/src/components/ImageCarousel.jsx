import React, { useEffect, useRef, useState } from 'react';

const IMAGE_ARRAY = [
    {
        title: "Mountain View",
        image: "https://source.unsplash.com/random/800x400/?mountain&sig=1",
    },
    {
        title: "Ocean Breeze",
        image: "https://source.unsplash.com/random/800x400/?ocean&sig=2",
    },
    {
        title: "City Lights",
        image: "https://source.unsplash.com/random/800x400/?city,night&sig=3",
    },
    {
        title: "Forest Trail",
        image: "https://source.unsplash.com/random/800x400/?forest&sig=4",
    },
    {
        title: "Desert Dunes",
        image: "https://source.unsplash.com/random/800x400/?desert&sig=5",
    },
];


const ImageCarousel = () => {
    const n = IMAGE_ARRAY.length;
    const [currentCarousel, setCurrentCarousel] = useState(0);
    const intervalRef = useRef(null);

    const handleFunc = (forward = true) => {
        setCurrentCarousel((prev) =>
            forward ? (prev + 1) % n : (n + prev - 1) % n
        );
    };

    const startAutoSlide = () => {
        intervalRef.current = setInterval(() => {
            handleFunc(true);
        }, 2000);
    };

    const stopAutoSlide = () => {
        clearInterval(intervalRef.current);
    };

    useEffect(() => {
        startAutoSlide();
        return () => stopAutoSlide();
    }, []);

    return (
        <div>
            <h2>Image Carousel</h2>
            <div
                className="card"
                onMouseEnter={stopAutoSlide}
                onMouseLeave={startAutoSlide}
                style={{
                    width: '100%',
                    maxWidth: '800px',
                    margin: 'auto',
                    backgroundImage: `url(${IMAGE_ARRAY[currentCarousel].image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '300px',
                    color: "white",
                    justifyContent: 'center',
                    fontSize: '24px',
                    fontWeight: 'bold',
                    borderRadius: '12px',
                    textShadow: '1px 1px 4px black',
                    transition: 'background-image 0.5s ease-in-out',
                }}
            >
                {IMAGE_ARRAY[currentCarousel].title}
            </div>

            <div style={{ marginTop: '10px' }}>
                <button onClick={() => handleFunc(false)}>Prev</button>
                <button onClick={() => handleFunc(true)}>Next</button>
            </div>
        </div>
    );
};

export default ImageCarousel;
