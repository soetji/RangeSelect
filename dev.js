const __handleItem2Click = () => console.log('Item2 Click');

const content = (
    <div>
        <RangeSelect 
            isItemSelected={Comp => Comp.state.selected}
            itemPropOnClick={Comp => Comp.__handleClick}
        >
            <Item>OneOneOne</Item>
            <Item>TwoTwoTwo</Item>
            <Item>ThreeThree</Item>
            <Item>FourFour</Item>
            <Item>FiveFive</Item>
            <Item>SixSixSix</Item>
            <Item>SevenSeven</Item>
        </RangeSelect>
        <RangeSelect 
            isItemSelected={Comp => Comp.state.selected}
            itemPropOnClick={Comp => Comp.props.rangeSelectItemOnClick}
        >
            <Item2 onClick={__handleItem2Click}>OneOneOne</Item2>
            <Item2 onClick={__handleItem2Click}>TwoTwoTwo</Item2>
            <Item2 onClick={__handleItem2Click}>ThreeThree</Item2>
            <Item2 onClick={__handleItem2Click}>FourFour</Item2>
            <Item2 onClick={__handleItem2Click}>FiveFive</Item2>
            <Item2 onClick={__handleItem2Click}>SixSixSix</Item2>
            <Item2 onClick={__handleItem2Click}>SevenSeven</Item2>
        </RangeSelect>
    </div>
);

ReactDOM.render(content, document.getElementById('root'));