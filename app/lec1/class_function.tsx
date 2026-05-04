// Old way: Class function
import React from "react";

class Person extends React.Component<{}, { name: string; age: number }> {
    constructor(props: {}) {
        super(props);
        this.state = {
            name: "John",
            age: 30,
        };
    }

    render() {
        return (
            <div>
                <h1>{this.state.name}</h1>
                <p>Age: {this.state.age}</p>
            </div>
        );
    }
}

// New way: Functional component with hooks
import { useState } from "react";

const PersonFunctional: React.FC = () => {
    const [name, setName] = useState("John");
    const [age, setAge] = useState(30);

    return (
        <div>
            <h1>{name}</h1>
            <p>Age: {age}</p>   
            <button onClick={() => setName("Alice")}>Change Name</button>
            <button onClick={() => setAge(age + 1)}>Increase Age</button>
        </div>
    );
};