const navigation = [
  { name: "Главная", href: "#home" },
  { name: "Проекты", href: "#projects" },
  { name: "О Нас", href: "#about" },
  { name: "Контакты", href: "#contacts" },
];

function Nav(props) {
  return (
    <div {...props}>
      <ul className="flex justify-end mr-6 font-semibold">
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
