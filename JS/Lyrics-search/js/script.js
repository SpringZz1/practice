const form = document.getElementById('form');
const search = document.getElementById('search');
const result = document.getElementById('result');
const more = document.getElementById('more');

const apiURL = 'https://api.lyrics.ovh';

/**
 * Search by song or artist
 */
async function searchSongs(term) {
    const res = await fetch(`${apiURL}/suggest/${term}`);
    const data = res.json();

    showData(data);
}

/**
 * Show song and artist in DOM
 */
function showData(data) {
    result.innerHTML = `
    <ul class="songs">
    ${data.data
    .map(
        song=>`
        <li>
            <span><strong>${song.artist.name}</strong> - ${song.title}</span>
            <button class="btn" data-artist="${song.artist.name}" data-songtitle="${song.title}">Get Lyrics</button>
        </li>
        `)
        .join('')}
    </ul>
    `;

    if(data.prev||data.next){
        more.innerHTML = `
      ${
        data.prev
          ? `<button class="btn" onclick="getMoreSongs('${data.prev}')">Prev</button>`
          : ''
      }
      ${
        data.next
          ? `<button class="btn" onclick="getMoreSongs('${data.next}')">Next</button>`
          : ''
      }
    `;
  } else {
    more.innerHTML = '';
  }
}

/**
 * Get prev and next songs
*/
async function getMoreSongs(url){
    const res=  await fetch(`https://cors-anywhere.herokuapp.com/${url}`);
    const data = res.json();

    showData(data);
}

/**
 * Get lyrics for song
*/
async function getLyrics(artist,songTitle){
    const res = await fetch(`${apiURL}/v1/${artist}/${songTitle}`);
    const data = res.json();

    if(data.error){
        result.innerHTML =data.error;
    }else{
        const lyrics = data.lyrics.replace(/(\r\n|\r|\n)/g, '<br>');

        result.innerHTML = `
        <h2><strong>${artist}</strong> - ${songTitle}</h2>
        <span>${lyrics}</span>
        `;
    }
    more.innerHTML = '';
}

// Event listener
form.addEventListener('submit',e=>{
    e.preventDefault();
    const searchTrim =search.value.trim();

    if(searchTrim){
        alert('Please type in a search term');
    }else{
        searchSongs(searchTrim);
    }
});

// Get lyrics button click
result.addEventListener('click',e=>{
    const clickEl = e.target;

    if(clickEl.tagName==='BUTTON'){
        const artist = clickEl.getAttribute('data-artist');
        const songTitle = clickEl.getAttribute('data-songtitle');

        getLyrics(artist, songTitle);
    }
});