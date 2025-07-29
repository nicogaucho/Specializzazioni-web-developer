function Emoji() {
  return (
    <span>👍🏻</span>
  )
}

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <strong>React + Vite Specializzazione</strong>
        </li>
      </ul>
      <ul>
        <li>
          <a href="#">
            <Emoji />
          </a>
        </li>
        <li>
          <a href="#">
            <Emoji />
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
