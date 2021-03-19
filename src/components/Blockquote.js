const Blockquote = ({ quote, name, role }) => {
    return (
        <div>
            <blockquote className="mb-4">
                <p className="text-sm">"{quote}"</p>
            </blockquote>
            <div className="font-small text-sm"><span className="text-cyan-600">{name}</span> <span className="text-gray-500">{role}</span></div>
        </div>
    )
}

export default Blockquote;