function Paragraph({ children }) {
    return (
        <p className="text-base md:text-lg text-amber-50 leading-relaxed mb-4">
            {children}
        </p>
    )
}

export default Paragraph