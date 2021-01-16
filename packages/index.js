import StarrySky from "./starrySky"

const components = [
    StarrySky
]

const install = Vue => {
    if (install.installed) { return }

    components.map(item => {
        Vue.component(item.name, item);
    })
}

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export default {
    install,
    StarrySky
}