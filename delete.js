db.inventory.deleteMany({ status : "A" })

db.inventory.deleteOne( { status: "D" } )

db.pizzas.insertMany( [
    { _id: 0, type: "pepperoni", size: "small", price: 4 },
    { _id: 1, type: "cheese", size: "medium", price: 7 },
    { _id: 2, type: "vegan", size: "large", price: 8 }
 ] )

//  The following bulkWrite() example runs these operations on the pizzas collection:

// Adds two documents using insertOne.

// Updates a document using updateOne.

// Deletes a document using deleteOne.

// Replaces a document using replaceOne.

