import React, { JSXElementConstructor, ReactNode } from 'react'
import { ParentSize } from '@visx/responsive';

const FullPitchController: React.FC = () => {
    return (
        <div aria-label='FullPitchController' style={{width: '100%', height: '100%'}}>
            <ParentSize className="graph-container" debounceTime={10}>
                {({ width: visWidth, height: visHeight }) => (
                    <div style={{width: visWidth, height: visHeight}}>
                        
                    </ div>
                )}
            </ParentSize>      
        </div>
    )
}

export default FullPitchController