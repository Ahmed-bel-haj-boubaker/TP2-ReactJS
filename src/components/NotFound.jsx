import notFound from "../../public/images/notfound.jfif";

function NotFound() {
  return (
    <div
      style={{
        backgroundImage: `url(${notFound})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100vw",
        height: "100vh",
      }}
    ></div>
  );
}

export default NotFound;
