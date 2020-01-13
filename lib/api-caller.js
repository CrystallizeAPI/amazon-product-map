const request = require('request-promise')
const xmlMapper = require('./xml-mapper')
const config = require('../config')

const {
  AMAZON_FEED_URL,
  MWS_AUTH_TOKEN,
  AWS_ACCESS_KEY_ID,
  SELLER_ID,
  ACTION,
  SIG_METHOD,
  SIG_VERSION,
  API_VERSION
} = config

const amazonFeedCall = data => {
  return request.post(
    {
      uri: AMAZON_FEED_URL,
      headers: {
        'Content-Type': 'text/xml'
      },
      body: {
        AWSAccessKeyId: AWS_ACCESS_KEY_ID,
        Action: ACTION,
        SellerId: SELLER_ID,
        MWSAuthToken: MWS_AUTH_TOKEN,
        FeedContent: xmlMapper.map(data),
        SignatureMethod: SIG_METHOD,
        SignatureVersion: SIG_VERSION,
        Timestamp: new Date(),
        Version: API_VERSION,
        FeedType: '_POST_PRODUCT_DATA_'
      }
    },
    error => {
      if (error) console.log(error) /* eslint-disable-line */
    }
  )
}

module.exports = amazonFeedCall
