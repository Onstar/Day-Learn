module.exports = function (app) {

    app.get('./routes/news/getnews', function (req, res) {
        res.send("bcd");
    })
    app.get('./routes/news/addnews', function (req, res) {
        res.send("bcd");
    })
}