const PageLink = ({ id, href, text, pagelink }) => {
  return (
    <li>
      <a href={href} className={pagelink}>
        {text}
      </a>
    </li>
  )
}
export default PageLink
