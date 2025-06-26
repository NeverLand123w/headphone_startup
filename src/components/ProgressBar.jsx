import React, { forwardRef } from 'react';

const ProgressBar = forwardRef((props, ref) => {
    return (
        <div className="fixed top-0 left-0 w-full h-[0.5px] z-[1000] pointer-events-none">
            <div
                ref={ref}
                className="h-full bg-white transform scale-x-0 origin-left"
            />
        </div>
    );
});

export default ProgressBar;