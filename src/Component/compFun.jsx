import PropTypes from 'prop-types'

const CompFun = ({name, bestFood, children}) => {

    return (
        <div>
            <h2>Hello from functional component</h2>
            <h4>My name is {name}</h4>
            <h4>My best food is {bestFood}</h4>
            <hr></hr>
            <p>{children}</p>
        </div>
    )
};

/*
In the App.js 
<CompFun name = "Mike" bestFood = "Rice">children</CompFun>
<CompFun name = "Peter" bestFood = "Beans stew">children</CompFun>


Class component
class CompClass extends Component {
    render() {
        return (
            <div>
                <h2>Hello from class component</h2>
                <h4>My name is {this.props.name}</h4>
                <h4>My best food is {this.props.bestFood}</h4>
                <hr></hr>
                <p>{this.props.children}</p>
                // use the children props when we want to display content.
            </div>
        )
    }
}

*/

CompFun.defaultProps = {
    name : "Daniel",
    bestFood : "Beans Stew"
}

CompFun.propTypes = {
    name : PropTypes.string,
    bestFood : PropTypes.string
}

export default CompFun;