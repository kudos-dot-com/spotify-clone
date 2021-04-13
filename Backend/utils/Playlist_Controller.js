
const router = require("express").Router();
// const express = require("express");
const asyncHandler = require("express-async-handler");
const mongoose = require('mongoose');
const PLAYLIST = mongoose.model("Playlist");



// @desc       Add all the songs to the playlist
// @Route      GET/playlist/
// @access      Private/protected
const AddSongsTOplaylist = asyncHandler(async (req, res) => {

    const { /* user, */ url, fav_songs } = req.body;

    if (fav_songs && fav_songs.length === 0) {
        res.send(400);
        throw new Error('NO Songs in the Playlist');
    }

    else {
        //  new object of PLAYLIST type is formed 
        const list = new PLAYLIST({
            user: req.user._id,
            url,
            fav_songs
        })
        const playlist_Created = await list.save();
        res.status(201).json(playlist_Created);
    }
});



// @desc         Get the songs by ID
// @Route       GET/playlist/:id
// @access      Private/protected
const GetPlaylist_byID = asyncHandler(async (req, res) => {

    const singlesong = await PLAYLIST.findById(req.params.id);

    if (singlesong)                                                           // singlesong exsist
        res.send(302);
    else
        res.status(400).json({ err: "Not found single song using ID" });
});



module.exports = { AddSongsTOplaylist, GetPlaylist_byID };