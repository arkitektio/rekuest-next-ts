import React, { useContext } from "react";
import { Postman, PostmanContextType } from "./types";

export type Delay = {};

const NO_POSTMAN_SET = "No postman set";

export const PostmanContext = React.createContext<PostmanContextType>({
  reserve: async () => {
    throw new Error(NO_POSTMAN_SET);
  },
  unreserve: async () => {
    throw new Error(NO_POSTMAN_SET);
  },
  assign: async () => {
    throw new Error(NO_POSTMAN_SET);
  },
  ack: async () => {
    throw new Error(NO_POSTMAN_SET);
  },
  unassign: async () => {
    throw new Error(NO_POSTMAN_SET);
  },
  setPostman: (postman: Postman | undefined) => {
    throw new Error(
      "Set postman is not implemented. Do you have a Postman provider?"
    );
  },
});

export const usePostman = () => useContext(PostmanContext);
