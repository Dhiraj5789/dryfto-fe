export const budgetOptions = [
    { value: "all-budgets", label: "All Budgets" },
    { value: "budget-friendly", label: "Budget Friendly" },
    { value: "mid-range", label: "Mid-Range" },
    { value: "luxury", label: "Luxury" }
];

export const adventureOptions = [
    { value: "all-adventures", label: "All Types" },
    { value: "adventure", label: "Adventure" },
    { value: "relaxation", label: "Relaxation" },
    { value: "cultural", label: "Cultural" },
    { value: "nature", label: "Nature" }
];

export const durationOptions = [
    { value: "all-durations", label: "All Durations" },
    { value: "1-day", label: "1 Day" },
    { value: "2-days", label: "2 Days" },
    { value: "3-days", label: "3 Days" },
    { value: "4-days", label: "4+ Days" }
];


    // Sample data for cards
    export const sampleCards = [
        {
            id: "1",
            title: "Napa Valley Wine Tour",
            description: "Luxury wine tasting experience through California's premier wine region with stunning vineyard views and world-class wines",
            image: "/images/sardar-kamran-khan-zo_udYMcaVc-unsplash.jpg",
            imageAlt: "Napa Valley Wine Tour - Beautiful vineyard landscape",
            rating: 4.9,
            duration: "2 days",
            price: "$500-800",
            reviews: 89,
            distance: "85 km",
            categories: ["Relaxation", "Luxury"],
            includes: ["Castello di Amorosa", "Schramsberg", "Wine Tasting"],
            creator: "Michael Torres"
        },
        {
            id: "2",
            title: "Yosemite Adventure Trek",
            description: "Epic hiking adventure through Yosemite's most scenic trails with breathtaking mountain views and wildlife encounters",
            image: "/images/keegan-houser--Q_t4SCN8c4-unsplash.jpg",
            imageAlt: "Yosemite Adventure Trek - Mountain landscape with trees",
            rating: 4.8,
            duration: "3 days",
            price: "$300-500",
            reviews: 156,
            distance: "120 km",
            categories: ["Adventure", "Nature"],
            includes: ["Half Dome", "El Capitan", "Camping"],
            creator: "Sarah Johnson"
        },
        {
            id: "3",
            title: "San Francisco Cultural Tour",
            description: "Immerse yourself in the diverse culture and history of the Bay Area with iconic landmarks and vibrant neighborhoods",
            image: "/images/sean-oulashin-KMn4VEeEPR8-unsplash.jpg",
            imageAlt: "San Francisco Cultural Tour - City skyline and bridge",
            rating: 4.7,
            duration: "1 day",
            price: "$150-250",
            reviews: 203,
            distance: "45 km",
            categories: ["Cultural", "City Break"],
            includes: ["Golden Gate Bridge", "Alcatraz", "Chinatown"],
            creator: "David Chen"
        }
    ];