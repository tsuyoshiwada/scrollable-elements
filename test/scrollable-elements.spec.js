import assert from "power-assert"
import {
  findAll,
  find
} from "../scrollable-elements"


describe("scrollable-elements", () => {
  before(() => {
    document.body.innerHTML = __html__["test/fixtures/scrollable-elements.html"];
  });

  after(() => {
    document.body.innerHTML = "";
  });

  describe("findAll()", () => {
    it("should be throws error", () => {
      assert.throws(() => findAll(window));
      assert.throws(() => findAll(document));
    });

    it("should be found all elements", () => {
      assert.deepEqual(findAll(".scrollable-y"), [
        document.querySelector("#y1"),
        document.querySelector("#y2"),
        document.querySelector("#y3")
      ]);

      assert.deepEqual(findAll(".scrollable-x", "x"), [
        document.querySelector("#x1"),
        document.querySelector("#x2"),
        document.querySelector("#x3")
      ]);

      assert(findAll("#hoge").length === 0);
    });
  });

  describe("find()", () => {
    it("should be found element", () => {
      assert(find("#y1") === document.querySelector("#y1"));
      assert(find("#x2", "x") === document.querySelector("#x2"));
      assert(find(".hoge") === undefined);
    });
  });

});