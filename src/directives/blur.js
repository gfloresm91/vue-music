// Create a directive what set blur in elements what dont have preview_url
const blur = {}

// el = element, binding = value
function setBlur (el, binding) {
  // insert custom css to element
  el.style.filter = !binding.value ? 'blur(3px)' : 'none'
  el.style.cursor = !binding.value ? 'not-allowed' : 'inherit'

  // Select all a in DOM and disabled or enabled the link
  el.querySelectorAll('button').forEach(button => {
    if (!binding.value) {
      button.setAttribute('disabled', true)
    } else {
      button.removeAttribute('disabled')
    }
  })
}

blur.install = (Vue) => {
  Vue.directive('blur', {
    bind (el, binding) {
      setBlur(el, binding)
    }
  })
}

export default blur
