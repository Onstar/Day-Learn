
module.exports = function (app) {
    app.get("/user/addUsers", function (req, res) {
        res.send("abc");
    })
    app.get("/user/getUsers", (req, res) => {
        res.send("abc")
    })
}