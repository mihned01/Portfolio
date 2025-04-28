<template>
    <section class="certificatesSection">
    <div class="certificatesContainer">
      <h2>My Certificates</h2>
      <div class="certificateWrapper">
        
        <div class="certificateCard">
          <img src="@/assets/Certificate1.png" alt="Fundamentals of Graphic Design">
          <h3 class="certificateTitle">"Fundamentals of Graphic Design"</h3>
          <h4 class="certificatePlace">California Institude of the Arts - Coursera</h4>
          <a href="src/assets/FundamentalsOfGraphicDesign.pdf" target="_blank" class="custom-button">View</a>
        </div>

        <div class="certificateCard">
          <img src="@/assets/Certificate2.png" alt="Introduction to Imagemaking">
          <h3 class="certificateTitle">"Introduction to Imagemaking"</h3>
          <h4 class="certificatePlace">California Institude of the Arts - Coursera</h4>
          <a href="src/assets/IntroductionToImagemaking.pdf" target="_blank" class="custom-button">View</a>
        </div>

        <div class="certificateCard">
          <img src="@/assets/Certificate3.png" alt="Introduction to Typography">
          <h3 class="certificateTitle">"Introduction to Typography"</h3>
          <h4 class="certificatePlace">California Institude of the Arts - Coursera</h4>
          <a href="src/assets/IntroductionToTypography.pdf" target="_blank" class="custom-button">View</a>
        </div>

        <div class="certificateCard">
          <img src="@/assets/Certificate5.png" alt="Introduction to UI Design">
          <h3 class="certificateTitle">"Introduction to UI Design"</h3>
          <h4 class="certificatePlace">University of Minnesota - Coursera</h4>
          <a href="src/assets/IntroductionToUiDesign.pdf" target="_blank" class="custom-button">View</a>
        </div>

        <div class="certificateCard">
          <img src="@/assets/Certificate6.png" alt="Build Wireframes and Low-Fidelity Prototypes">
          <h3 class="certificateTitle">"Build Low-Fidelity Prototypes"</h3>
          <h4 class="certificatePlace">California Institude of the Arts - Coursera</h4>
          <a href="src/assets/BuildWireframes.pdf" target="_blank" class="custom-button">View</a>
        </div>
        
        <div class="certificateCard">
          <img src="@/assets/Certificate8.png" alt="Computer Hardware and Software">
          <h3 class="certificateTitle">"Computer Hardware & Software"</h3>
          <h4 class="certificatePlace">University of California, Irvine - Coursera</h4>
          <a href="src/assets/ComputerHardwareAndSoftware.pdf" target="_blank" class="custom-button">View</a>
        </div>

        <div class="certificateCard">
          <img src="@/assets/Certificate7.png" alt="Management Fundamentals">
          <h3 class="certificateTitle">"Management Fundamentals"</h3>
          <h4 class="certificatePlace">University of Pennsylvania - Coursera</h4>
          <a href="src/assets/ManagementFundamentals.pdf" target="_blank" class="custom-button">View</a>
        </div>

        <div class="certificateCard">
          <img src="@/assets/Certificate7.png" alt="Management Fundamentals">
          <h3 class="certificateTitle">"Data, Security & Privacsy"</h3>
          <h4 class="certificatePlace">University of California, Irvine - Coursera</h4>
          <a href="src/assets/DataSecurityAndPrivacy.pdf" target="_blank" class="custom-button">View</a>
        </div>
  
        
      </div>
    </div>
  </section>
</template>

<script setup>

</script>


<style>
.certificatesSection {
  background-color: #8a7969;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
}

.certificatesContainer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: fit-content;
  margin: 0 40px 40px 40px;
}

.certificatesContainer h2 {
  color: #ffffff;
  font-size: 45px;
  font-weight: bold;
  margin:30px 0 40px 0;
  border-bottom: #ffffff 3px solid;
}

.certificateWrapper {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;  
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    height: fit-content;
    margin: 0 40px ;
}

.certificateCard {
  background-color: #e8d6c6;
  width: 500px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  margin: 40px;
  border-radius: 8px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.certificateCard img {
  width: 100%;
  height: 300px;
  display: inline-block;
  transition: transform 0.3s ease;
  border-radius: 8px;
}

.certificateCard:hover {
  transform: scale(1.05) translateY(-5px); 
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}


.certificateTitle {
    color: #3b352d;
    font-size: 28px;
    font-weight: bold;
    margin: 15px 10px 0 10px;
    display: inline-block;
    text-align: center;
    transition: color 0.3s ease, transform 0.3s ease;
}

.certificatePlace {
    color: #3b352d;
    font-size: 20px;
    font-weight: 400;
    margin: 5px 10px 0 10px;
    display: inline-block;
    text-align: center;
}

.titleHover {
  color: #ceb199;
  transform: translateY(-5px);
}

.certificateCard a {
  display: inline-block;
  width: 130px;
  padding: 10px 20px;
  font-family: Raleway, sans-serif;
  font-weight: 600;
  font-size: 20px;
  background-color: #2d2d2d;
  color: #ffffff;
  display: flex;
  justify-content: center;
  border: none;
  border-radius: 8px;
  text-decoration: none;
  cursor: pointer;
  margin-top: 20px;
  }
    
  .certificateCard a:hover {
    background-color: #8a7969;
  }

@media (max-width: 768px) {
  .certificatesContainer h2 {
    font-size: 28px; 
  }

  .certificateWrapper {
    flex-direction: column; 
    gap: 15px; 
  }

  .certificateCard {
    width: 100%; 
    max-width: 300px;
    margin: 30px; 
  }

  .certificateTitle {
    font-size: 18px; 
  }

  .certificateCard a {
    font-size: 14px; 
    padding: 12px 12px; 
  }      
}
</style>