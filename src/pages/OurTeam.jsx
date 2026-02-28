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
                { name: "Dr. Kevin Noronha (HOD-EXTC)", position: "mentors", image: "https://i.postimg.cc/wTJqxFnc/Kevin.jpg", size: "medium" },
                { name: "Ms. Shilpa Chaman (IETE SFIT Convenor)", position: "Mentor", image: "https://i.postimg.cc/vH9Y8XCt/Shilpa.jpg", size: "medium" },
            ]
        },
        {
            category: "Core Team",
            categoryOrder: 2,
            members: [
                { name: "Purva Daundkar(Chairperson)", position: "Chairperson", image: "https://i.postimg.cc/TPZr0Jgt/IMG_20250904_WA0042.jpg", size: "medium" },
                { name: "Tanishka Karlekar(Vice Chairperson)", position: "Vice Chairperson", image: "https://i.postimg.cc/tTWFMnNk/IMG_20250904_WA0068.jpg", size: "medium" },
                { name: "Siddhesh Gupta(Secretary)", position: "Secretary", image: "https://i.postimg.cc/4dVpSHQS/IMG_20250904_WA0074.jpg", size: "medium" },
                { name: "Harshit Kawa(Treasurer)", position: "Treasurer", image: "https://i.postimg.cc/7LTBq6N3/IMG_20250904_WA0014.jpg", size: "medium" },
            ]
        },
        {
            category: "Technical Team",
            categoryOrder: 3,
            members: [
                { name: "Rohit prasad (Tech Head) ", position: "Technical Head", image: "https://i.postimg.cc/7LTBq6N9/IMG_2957.jpg", size: "medium" },
                { name: "Soham Kadam (Exec)", position: "Member", image: "https://i.postimg.cc/wTT07FVK/IMG-3176.jpg", size: "medium" },
            ]
        },
        {
            category: "Public Relations",
            categoryOrder: 4,
            members: [
                { name: "Krishika Ganiga(PR Head)", position: "Public Relations Head", image: "https://i.postimg.cc/KvLGcQCN/IMG_2713_JPG.jpg", size: "medium" },
                { name: "Palak Sodhani(Exec)", position: "Member", image: "https://i.postimg.cc/Xv8bcQTg/DSC05322.jpg", size: "medium" },
                { name: "Shantala Purav(Exec)", position: "Member", image: "https://i.postimg.cc/pXGGGRpg/DSC05323.jpg", size: "medium" },
                { name: "Sarthak Pawar(Exec)", position: "Member", image: "https://i.postimg.cc/NMmRz2k4/IMG_20250904_WA0052.jpg", size: "medium" },
            ]
        },
        {
            category: "Creatives Team",
            categoryOrder: 5,
            members: [
                { name: "Ashraya Kotain(Head)", position: "Creatives Head", image: "https://i.postimg.cc/vmpWhtf2/IMG_20250904_WA0036.jpg", size: "medium" },
                { name: "Parina Sequeira(Vice Head)", position: "Member", image: "https://i.postimg.cc/BvdxpBHN/IMG_20250904_WA0035.jpg", size: "medium" },
                { name: "Khanak Parikh(Exec)", position: "Member", image: "https://i.postimg.cc/KvvpDRvd/DSC05322.jpg", size: "medium" },
                { name: "Pushkar Sharma(Exec)", position: "Member", image: "https://i.postimg.cc/SsCcvYfG/IMG_20250904_WA0051.jpg", size: "medium" },
                { name: "Shubham Kadam(Exec)", position: "Member", image: "https://i.postimg.cc/tTWFMnN2/IMG_20250904_WA0049.jpg", size: "medium" },
                { name: "Kaelyn Correia(Exec)", position: "Member", image: "https://i.postimg.cc/qMf7jZtr/DSC05352.jpg", size: "medium" },
                { name: "Shlok Banjan(Exec)", position: "Member", image: "https://i.postimg.cc/25P4G7hc/IMG_20250904_WA0048.jpg", size: "medium" },
            ]
        },
        {
            category: "Graphics & Photography",
            categoryOrder: 6,
            members: [
                { name: "Vedant Kachare(Vice Head)", position: "Publicity Head", image: "https://i.postimg.cc/DZfFQ7WC/IMG_2330.avif", size: "medium" },
                { name: "Anshika Jakhmola(Exec)", position: "Member", image: "https://i.postimg.cc/SRJh5VfS/IMG_2332.avif", size: "medium" },
                { name: "Tanvi Patil(Exec)", position: "Member", image: "https://i.postimg.cc/Kz9bJCLf/IMG_2328.avif", size: "medium" },
                { name: "Tanmay Ingale(Exec)", position: "Member", image: "https://i.postimg.cc/8cjS3wBx/IMG_20250916_174942.jpg", size: "medium" },
                { name: "Purav Shah(Exec)", position: "Member", image: "https://i.postimg.cc/d1WF4gd4/IMG_20250916_155744.jpg", size: "medium" },
                { name: "Apurva Kulkarni(Exec)", position: "Member", image: "https://i.postimg.cc/0jbs3Z0q/IMG_2331.avif", size: "medium" },
            ]
        },
        {
            category: "Social Media",
            categoryOrder: 7,
            members: [
                { name: "Swayam Kharade(Head)", position: "Publicity Head", image: "https://i.postimg.cc/vZCPyh7t/20250917_132149.avif", size: "medium" },
                { name: "Aryan Sawant(Vice Head)", position: "Member", image: "https://i.postimg.cc/nhM3Dgcx/20250917-132431.avif", size: "medium" },
                { name: "Janhvi Mishra(Exec)", position: "Member", image: "https://i.postimg.cc/zG7XDz0p/20250917_132227.avif", size: "medium" },
                { name: "Sana Fofani(Exec)", position: "Member", image: "https://i.postimg.cc/g2xM1Qhs/20250917_132325.avif", size: "medium" },
                { name: "Sumit Dhanawade(Exec)", position: "Member", image: "https://i.postimg.cc/pL30vCQZ/20250917_132526.avif", size: "medium" },
            ]
        },
        {
            category: "Marketing & Operations",
            categoryOrder: 8,
            members: [
                { name: "Atharva Nalawade(Exec)", position: "Publicity Head", image: "https://i.postimg.cc/TwkxCBmH/IMG_20250916_160619.jpg", size: "medium" },
                { name: "Divesh Ahire(Exec)", position: "Member", image: "https://i.postimg.cc/vBPy3CfM/IMG_20250916_163835.jpg", size: "medium" },
                { name: "Shreyas Raut(Exec)", position: "Member", image: "https://i.postimg.cc/76B4mj0v/IMG_20250916_163715.jpg", size: "medium" },
                { name: "Shlok Kaile(Exec)", position: "Member", image: "https://i.postimg.cc/ZK7774WT/DSC05340.jpg", size: "medium" },
                { name: "Saisha Naik(Exec)", position: "Member", image: "https://i.postimg.cc/pXDL7Y8M/IMG_20250916_163625.jpg", size: "medium" },
                { name: "Devash Kulkarni(Exec)", position: "Member", image: "https://i.postimg.cc/BZzmy23T/IMG-20250904-WA0032.jpg", size: "medium" },
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
