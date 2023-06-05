# Classical-Music-History
This is a website dedicated to classical music history and specifically composers and their stories and lives.

Here is a screenshot of a segment of code that I wrote and how I wrote it (3.2 final project)
![music code](https://github.com/HamzaBustami3/Classical-Music-History/assets/123292262/8341a116-67c7-4a35-a923-56a2d4ab2583)
The code begins by defining an audio variable and assigning it the reference to an HTML audio element with the ID "myAudio". This element will be used to play the audio tracks.
const audio = document.getElementById("myAudio");
The playlist array contains the names or paths of the audio files that make up the playlist. You can customize this array by adding or removing tracks as needed.
const playlist = ["Chopin-Ballade4.mp3", "Liszt-BendictionDeDieuDansLaSolitude.mp3", "Liszt-Liebestraum.mp3", "Brahms-intermezzo.mp3","Schubert-Impromptu3.mp3"];
The currentTrackIndex variable keeps track of the index of the currently playing track in the playlist array. It is initialized to 0, indicating the first track in the playlist.
let currentTrackIndex = 0;
The playNextTrack() function is defined and bound to the "ended" event of the audio element using the addEventListener method. This function is responsible for playing the next track in the playlist when the current track ends.
javascript
Copy code
audio.addEventListener("ended", playNextTrack);
Inside the playNextTrack() function, the currentTrackIndex is incremented to move to the next track. If the index exceeds the length of the playlist, it is reset to 0 to loop back to the first track.
javascript
Copy code
currentTrackIndex++;
if (currentTrackIndex >= playlist.length) {
  currentTrackIndex = 0; // Loop back to the first track
}
The src property of the audio element is updated with the path of the next track using the currentTrackIndex as the index in the playlist array.
javascript
Copy code
audio.src = playlist[currentTrackIndex];
Finally, the audio.play() method is called to start playing the updated track.
javascript
Copy code
audio.play();
By calling the playNextTrack() function initially, the code starts playing the first track in the playlist. Subsequently, each track will automatically transition to the next one when the previous track ends.
To use this code, you need to ensure that you have an HTML audio element with the ID "myAudio" and update the playlist array with the names or paths of the audio files you want to play. You can also customize the behavior or appearance of the audio player by adding additional functionality or applying CSS styles to the HTML elements.
