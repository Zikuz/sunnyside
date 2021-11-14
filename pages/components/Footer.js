export default function Footer() {
    return (
        <div className="footer">
            <span className="footer-header">sunnyside</span>
            <div className="footer-links">
                <a href="#header">About</a>
                <a href="#main">Services</a>
                <a href="#client">Projects</a>
            </div>
            <div className="footer-socials">
                <img src="/images/icon-facebook.svg" alt="link-img-1" />
                <img src="/images/icon-instagram.svg" alt="link-img-2" />
                <img src="/images/icon-twitter.svg" alt="link-img-3" />
                <img src="/images/icon-pinterest.svg" alt="link-img-4" />
            </div>
        </div>
    );
}