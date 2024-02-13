##### Question can ask:
- what type of notifications does the system support
- is it a real-time system?
- supported devices
- triggers
- opt-out
- how many nitification sent out a day?

##### Different type notification:
    IOS (3 parts):
      - provider (which builds & sends requests to APNS)
      - APNS (Apple Push Notification Service)
      - IOS device
    Android (3 parts):
      - provider
      - FCM (Firebase Cloud Messaging)
      - device
    SMS:
      - third party SMS services like (Twilio, Nexmo)
    Email:
      - self-own email servers, or
      - third party email services (sendgrid, mailchimp)

##### Contact info gathering:
- when users install app or sign up for the first time, servers collect user contact info & store in the DB

##### Sending/Receiving:
  service 1 to N: service that **triggers** notification sending events
      
  notification system: the **centerpice** of sending notifications. It provides APIs to services, and builds notification payloads for third party services

  third-party service: need to pay extra attention to **extensibility**. It means a flexible system that can easily plugging or unplugging of a third-party service.

##### problems:
  - Single point of failure
  - hard to scale
  - performance bottleneck
  
##### deep dive:
  - reliability: **prevent data loss & reduce duplication**
  - additional component: notification template, settings, rate limiting, retry mechanism, security, monitor queued notifications & event tracking
  - updated design