import productList from "./productList.json";

export const handler = async (event, context, cb) => {
  const { productId } = event.pathParameters;
  
  const p = new Promise((resolve) => {
    const foundProduct = productList.find(({id}) => id === productId);
    resolve(foundProduct);
  });
  
  try {
    const result = await p;

    const response = {
      statusCode: 200,
      body: JSON.stringify(
        result,
        null,
        2
      ),
    };

    cb(null, response)
  } catch (error) {
    cb(error)
  }
};
