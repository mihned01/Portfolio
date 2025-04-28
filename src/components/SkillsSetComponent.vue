<template>
    <section class="skillsSection">
        <div class="skillsContainer">
            <h2>{{ sectionHeading }}</h2>
            <div class="skillsWrapper" ref="skillsWrapper">
                <div class="skillCard" v-for="(item, idx) in skillItems" :key="idx">
                    <img :src="item.image" :alt="item.name" class="skillIcon" />
                    <h3 class="skillTitle">{{ item.name }}</h3>
                    <div class="underline"></div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';

import htmlImage from '@/assets/HTML5_logo-min.png';
import cssImage from '@/assets/CSS3_logo-min.png';
import jsImage from '@/assets/JavaScript-logo-min.png';
import vueImage from '@/assets/vue-logo-min.png';
import tailwindImage from '@/assets/tailwind_css-min.png';
import githubImage from '@/assets/github-icon-min.png';
import figmaImage from '@/assets/Figma-logo-min.png';
import photoshopIcon from '@/assets/Photoshop-min.png';
import illustratorIcon from '@/assets/Illustrator-min.png';
import indesignIcon from '@/assets/InDesign-min.png';
import afterEffectsIcon from '@/assets/After-Effects-Logo-min.png';
import premiereProIcon from '@/assets/Premiere-Pro-min.png';


let sectionHeading = ref('My Skills');

let skillItems = ref([
    { image: htmlImage, name: 'HTML' },
    { image: cssImage, name: 'CSS' },
    { image: jsImage, name: 'JavaScript' },
    { image: vueImage, name: 'Vue.js' },
    { image: tailwindImage, name: 'Tailwind' },
    { image: githubImage, name: 'GitHub' },
    { image: figmaImage, name: 'Figma' },
    { image: photoshopIcon, name: 'Photoshop' },
    { image: illustratorIcon, name: 'Illustrator' },
    { image: indesignIcon, name: 'InDesign' },
    { image: afterEffectsIcon, name: 'After Effects' },
    { image: premiereProIcon, name: 'Premiere Pro' },
]);

const skillsWrapper = ref(null);

onMounted(() => {
    const cards = skillsWrapper.value.querySelectorAll('.skillCard');
    cards.forEach((card) => {
        const icon = card.querySelector('.skillIcon');
        const title = card.querySelector('.skillTitle');
        const underline = card.querySelector('.underline');

        card.addEventListener('mouseenter', () => {
            icon.classList.add('bouncing');
            title.classList.add('titleHover');
            underline.classList.add('underlineExpand');
        });

        card.addEventListener('mouseleave', () => {
            icon.classList.remove('bouncing');
            title.classList.remove('titleHover');
            underline.classList.remove('underlineExpand');
        });
    });
});
</script>


<style>
.skillsSection {
    background-color: #f3eeea;
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

.skillsWrapper {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    height: fit-content;
    margin: 0 40px ;
}

.skillCard {
    background-color: #ffffff;
    width: 350px;
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

.skillCard:hover {
    transform: scale(1.05) translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.skillIcon {
    width: 60px;
    height: 60px;
    margin: 15px;
    display: inline-block;
    transition: transform 0.3s ease;
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

.skillTitle {
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

@media (max-width: 768px) {
    .skillsContainer h2 {
        font-size: 28px; 
    }

    .skillsWrapper {
        flex-direction: column; 
        gap: 15px;
    }

    .skillCard {
        width: 100%; 
        max-width: 280px;
        margin: 10px;
    }

    .skillTitle {
        font-size: 18px; 
    }

    .skillIcon {
        width: 40px;
        height: 40px;
    }
}

</style>