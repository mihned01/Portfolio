<template>
    <section class="skillsSection">
    <div class="skillsContainer">
      <h2>My Projects</h2>
      <div class="cardsWrapper">
        
        <div class="productCard">
          <img src="@/assets/plastic-min.png" alt="Our World Free of Plastic">
          <h3 class="productTitle">Our World Free of Plastic</h3>
          <div class="underline"></div>
          <a href="https://mihned01.github.io/1st-semester_project/" target="_blank" class="custom-button">View</a>
        </div>

        <div class="productCard">
          <img src="@/assets/RecipeWebpage-min.png" alt="Recipe Webpage">
          <h3 class="productTitle">Recipe Webpage</h3>
          <div class="underline"></div>
          <a href="https://mihned01.github.io/Recipe-Webpage-2024/" target="_blank" class="custom-button">View</a>
        </div>

       
        <div class="productCard">
          <img src="@/assets/centrum-min.png" alt="Esbjerg Centrum">
          <h3 class="productTitle">Esbjerg Centrum Catalogue</h3>
          <div class="underline"></div>
          <a href="src/assets/Catalogue.pdf" download="Catalogue.pdf" class="custom-button">View</a>
        </div>

        
        <div class="productCard">
          <img src="@/assets/FashionApp-mockup-min.png" alt="App Prototype">
          <h3 class="productTitle">App Prototype</h3>
          <div class="underline"></div>
          <a href="https://www.figma.com/proto/vcIZqhSDZSeXHoivHBam3k/Fashion-app?page-id=0%3A1&node-id=15-122&starting-point-node-id=15%3A122&t=uphpvKAlBmF01k0b-1" target="_blank" class="custom-button">View</a>
        </div>

    
        <div class="productCard">
          <img src="@/assets/poster-min.png" alt="Poster">
          <h3 class="productTitle">Inphographic poster</h3>
          <div class="underline"></div>
          <a href="src/assets/Lies-poster.pdf" download="Lies-poster.pdf" class="custom-button">Download</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>

</script>


<style>
.skillSection {
    background-color: #ceb199;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px 20px;
}

.skillsContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: fit-content;
    margin: 0 40px 40px 40px;
}

.skillsContainer h2 {
    color: #2d2d2d;
    font-size: 45px;
    font-weight: bold;
    margin:30px 0 40px 0;
    border-bottom: #2d2d22 3px solid;
}

.cardsWrapper {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    height: fit-content;
    margin: 0 40px ;
}

.productCard {
    background-color: #ffffff;
    width: 400px;
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

.productCard img {
    width: 100%;
    height: auto;
    display: inline-block;
    transition: transform 0.3s ease;
    border-radius: 8px;
}

.productCard:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}


.bouncing {
    animation: bounce 0.6s infinite alternate;
}

@keyframes bounce {
    0% {
        transform: translateY(0);
    }
    100% {
        transform: translateY(-10px);
    }
}

.productTitle {
    color: #3b352d;
    font-size: 28px;
    font-weight: bold;
    margin: 15px 10px 0 10px;
    display: inline-block;
    text-align: center;
    transition: color 0.3s ease, transform 0.3s ease;
}

.titleHover {
    color: #ceb199;
    transform: translateY(-5px);
}

.underline {
    width: 0;
    height: 3px;
    background-color: #ceb199;
    margin: 0 auto;
    margin-top: -5px;
    margin-bottom: 15px;
    transition: width 0.3s ease;
}

.underlineExpand {
    width: calc(100% - 30px); 
}

.productCard a {
      display: inline-block;
      width: 150px;
      height: 50px;
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
    .productCard a:hover {
      background-color: #8a7969;
    }

    @media (max-width: 768px) {
    .skillsContainer h2 {
        font-size: 28px; 
    }

    .cardsWrapper {
        flex-direction: column; 
        gap: 15px; 
    }

    .productCard {
        width: 100%; 
        max-width: 300px; 
    }

    .productTitle {
        font-size: 18px; 
    }

    .productCard a {
        font-size: 14px; 
        padding: 6px 12px; 
    }
}
</style>