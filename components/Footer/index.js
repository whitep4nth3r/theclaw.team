export default function Footer() {
  const date = new Date();
  return <footer>&copy; The Claw {date.getFullYear()}</footer>;
}
