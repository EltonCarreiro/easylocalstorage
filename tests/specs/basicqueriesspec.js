describe("Get", function() {

    var db;

    beforeEach(function() {
        db = new easyStorage('dbtest', true);
        randomData.map(function(data) {
            db.insert(data);
        });
    });

    describe("single", function() {
        it("should return root property value", function() {
            var expectedValue = randomData[0];
            var result = db.where('index').eq(0).get();
            expect(JSON.stringify(result) === JSON.stringify(expectedValue)).toBe(true);
        });

        it("should return nested property value", function() {
            var expectedValue = "Bark";
            var result = db.where('index').eq(0).get('dog.name');
            expect(result).toEqual(expectedValue);
        });

        it("should return undefined when criteria does not match", function() {
            var result = db.where('index').eq(-99).get('index');
            expect(result).toEqual(undefined);
        });

        it("should throw error when criteria property does not exist", function() {
            function funcToThrow() {
                result = db.where('blablabla').eq(10).get();
            }
            expect(funcToThrow).toThrow();
        });
    });

    describe("all", function() {
        it("should return all root property values", function() {
            var result = db.where('index').greaterThan(-1).getAll();
            expect(JSON.stringify(result) === JSON.stringify(randomData)).toBe(true);
        });

        it("should return all nested property values", function() {
            var expectedValue = randomData.map(function(data) {
                if (data.dog !== undefined && data.dog.name !== undefined)
                    return data.dog.name;
            });

            var result = db.where('index').greaterThan(-1).getAll('dog.name');
            expect(JSON.stringify(result) === JSON.stringify(expectedValue)).toBe(true);
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
        it("should update given properties", function() {

        });
        
        it("should should return true when update succeed", function() {

        });

        it("should return false when criteria does not match", function() {

        });

        it("should throw error when criteria property is not set", function() {

        });

        it("should create target property when it does not exist", function() {

        });
    });


});