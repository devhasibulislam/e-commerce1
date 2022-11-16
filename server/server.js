/**
 * Title: Server level initialization
 * Description: Execute database and port of server intentionally
 * Author: Hasibul Islam
 * Date: 05/11/2022
 */

/* external imports */
const mongoose = require("mongoose");
require("dotenv").config();

/* internal imports */
const app = require("./app");
const consoleMessage = require("./utilities/consoleMessage.utility");

/* database connection */
mongoose
  .connect(process.env.URI_STRING, {
    dbName: process.env.DB_NAME,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    consoleMessage.successMessage(
      `Establish connection with ${process.env.DB_NAME}`
    )
  )
  .catch((error) => consoleMessage.errorMessage(error.message));

/* establish server port */
app.listen(process.env.PORT, () => {
  consoleMessage.successMessage(`App listening on http://localhost:8080/`);
});
