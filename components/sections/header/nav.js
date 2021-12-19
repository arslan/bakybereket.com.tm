const navigation = [
  { name: "Home", href: "#home" },
  { name: "Projects", href: "#projects" },
  { name: "About", href: "#about" },
  { name: "Contacts", href: "#contacts" },
];

function Nav(props) {
  return (
    <div {...props}>
      <ul className="flex justify-end mr-6">
        {navigation.map(({ name, href }) => {
          return (
            <li className="mx-4" key={name}>
              <a href={href}>{name}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Nav;
