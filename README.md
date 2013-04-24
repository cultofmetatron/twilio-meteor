twilio-meteor
=============

a smart package wrapper for twilio

This smart package exposes the api from
[twilio's npm module](http://twilio.github.io/twilio-node/).


To use it, simply call upon Twilio

####To create a Sms

```javascript

  twilioClient = Twilio(Acc_SID, Auth_token);
    twilioClient.sendSms({
      to:   '+15555555555',
      from: '+15555555555',
      body: 'the twilio send was successful!!'
  },function(err, data) {
    console.log(err, data);
  });

```






