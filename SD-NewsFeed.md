##### problem can ask
  - mobile/web app or both?
  - important feature? 
  - how news feed sorted (by chronological order || topic score)
  - how many friends can a user have
  - traffic volumme
  - can feed contain images, videos or just text

##### feed publishing 
  - API
    - HTTP POST request, sent to the server
    - params: content (text of the post) & auto_token
  - web servers
    - authentication & rate limiting
  - fanout service
    - get friends ids
    - get friends data
    - message queue to fanout workers (to news feed cache)

    - 2 approaches: **fanout on write** & **on read**

##### news feed retrieval 
  - API
    - HTTP GET request
    - params: auth_token
  - media content are stored in CDN for fast retrieval

##### cache architecture
  - 5 layers
    - new feed: IDs of news feeds
    - content: every post data (popular content is in **hot cache**)
    - social graph: user relationship
    - action: liked, replied, or others
    - counters: like, reply, follower, following

