class Item extends React.PureComponent {
    state = {
        selected: R.isNil(this.props.selected) ? false : this.props.selected
    }

    __handleClick = ev => {
        this.setState({ selected: !this.state.selected });
        if (this.props.onClick) this.props.onClick(ev);
    }

    // componentWillReceiveProps(nextProps) {
    //     if (!R.isNil(nextProps.selected) && this.state.selected !== nextProps.selected) {
    //         this.setState({ selected: nextProps.selected });
    //     }
    // }

    render() {
        return (
            <div onClick={this.__handleClick}
                className={`item ${this.state.selected ? 'selected' : ''}`}>
                {this.props.children}
            </div>
        );
    }
}