##### questions can ask:
  - what king of chat app (1 on 1 || group based)
  - is this a mobile app? web app? or both
  - what is the scale? startup app? or massive scale?
  - what is the group member limit?
  - what features are important? can it support attacgment?
  - is there a message size limit?
  - is end-to-end encryption required?
  - how long we store the chat history?

##### chat services:
  ###### network protocols:
  - client-initiated connection:
    - HTTP ( with **keep-alive** header )
      - pros: reduceds the number of TCP handshakes
      - cons: not trivial to send messages from the server
  - server-initiated connection:
    - polling
      - client periodically asks the server if there are msgs available
      - (cons) it could consume precious resouces to answer a questions that offers no as an answer most of the time
    - long polling
      - client holds the connection open until there are new msgs or a timeout threshold has been reached
      - (cons) sender & receiver may not connect to the same server
      - (cons) server has no good way to tell if a client is disconnected
      - (cons) inefficient. if a user does not chat much...
    - WebSocket
      - sending async updates from server to client
      - connections are persistent, efficient connection management is critical on the server-side

##### High level:
  ###### services
  - stateless services
    - used to manage the login, signup, user profile, etc.
    - it sit behind a **load balancer** whose job is to route requests to the correct services (based on the **request paths**)
  - stateful service
    - the chat service, becuase the need of persistent network connection
    - to avoid **server overloading**, service discovery is needed
  - third-party integration
    - push notification

  ###### scalability
  - the number of **concurrent connections** that a server can handle will most likely be the **limiting factor**
  ###### storage
  - relational DB or NoSQL DB ? -> (data types & read/write patterns)
    - the first is **generic data**, such as user profile, setting, user friends list, etc. => **relational DB** (replication & sharding are common techniques)
    -  the second is **chat history data**, (read/write patterns)
      1. how many messages need to be processed a day
      2. recend chats are most frequent used? how can users access old message data?
      3. the read to write ratio is about 1:1 for 1 on 1 chat apps
  - **key-value stores** (recommonded)
    - it allows easy horizontal scaling
    - it provides very low latency to access data
    - relational DB doesn't handle long tail of data well. When the indexs grow large, random access is expensive
  ###### data models
  - message ID
    - it must be unique & should be sortable by time (meaning the new rows have higher IDs)
    - NoSQL DB usually doesn't provide **"auto-increment" keyword**
    1. global 64-bit sequence number generator (UID)
    2. local sequence number generator. (ID only unique within a group)

##### Deep dive
###### service discovery
  - to recommend the best chat server for a client based on the criteria like geographical location, server capacity, etc.
###### message flows
  - flows between clients, chat servers, kv storage, message sync queue
###### online presence
  - trigger: **user login/logout**, **user disconnection**, **online status fanout**
  - disconnect/reconect would make the presence indicator change too often, so we introduce **heartbeat mechanism** to solve this problem.
  - useing **publish-subscribe model**, to resolve how friends know about the status changes.