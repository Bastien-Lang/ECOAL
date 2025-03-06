import { FaRocket, FaUsers, FaGlobeEurope, FaGamepad } from 'react-icons/fa';
<<<<<<< HEAD
import styles from '../css/About.module.css'; 

function About() {
  return (
    <div className={styles.container}>
      {/* Seção Hero */}
      <div className={styles.hero}>
        <h1 className={styles.title}>E-XP: The eSports Revolution</h1>
        <p className={styles.subtitle}>Born from the Flames of Project E-Coal</p>
      </div>

      {/* Linha do Tempo */}
      <div className={styles.section}>
        <FaRocket className={styles.icon} />
        <h2>Our Story</h2>
        <p>
            Founded on March 3, 2025 in the heart of Lens, E-XP emerged from a 72-hour
            hackathon during Project E-Coal. What started as a prototype to cover events
            for miners-turned-gamers has become the leading eSports platform in Northern Europe
        </p>
      </div>

      {/* Factos Interessantes */}
      <div className={styles.section}>
        <FaUsers className={styles.icon} />
        <h2>A Equipa dos Sonhos</h2>
        <div className={styles.grid}>
          <div className={styles.card}>
            <h3>6 Visionaries</h3>
            <p>
                Former miners, developers, and pro athletes united by one passion:
                transforming games into careers
            </p>
          </div>
          <div className={styles.card}>
            <h3>15+ Languages</h3>
            <p>
                We collectively speak everything from PHP to Portuguese, 
                including online community management
            </p>
          </div>
        </div>
      </div>

      {/* Conquistas */}
      <div className={styles.section}>
        <FaGamepad className={styles.icon} />
        <h2>Historic Milestones / Future Objectives</h2>
        <ul className={styles.timeline}>
            <li>2025: First live broadcast of underground tournament in Lens</li>
            <li>2026: NVIDIA partnership for VR in abandoned mines</li>
            <li>2027: 1 Million active users on our platform</li>
        </ul>
      </div>

      {/* Call-to-Action */}
      <div className={styles.ctaSection}>
        <FaGlobeEurope className={styles.icon} />
        <h2>Join The Revolution</h2>
        <button className={styles.ctaButton}>
          Become an XPert
        </button>
      </div>
    </div>
  );
}

export default About;
=======
import styles from '../css/About.module.css';

function About() {
    return (
        <div className={styles.container}>

            <div className={styles.hero}>
                <h1 className={styles.title}>E-XP: The eSports Revolution</h1>
                <p className={styles.subtitle}>Born from the Flames of Project E-Coal</p>
            </div>


            <div className={styles.section}>
                <FaRocket className={styles.icon} />
                <h2>Our Story</h2>
                <p>
                    Founded on March 3, 2025 in the heart of Lens, E-XP emerged from a 72-hour
                    hackathon during Project E-Coal. What started as a prototype to cover events
                    for miners-turned-gamers has become the leading eSports platform in Northern Europe
                </p>
            </div>


            <div className={styles.section}>
                <FaUsers className={styles.icon} />
                <h2>A Equipa dos Sonhos</h2>
                <div className={styles.grid}>
                    <div className={styles.card}>
                        <h3>6 Visionaries</h3>
                        <p>
                            Former miners, developers, and pro athletes united by one passion:
                            transforming games into careers
                        </p>
                    </div>
                    <div className={styles.card}>
                        <h3>15+ Languages</h3>
                        <p>
                            We collectively speak everything from PHP to Portuguese,
                            including online community management
                        </p>
                    </div>
                </div>
            </div>


            <div className={styles.section}>
                <FaGamepad className={styles.icon} />
                <h2>Historic Milestones / Future Objectives</h2>
                <ul className={styles.timeline}>
                    <li>2025: First live broadcast of underground tournament in Lens</li>
                    <li>2026: NVIDIA partnership for VR in abandoned mines</li>
                    <li>2027: 1 Million active users on our platform</li>
                </ul>
            </div>


            <div className={styles.ctaSection}>
                <FaGlobeEurope className={styles.icon} />
                <h2>Join The Revolution</h2>
                <button className={styles.ctaButton}>
                    Become an XPert
                </button>
            </div>
        </div>
    );
}

export default About;
>>>>>>> new
