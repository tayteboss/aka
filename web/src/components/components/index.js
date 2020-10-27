import React from 'react';
import Statement from '../statement';
import Ticker from '../ticker';
import Panel from '../panel';

const Components = ({ components }) => (
    <>
        {components.map((data, index) => {
            const {__typename: componentType } = data
            switch (componentType) {
                case 'SanityStatements':
                    return (
                        <Statement 
                            key={`${componentType}_${index}`}
                            data={data} 
                        />
                    )
                case 'SanityTickers':
                    return (
                        <Ticker 
                            key={`${componentType}_${index}`}
                            data={data} 
                        />
                    )
                case 'SanityPanels':
                    return (
                        <Panel 
                            key={`${componentType}_${index}`}
                            data={data} 
                        />
                    )
                default:
                    return null
            }
        })}
    </>
);  

export default Components;