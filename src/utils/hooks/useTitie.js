import { watch, ref } from 'vue'
export default function useTitle(titleV) {
    const title = ref(titleV)
    watch(title, (newV, oldV) => { document.title = newV }, { immediate: true })
    return title
}