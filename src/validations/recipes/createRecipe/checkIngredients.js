export default (ingredients) => {

    var res = { state: true }

    const check = () => ingredients.forEach((value, index) => {
        for (const key in value) {
            if (value[key] === '') {
                res = {
                    state: false,
                    index: index + 1
                };
            }
        }

    });

    check()

    return res;
}