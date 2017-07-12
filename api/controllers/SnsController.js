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
    return res.json({
      todo: 'sender() is not implemented yet!'
    });
  },


  /**
   * `SnsController.receiver()`
   */
  receiver: function (req, res) {
    return res.json({
      todo: 'receiver() is not implemented yet!'
    });
  }
};
