import React, { useEffect } from "react";
import { useFakts } from "@jhnnsrs/fakts";
import { useHerre } from "@jhnnsrs/herre";
import result from "../api/lok/fragments";
import { useRekuest } from "../rekuest";

export const RekuestAutoConfigure: React.FC<{}> = (props) => {
  const { configure } = useRekuest();
  const { token } = useHerre();
  const { fakts } = useFakts();

  useEffect(() => {
    if (token) {
      configure({
        secure: false,
        wsEndpointUrl: "ws://localhost:8234/graphql",
        endpointUrl: "http://localhost:8234/graphql",
        possibleTypes: result.possibleTypes,
        retrieveToken: () => token,
      });
    }
  }, [token, fakts]);

  return <> </>;
};
