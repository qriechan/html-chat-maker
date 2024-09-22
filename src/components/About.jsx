import React from 'react'

function About() {
  return (
    <div>
        <h2>Quick guide to HTML chat maker</h2>
        <p>1. Use the visual editors to input your text</p>
        <p>2. Click export HTML</p>
        <p>3. Paste the exported HTML into your target document</p>
        <p>4. Go to the workskins page and copy the CSS</p>
        <p>5. Paste the CSS into the workskins section of the posting page (or wherever else you're calling the CSS)</p>
        <h4>Done!</h4>
        <br />
        <h2>Troubleshooting Q&A</h2>
        <h3>General</h3>
        <p>Q: My image is not displaying! How do I fix it?</p>
        <blockquote>A: Make sure the URL you paste into the text box is from "Copy image address" or otherwise a DIRECT LINK (you can host images on <a href='https://postimages.org'>postimages.org</a>). The link should include an image file extension, i.e. ".jpg", ".png", ".webp" and so on. On iOS, if you're saving an image directly from the website (not from Google search), it's probably the right link!</blockquote>
        <h3>For iOS messages</h3>
        <p>Q: Two or more of my contacts have the same name. How do I make it so they can appear differently?</p>
        <blockquote>A: Add a space (or multiple spaces) after the different contacts' names.</blockquote>
        <p>Q: I want to display all the contact names except 1. How do I do this?</p>
        <blockquote>A: Leave the contact name text box blank. (No spaces!)</blockquote>
    </div>
  )
}

export default About