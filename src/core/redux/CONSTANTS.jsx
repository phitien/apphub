const CONSTANTS = {}
export default CONSTANTS
export const register = (klass) => {
    if (Array.isArray(klass))
        for(var i in klass) {
            if (klass[i]) CONSTANTS[klass[i].name] = klass[i].name
        }
    else if (klass) CONSTANTS[klass.name] = klass.name
}
