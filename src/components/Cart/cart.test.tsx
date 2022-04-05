import React from "react"
import { screen } from "@testing-library/react"
import { render } from "../../test-utils";
import Cart from "./cart.component";

test("Cart component", () => {
  render(<Cart />)
})
