// export default class RangeSelect extends React.PureComponent {
class RangeSelect extends React.PureComponent {
    state = {
        lastClickEvent: null,
        lastClickedIndex: null,
        lastIsSelected: null,
        selecteds: null
    }

    childComps = [];

    setChildComps = idx => ref => this.childComps[idx] = ref;

    init = () => {
        const selecteds = this.childComps.map(Comp => this.props.isItemSelected(Comp));
        this.setState({ selecteds });
    }

    __handleChildClick = (idx) => ev => {
        if (!ev.fromRangeSelect) {
            let selecteds;
            if (ev.shiftKey) {
                selecteds = util.rangeSet(idx, this.state.lastClickedIndex, this.state.lastIsSelected, this.state.selecteds);
            } else if (ev.altKey) {
                selecteds = util.focusToggle(idx, this.state.selecteds);
            } else {
                selecteds = util.toggle(idx, this.state.selecteds);
                this.setState({ lastIsSelected: !this.state.selecteds[idx]})
            }

            ev.persist();
            this.setState({ lastClickedIndex: idx, lastClickEvent: ev, selecteds });
        }
    }

    componentDidMount() {
        this.init();
    }

    componentDidUpdate() {
        this.state.selecteds.forEach((sel, idx) => {
            if (sel !== this.props.isItemSelected(this.childComps[idx])) {
                this.props.itemPropOnClick(this.childComps[idx])({
                    ...this.state.lastClickEvent,
                    fromRangeSelect: true
                });
            }
        });
    }

    render() {
        const children = React.Children.map(this.props.children, (child, idx) => {
            const clone = React.cloneElement(child, {
                ref: this.setChildComps(idx),
                onClick: this.__handleChildClick(idx),
                rangeSelectItemOnClick: child.props.onClick
            });
            return clone;
        });

        return (
            <div className='range-select'>
                {children}
            </div>
        );
    }
}