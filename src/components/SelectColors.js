import React, { Component } from 'react';
import ColorContext from '../contexts/colors';

const colors = ['red','orange','yellow','green','blue','indigo','violet'];

class SelectColors extends Component {
    static contextType = ColorContext;

    handleSetColor= color => {
        this.context.actions.setColor(color);
    }

    handleSetSubcolor = subcolor => {
        this.context.actions.setSubColor(subcolor);
    };

    render(){
        return(
        <div>
            <h2>색상을 선택하세요</h2>
            <div style={{ display:'flex' }}>
                { colors.map( color => (
                    <div 
                        key={color}
                        style={{
                            backgroundColor: color,
                            width:'50px',
                            height:'50px',
                            cursor:'pointer'
                        }}
                        onClick={() => this.handleSetSubcolor(color)}
                        onContextMenu={ e => {
                            e.preventDefault();
                            this.handleSetSubcolor(color);
                        }}
                    />
                ))}
            </div>
            <hr />
        </div>
        );
    }
}
export default SelectColors;