# Redditar

Reddit feed app to show 50 top posts. It can be visited [here](https://redditar.herokuapp.com/).

This app is made using React and Redux to handle the state. Some features:

- It uses the [Reddit](https://www.reddit.com/dev/api/) top 50 endpoint to fetch posts.
- Part of the global state is saved on local storage, except the posts to avoid a staled state.
- Posts unread are shown on the sidebar with a blue color on several parts of the card. And they are gray out after been read.
- Possibility of dismissing posts by clicking on the individual dismiss button on cards. Also, support to 'Dismiss all'.
- Sent the user to the full-sized image after clicking the thumbnail.
- 'RESET' button to clean the state saved on local storage. It was added for testing purposes.

TODOs:

- Improve [Accessibility](https://reactjs.org/docs/accessibility.html)
- Improve UX/UI: hover on cards and buttons. Add ab effect after clicking them.
- Add Unit tests. Integration tests.
- Improve small card layout. Fix thumbnail size.
- Fix the last page with empty results. Hide 'DISMISS ALL' when there are no more results.
