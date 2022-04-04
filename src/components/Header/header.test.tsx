import React from "react"
import { screen } from "@testing-library/react"
import { render } from "../../test-utils";
import Header from "./header.component";

test("Header component", () => {
  render(<Header />)
})
