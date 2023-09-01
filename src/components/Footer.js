import { pageLink, socialLinks } from '../data'
import PageLink from '../maps/PageLink'
import SocialLink from '../maps/SocialLink'
const Footer = () => {
  return (
    <footer className="section footer">
      <ul className="footer-links">
        {pageLink.map((link) => {
          return <PageLink key={link.id} {...link} pagelink={'footer-link'} />
        })}
      </ul>
      <ul className="footer-icons">
        {socialLinks.map((link) => {
          return (
            <SocialLink key={link.id} {...link} sociallink={'footer-icon'} />
          )
        })}
      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  )
}
export default Footer
