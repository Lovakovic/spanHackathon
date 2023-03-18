const testFn  = async (req, res) => {
    try {
        res.json('test succesful');
    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    testFn
}
