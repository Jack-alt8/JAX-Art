const express = require("express");
const router = express.Router();
const fetch = require("node-fetch");

const fetchApi = async (searchText) => {
    const url = '=${searchText}&=${process.env.AWS_ACCESS_ID}';
    try {
        const apiStream = await fetch(url);
        const apiJson = await apiStream.json();
        return appJson;
    } catch (err) {
        return { Error: err.stack };
    }
};

router.get("/", (req, res) => {
    res.json({ success: "Hello Api!"});
});

router.get("/:searchText", async (req, res) => {
    const searchText = req.params.searchText;
    const data = await fetchApi(searchText);
    res.json(data);
});

router.post("/", async (req, res) => {
    const searchText = req.body.searchText;
    const data = await fetchApi(searchText);
    res.json(data);
})

module.exports = router;