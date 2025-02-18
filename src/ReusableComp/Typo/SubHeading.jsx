//Resusable component for subheading text such as subheadings in the skills section
export const SubHeading = ({ className, text }) => {
    return (
        <h3 className={className}>{text}</h3>
    )
}