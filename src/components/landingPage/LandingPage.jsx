import React from "react";

import Hero from "./hero/hero";
import Clients from "./clients/clients";
import Manage from "./manage/manage";
import TheUnseen from "./theUnseen/TU";
import Helping from "./helping/helping";
import How from "./how/how";
import Tesla from "./tesla/tesla";
import Caring from "./marketing/marketing";
import Demo from "./demo/demo";

function LandingPage() {
  return (
    <div>
      <Hero />
      <Clients />
      <Manage />
      <TheUnseen />
      <Helping />
      <How />
      <Tesla />
      <Caring />
      <Demo />
    </div>
  );
}

export default LandingPage;
