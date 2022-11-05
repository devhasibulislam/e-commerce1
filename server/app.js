/**
 * Title: Application level initialization
 * Description: Which consume all other sub-directories to convey directly
 * Author: Hasibul Islam
 * Date: 05/11/2022
 */

/* external imports */
const express = require("express");
const cors = require("cors");

/* internal imports */

/* router level imports */

/* application level connections */
const app = express();

/* middlewares connections */
app.use(cors());
app.use(express.json());

/* router level connections */

/* global error handlers */

/* enable connection */
app.get("/", (req, res) => {
  try {
    res.status(200).json({
      acknowledgement: true,
      message: "Establishing server connection complete",
      description:
        "The request is processing well & returning success message E-Commerce project",
    });
  } catch (error) {
    res.status(204).json({
      acknowledgement: false,
      message: error.name,
      description: error.message,
    });
  }
});

/* export application */
module.exports = app;
