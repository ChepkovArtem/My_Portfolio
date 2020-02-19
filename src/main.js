import "./styles/main.pcss";
if (process.env.NODE_ENV === "development") {
  require("file-loader!./index.pug");
}

import "./scripts/skills";
import "./scripts/form";
import "./scripts/works";
import "./scripts/parallax";
import "./scripts/hamburger";
import "./scripts/flick";
import "./scripts/reviews";