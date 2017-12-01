export default {
    getItem(key) {
        let value;
        try {
            value = localStorage.getItem(key);
        } catch(ex) {
            if (__DEV__) {
                console.error('localStorage.getItem报错');
            }
        } finally {
            return value;
        }
    },
    setItem(key, value) {
        try {
            localStorage.setItem(key, value);
        } catch(ex) {
            if(__DEV__) {
                console.error('localStorage.setItem报错');
            }
        }
    }
}