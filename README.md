# 27Works Development Task

This task involves fetching article data, and displaying different content depending on an article's settings and a user's membership status - a reasonably common requirement in our recent client projects. We've simplified it for the purposes of this task.

Using NextJS, the below outlines what we'd like to see implemented. There's absolutely no requirement to make this look good, we have a design department for that :artist: :joy:

We're not necessarily looking for a complete and polished version of this, it's more about making sure we can understand your intentions from the code and any comments. Imagine that another developer (or yourself in six months) will be picking up from where you finish.


1. An article index page which lists the articles (all or some, up to you! ... the API will return ~70 articles).
2. For each article, render the title and a link using the article's `slug` property, with text "Read more".
3. If the article is set as `subscriberOnly: false`, the Read More link should be enabled, otherwise it should be disabled (in any way you like... the text could  change to "Log in to Read More" or "Members Only"... whatever you like)
4. You can show an image for each article if you like - in most cases you'll find a thumbnail image as the first element in a post's `sections` array. If the element contains a property `image` then it should be possible to use the data from that as the thumbnail.
5. If you still have time on your hands, it'd be great to see a basic implementation of a "sign up", using Supabase, Firebase, Passport or whatever authentication system you prefer. If a user signs up _and_ is now logged in, then all the articles marked `subscriberOnly: true` should be enabled.

## GitHub

Please fork this repository and submit a pull request to it when you are ready to show off your great work!

## Questions?

Feel free to email Jim! 

## API Details

Send your API request to our staging server, making sure to include the Authorization header as shown.

### Endpoint
https://noble-rot-api.27.works/1.0/posts

### Access token
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbGllbnRJZCI6ImppbSIsImFjY2Vzc1R5cGUiOiJhZG1pbiIsImlhdCI6MTY1MjA4ODA3OCwiZXhwIjozNTEyMDg4MDc4fQ.gwexr1yGgTvDMjUGPQ2-dZxXoU7XhcSbgVw1NcU8Tb0

### A fetch example

```js
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbGllbnRJZCI6ImppbSIsImFjY2Vzc1R5cGUiOiJhZG1pbiIsImlhdCI6MTY1MjA4ODA3OCwiZXhwIjozNTEyMDg4MDc4fQ.gwexr1yGgTvDMjUGPQ2-dZxXoU7XhcSbgVw1NcU8Tb0'

const response = await fetch('https://noble-rot-api.27.works/1.0/posts', {
  method: 'GET',
  headers: {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json'
  }
})

const data = await response.json()
console.log(data)
```

### Response
The response from this endpoint contains an array of articles in the `results` property, and a `metadata` object which can be ignored. A simplified example response:

```js
{
  results: [
    {
      title: 'Yquem ’21 & Other Stories',
      status: 'Published',
      sections: [],
      slug: 'yquem-21-other-stories'
      subscriberOnly: true,
      ...
    },
    ...
  ],
  metadata: {
     ...
  }
}
```

### Article structure
Each article contains several important properties that you'll need to access:

 * title
 * slug
 * sections (an Array of objects that represent content blocks)
 * subscriberOnly (a Boolean)

### Thumbnail images

A thumbnail image content block should be available as the first element in an article's `sections` array, or the first element that contains an `image` property. The simplified structure of the image content blocks is as below. You can use the `url` property to fetch the image from the server (they should exist on the server, however it's not guaranteed - don't worry if a request fails for an image URL.

```js
{
  "image": [
    {
      "_id": "61dbaf67a5718d6de843de30",
      "_storageType": "disk",
      "contentLength": 323050,
      "fileName": "hoppy1_copy.jpg",
      "height": 1592,
      "mimeType": "image/jpeg",
      "path": "/media/2022/01/10/hoppy1_copy-1641787239570.jpg",
      "width": 1400,
      "url": "https://noble-rot-api.27.works:443/media/2022/01/10/hoppy1_copy-1641787239570.jpg"
    }
  ]
}
```
