

const router = require("express").Router();
let { AddSongsTOplaylist } = require('../utils/Playlist_Controller.js');


// playlist routes
router.get('/', (req, res) => {
    AddSongsTOplaylist(req.body, res)
})

router.get('/:id', (req, res) => {
    GetPlaylist_byID(req.body, res)
})


module.exports = router;