const request = require('request-promise')
// const slackUrl = process.env.SLACK_URL;

function createSlackNotification (data) {
  const slackText =
    '\nSweet :grinning:, your product is pushed in Amazon Marketplace\nHere is the data boss:\n\n```' +
    JSON.stringify(data, null, '    ') +
    '```'

  if (process.env.SLACK_URL) {
    return request.post(
      {
        uri: process.env.SLACK_URL,
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          text: slackText
        })
      },
      error => {
        if (error) console.log(error) /* eslint-disable-line */
      }
    )
  }
}

module.exports = createSlackNotification
