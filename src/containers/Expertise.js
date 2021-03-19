import Tag from './../components/Tag'

const Expertise = ({ expertise }) => {
    return (
        <>
            {expertise.map( expert => <Tag key={expert}>{ expert }</Tag> )}
        </>
    )
}

export default Expertise;