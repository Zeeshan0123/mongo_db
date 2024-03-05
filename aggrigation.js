db.orders.aggregate( [

    // Stage 1: Filter pizza order documents by pizza size
    {
       $match: { size: "medium" }
    },
 
    // Stage 2: Group remaining documents by pizza name and calculate total quantity
    {
       $group: { _id: "$name", totalQuantity: { $sum: "$quantity" } }
    }
 
 ] )


//  The following aggregation pipeline example contains two stages and returns 
//  the total order quantity of medium size pizzas grouped by pizza name

