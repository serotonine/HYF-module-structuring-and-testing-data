const cardValidator = require("./card-validator");

test("Valid cart", () => {
    const result = cardValidator(1234896766806664);
    // Assert
    expect(result).toEqual(true);
}
);
test("Invalid cart : Last Digit is odd", () => {
    expect(() => cardValidator(6666666666666661).toThrowError());
}
);
test("Invalid cart : All errors", () => {
    expect(() => cardValidator(1111).toThrowError());
}
);