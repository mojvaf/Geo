"use client";

import { Provider } from "react-redux";
import { store } from "../store";

/**
 * ReduxProvider is a client-side wrapper for Next.js App Router.
 * It ensures Redux is only initialized on the client.
 */
export default function ReduxProvider({ children }) {
  return <Provider store={store}>{children}</Provider>;
}
