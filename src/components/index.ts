import svg_Y from './SvgIcon/index.vue'

const allGlobalComponent = { svg_Y }
export default {
  install(app) {
    console.log(123)
    Object.keys(allGlobalComponent).forEach((key) => {
      app.component(key, allGlobalComponent[key])
    })
  }
}
