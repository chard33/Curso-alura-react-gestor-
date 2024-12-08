import "./index.css"

const Footer = () => {
    return <footer style={{backgroundImage: "url(/Footer.png)"}}>
        <div className="redes">
        <a href="https://www.linkedin.com/in/carlos-miranda-268710201/">
        <img src="/linkedin.png" alt="linkedin" />
        </a>
        <a href="https://github.com/chard33">
        <img src="/github.png" alt="github" />
        </a>
        </div>
        <strong>Desarrollado por Carlos Miranda para el curso Alura latam</strong>
    </footer>
}

export default Footer