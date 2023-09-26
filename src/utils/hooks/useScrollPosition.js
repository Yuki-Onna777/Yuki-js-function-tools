import { ref } from "vue"
export default function useScrollPosition() {
    const scrollX = ref(0)
    const scrollY = ref(0)
    document.onscroll = () => {
        scrollX.value = window.scrollX
        scrollY.value = window.screenY
    }
    return {
        scrollX,
        scrollY
    }
}