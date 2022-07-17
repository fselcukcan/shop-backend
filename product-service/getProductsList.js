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
        {
          message: result,
          input: event,
        },
        null,
        2
      ),
    };

    callback(null, {
      message: response,
      event,
    });
  } catch (error) {
    callback(err);
  }
};
