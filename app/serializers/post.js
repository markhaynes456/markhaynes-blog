import DS from 'ember-data';

export default DS.RESTSerializer.extend({
    normalizePayload: function(payload) {
    var root = "posts";
    var output = {};
    output[root] = payload;
    return output;
  }
});
