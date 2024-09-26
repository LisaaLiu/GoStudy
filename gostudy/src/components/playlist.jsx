// SpotifyPlayList component
import React from "react";

const SpotifyPlayList = () => {
    return(
        <div className="absolute left-0 top-0 h-screen flex items-center md:pl-12 z-10">
            <iframe
                className="rounded-lg w-[screen/3] h-2/3"
                src="https://open.spotify.com/embed/playlist/54UWV6PzuZmxW0T27b9Cxs?utm_source=generator&theme=0"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                allowFullScreen
                loading="lazy"
                title="Spotify Playlist"
            ></iframe>
        </div>
    )
}

export default SpotifyPlayList;