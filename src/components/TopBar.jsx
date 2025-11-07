import React, { useState } from "react";
export default function TopBar() {
    const [open, setOpen] = useState(false);

    return (

        <div className="bg-[#692767] text-white text-sm">
            <div className="max-w-6xl mx-auto px-4 py-2 flex flex-wrap gap-3 items-center justify-between">
                <p className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-2 bg-[#692767]/10 text-[#692767] px-3 py-1 rounded-full text-xs font-medium mb-4" />
                    2961 Townline Rd Abbotsford, BC V2T 5J8
                </p>
                <p className="font-medium">
                    Call:{" "}
                    <a
                        href="tel:+16045550000"
                        className="underline underline-offset-2"
                    >
                        +1 (604) 621-8311
                    </a>
                </p>
            </div>
        </div>

    );
};