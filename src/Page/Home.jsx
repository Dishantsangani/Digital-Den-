import React, { useEffect, useState } from "react";
import Navbar from "../Component/Navbar";
import BlurText from "../assets/Animations/BlurText";
import SplitText from "../assets/Animations/SplitText";
import axios from "axios";
import Footer from "../Component/Footer";
import Swal from "sweetalert2";
function Home() {
  const [item, setItem] = useState([]);

  const [error, setError] = useState({});

  // Bootom Email Comming Soon Validation
  const [formdata, setFormdata] = useState({
    email: "",
  });

  const handlechange = (e) => {
    const { name, value } = e.target;
    setFormdata({
      ...formdata,
      [name]: value,
    });
  };

  const validationform = () => {
    let valdationError = {};
    // Email Validation
    if (!formdata.email.trim()) {
      valdationError.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formdata.email)) {
      valdationError.email = "Email is Not Valid";
    }
    setError(valdationError);
    return Object.keys(valdationError).length === 0;
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    const isValid = validationform();
    if (isValid) {
      console.log("Form Submitted");
      alert("Submiteed Successfully");
    }
  };
  // Navgate increse & Decrese Icon On Add to Cart
  const [amount, setAmount] = useState(null);
  const setIncrease = () => {
    setAmount((prevAmount) => prevAmount + 1);
  };
  const setDecrese = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(1);
  };

  // Home Page Box 1
  const [isOpentitle, setIsOpentitle] = useState(false);
  const open = () => {
    setIsOpentitle(!isOpentitle);
    document.body.classList.toggle("overflow-hidden", !isOpentitle);
  };

  // Home page Box 2
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => {
    setIsOpen(!isOpen);
    document.body.classList.toggle("overflow-hidden", !isOpen);
  };

  //Home Page 3
  const [isopenbox, setIsopenbox] = useState(false);
  const box = () => {
    setIsopenbox(!isopenbox);
    document.body.classList.toggle("overflow-hidden", !isopenbox);
  };
  // Get Product Page
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/")
      .then((res) => {
        setItem(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // Product Rendering
  function addtocart(product) {
    Swal.fire({
      title: "Item Added !",
      text: "Checkout Cart !",
      icon: "success",
    });
    setIncrease();
    const cartItem = {
      productId: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
      description: product.description,
      rate: product.rating.rate,
    };
    axios
      .post("http://localhost:3000/userproducts", cartItem)
      .then((response) => {
        console.log("Product added to cart", response.data);
      })
      .catch((error) => {
        console.error("Error adding product to cart", error);
      });
  }
  return (
    <>
      <Navbar
        amount={amount}
        setDecrese={setDecrese}
        setIncrease={setIncrease}
      />

      {/* Hero Section */}
      <div className="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0">
        <div className="inset-y-0  top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
          <svg
            className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
            viewBox="0 0 100 100"
            fill="currentColor"
            preserveAspectRatio="none slice"
          >
            <path d="M50 0H100L50 100H0L50 0Z" />
          </svg>
          <img
            className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
            src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            alt=""
          />
        </div>
        <div className="relative shadow-xl rounded-2xl flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
          <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
            <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              <BlurText
                text="A World of Products !"
                delay={150}
                animateBy="words"
                direction="top"
              />
              {/* <br className="hidden   md:block" /> */}
              at your <span className="text-blue-500"> fingertips.</span>
            </h2>
            <p className="pr-5 mb-5 text-base text-gray-700 md:text-lg">
              Digital Den is your premier online destination for the latest in
              technology and digital products. We offer a wide range of
              high-quality electronics, gadgets, and accessories at competitive
              prices. Whether you're searching for the newest smartphones,
              cutting-edge laptops, or innovative smart home devices, Digital
              Den is your trusted source for all things tech
            </p>
          </div>
        </div>
      </div>

      {/* Belt Section */}
      <div className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-8 lg:px-6 lg:py-12">
        <div className="p-6 rounded-3xl shadow-2xl">
          <div className="flex flex-col lg:flex-row lg:items-center lg:gap-6">
            {/* Heading Section */}
            <div className="lg:w-1/2">
              <h2 className="font-sans text-2xl font-bold tracking-tight text-gray-800 sm:text-3xl text-center lg:text-left">
                " Shop Smart, <br className="hidden md:block" />
                Shop
                <span className="text-blue-500">
                  <SplitText
                    text=" Digital Den"
                    className="inline-block text-2xl"
                    delay={150}
                    animationFrom={{
                      opacity: 0,
                      transform: "translate3d(0,50px,0)",
                    }}
                    animationTo={{
                      opacity: 1,
                      transform: "translate3d(0,0,0)",
                    }}
                    easing="easeOutCubic"
                    threshold={0.2}
                    rootMargin="-50px"
                  />
                </span>
                "
              </h2>
            </div>

            {/* Content Section */}
            <div className="">
              <p className="text-base text-gray-700 text-center lg:text-left leading-relaxed">
                Digital Den is your ultimate online destination for cutting-edge
                technology and digital products. We specialize in offering a
                diverse range of premium electronics, innovative gadgets, and
                top-quality accessories designed to meet your needs. With a
                focus on affordability and excellence, we bring you the latest
                trends and reliable products, all at competitive prices.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Products */}
      <h1 className="mt-6 ml-4 underline text-sm font-semibold tracking-wider text-blue-500 uppercase sm:ml-6 lg:ml-8 sm:text-base lg:text-lg">
        Our Products
      </h1>

      {/* Box  */}
      <section className="text-gray-600 body-font">
        <div className="container px-1 py-18 mx-auto">
          <div className="flex flex-wrap mt-4">
            {item.map((product, index) => (
              <div
                key={index}
                className="lg:w-1/4 md:w-1/2 p-4 w-full shadow-lg  "
              >
                <div className="block relative h-48 rounded overflow-hidden ">
                  <img
                    alt={product.title}
                    className="object-center rounded-lg w-48 h-48 block object-contain  sm:mb-0 mb-4 mx-16 hover:scale-110"
                    src={product.image}
                  />
                </div>
                <div className="mt-4 text-center">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                    {product.category}
                  </h3>
                  <h2 className=" product-title text-gray-900 title-font text-lg font-medium">
                    ₹{product.price}
                  </h2>
                  <p title={product.title} className="product-title mb-2">
                    {product.title.substring(0, 20)} ...
                  </p>
                  <p title={product.description} className="product-desc ">
                    {product.description.substring(0, 20)}...
                  </p>
                  <p>⭐ {product.rating.rate}</p>
                </div>
                <button
                  onClick={() => addtocart(product)}
                  className="flex mx-auto mt-3  px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
                >
                  Add To Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* new comming Soon */}
      <section className="bg-sky-100 dark:bg-gray-900">
        <div className="container mx-auto px-4 py-8">
          <section className="flex flex-col items-center justify-center">
            <div className="text-center mb-8">
              <h1 className="text-5xl font-extrabold lg:text-7xl 2xl:text-8xl">
                <span className="text-transparent bg-gradient-to-br bg-clip-text from-teal-500 via-indigo-500 to-sky-500 dark:from-teal-200 dark:via-indigo-300 dark:to-sky-500">
                  Coming
                </span>
                <span className="text-transparent bg-gradient-to-tr bg-clip-text from-blue-500 via-pink-500 to-red-500 dark:from-sky-300 dark:via-pink-300 dark:to-red-500">
                  Soon
                </span>
              </h1>
              <p className="max-w-2xl mx-auto mt-6 text-lg text-gray-700 dark:text-white md:text-xl">
                Get ready for the grand opening of{" "}
                <span className="text-blue-500">Digital Den</span>! To
                celebrate, we're offering exclusive discounts on our wide range
                of high-quality electronics, gadgets, and accessories.
              </p>
            </div>
          </section>
        </div>
      </section>

      <Footer />
      {/* <Team2 /> */}
    </>
  );
}

export default Home;
