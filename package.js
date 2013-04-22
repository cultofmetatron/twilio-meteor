
Package.describe({
  summary: "Twilio API Wrapper for meteor"
});

Npm.depends({ "twilio": "1.1.0" });

Package.on_use(function(api) {
  api.add_files('twilio_server.js', 'server');
});

