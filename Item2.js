class Item2 extends React.PureComponent {
    state = {
        selected: R.isNil(this.props.selected) ? false : this.props.selected
    }

    // componentWillReceiveProps(nextProps) {
    //     if (!R.isNil(nextProps.selected) && this.state.selected !== nextProps.selected) {
    //         this.setState({ selected: nextProps.selected });
    //     }
    // }

    render() {
        return (
            <div onClick={this.props.onClick}
                className={`item ${this.state.selected ? 'selected' : ''}`}>
                {this.props.children}
            </div>
        );
    }
}