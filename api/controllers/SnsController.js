/**
 * SnsController
 *
 * @description :: Server-side logic for managing sns
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  /**
   * `SnsController.sender()`
	 * curl -H "Content-Type: application/json" -X POST -d '{"message":"xyz","password":"123"}' http://localhost:1337/sender
   */
  sender: function (req, res) {
    var AWS = require('aws-sdk')
    AWS.config.update({region: 'ap-southeast-1'})
    var sns = new AWS.SNS()

    var params = {
      Message: req.body['name'],
      TopicArn: 'Inser SNS topic ARN here'
    }

		var attributes = {};
    Object.keys(req.body['data']).forEach(function (key) {
			attributes[key] = {
				DataType: 'String',
				StringValue: String(req.body['data'][key])
			};
    });

		params['MessageAttributes'] = attributes;

    sns.publish(params, function (err, data) {
      if (err) {
				console.log(err, err.stack);
			}
      else {
				return res.json(data);
			}
    })
  },

  /**
   * `SnsController.receiver()`
   */
  receiver: function (req, res) {
    return res.json({
      todo: 'receiver() is not implemented yet!'
    })
  }
}
