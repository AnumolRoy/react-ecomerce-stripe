//sk_test_51MDaB2SE9rhS0hED2ft8QRiC8CPqUTm76QAOVnVjEXiPM1hHqGzE2HwM67dZuy14hlAhqzzbWmpjElopUzpcNbxP00yRrR2UZS
//cofee-price_1MDhbeSE9rhS0hEDjNxAnHSo
//Sunglasses-price_1MDheESE9rhS0hED5EAU5FY5
//Camera-price_1MDhf3SE9rhS0hEDyISzzmI8

const express = require('express');
var cors = require('cors');
const stripe = require('stripe')('sk_test_51MDaB2SE9rhS0hED2ft8QRiC8CPqUTm76QAOVnVjEXiPM1hHqGzE2HwM67dZuy14hlAhqzzbWmpjElopUzpcNbxP00yRrR2UZS')

const app = express();
app.use(cors());
app.use(express.static("public"));
app.use(express.json());


app.post("/checkout", async (req, res) => {
    /*
    req.body.items
    [
        {
            id: 1,
            quantity: 3
        }
    ]
    stripe wants
    [
        {
            price: 1,
            quantity: 3
        }
    ]
    */
    console.log(req.body);
    const items = req.body.items;
    let lineItems = [];
    items.forEach((item)=> {
        lineItems.push(
            {
                price: item.id,
                quantity: item.quantity
            }
        )
    });

    const session = await stripe.checkout.sessions.create({
        line_items: lineItems,
        mode: 'payment',
        success_url: "http://localhost:3000/success",
        cancel_url: "http://localhost:3000/cancel"
    });

    res.send(JSON.stringify({
        url: session.url
    }));
});

app.listen(7000, () => console.log("Listening on port 7000!"));