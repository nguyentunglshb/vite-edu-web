import React from "react";
import { Button } from "@chakra-ui/button";

import { IButton } from "./type";

export function TagButton(props: IButton) {
  const { content, ...rest } = props;

  return (
    <Button variant="tag" {...rest}>
      {content}
    </Button>
  );
}
