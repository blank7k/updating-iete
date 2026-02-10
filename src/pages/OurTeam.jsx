import { useEffect, useState } from "react";
import sanityClient from "../sanity/sanityconfig"
import TeamStructure from "../components/TeamStructure";

const OurTeam = () => {
    const [teams, setTeams] = useState([]);
    const [year, setYear] = useState("2025-26");

    // Mock Data for 2025-26
    const mockTeam2025 = [
        {
            category: "Mentors",
            categoryOrder: 1,
            members: [
                { name: "Placeholder Name", position: "Mentor", image: "https://i.ibb.co/JRHnS7Kp/placeholder.jpg", size: "medium" },
            ]
        },
        {
            category: "Core Team",
            categoryOrder: 2,
            members: [
                { name: "Placeholder Name", position: "Chairperson", image: "https://i.ibb.co/JRHnS7Kp/placeholder.jpg", size: "medium" },
                { name: "Placeholder Name", position: "Vice Chairperson", image: "https://i.ibb.co/JRHnS7Kp/placeholder.jpg", size: "medium" },
                { name: "Placeholder Name", position: "Secretary", image: "https://i.ibb.co/JRHnS7Kp/placeholder.jpg", size: "medium" },
                { name: "Placeholder Name", position: "Treasurer", image: "https://i.ibb.co/JRHnS7Kp/placeholder.jpg", size: "medium" },
            ]
        },
        {
            category: "Technical Team",
            categoryOrder: 3,
            members: [
                { name: "Placeholder Name", position: "Technical Head", image: "https://i.ibb.co/JRHnS7Kp/placeholder.jpg", size: "medium" },
                { name: "Placeholder Name", position: "Member", image: "https://i.ibb.co/JRHnS7Kp/placeholder.jpg", size: "medium" },
            ]
        },
        {
            category: "Events Team",
            categoryOrder: 4,
            members: [
                { name: "Placeholder Name", position: "Events Head", image: "https://i.ibb.co/JRHnS7Kp/placeholder.jpg", size: "medium" },
                { name: "Placeholder Name", position: "Member", image: "https://i.ibb.co/JRHnS7Kp/placeholder.jpg", size: "medium" },
            ]
        },
        {
            category: "Creatives Team",
            categoryOrder: 5,
            members: [
                { name: "Placeholder Name", position: "Creatives Head", image: "https://i.ibb.co/JRHnS7Kp/placeholder.jpg", size: "medium" },
                { name: "Placeholder Name", position: "Member", image: "https://i.ibb.co/JRHnS7Kp/placeholder.jpg", size: "medium" },
            ]
        },
        {
            category: "Publicity Team",
            categoryOrder: 6,
            members: [
                { name: "Placeholder Name", position: "Publicity Head", image: "https://i.ibb.co/JRHnS7Kp/placeholder.jpg", size: "medium" },
                { name: "Placeholder Name", position: "Member", image: "https://i.ibb.co/JRHnS7Kp/placeholder.jpg", size: "medium" },
            ]
        }
    ];

    useEffect(() => {
        sanityClient
            .fetch(
                `*[_type == "team"]{ 
          category, 
          categoryOrder,
          members[] { name, "image": image.asset->url, position, size } 
        }`
            )
            .then((data) => {
                const sortedData = data.sort((a, b) => a.categoryOrder - b.categoryOrder);
                setTeams(sortedData);
            })
            .catch(console.error);
    }, []);

    const handleYearChange = (direction) => {
        if (direction === 'next' && year === '2024-25') {
            setYear('2025-26');
        } else if (direction === 'prev' && year === '2025-26') {
            setYear('2024-25');
        }
    };

    const currentTeams = year === '2025-26' ? mockTeam2025 : teams;

    const headerStyle = {
        textAlign: "center",
        color: "white",
        fontSize: "2rem",
        marginTop: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
        fontFamily: "Baskervville, serif"
    };

    const arrowStyle = {
        cursor: "pointer",
        userSelect: "none",
        fontSize: "2rem",
        opacity: 0.8,
        transition: "opacity 0.2s"
    };

    return (
        <div>
            <div style={headerStyle}>
                {year === '2025-26' && (
                    <span
                        style={arrowStyle}
                        onClick={() => handleYearChange('prev')}
                        onMouseOver={(e) => e.target.style.opacity = 1}
                        onMouseOut={(e) => e.target.style.opacity = 0.8}
                    >
                        &lt;
                    </span>
                )}

                <span>Team of {year}</span>

                {year === '2024-25' && (
                    <span
                        style={arrowStyle}
                        onClick={() => handleYearChange('next')}
                        onMouseOver={(e) => e.target.style.opacity = 1}
                        onMouseOut={(e) => e.target.style.opacity = 0.8}
                    >
                        &gt;
                    </span>
                )}
            </div>
            <TeamStructure teams={currentTeams} />
        </div>
    );
};

export default OurTeam;
