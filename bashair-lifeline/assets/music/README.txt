PUT YOUR SONG HERE
==================
1. Drop an audio file into this folder.
2. Name it: song.mp3        (or keep another name)
3. Open script.js and edit the CONFIG.music block near the top:
       music: {
         src:   'assets/music/song.mp3',   // <- your file
         title: 'Our song',                // <- what shows in the player
         artist: 'Artist — Title'
       }

Notes
-----
* Nothing ever autoplays. She presses play herself.
* .mp3 works everywhere. .m4a and .ogg work in most browsers.
* If the file is missing the player quietly shows a hint instead of breaking.
* Keep it under ~8 MB so mobile visitors are not punished.
