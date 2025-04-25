import {ref} from 'vue'

export const useProjects = () => {
    let workProjects= ref([
        {
            id:1,
            nameOfProjects: "Our World Free Of Plastic",
            year: 2024,
            description: "A promotional campaign for the Global Plactic Treaty",
            projectImage: "https://picsum.photos/800/1200",
            projectSpecifications: {
                task: "For this campaign we had to create a dedicated website and promotional material about the Global Plastic Treaty and the plastic pollution problem that our planet faces.",
                team: "Karolina Martinkovska, Daria Antonescu, Mihaela Nedyalkova",
            },
        },
        {
            id:2,
            nameOfProjects: "Recipe Webpage",
            year: 2024,
            description: "School project ",
            projectImage: "https://picsum.photos/800/1200",
            projectSpecifications: {
                tast: "We had to turn a prototype into a working website. The prototype was made in Figma and the website was made in HTML, CSS and JS.",
                team: "Mihaela Nedyalkova",
            },
        },
        {
            id:3,
            nameOfProjects: "Inphographic Poster",
            year: 2024,
            description: "This is a poster that profides information about the theme of lying",
            projectImage: "https://picsum.photos/800/1200",
            projectSpecifications: {
                tast: "100% sustainable, more text",
                team: true,
                whatIdid: "100% sustainable materials",
            },
        },
        {
            id:4,
            nameOfProjects: "Coffin 1",
            year: 10000,
            description: "This is a coffin",
            projectImage: "https://picsum.photos/800/1200",
            projectSpecifications: {
                tast: "100% sustainable, more text",
                team: true,
                whatIdid: "100% sustainable materials",
            },
        },
        {
            id:5,
            nameOfProjects: "Coffin 1",
            year: 10000,
            description: "This is a coffin",
            projectImage: "https://picsum.photos/800/1200",
            projectSpecifications: {
                tast: "100% sustainable, more text",
                team: true,
                whatIdid: "100% sustainable materials",
            },
        },
        {
            id:6,
            nameOfProjects: "Coffin 1",
            year: 10000,
            description: "This is a coffin",
            projectImage: "https://picsum.photos/800/1200",
            projectSpecifications: {
                tast: "100% sustainable, more text",
                team: true,
                whatIdid: "100% sustainable materials",
            },
        },

    ])
    return {workProjects}
}