import React, {useEffect} from "react";
import Template from "../Template";

const PageFactory = props => {
  return <Template>{props.children}</Template>;
};

export default PageFactory;
