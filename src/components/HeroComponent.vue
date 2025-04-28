
<template>
    <section class="hero bg-center bg-no-repeat h-screen flex items-center justify-center " >
        <div class="heroTextBackround">
        </div>
        <div class="heroContentLeft">
            <div class="heroTextContainer text-center">
                <p> {{ greeting }} </p>
                <p class="text-[#2D2D2D] !text-4xl"> {{ myName }} </p>
                <h2>
                    {{ myPosition }}
                </h2>
                <p>Breathing life into pixels and code. Crafting immersive digital experiences that engage and inspire. From concept to creation, bringing visions to virtual reality.</p>
                <a href="src/assets/CV-resume.pdf" download="CV-resume.pdf" class="download-button">Download CV</a>
            </div>
        </div>
        <div class="heroContentRight">
            <div class="heroImageContainer">
                <img class="heroImage" src="../assets/goooodd-min.jpg" alt="my image">
            </div>
        </div>
    </section>
        
</template>

<script setup>
import { ref } from 'vue';
let greeting = ref('Hello,')
let myName = ref("I'm Mihaela Nedyalkova")
let myPosition= ref('Multimedia Design student')

</script>

<style>
.hero {
    background-color: #ffffff;
    width: 100%;
    height: 100vh;
    height: 93vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.heroTextBackround {
    background-color: #e8d6c6;
    clip-path: polygon(0 10%, 100% 0, 100% 90%, 0 100%);
    opacity: 0.7;
    width: 100%;
    height: 75%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    justify-content: space-evenly;
    position: absolute;
}

.heroContentLeft {
    display: flex;
    flex-direction: row;
    flex: space-evenly;
    justify-content: flex-start;
    text-align: left;
    align-items: center;
    width: 100%;
    height: fit-content;
    position: relative;
    margin: 30px 40px 0 40px;
}

.heroTextContainer {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: auto; 
    height: auto;
    margin-right: 20px;
    margin-left: 20px;
}

.heroContentLeft h2 {
    text-align: left;
    color: #2D2D2D;
    font-size: 45px;
    font-weight: bold;
    margin-bottom: 15px;
    border-bottom: #2D2D2D 3px solid;
}

.heroTextContainer p {
    color: #2D2D2D;
    font-size: 25px;
    text-align: left;
    line-height: 1.5;
    margin-bottom: 10px;
}

.heroContentRight {
    display: flex;
    flex-direction: row;
    flex: space-evenly;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    height: fit-content;
    position: relative;
    margin: 0 40px 0 40px;
}

.heroImageContainer {
    background-color: #ffffff; 
    border-radius: 50%; 
    width: 600px; 
    height: 600px; 
    display: flex; 
    justify-content: right;
    justify-content: center;
    align-items: center;
    position: absolute; 
}

.heroImage {
    width: 90%; 
    height: 90%; 
    object-fit: cover; 
    border-radius: 50%;
    position: inherit;
}

.download-button {
    display: inline-block;
    padding: 10px 20px;
    font-family: Raleway, sans-serif;
    font-weight: 600;
    font-size: 20px;
    background-color: #2d2d2d;
    color: #ffffff;
    border: 1px solid transparent;
    border-radius: 8px;
    text-decoration: none;
    cursor: pointer;
    margin-top: 20px;
    box-sizing: border-box;
}
    
.download-button:hover {
    background-color: #8a7969;
    border: #f3eeea 1px solid;
}

@media (max-width: 768px) {
    .hero {
        flex-direction: column; 
        height: auto; 
        padding: 20px; 
    }

    .heroTextBackround {
        clip-path: none;
        background-color: #e8d6c6;
        height: 43.5%;
        opacity: 0.9; 
    }

    .heroContentLeft {
        margin: 10px 0; 
    }

    .heroTextContainer {
        margin: 0; 
        text-align: center; 
    }

    .heroContentLeft h2 {
        font-size: 24px; 
    }

    .heroTextContainer p {
        font-size: 16px; 
    }

    .heroContentRight {
        margin: 20px 0; 
    }

    .heroImageContainer {
        width: 200px; 
        height: 200px; 
    }

    .download-button {
        font-size: 14px; 
        padding: 6px 12px; 
    }
}

@media (min-width: 769px) and (max-width: 1024px) {
   .heroContentRight{
        margin: 0 10px; 
    }

    .heroImageContainer {
        width: 400px; 
        height: 400px; 
    }

    .heroImage {
        width: 90%; 
        height: 90%; 
    }

    .download-button {
        font-size: 16px; 
        padding: 8px 16px; 
    }
    .heroTextContainer {
        margin: 0 20px; 
    }
}
</style>