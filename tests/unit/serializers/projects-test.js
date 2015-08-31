import { moduleForModel, test } from 'ember-qunit';

moduleForModel('projects', 'Unit | Serializer | projects', {
  // Specify the other units that are required for this test.
  needs: ['serializer:projects']
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  var record = this.subject();

  var serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
