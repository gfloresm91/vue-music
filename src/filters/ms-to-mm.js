// Create a object
const msToMm = {}

// Function for convertion logic
function covertMsToMm (ms) {
  const min = Math.floor(ms / 60000)
  const sec = ((ms % 60000 / 1000).toFixed(0))

  return `${min}:${sec}`
}

// install determ msToMm is global in project
// set a Vue instance for msToMm and create a filter
msToMm.install = function (Vue) {
  Vue.filter('ms-to-mm', (val) => {
    return covertMsToMm(val)
  })
}

// Export the filter created
export default msToMm
