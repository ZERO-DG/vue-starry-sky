import StarrySky from "./src/vue-starry-sky.vue"

StarrySky.install = Vue => {
    Vue.component(StarrySky.name, StarrySky);
}

export default StarrySky