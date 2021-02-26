
const exit =(steps) => {

    var res = { state: true };

    const check = () => {
        steps.forEach(({ stepData }, index) => {
            if (stepData.length < 10) {
                res = {
                    state: false,
                    index: index + 1
                }
            }
        })

    }

    check();
    return res;
}

export default exit