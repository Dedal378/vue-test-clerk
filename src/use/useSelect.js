import { ref } from 'vue'

export function useSelect() {
  const activeEl = ref([])

  const toggle = (id) => {
    if (activeEl.value.includes(id)) {
      const idx = activeEl.value.indexOf(id)
      activeEl.value.splice(idx, 1)
    } else {
      activeEl.value.push(id)
    }
  }

  return { activeEl, toggle }
}
