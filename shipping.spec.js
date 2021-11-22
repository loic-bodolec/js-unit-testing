const { getShippingCost } = require("./shipping");

describe("getShippingCost", () => {
  describe("if total cart price greater than or equal to 100", () => {
    it("returns 0", () => {
      const cart = [
        {
          name: "Sweater",
          category: "Clothing",
          price: 49.99,
          unitShippingCost: 5,
        },
        {
          name: "Radio-controlled car",
          category: "Toys",
          price: 59.99,
          unitShippingCost: 8,
        },
      ];

      expect(getShippingCost(cart)).toEqual(0);
    });
  });

  describe("if total price of toys greater than or equal to 60", () => {
    it("returns 0", () => {
      const cart = [
        {
          name: "Playing cards",
          category: "Toys",
          price: 8,
          unitShippingCost: 4,
        },
        {
          name: "Radio-controlled car",
          category: "Toys",
          price: 59.99,
          unitShippingCost: 8,
        },
      ];

      expect(getShippingCost(cart)).toEqual(0);
    });
  });

  describe("else", () => {
    describe("if unit shipping cost is decimal", () => {
      it("returns sum with correct rounding", () => {
        const cart = [
          {
            name: "T-shirt",
            category: "Clothing",
            price: 9.99,
            unitShippingCost: 3.01,
          },
          {
            name: "Radio-controlled car",
            category: "Toys",
            price: 59.99,
            unitShippingCost: 8.02,
          },
        ];

        expect(getShippingCost(cart)).toEqual(11.03);
      });
    });

    it("returns sum of unit shipping cost for each item", () => {
      const cart = [
        {
          name: "T-shirt",
          category: "Clothing",
          price: 9.99,
          unitShippingCost: 3,
        },
        {
          name: "Radio-controlled car",
          category: "Toys",
          price: 59.99,
          unitShippingCost: 8,
        },
      ];

      expect(getShippingCost(cart)).toEqual(11);
    });
  });
});
