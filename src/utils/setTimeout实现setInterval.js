export function kiInterval(timeout) {
    function repaet() {
        setTimeout(() => {
            repaet()
        }, timeout)
    }
    repaet()
}
