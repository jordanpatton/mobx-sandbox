# React State Management Sandbox

## Overview
This is a simple sandbox to compare different state management strategies for building a
React web application. The server exposes two strategies: RESTful JSON API and GraphQL via
Apollo Server. The client implements three strategies: Redux, MobX, and GraphQL via Apollo
Client. To start the server first `npm install`, then `npm run webpack:production`, and
then `node index.js`. To view the client applications visit
[http://localhost:3000/dist](http://localhost:3000/dist).

## Useful Links
- General
  - https://www.valentinog.com/blog/react-webpack-babel/
  - https://meyerweb.com/eric/tools/css/reset/
- Redux
  - https://redux.js.org/introduction/getting-started
- MobX
  - https://mobx.js.org/best/decorators.html
  - https://mobx.js.org/refguide/array.html
  - https://github.com/mobxjs/mobx-react
  - https://mobx.js.org/best/actions.html
- GraphQL
  - https://www.youtube.com/watch?v=ed8SzALpx1Q
  - https://github.com/iamshaunjp/graphql-playlist/blob/lesson-36/server/schema/schema.js
  - Apollo Server
    - https://www.apollographql.com/docs/apollo-server/essentials/server
    - https://www.apollographql.com/docs/apollo-server/essentials/data
    - https://github.com/apollographql/apollo-server-tutorial/tree/master/data
  - Apollo Client
    - https://www.apollographql.com/docs/react/
    - https://reactjs.org/docs/render-props.html
    - https://reactjs.org/docs/context.html
      - https://github.com/facebook/react/issues/13969 (put context in a separate file)
    - https://www.apollographql.com/docs/react/api/react-apollo#graphql-config-options-fetchPolicy
    - https://spectrum.chat/apollo/general/cant-get-simple-client-only-route-data-sample-working~23502776-f025-46a4-a311-27c45bb7402a

## Screencast
![screencast](documentation/react-state-management-sandbox-1.gif)
