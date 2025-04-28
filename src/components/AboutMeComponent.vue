
<template>
    <section class="about bg-center bg-no-repeat h-screen flex items-center justify-center " >
        <div class="aboutMeContainer">
            <h2> {{ aboutHeading }} </h2>
            <p> {{ introductuion }} </p>
            <a href="https://www.youtube.com/watch?v=KR5YSX2Lkko" target="_blank" rel="noopener noreferrer">Watch Video CV</a>
        </div>
        <div class="workProcessContainer">
            <h2> {{ workHeading }}</h2>
            <div class="cardsContainer" ref="cardsContainer">
                <div class="card" v-for="(card, index) in cards" :key="index">
                    <span :class="card.icon"></span>
                    <h3>{{ card.title }}</h3>
                    <p>{{ card.description }}</p>
                </div>
            </div>
        </div>
    </section>
        
</template>

<script setup>
import { ref, onMounted } from 'vue';

let aboutHeading= ref('About me')
let introductuion= ref('Hello! I\'m Mihaela, a multimedia design student with a keen interest in creating efficient and user-friendly applications. I\'m passionate about bringing ideas to life through design, motion, and storytelling.')
let workHeading= ref('My Work Porcess')

let cards = ref([
    { icon: 'cardIcon fa-solid--lightbulb', title: '1. Ideation', description: 'Brainstorming innovative solutions' },
    { icon: 'cardIcon fa6-solid--pencil', title: '2. Planning', description: 'Detailed project planning and architecture design' },
    { icon: 'cardIcon fa--gears', title: '3. Development', description: 'Agile development with regular client check-ins' },
    { icon: 'cardIcon fa6-solid--rocket', title: '4. Launch', description: 'Thorough testing and smooth deployment' },
]);

const cardsContainer = ref(null);

onMounted(() => {
    const cards = cardsContainer.value.querySelectorAll('.card');
    cards.forEach((card) => {
        card.addEventListener('mouseenter', () => {
            card.classList.add('hovered');
        });
        card.addEventListener('mouseleave', () => {
            card.classList.remove('hovered');
        });
    });
})

</script>

<style>
.about {
    background-color: #8a7969;
    width: auto;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.aboutMeContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: fit-content;
    margin: 0 40px 0 40px;
}


.aboutMeContainer h2 {
    color: #ffffff;
    font-size: 45px;
    font-weight: bold;
    margin:40px 0 40px 0;
    border-bottom: #ffffff 3px solid;
}

.aboutMeContainer p {
    color: #ffffff;
    width: 60%;
    font-size: 25px;
    text-align: center;
    line-height: 1.5;
    margin-bottom: 10px;
}

.aboutMeContainer a {
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
.aboutMeContainer a:hover {
    background-color: #8a7969;
    border: #f3eeea 1px solid;
}

.workProcessContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: fit-content;
    margin: 0 40px 40px 40px;
}

.workProcessContainer h2 {
    color: #ffffff;
    font-size: 45px;
    font-weight: bold;
    margin:40px ;
    border-bottom: #ffffff 3px solid;
}

.cardsContainer {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    height: fit-content;
    margin: 40px 40px 0 40px;
}


.card h3 {
    color: #2d2d2d;
    font-size: 28px;
    font-weight: bold;
}

.card p {
    color: #2d2d2d;
    font-size: 22px;
    text-align: center;
    line-height: 1.5;
    margin: 0 15px 20px 15px;
} 

.card span {
    margin: 30px;
    display: inline-block;
    transition: transform 0.3s ease;
}

.card:hover span {
    transform: scale(1.2);
}

