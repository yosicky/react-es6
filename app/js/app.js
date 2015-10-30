/**
 * test
 */


class Hello extends React.Component {

    // es6では必要 内容がsuper(props)だけのときは省略可能
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container" id="hoo">
                Hello {this.props.name}
                {/*<Counter />*/}
            </div>
        );
    }

}

class Counter extends React.Component {

    constructor(props) {
        super();
        this.state = {
            count: 0
        };
    }
/*
    getInitialState() {
        return {
            count: 0
        };
    }
*/
    onClick() {
        this.setState({count: this.state.count + 1});
    }

    render() {
        return (
            <div>
                <div>count:{this.state.count}</div>
                <button onClick={this.onClick.bind(this)}>click!</button>
            </div>
        );
    }
}


ReactDOM.render(
    <Hello name="React" />,
    document.getElementById('content')
);

ReactDOM.render(
    <Counter />,
    document.getElementById('content2')
);

