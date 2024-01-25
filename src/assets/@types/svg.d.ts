// https://github.com/facebook/create-react-app/blob/0ee4765c39f820e5f4820abf4bf2e47b3324da7f/packages/react-scripts/lib/react-app.d.ts#L47-L56

declare module "*.svg" {
  import * as React from "react";

  export const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & { title?: string }
  >;
  const src: string;
  export default src;
}

declare module "*.png" {
  const value: string;
  export default value;
}
declare module "*.gif" {
  const value: string;
  export default value;
}

declare module "*.jpg" {
  const value: string;
  export default value;
}

declare module "*.jpeg" {
  const value: string;
  export default value;
}
declare module "*.mp4" {
  const value: string;
  export default value;
}

declare module "*.csv" {
  const value: string;
  export default value;
}
