const { builder } = require("@netlify/functions");

async function myfunction(event, context) {
  return {
    statusCode: 200,
    headers: {
      "Content-Type": "text/html",
      etag: "static",
    },
    body: `
    <!DOCTYPE html>
    <html>
      <body>
        Hello World
      </body>
    </html>
    `,
  };
}

exports.handler = builder(myfunction);
