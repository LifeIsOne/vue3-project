import focus from '@/directives/focus'
import color from '@/directives/color'
import background from '@/directives/background'

export default {
  install(app) {
    app.directive('focus', focus)
    app.directive('color', color)
    app.directive('background', background)
  },
}
