const Tag = ( props ) => {
    return (
        <span { ...props } className="px-2 rounded text-sm bg-pink-light text-gray-700 mr-2">{ props.children }</span>
    )
}

export default Tag;