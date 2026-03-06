const ViewMoreContent = ({ title }) => {

  const content = {

    
   "Power-BI-Play":
    "Power-BI-Play was an interactive workshop focused on mastering Microsoft Power BI for data visualization and business intelligence, teaching students how to create insightful dashboards and reports.",
    
    "Research Paper Writing Seminar":
      "This seminar focused on guiding students through the process of writing high-quality research papers. Experts explained research methodology, literature review techniques, and publishing opportunities.",

    "Mosaic 2k25":
      "Mosaic 2k25 was a vibrant technical and cultural event where students showcased innovation, creativity, and teamwork through competitions, exhibitions, and interactive sessions.",

    "MimoVerse":
      "MimoVerse introduced students to modern software development concepts including UI/UX design, product thinking, and collaborative project building.",

    "IOT/IIOT":
      "This event explored Internet of Things and Industrial IoT applications including smart automation, sensors, and real-world industrial use cases.",

    "IETE Farewell 25-26":
      "The farewell celebrated the achievements and memories of the graduating batch with speeches, performances, and heartfelt moments shared by juniors and seniors.",

    "IETE Freshers 25-26":
    "Freshers 25-26 welcomed new students into the IETE community with interactive activities, networking opportunities, and fun ice-breaking sessions.",
  
    "ModelX:Innovate 3D":
    "Modlex: Innovate 3D Printing was a hands-on workshop where students learned about 3D printing technology, design principles, and practical applications in various industries.",

    "FutureBits: VLSI Power":
    "FutureBits: VLSI Power Management focused on the latest advancements in low-power design techniques for integrated circuits, covering topics like power optimization and energy-efficient architectures.",

    "Mosaic Squid X":
    "Mosaic Squid X was a dynamic event that combined coding challenges, design sprints, and innovation showcases to foster creativity and technical skills among participants.",

    "SpaceDay":
    "SpaceDay was a high-tech festival featuring an immersive, large-scale game played in total darkness. This unique event challenged participants to blend technical skill with sensory strategy to navigate intense environments and complete objectives.",

    "Farewell & Welcome":
    "The Farewell & Welcome event was a heartfelt celebration marking the transition of graduating students while warmly welcoming the new batch into the IETE family with speeches, performances, and camaraderie.",

  };
  

  return (
    <p className="event-description">
      {content[title] || "More details about this event will be updated soon."}
    </p>
  );
};

export default ViewMoreContent;