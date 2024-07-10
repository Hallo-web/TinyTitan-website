// Function to create and populate the dynamic content
function createDynamicContent() {
  const container = document.getElementById('anleitungs-container');
  container.innerHTML = `
    <div class="container5">
      <div class="satz">Erklärung: Er ist eine Gruppe von Computern, die zusammenarbeiten.</div>
      <div class="satz">Funktion: Er kann im Grunde vieles aber, was ihr gerade sieht, ist eine Physik Simulation.</div>
      <div class="bild-container">
        <div class="bild" id="bild1">
          <img src="./img/Controller.png" alt="Bild 1">
          <div class="overlay"> 
            <span class="textOverImage">1: Ball Größer ↑, Ball Kleiner ↓
            2: ↑ und ↓ zum Auswählen und ↔ zum umstellen
            3: Bewegen
            5: Entfernt Barrieren
            6: Kugelansicht und Wasseransicht wechseln
            7: Controller an
            9: Barrieren Ansicht an und aus
            10: Fügt Barrieren hinzu
            A: Gravity 0
            B: Density 0 und Pressure 0 Elasticity 115
            Y: Density 30 Elasticity -30
            X: Standarteinstellung
            </span>
          </div>
        </div>
        <div class="bild" id="bild2">
          <img src="./img/testimonial-bg.png" alt="Bild 2">
          <div class="overlay">
            <span class="textOverImage">Jede Barriere (oder unterschiedliche Farbe) die hinzugefügt wurde repräsentiert ein weiteren PC der dazugeschalten wurde. Mehr Farben -> mehr PCs. Es wird die selbe Leistung erbracht, aber es wird auf mehrere PCs aufgeteilt. Wie Teamwork. Jeder hat eine Aufgabe und wenn man zusammenarbeitet wird man schneller fertig.</span>
          </div>
        </div>
      </div>
    </div>
  `;

  // Add styles
  const style = document.createElement('style');
  style.textContent = `
    .container5 {
      width: 90%;
      max-width: 1200px;
      margin: 40px auto;
      border: 2px solid #000;
      padding: 20px;
      font-size: 18px;
    }
    .satz {
      border: 1px solid #000;
      margin-bottom: 20px;
      padding: 15px;
      font-size: 24px;
    }

    .bild-container {
      display: flex;
      justify-content: space-between;
      height: 400px;
    }
    .bild {
      width: 48%;
      height: 100%;
      border: 2px solid #000;
      position: relative;
      overflow: hidden;
      cursor: pointer;
    }
    .bild img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }
    .overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      display: flex;
      justify-content: center;
      align-items: center;
      opacity: 1;
      transition: opacity 0.3s ease;
    }
    .textOverImage {
      color: white;
      font-size: 36px;
      font-weight: bold;
      color: #ffffff;
      text-shadow: 2px 2px 4px rgba(0,0,0,0.8);
      background-color: rgba(0, 0, 0, 0.5);
      padding: 10px 20px;
      border-radius: 5px;
      color: #f5f5f5; /* Light gray */
      font-size: 24px; /* Increased font size */
      font-weight: bold;
      text-shadow: 1px 1px 2px rgba(255,255,255,0.5); /* Light gray shadow */
      background-color: rgba(255,255,255,0.2); /* White with 20% opacity */
      padding: 10px 20px;
      border-radius: 5px;
    }

    .bild:hover .overlay {
    background-color: rgba(0, 0, 0, 0.6);
}  
  `;
  document.head.appendChild(style);

  // Add animation
  const bilds = container.querySelectorAll('.bild');
  bilds.forEach(bild => {
    bild.addEventListener('mouseenter', () => {
      bild.querySelector('.overlay').style.opacity = '1';
    });
    bild.addEventListener('mouseleave', () => {
      bild.querySelector('.overlay').style.opacity = '0';
    });
  });
}

// Call the function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', createDynamicContent);