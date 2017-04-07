const REDUCERS = {}
export default REDUCERS
export const register = (klass) => {
    if (Array.isArray(klass))
        for(var i in klass) {
            new klass[i]()
        }
    else new klass()
}
