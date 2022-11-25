import React from "react";
import { Button } from "@chakra-ui/react";

import { IButton } from "./type";

export function BaseButton(props: IButton) {
  const { content, ...rest } = props;

  return (
    <Button variant="base" {...rest}>
      {content}
    </Button>
  );
}
