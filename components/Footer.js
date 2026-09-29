import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <Link href="/" className="brand">
          <img src="/images/icon-32.png" alt="" />
          <span>Qwesi</span><b>RED</b>
        </Link>
        <span className="tag-line">Better security. Fewer surprises.</span>
        <small>&copy; {new Date().getFullYear()} QwesiRED. All rights reserved.</small>
      </div>
    </footer>
  )
}
