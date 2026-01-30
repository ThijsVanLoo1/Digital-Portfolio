function ToolTipIcon({icon: Icon, label, size = "text-6xl"}) {
    return (
        <>
            <div className="relative group">
                <Icon className={`${size} text-amber-50 hover:text-gray-400 transition-colors`} />

                <span className="
        absolute
        -top-12 left-1/2 -translate-x-1/2
        whitespace-nowrap
        rounded-md bg-[#1F2230] px-3 py-1
        text-sm text-amber-50
        opacity-0 scale-95
        transition-all duration-200
        group-hover:opacity-100 group-hover:scale-100
        pointer-events-none
      ">
        {label}
      </span>
            </div>
        </>
    )
}

export default ToolTipIcon;