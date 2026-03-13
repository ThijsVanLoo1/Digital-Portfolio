import { useState } from "react"

function ToolTipIcon({ icon: Icon, label, size = "text-6xl" }) {
    const [open, setOpen] = useState(false)

    const toggleTooltip = () => {
        setOpen(!open)
    }

    return (
        <div className="relative group" onClick={toggleTooltip} onMouseLeave={() => setOpen(false)}>
            <Icon
                className={`${size} text-amber-50 hover:text-gray-400 transition-colors cursor-pointer`}
            />

            <span
                className={`
                      absolute
                      -top-12 left-1/2 -translate-x-1/2
                      whitespace-nowrap
                      rounded-md bg-[#1F2230] px-3 py-1
                      text-sm text-amber-50
                      pointer-events-none
                      transition-all duration-200
                      ${
                                open
                                    ? "opacity-100 scale-100"
                                    : "opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100"
                            }
                    `}
            >
            {label}
          </span>
        </div>
    )
}

export default ToolTipIcon