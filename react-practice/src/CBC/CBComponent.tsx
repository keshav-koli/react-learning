import { Component, type ReactNode } from "react";


class CBConponent extends Component<any, { count: number }> {
    constructor(props: any) {
        console.log('this is construtor');

        super(props)
        this.state = {
            count: 0
        }
        // console.log(this);
        // console.log(this.state);

        this.resetCounter = this.resetCounter.bind(this);
    }

    sayHello() {
        console.log("Namaste react");
    }

    static getDerivedStateFromProps(prevProps, prevState) {
        console.log("I am getDerivedStateFromProps () methods");
        // console.log(prevState);
        // console.log(prevProps);
        return null;
    }

    componentDidMount(): void {
        console.log("component mounted");
        
    }
    shouldComponentUpdate(){
        console.log("checking update");
        
        return true;
    }

    componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<{ count: number; }>, snapshot?: any): void {
        console.log("COmponenet updated");
        
    }

    increment = () => {
        this.setState(prevstate => ({
            count: prevstate.count + 1
        }));
    }
    decrement = () => {
        this.setState({ count: this.state.count - 1 });
    }

    resetCounter() {
        this.setState({ count: 0 });
    }


    render(): ReactNode {
        console.log("render method");
        
        return (
            <>
                <h1>MyCounter : {this.state.count}</h1>
                <button className="bg-blue-700 px-3 py-4 cursor-pointer" onClick={this.increment}>Increment</button>
                {/* <button className="bg-red-700 px-3 py-4 cursor-pointer" onClick={()=>this.setState({count:this.state.count-1})}>Decrement</button> */}
                <button className="bg-red-700 px-3 py-4 cursor-pointer" onClick={this.decrement}>Decrement</button>
                <button className="bg-green-700 px-3 py-4 cursor-pointer" onClick={this.resetCounter}>Reset</button>
            </>
        )
    }



}
// const myCom = new CBConponent("as");
// myCom.sayHello()


export default CBConponent;

