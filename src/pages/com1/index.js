import React from 'react'

class Com1 extends React.Component{
    handleHome = () => {
        this.props.history.push("/home")
    }
    handleBack = () => {
        this.props.history.go(-1)
    }
    render() {
        return (
            <>
                <div>com1</div>
                <div>{this.props.children}</div>
                <button onClick={() => {this.props.history.push("/com1")}}>to com1</button>
                <button onClick={this.handleHome}>go home</button>
                <button onClick={this.handleBack}>go back</button>
            </>
        )
    }
}

export default Com1
