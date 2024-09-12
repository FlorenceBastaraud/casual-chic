const Footer = () => {
  return (
    <footer className="w-full flex justify-center items-center border-solid border-t-2 border-t-blue-950 text-xs">
      <div className="wrapper flex gap-1 justify-center items-center">
        <span className="py-3">&copy; 2024 -</span>
        <a
          className="py-3 hover:text-blue-950 hover:underline transition-all"
          href="https://florence-b.com"
          target="_blank"
        >
          Florence Bastaraud
        </a>
      </div>
    </footer>
  )
}

export default Footer
