
// CREATING OBJECT USING OBJECT CONSTRUCTOR

let mobile = new Object();

// Retrieve

console.log("Before");
console.log(mobile);

// Updating & Adding Properties

mobile.brand = "Samsung";

mobile["model"] = "Galaxy S24";

mobile.price = 65000;

mobile.color = "White";

mobile["storage-size"] = "256 GB";

mobile["ram-size"] = "8 GB";

mobile["operating-system"] = "Android";

mobile["phone-number"] = 9876543210;

mobile["manufacturing-year"] = 2025;

mobile.type = "Smartphone";

// Delete

delete mobile.price;

console.log("=======After=======");

console.log(mobile);