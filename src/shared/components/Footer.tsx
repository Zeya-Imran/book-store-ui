const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <div className="py-4 border-t flex justify-center mt-10 items-center">
            <p>copyright coder elib @ {year}</p>
        </div>
    )
}


export default Footer;