.card {
    position: relative;
    z-index: 2;
    transform-style: preserve-3d;
    background-color: #ffffff;
    width: 360px;
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
    border-radius: 8px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.card * {
  position: relative;
  z-index: 3;
}

.card::before {
  content: '';
  position: absolute;
  top: -10px;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #ceb199;
  border-radius: 8px;
  transform: rotate(-5deg) translateZ(-1px);
  z-index: 1;
  transition: transform 0.3s ease, top 0.3s ease;
}

.card.hovered {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.card.hovered::before {
    transform: rotate(0deg) translateZ(-1px);
    top: -15px;
}


.fa-solid--lightbulb {
  display: inline-block;
  width: 45px;
  height: 45px;
  color: #2d2d2d;
  --svg: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 352 512'%3E%3Cpath fill='%23000' d='M96.06 454.35c.01 6.29 1.87 12.45 5.36 17.69l17.09 25.69a31.99 31.99 0 0 0 26.64 14.28h61.71a31.99 31.99 0 0 0 26.64-14.28l17.09-25.69a32 32 0 0 0 5.36-17.69l.04-38.35H96.01zM0 176c0 44.37 16.45 84.85 43.56 115.78c16.52 18.85 42.36 58.23 52.21 91.45c.04.26.07.52.11.78h160.24c.04-.26.07-.51.11-.78c9.85-33.22 35.69-72.6 52.21-91.45C335.55 260.85 352 220.37 352 176C352 78.61 272.91-.3 175.45 0C73.44.31 0 82.97 0 176m176-80c-44.11 0-80 35.89-80 80c0 8.84-7.16 16-16 16s-16-7.16-16-16c0-61.76 50.24-112 112-112c8.84 0 16 7.16 16 16s-7.16 16-16 16'/%3E%3C/svg%3E");
  background-color: currentColor;
  -webkit-mask-image: var(--svg);
  mask-image: var(--svg);
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-size: 100% 100%;
  mask-size: 100% 100%;
}

.fa6-solid--pencil {
  display: inline-block;
  width: 45px;
  height: 45px;
  color: #2d2d2d;
  --svg: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23000' d='m410.3 231l11.3-11.3l-33.9-33.9l-62.1-62.1l-33.9-33.9l-11.3 11.3l-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2l199.2-199.2zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9l-78.2 23l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7l-14.4 14.5l-22.6 22.6l-11.4 11.3l33.9 33.9l62.1 62.1l33.9 33.9l11.3-11.3l22.6-22.6l14.5-14.5c25-25 25-65.5 0-90.5l-39.3-39.4c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6'/%3E%3C/svg%3E");
  background-color: currentColor;
  -webkit-mask-image: var(--svg);
  mask-image: var(--svg);
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-size: 100% 100%;
  mask-size: 100% 100%;
}

.fa--gears {
  display: inline-block;
  width: 50px;
  height: 50px;
  color: #2d2d2d;
  --svg: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1920 1792'%3E%3Cpath fill='%23000' d='M896 896q0-106-75-181t-181-75t-181 75t-75 181t75 181t181 75t181-75t75-181m768 512q0-52-38-90t-90-38t-90 38t-38 90q0 53 37.5 90.5t90.5 37.5t90.5-37.5t37.5-90.5m0-1024q0-52-38-90t-90-38t-90 38t-38 90q0 53 37.5 90.5T1536 512t90.5-37.5T1664 384m-384 421v185q0 10-7 19.5t-16 10.5l-155 24q-11 35-32 76q34 48 90 115q7 11 7 20q0 12-7 19q-23 30-82.5 89.5T999 1423q-11 0-21-7l-115-90q-37 19-77 31q-11 108-23 155q-7 24-30 24H547q-11 0-20-7.5t-10-17.5l-23-153q-34-10-75-31l-118 89q-7 7-20 7q-11 0-21-8q-144-133-144-160q0-9 7-19q10-14 41-53t47-61q-23-44-35-82l-152-24q-10-1-17-9.5T0 987V802q0-10 7-19.5T23 772l155-24q11-35 32-76q-34-48-90-115q-7-11-7-20q0-12 7-20q22-30 82-89t79-59q11 0 21 7l115 90q34-18 77-32q11-108 23-154q7-24 30-24h186q11 0 20 7.5t10 17.5l23 153q34 10 75 31l118-89q8-7 20-7q11 0 21 8q144 133 144 160q0 8-7 19q-12 16-42 54t-45 60q23 48 34 82l152 23q10 2 17 10.5t7 19.5m640 533v140q0 16-149 31q-12 27-30 52q51 113 51 138q0 4-4 7q-122 71-124 71q-8 0-46-47t-52-68q-20 2-30 2t-30-2q-14 21-52 68t-46 47q-2 0-124-71q-4-3-4-7q0-25 51-138q-18-25-30-52q-149-15-149-31v-140q0-16 149-31q13-29 30-52q-51-113-51-138q0-4 4-7q4-2 35-20t59-34t30-16q8 0 46 46.5t52 67.5q20-2 30-2t30 2q51-71 92-112l6-2q4 0 124 70q4 3 4 7q0 25-51 138q17 23 30 52q149 15 149 31m0-1024v140q0 16-149 31q-12 27-30 52q51 113 51 138q0 4-4 7q-122 71-124 71q-8 0-46-47t-52-68q-20 2-30 2t-30-2q-14 21-52 68t-46 47q-2 0-124-71q-4-3-4-7q0-25 51-138q-18-25-30-52q-149-15-149-31V314q0-16 149-31q13-29 30-52q-51-113-51-138q0-4 4-7q4-2 35-20t59-34t30-16q8 0 46 46.5t52 67.5q20-2 30-2t30 2q51-71 92-112l6-2q4 0 124 70q4 3 4 7q0 25-51 138q17 23 30 52q149 15 149 31'/%3E%3C/svg%3E");
  background-color: currentColor;
  -webkit-mask-image: var(--svg);
  mask-image: var(--svg);
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-size: 100% 100%;
  mask-size: 100% 100%;
}

.fa6-solid--rocket {
  display: inline-block;
  width: 45px;
  height: 45px;
  color: #2d2d2d;
  --svg: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23000' d='M156.6 384.9L125.7 354c-8.5-8.5-11.5-20.8-7.7-32.2c3-8.9 7-20.5 11.8-33.8H24c-8.6 0-16.6-4.6-20.9-12.1s-4.2-16.7.2-24.1l52.5-88.5c13-21.9 36.5-35.3 61.9-35.3H200c2.4-4 4.8-7.7 7.2-11.3C289.1-4.1 411.1-8.1 483.9 5.3c11.6 2.1 20.6 11.2 22.8 22.8c13.4 72.9 9.3 194.8-111.4 276.7c-3.5 2.4-7.3 4.8-11.3 7.2v82.3c0 25.4-13.4 49-35.3 61.9l-88.5 52.5c-7.4 4.4-16.6 4.5-24.1.2S224 496.7 224 488V380.8c-14.1 4.9-26.4 8.9-35.7 11.9c-11.2 3.6-23.4.5-31.8-7.8zM384 168a40 40 0 1 0 0-80a40 40 0 1 0 0 80'/%3E%3C/svg%3E");
  background-color: currentColor;
  -webkit-mask-image: var(--svg);
  mask-image: var(--svg);
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-size: 100% 100%;
  mask-size: 100% 100%;
}

@media (max-width: 768px) {
    .about {
        padding: 10px; 
    }

    .aboutMeContainer h2,
    .workProcessContainer h2 {
        font-size: 28px; 
    }

    .aboutMeContainer p {
        font-size: 16px; 
    }

    .aboutMeContainer a {
        font-size: 14px; 
        padding: 6px 12px; 
    }

    .cardsContainer {
        gap: 15px; 
        display: flex;  
        flex-wrap: wrap;
    }

    .card {
        width: 100%; 
        max-width: 280px; 
        margin: 10px;
    }

    .card h3 {
        font-size: 18px; 
    }

    .card p {
        font-size: 14px; 
    }

    .card span {
        width: 35px; 
        height: 35px; 
    }
}

</style>