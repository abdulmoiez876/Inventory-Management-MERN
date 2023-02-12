import { addNewProduct, getAllProducts } from "../../models/products/products.model.js";

const httpAddNewProduct = async (req, res) => {
    try {
        const result = await addNewProduct(req.body);

        return res.status(result.code).send(result);
    }
    catch (err) {
        return res.status(500).send(err);
    }
}

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
    httpAddNewProduct,
    httpGetAllProducts
}