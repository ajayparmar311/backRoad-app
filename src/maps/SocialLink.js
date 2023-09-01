const SocialLink = ({ id, href, icon, sociallink }) => {
  return (
    <li>
      <a href={href} target="_blank" rel="noreferrer" className={sociallink}>
        <i className={icon}></i>
      </a>
    </li>
  )
}
export default SocialLink
