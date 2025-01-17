import React from 'react';
import './App.css';

function AboutUs() {
  return (
    <div className="AboutUs">
      <h1 className='header-socials'><b>Official Media Updates</b></h1>

      <div className="instagram-posts">
        <blockquote
          className="instagram-media"
          data-instgrm-permalink="https://www.instagram.com/p/DEpqhrbImX8/"
          data-instgrm-version="14">
        </blockquote>

        <blockquote 
          className="instagram-media" 
          data-instgrm-permalink="https://www.instagram.com/p/DD9uRzwRqmh/?utm_source=ig_embed&amp;utm_campaign=loading"
          data-instgrm-version="14">
        </blockquote>
        <script async src="https://www.instagram.com/embed.js"></script>
      </div>

    </div>
  );
}

export default AboutUs;
