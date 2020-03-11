import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";
import * as React from "react";

export default class ApiDoc extends React.Component<{}, {}> {
  render() {
    return (
      <>
        <SwaggerUI url="http://localhost:3000/api_doc.json?type=swagger" />
      </>
    );
  }
}
