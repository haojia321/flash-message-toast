// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by flash-message-toast.js.
import { name as packageName } from "meteor/haojia321:flash-message-toast";

// Write your tests here!
// Here is an example.
Tinytest.add('flash-message-toast - example', function (test) {
  test.equal(packageName, "flash-message-toast");
});
