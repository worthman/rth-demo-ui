import { App } from 'vue'
import Foo from '@rth-demo-ui/foo'
// import component end
import '../scss/index.scss'

const components = [
  Foo
] // components

// 全局动态添加组件
const install = (app: App): void => {
  components.forEach(component => {
    app.component(component.name as string, component)
  })
}

export default {
  install
}
