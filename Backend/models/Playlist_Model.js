
const mongoose = require('mongoose');


const playlistSchema = new mongoose.Schema({

    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'    // for referring another schema
    },

    url: {
        type: String,
        required: true,
    },

    // array of objects  ------  [{} , {}, {} ]
    fav_songs: [
        {
            url: {
                type: String,
                required: true,
            },
            date_added: {
                type: Date /* String */,
                required: true,
                default: Date.now
            }
        }
    ]

}, { timestamp: true })


const Playlist = mongoose.model('Playlist', playlistSchema);  // playlists in DB


module.exports = Playlist;