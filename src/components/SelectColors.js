import { ColorConsumer } from "../contexts/colors";
const colors = ['red','orange','yellow','green','blue','indigo','violet'];
const SelectColors = () => {
    return (
        <div>
            <h2>색상을 선택하세요</h2>
            <ColorConsumer>
                {({ actions }) => ( 
                    <div style={{ display:'flex' }}>
                        {colors.map(color => (
                            <div
                                key={color}
                                style={{
                                backgroundColor: color,
                                width:'50px',
                                height:'50px',
                                cursor:'pointer',
                                marginRight:'10px'
                        }}
                        onClick={() => actions.setColor(color)}
                        onContextMenu={ e => {
                            e.preventDefault();
                            actions.SelectColors(color);
                        }}
                    />
                ))}
                </div>
                )}
            </ColorConsumer>
            <hr />
        </div>
    );
}
export default SelectColors;