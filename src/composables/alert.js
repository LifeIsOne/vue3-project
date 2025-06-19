import { ref } from 'vue'

export function useAlert() {
  const alerts = ref([])

  const vAlert = (msg, type) => {
    alerts.value.push({ msg, type })
    setTimeout(() => {
      alerts.value.shift()
    }, 3000)
  }
  const vSuccess = (msg) => vAlert(msg, 'success')

  return { alerts, vAlert, vSuccess }
}
