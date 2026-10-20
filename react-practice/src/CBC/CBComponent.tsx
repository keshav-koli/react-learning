import { Component, type ReactNode } from "react";


class CBConponent extends Component<any, { count: number, lifeCycleStage: string }> {
    constructor(props: any) {
        console.log('this is construtor- Mounting 1');

        super(props)
        this.state = {
            count: 0,
            lifeCycleStage: 'mounting',
        }
        // console.log(this);
        // console.log(this.state);

        this.resetCounter = this.resetCounter.bind(this);
    }

    sayHello() {
        console.log("Namaste react");
    }

    static getDerivedStateFromProps(prevProps: any, prevState: any) {
        prevState.lifeCycleStage == 'mounting' ? console.log(`I am getDerivedStateFromProps () methods : ${prevState.lifeCycleStage}  2 `) : console.log(`I am getDerivedStateFromProps () methods : ${prevState.lifeCycleStage} 1 `);
        // console.log(prevState);
        // console.log(prevProps);
        return { count: prevState.count + 1 };
    }

    componentDidMount(): void {
        console.log("component mounted - Mounting 4");

    }

    shouldComponentUpdate(prevProps: any, prevState: any) {
        console.log("checking update - Updating 2");
        console.log(prevProps);
        console.log(prevState);
        if (prevState?.lifeCycleStage == this.state.lifeCycleStage) {
            return false
        } else {
            return true
        }
    }
    getSnapshotBeforeUpdate(prevProps: any, prevState: any) {
        console.log("Snapshot before - Updating 4 ");
        console.log(prevProps);
        console.log(prevState);
        return null
    }
    componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<{ count: number; }>, snapshot?: any): void {
        console.log(prevProps);
        console.log(prevState);
        console.log(snapshot);
        console.log("COmponenet updated 5");

    }

    increment = () => {
        this.setState(prevstate => ({
            count: prevstate.count + 1
        }));
    }
    decrement = () => {
        this.setState({ count: this.state.count - 1, lifeCycleStage: 'Updating' });
    }

    resetCounter() {
        this.setState({ count: 0 });
    }


    render(): ReactNode {
        console.log(`render method | ${this.state.lifeCycleStage} 3`);
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


    componentWillUnmount(): void {
        console.log("Unmounting component");

    }


}
// const myCom = new CBConponent("as");
// myCom.sayHello()


export default CBConponent;

