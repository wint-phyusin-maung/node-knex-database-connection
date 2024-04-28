exports.testMounting = async function (req, res, next) {
    try {
        res.status(200).json({ message: 'hello world' });
    } catch (error) {
        next(error); // Forward the error to the error handling middleware
    }
}
