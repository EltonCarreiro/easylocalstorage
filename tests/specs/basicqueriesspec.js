
describe("", function() {
    var db;

    beforeEach(function() {
        db = new easyStorage('dbtest', true);
        randomData.map(function(data) {
            db.insert(data);
        });
    });

    describe("Get", function() {

        describe("single", function() {
            it("should return root property value", function() {
                var expectedValue = randomData[0];
                var result = db.where('index').eq(0).get();
                expect(result).toEqual(expectedValue);
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
                expect(result).toEqual(randomData);
            });

            it("should return all nested property values", function() {
                var expectedValue = randomData.map(function(data) {
                    if (data.dog !== undefined && data.dog.name !== undefined)
                        return data.dog.name;
                });

                var result = db.where('index').greaterThan(-1).getAll('dog.name');
                expect(result).toEqual(expectedValue);
            });

            it("should return an empty array when criteria does not match", function() {
                var result = db.where('index').eq(-99).getAll();
                expect(result).toEqual([]);
            });

            it("should throw error when criteria property does not exist", function() {
                function funcToThrow() {
                    result = db.where('blablabla').eq(10).getAll();
                }
                expect(funcToThrow).toThrow();
            });
        });

    });

    describe("Update", function() {
        describe("single", function() {
            it("should update given properties", function() {
                db.where('index').eq(0).update({ index: 10 });
                var result = db.where('index').eq(10).get('index');
                expect(result).toEqual(10);
            });
            
            it("should return true when update succeed", function() {
                var result = db.where('index').eq(0).update({ index: 10 });
                expect(result).toBe(true);
            });

            it("should return false when criteria does not match", function() {
                var result = db.where('index').eq(-999).update({ index: 10 });
                expect(result).toBe(false);
            });

            it("should throw error when criteria property does not exist", function() {
                function funcToThrow () {
                    db.where('blablabla').eq(10).update({ index: 25 });
                }
                expect(funcToThrow).toThrow();
            });

            it("should do nothing when target property does not exist", function() {
                db.where('index').eq(0).update({ blabla: 10 });
                expect(db.where('index').eq(0).get('blabla')).toEqual(undefined);
            });

        });

        describe("all", function() {
            it("should update given properties", function() {
                db.where('index').eq(0).updateAll({ index: 10 });
                var result = db.where('index').eq(10).get('index');
                expect(result).toEqual(10);
            });
            
            it("should should return true when update succeed", function() {
                var result = db.where('index').eq(0).updateAll({ index: 10 });
                expect(result).toBe(true);
            });

            it("should return false when criteria does not match", function() {
                var result = db.where('index').eq(-999).updateAll({ index: 10 });
                expect(result).toBe(false);
            });

            it("should throw error when criteria property does not exist", function() {
                function funcToThrow () {
                    db.where('blablabla').eq(10).updateAll({ index: 25 });
                }
                expect(funcToThrow).toThrow();
            });

            it("should do nothing when target property does not exist", function() {
                db.where('index').eq(0).updateAll({ blabla: 10 });
                expect(db.where('index').eq(0).get('blabla')).toEqual(undefined);
            });
        });
    });

    describe("Update or Insert", function() {
        describe("Single", function() {
            it("should update given property", function() {

            });

            it("should return true when update suceed", function() {

            });

            it("should return false when criteria does not match", function() {

            });

            it("should throw error when criteria property does not exist", function() {

            });

            it("should create property when target property does not exist", function() {

            });
        });

        describe("All", function(){
            it("should update given property", function() {

            });

            it("should return true when update suceed", function() {

            });

            it("should return false when criteria does not match", function() {

            });

            it("should throw error when criteria property does not exist", function() {

            });

            it("should create property when target property does not exist", function() {

            });
        });
    });

    describe("Replace", function() {
        describe("Single", function() {
            it("should replace target item", function() {

            });

            it("should return true when replace suceed", function() {

            });

            it("should return false when criteria does not match", function() {

            });

            it("should throw error when criteria property doest not exist", function() {

            });
        });

        describe("All", function() {
            it("should replace target item", function() {

            });

            it("should return true when replace suceed", function() {

            });

            it("should return false when criteria does not match", function() {

            });

            it("should throw error when criteria property doest not exist", function() {

            });
        });
    });

    describe("Delete", function() {
        describe("Single", function() {
            it("should delete target property", function() {

            });

            it("should delete target item", function() {

            });

            it("should return true when delete suceed", function() {

            });

            it("should return false when criteria does not match", function() {

            });

            it("should throw error when criteria property doest not exist", function() {

            });
        });

       describe("All", function() {
            it("should delete target property", function() {

            });

            it("should delete target item", function() {

            });

            it("should return true when delete suceed", function() {

            });

            it("should return false when criteria does not match", function() {

            });

            it("should throw error when criteria property doest not exist", function() {

            });
        });
    });
});