"use strict";

// Visa slumpade låtar
function showSong() {
    const songs = [
        "Sara Parkman - Vreden",
        "Nice To Meet You - Myles Smith",
        "Where the Wild Things are - Luke Combs",
        "Tompkins Square Park - Mumford & Sons",
        "Back To Black - Amy Winehouse",
        "Good Life - OneRepublic",
        "Swing Life Away - Rise Against",
        "Too Sweet - Hozier",
        "Supermassive Black Hole - Muse"
    ];
    const randomSong = songs[Math.floor(Math.random() * songs.length)];
    document.getElementById("song-display").innerText = randomSong;
}