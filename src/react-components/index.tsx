class ReactApp extends React.Component {
    render() {
        return (
            <div>
                Hell from React component
            </div>
        )
    }
}

ReactDOM.render(
    <ReactApp/>,
    document.getElementById('app')
);