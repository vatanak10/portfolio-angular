const fs = require("fs");
const path = require("path");
const successColor = "\x1b[32m%s\x1b[0m";
const checkSign = "\u{2705}";
const dotenv = require("dotenv").config({ path: "src/.env" });

const isProduction = process.env.NODE_ENV === "production";

const envFile = `export const environment = {
    production: ${isProduction},
    supabaseUrl: '${process.env.NG_APP_SUPABASE_URL}',
    supabaseKey: '${process.env.NG_APP_SUPABASE_KEY}',
};
`;

const targetPath = path.join(
  __dirname,
  `./src/environments/environment${isProduction ? ".prod" : ""}.ts`
);

fs.writeFile(targetPath, envFile, (err) => {
  if (err) {
    console.error(err);
    throw err;
  } else {
    console.log(
      successColor,
      `${checkSign} Successfully generated environment${isProduction ? ".prod" : ""}.ts`
    );
  }
});
