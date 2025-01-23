"use strict";

let currentSong = 0;

// Visa låtar
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

    // Visa låtar i turordning och börja om när sista visats
    document.getElementById("song-display").innerText = songs[currentSong];
    currentSong = (currentSong + 1) % songs.length;
}