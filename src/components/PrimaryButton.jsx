import { NavLink } from "react-router";

function PrimaryButton({ to, children, className = "" }) {
    return (
        <NavLink
            to={to}
            className={`
        inline-block
        bg-[#D83A00]
        text-lg
        rounded
        px-4
        py-2
        text-amber-50
        cursor-pointer
        hover:text-[#1F2230]
        duration-200
        hover:-translate-y-0.5
        transition-transform
        ${className}
      `}
        >
            {children}
        </NavLink>
    );
}

export default PrimaryButton;