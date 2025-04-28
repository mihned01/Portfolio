<template>
    <section class="productsSection">
    <div class="productsContainer">
      <h2>My Projects</h2>
      <div class="productWrapper">
        
        <div class="productCard">
          <img src="@/assets/plastic-min.png" alt="Our World Free of Plastic">
          <h3 class="productTitle">"Our Planet Free of Plastic"</h3>
          <h4 class="productRole">My role: Web developer</h4>
          <a href="https://mihned01.github.io/1st-semester_project/" target="_blank" class="custom-button">View</a>
        </div>

        <div class="productCard">
          <img src="@/assets/RecipeWebpage-min.png" alt="Recipe Webpage">
          <h3 class="productTitle">Recipe Webpage</h3>
          <h4 class="productRole">My role: Web developer</h4>
          <a href="https://mihned01.github.io/Recipe-Webpage-2024/" target="_blank" class="custom-button">View</a>
        </div>
        
        <div class="productCard">
          <img src="@/assets/FashionApp-mockup-min.png" alt="App Prototype">
          <h3 class="productTitle">Fashion App Prototype</h3>
          <h4 class="productRole">My role: UX Designer</h4>
          <a href="https://www.figma.com/proto/vcIZqhSDZSeXHoivHBam3k/Fashion-app?page-id=0%3A1&node-id=15-122&starting-point-node-id=15%3A122&t=uphpvKAlBmF01k0b-1" target="_blank" class="custom-button">View</a>
        </div>

        <div class="productCard">
          <img src="@/assets/videoPortfolio.jpg" alt="Video Application">
          <h3 class="productTitle">My Multimedia Application Video</h3>
          <h4 class="productRole">My role: Video editor</h4>
          <a href="https://youtu.be/l8IOkG6TJkA" target="_blank" class="custom-button">View</a>
        </div>

        <div class="productCard">
          <img src="@/assets/centrum-min.png" alt="Esbjerg Centrum">
          <h3 class="productTitle">Esbjerg Centrum Catalogue</h3>
          <h4 class="productRole">My role: Content creator</h4>
          <a href="src/assets/Catalogue.pdf" target="_blank" class="custom-button">View</a>
        </div>

        <div class="productCard">
          <img src="@/assets/poster-min.png" alt="Poster">
          <h3 class="productTitle">Inphographic poster</h3>
          <h4 class="productRole">My role: Content creator</h4>
          <a href="src/assets/Lies-poster.pdf" target="_blank" class="custom-button">View</a>
        </div>

        
      </div>
    </div>
  </section>
</template>

<script setup>

</script>


<style>
.productsSection {
  background-color: #f3eeea;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
}

.productsContainer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: fit-content;
  margin: 0 40px 40px 40px;
}

.productsContainer h2 {
    color: #2d2d2d;
    font-size: 45px;
    font-weight: bold;
    margin:30px 0 40px 0;
    border-bottom: #2d2d2d 3px solid;
}

.productWrapper {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;  
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    height: fit-content;
    margin: 0 40px ;
}

.productCard {
  background-color: #ffffff;
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

.productCard img {
  width: 100%;
  height: 300px;
  display: inline-block;
  transition: transform 0.3s ease;
  border-radius: 8px;
}

.productCard:hover {
  transform: scale(1.05) translateY(-5px); 
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
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

.productRole {
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


.productCard a {
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
    
  .productCard a:hover {
    background-color: #8a7969;
  }

@media (max-width: 768px) {
  .productsContainer h2 {
    font-size: 28px; 
  }

  .productWrapper {
    flex-direction: column; 
    gap: 15px; 
  }

  .productCard {
    width: 100%; 
    max-width: 300px;
    margin: 30px; 
  }

  .productTitle {
    font-size: 18px; 
  }

  .productCard a {
    font-size: 14px; 
    padding: 12px 12px; 
  }      
}
</style>