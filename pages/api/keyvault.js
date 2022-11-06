export default function handler(req, res) {
  res
    .status(200)
    .json({
    apikey: 'B0XtRdsCpt9ih9vUSDRnqtt-aFWlQz-5',
    });
    var now = new Date(Date.now())
    process.stdout.write('Key Request Received: ' + now + "\n" )
}
