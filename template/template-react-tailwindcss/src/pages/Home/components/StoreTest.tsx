import { useState } from "react";

const StoreTest = () => {
    const [count, setCount] = useState(0);
    return (
        <div className="flex flex-col items-center gap-20 bg-base-100 py-20">
            <div className="mockup-phone">
                <div className="camera" />
                <div className="display">
                    <div className="phone-1 artboard artboard-demo">
                        <p className="text-xl font-medium tracking-wide uppercase">Counter:</p>
                        <p className="text-4xl font-bold uppercase">{count}</p>
                        <button type="button" className="btn btn-primary" onClick={() => setCount(count + 1)}>
                            increment
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export { StoreTest };
