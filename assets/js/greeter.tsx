import React from "react";
interface GreeterProps {
    name: string;
}
const Greeter: React.FC<GreeterProps> = (props: GreeterProps) => {
    const name = props.name;
    return (
        <section>
          <h1>Welcome to {name} with TypeScript and React!</h1>
          <p><h2>Peace-of-mind from prototype to production</h2></p>
        </section>
    );
};
export default Greeter;