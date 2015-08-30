import DS from 'ember-data';

export default DS.RESTSerializer.extend({
    normalizePayload: function(payload) {
    var root = "post";
    var output = {};
    output[root] = [];
    output[root].push(payload);
    return output;
  }
});
