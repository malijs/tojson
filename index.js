const xform = require('mali-transform')

/**
 * Mali <code>toJSON</code> middleware. If the response object has a <code>toJSON</code> function it's executed upon
 * payload. Only applies for <code>UNARY</code> and <code>REQUEST_STREAM</code> call types.
 * @module mali-tojson
 *
 * @example
 * const toJSON = require('mali-tojson')
 *
 * function handler(ctx) {
 *   const obj = {
 *     email: 'bob@gmail.com',
 *     password: 'mysecret'
 *   }
 *
 *   obj.toJSON = function() {
 *     return {
 *       email: this.email
 *     }
 *   }
 *
 *   ctx.res = obj // password will not be in the payload to client
 * }
 *
 * app.use('fn', toJSON(), handler)
 */
module.exports = function () {
  return xform('toJSON')
}
