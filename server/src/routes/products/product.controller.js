import { getAllProducts } from "../../models/products/products.model.js";

const httpGetAllProducts = async (req, res) => {
    try {
        const data = await getAllProducts();

        return res.status(200).send(data);
    }
    catch (err) {
        return res.status(406).send(err);
    }
}

export {
    httpGetAllProducts
}