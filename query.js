db.inventory.insertMany([
    { item: "journal", qty: 25, size: { h: 14, w: 21, uom: "cm" }, status: "A" },
    { item: "notebook", qty: 50, size: { h: 8.5, w: 11, uom: "in" }, status: "A" },
    { item: "paper", qty: 100, size: { h: 8.5, w: 11, uom: "in" }, status: "D" },
    { item: "planner", qty: 75, size: { h: 22.85, w: 30, uom: "cm" }, status: "D" },
    { item: "postcard", qty: 45, size: { h: 10, w: 15.25, uom: "cm" }, status: "A" }
 ]);

 db.inventory.find( { status: { $in: [ "A", "D" ] } } )

 db.inventory.find( { status: "A", qty: { $lt: 30 } } )

 db.inventory.find( { $or: [ { status: "A" }, { qty: { $lt: 30 } } ] } )

//  Specify AND as well as OR Conditions

db.inventory.find( {
    status: "A",
    $or: [ { qty: { $lt: 30 } }, { item: /^p/ } ]
} )

db.inventory.find( {
    status: "A",
    $or: [ { qty: { $lt: 30 } }, { item: /^p/ } ]
} )

// SELECT * FROM inventory WHERE status = "A" AND ( qty < 30 OR item LIKE "p%")

// Specify Equality Match on a Nested Field

db.inventory.find( { "size.h": { $lt: 15 } } )

db.inventory.find( { "size.h": { $lt: 15 }, "size.uom": "in", status: "D" } )


// ************* Query an Array
db.inventory.insertMany([
    { item: "journal", qty: 25, tags: ["blank", "red"], dim_cm: [ 14, 21 ] },
    { item: "notebook", qty: 50, tags: ["red", "blank"], dim_cm: [ 14, 21 ] },
    { item: "paper", qty: 100, tags: ["red", "blank", "plain"], dim_cm: [ 14, 21 ] },
    { item: "planner", qty: 75, tags: ["blank", "red"], dim_cm: [ 22.85, 30 ] },
    { item: "postcard", qty: 45, tags: ["blue"], dim_cm: [ 10, 15.25 ] }
 ]);


 db.inventory.find( { tags: { $all: ["red", "blank"] } } )

 db.inventory.find( { dim_cm: { $gt: 25 } } ) //gt greater then

 db.inventory.find( { dim_cm: { $elemMatch: { $gt: 22, $lt: 30 } } } )

 db.inventory.find( { "tags": { $size: 3 } } )


//  Query for a Document Nested in an Array

// Equality matches on the whole embedded/nested document require an exact match of the specified document, including the 
// field order. For example, the following query does not match any documents in the inventory collection:

db.inventory.find( { "instock": { qty: 5, warehouse: "A" } } )
db.inventory.find( { "instock": { warehouse: "A", qty: 5 } } )

// Return the Specified Fields and the _id Field Only
db.inventory.find( { status: "A" }, { status: 0, instock: 0 } )
db.inventory.find( { status: "A" }, { item: 1, status: 1 } )


