var easyStorage = require('../easylocalstorage.js');

var db = new easyStorage('getSpec');

describe("Get", function() {

    describe("single", function() {
        it("should return root property value", function() {

        });

        it("should return nested property value", function() {

        });

        it("should return undefined when criteria does not match", function() {

        });

        it("should throw error when criteria property is not set", function() {

        });

        it("should throw error when target property does not exist", function() {

        });
    });

    describe("all", function() {
        it("should return all root property values", function() {

        });

        it("should return all nested property values", function() {

        });

        it("should return an empty array when criteria does not match", function() {

        });

        it("should throw error when criteria property is not set", function() {

        });

        it("should throw error when target property does not exist", function() {

        });
    });

});

describe("Update", function() {
    describe("single", function() {
        it("should update given properties", function() {

        });
        
        it("should should return true when update succeed", function() {

        });

        it("should return false when criteria does not match", function() {

        });

        it("should throw error when criteria property is not set", function() {

        });

        it("should do nothing when target property does not exist", function() {

        });

    });

    describe("all", function() {

    });


});