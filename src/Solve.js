
const obj = {

    add(...theArgs) {

        return theArgs.reduce((a, b) => a + b)
    },

    multiply(...theArgs) {
        return theArgs.reduce((a, b) => a * b)

    },
    divide(...theArgs) {
        return theArgs.reduce((a, b) => a / b)

    }
}


export default obj