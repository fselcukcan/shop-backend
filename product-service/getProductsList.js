import productList from "./productList.json";

export const handler = async (event, context, callback) => {
  const p = new Promise((resolve) => {
    resolve(productList);
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

    callback(null, response);
  } catch (error) {
    callback(error);
  }
};
