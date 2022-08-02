import './Header.css'

interface IHeaderProps { }

const Header: React.FC<IHeaderProps> = () => {
    return (
        <div className="navbar">
            <h3>React TypeScript</h3>
        </div>
    )

}

export default Header
