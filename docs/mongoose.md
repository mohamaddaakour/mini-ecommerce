```ts
// we must put this in the main file (server.ts)
// to enable using the environment variables
import "dotenv/config";

// when we have a sensitive data we should put it in an
// environment variable in .env file
// to fetch this data from .env we use:
// process.env.variable_name
const MONGO_URI = process.env.MONGO_URI;
```

```ts
// to asynchronousely connect to the database using the database URI
// we used await keyword to use asynchronous, because connecting to the database will take time
// so I want the rest of the code to continue processing while in the same time
// the connection process is working in the background

// { serverSelectionTimeoutMS: 5000 } this is an option
// if the connection process takes more than 5000 milleseconds it will
// return an error
await connect(MONGO_URI, { serverSelectionTimeoutMS: 5000 });
```

```ts
// every backend need a server
// here we are creating the server to our backend in a specific
// port
const server = app.listen(PORT, () => {
    console.log(`Server connected on port: ${PORT}`);
});
```

```ts
// this will close the connection with the database
await mongoose.connection.close();
```

```ts
// to close the server
server.close(() => {
    console.log("Server closed");

    // we use this to stop the whole application
    // the code 0 means stop the application successfully
    // any code other than 0 means stop the application because of an error
    process.exit(0);
});
```

```ts
// whenever the operating system sends this signal to Node.js process,
// run the shutdown function

// SIGINT (Signal Interrupt) happens when we click ctrl + c in the terminal
process.on("SIGINT", shutdown);
```

```ts
// to send as an HTTP response the status code 400, and the response body
// in JSON format
// .json() will convert from regular javascript object into a JSON
res.status(400).json({ success: false, message: "price must be a number" });
```

```ts
// mongoose.models.Product will check if we have a model called Product
// if no it will create it
const Product = mongoose.models.Product || mongoose.model<IProduct>("Product", productSchema);
```

```ts
// this will create a new document and return it
await Product.create(product);
```

```ts
// this will return all the documents in this Product collection
// using lean() mongoose returns plain JavaScript objects
await Product.find().lean();
```

```ts
// update the document with this id
// product is the new object with the new data
// returnDocument to return the updated document with the new data, by default it will return the old one
// runValidators to check the validation we puted them in the schema to the new data, by default it will not check them
await Product.findByIdAndUpdate(id, product, { returnDocument: "after", runValidators: true } );
```

```ts
// this will delete the document with this id
await Product.findByIdAndDelete(id);
```