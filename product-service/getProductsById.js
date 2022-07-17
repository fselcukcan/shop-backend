import productsMock from "./products.mock";

export const handler = (event, context, cb) => {
  const p = new Promise((resolve) => {
    const filteredProducts = productsMock.filter(product => product);
    resolve(filteredProducts);
  });
  
  try {
    const result = await p;

    const response = {
      statusCode: 200,
      body: JSON.stringify(
        {
          message: result,
          input: event,
        },
        null,
        2
      ),
    };
    
    cb(null, response)
  } catch (error) {
    cb(error)
  }
};
