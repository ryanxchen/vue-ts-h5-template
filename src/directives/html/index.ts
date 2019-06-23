import { DirectiveOptions } from 'vue'

export const html: DirectiveOptions = {
  bind (el, binding) {
    console.log(el, binding)
  }
}
