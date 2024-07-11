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
            <span class="textOverImage">
            <li><strong>1:</strong> Ball Größer ↑, Ball Kleiner ↓</li>
            <li><strong>2:</strong> ↑ und ↓ zum Auswählen und ↔ zum umstellen</li>
            <li><strong>3:</strong> Bewegen</li>
            <li><strong>5:</strong> Entfernt Barrieren</li>
            <li><strong>6:</strong> Kugelansicht und Wasseransicht wechseln</li>
            <li><strong>7:</strong> Controller an</li>
            <li><strong>9:</strong> Barrieren Ansicht an und aus</li>
            <li><strong>10:</strong> Fügt Barrieren hinzu</li>
            <li><strong>A:</strong> Gravity 0</li>
            <li><strong>B:</strong> Density 0 und Pressure 0 Elasticity 115</li>
            <li><strong>Y:</strong> Density 30 Elasticity -30</li>
            <li><strong>X:</strong> Standarteinstellung</li>
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
      font-size: 16px;
      text-shadow: 1px 1px 2px rgba(0,0,0,0.8);
      padding: 4px;
      border-radius: 3px;
      overflow-y: auto;
      max-height: 100%;
      text-align: left;
    }

    .textOverImage ul {
      list-style-type: none;
      padding: 0;
      margin: 0;
    }

    .textOverImage li {
      margin-bottom: 10px;
      line-height: 1.4;
    }

    .textOverImage strong {
      color: #ffff00;
      margin-right: 5px;
    }


    #bild1 .overlay {
      justify-content: flex-start;
      align-items: flex-start;
    }

    #bild2 .textOverImage {
      font-size: 18px;
      line-height: 1.6;
      text-align: center;
    }
  }
}`;
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