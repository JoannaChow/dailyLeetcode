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
  - client-initiated connection:
    - HTTP
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
    - WenSocket
      - sending async updates from server to client
      - connections are persistent, efficient connection management is critical on the server-side