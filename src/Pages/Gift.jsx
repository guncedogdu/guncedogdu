import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import { useState } from 'react';

const photos = [
    { imgSrc: "./images/tadelleBeyaz.jpeg", title: "Tadellee" },
    { imgSrc: "./images/Miniş.jpg", title: "Precious Miniş" },
    // Add more photos similarly
];

const Gift = () => {
    const [isAccordionOpen, setIsAccordionOpen] = useState(false);

    const handleAccordionChange = (event, isExpanded) => {
        setIsAccordionOpen(isExpanded);
    };

    return (
        <div>
            <section className="games-section">
                <h3>İsterdim ki bu sayfada gördüğün bu hediyeleri sana vereyim. Şartlar öyle gerektirdi şimdi veremedim ama hep aklımda olacaklar yüzyüze görüştüğümüzde vereceğim.</h3>
                <div className="games-grid">
                    {photos.map(photo => (
                        <div className="photo" key={photo.title} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
                            <img src={photo.imgSrc} alt={photo.title} style={{ height: "40vh", width: "23vw" }} />
                            <p>{photo.title}</p>
                        </div>
                    ))}
                </div>
            </section>
            <div className="games">
                <div className="games-list">
                    <Accordion expanded={isAccordionOpen} onChange={handleAccordionChange}>
                        <AccordionSummary aria-controls="panel1-content" id="panel1-header">
                            <Typography>Doğum Günün Kutlu Olsun</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            {isAccordionOpen && (
                                <iframe
                                    width="560"
                                    height="315"
                                    src={`https://www.youtube.com/embed/7V79HJ_DW1s?autoplay=1`}
                                    frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowfullscreen
                                ></iframe>
                            )}
                            <img src="./images/Tosbaga.jpg" alt="Kaplumbaga" style={{ height:"40vh", width:"23vw" }} />
                            <img src="./images/Kurbaga.jpg" alt="Kurbaga" style={{ height:"40vh", width:"23vw" }} />
                            <img src="./images/GünceGüzellik.jpg" alt="Güzellik" style={{ height:"40vh", width:"23vw" }} />
                            <img src="./images/Tosbaga2.jpg" alt="Tosbaga" style={{ height:"40vh", width:"23vw" }} />
                            <img src="./images/Kurbaga2.jpg" alt="Kurbaga" style={{ height:"40vh", width:"23vw" }} />
                        </AccordionDetails>
                    </Accordion>
                </div>
            </div>
        </div>
    );
};

export default Gift;
