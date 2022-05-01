# Ownr Developer Candidate Coding Test

## Instructions
1. cd server repo run npm install then npm start to start the server localhost:8800 
2. cd client repo run npm install then npm start to start the client localhost:3000 

## Requirements

The Express server, besides delivering whats required for React, should also provide an API endpoint that will return one of 3 possible lists of photo URLs (please see attached lists). Your React app should make a request to your API endpoint to retrieve a photo list. During this request the React app should show a loading state. Once the photo list has been retrieved the loading state should dismiss and the first photo should be shown. The user should now be able to cycle through the photos using left and right arrow buttons. The user can use the UI to toggle between cat photos, shark photos, or both (when both selected they should arrive in a random order). After each change to the desired list the loading state should be shown just like during the initial load and a new request to the photo API endpoint should be made (i.e. Do not cache the photo lists).

### Do

- Be mindful of when to use props vs. state vs. Hooks vs. Context
- Be RESTful
- ES6+
- Use JS best practices
- Be creative

### Don't

- Use 3rd party image carousels (also - try to avoid 3rd party component libraries unless you are tight on time)
- Over think the problem, there's no trick here

### BONUS

- Show off some cool CSS
- Unit tests
- Add other useful features

## Photo Lists

```
const sharksList = [
 'https://founded.media/hiring/photos/sharks/11261840124_dc9ac72bbe_b.jpg',
 'https://founded.media/hiring/photos/sharks/513197047_2f861d56cb_b.jpg',
 'https://founded.media/hiring/photos/sharks/2989909952_b59500107e_o.jpg',
 'https://founded.media/hiring/photos/sharks/4107884442_3baf8985f2_b.jpg',
 'https://founded.media/hiring/photos/sharks/3822452418_ffa66da89d_o.jpg',
 'https://founded.media/hiring/photos/sharks/3800013954_20fea3a9c9_b.jpg',
 'https://founded.media/hiring/photos/sharks/7109693941_250fc6b246_k.jpg',
 'https://founded.media/hiring/photos/sharks/8592704407_75c3c7ff53_h.jpg',
 'https://founded.media/hiring/photos/sharks/14730744390_cebc28aa86_k.jpg',
 'https://founded.media/hiring/photos/sharks/4936728723_91da549b05_b.jpg',
];
const catsList = [
 'https://founded.media/hiring/photos/cats/14157413946_fea785b4d6_k.jpg',
 'https://founded.media/hiring/photos/cats/16175483119_bd7374d8a8_h.jpg',
 'https://founded.media/hiring/photos/cats/13901304865_a444cf4d34_k.jpg',
 'https://founded.media/hiring/photos/cats/8311701653_49ed80202c_k.jpg',
 'https://founded.media/hiring/photos/cats/13336301695_3c06dd41cc_k.jpg',
 'https://founded.media/hiring/photos/cats/38679744435_66279af67c_k.jpg',
 'https://founded.media/hiring/photos/cats/6393395037_9cda69da1a_b.jpg',
 'https://founded.media/hiring/photos/cats/6977309082_44102ddf51_b.jpg',
 'https://founded.media/hiring/photos/cats/11477923503_bbdf86387d_b.jpg',
 'https://founded.media/hiring/photos/cats/4481336172_7f464f180d_b.jpg'
];
```
