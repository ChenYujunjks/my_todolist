import { ReactNode } from "react";

interface MyComponentProps {
  name: string;
  children: ReactNode;
}

const MyComponent = ({ name, children }: MyComponentProps) => {
  return (
    <div>
      <p>Hello, {name}!</p>
      {children}
    </div>
  );
};

MyComponent.defaultProps = {
  name: "World",
};

export default MyComponent;
