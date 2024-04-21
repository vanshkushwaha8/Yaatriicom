import { useState } from "react";
import { StarIcon } from "@heroicons/react/20/solid";
import { RadioGroup } from "@headlessui/react";
import { Rating } from "@mui/material";
import { Button } from "@mui/material";
import { Grid, Box, LinearProgress } from "@mui/material";
import { mens_kurta } from "../../../Data/Men/men_kurta.js";
import HomeSectionCard from "../HomeSectionCards/HomeSectionCard.jsx";
import ProductReviewCard from "./ProductReviewCard";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { findProductsById } from "../../state/Product/Action.js";
import { store } from "../../state/store.js";
import { addItemToCart } from "../../state/Cart/Action.js";

const product = {
  name: "Tour",
  price: "$192",
  href: "#",
  breadcrumbs: [
    { id: 1, name: "Explore", href: "#" },
    { id: 2, name: "Tours", href: "#" },
  ],
  images: [
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg",
      alt: "Two each of gray, white, and black shirts laying flat.",
    },
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg",
      alt: "Model wearing plain black basic tee.",
    },
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg",
      alt: "Model wearing plain gray basic tee.",
    },
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg",
      alt: "Model wearing plain white basic tee.",
    },
  ],
  colors: [
    { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
    { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
    { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
  ],
  sizes: [
    { name: "S", inStock: true },
    { name: "M", inStock: true },
    { name: "L", inStock: true },
    { name: "XL", inStock: true },
  ],
  description:
    'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
  highlights: [
    "Spending time outdoors reduces stress",
    "Nature makes exercise easier",
    "Nature can rejuvenate your soul",
    "Gain a sense of accomplishment",
    "Travel increases your self-awareness",
    " The outdoors can make you smarter",
  ],
  details: [
    <p>
      <span className="font-semibold">Transportation: </span> "Available
      transportation to and from the tour's starting point, as well as any
      transportation required during the tour, such as buses, flight, boats, or
      trains.
      <br />
      <span className="font-semibold">Tour Guides: </span> We provide tour
      guides on demand. Our knowledgeable and experienced guides offer insights
      into the attractions, landmarks, and historical significance of the tour,
      ensuring an enriching experience.
      <br />
      <span className="font-semibold">Meals: </span> Offer meals or snacks as
      part of the tour package, such as breakfast, lunch, or dinner at local
      restaurants or eateries.
      <br />
      <span className="font-semibold">Accommodation: </span> Accommodation
      arrangements will be made based on demand, particularly for overnight
      stays during the tour. Options may include hotels, lodges, or campsites,
      depending on travelers' preferences and needs.
      <br />
      <span className="font-semibold">Activities: </span> Incorporate various
      activities or experiences into the tour, such as hiking, sightseeing
      tours, cultural performances, or adventure sports.
      <br />
      <span className="font-semibold">Taxes and Fees: </span> Cover applicable
      taxes, service charges, or administrative fees associated with the tour.
    </p>,
  ],
};
const reviews = { href: "#", average: 4, totalCount: 117 };

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ProductDetails() {
  // const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState("");
  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useDispatch();
  const { products } = useSelector((store) => store);



  // const googleMapsUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3429.4278421816634!2d${products.product?.longitude}!3d${products.product?.latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39083ee051e628b1%3A0x167ce4efaf440f1e!2sKedarnath%2C%20Uttarakhand%20246445!5e0!3m2!1sen!2sin!4v1712646440386!5m2!1sen!2sin`;

  const handleMap = () => {
    navigate("/map");
  };

  const handleAddToCart = () => {
    const data = { productId: params.productId, size: selectedSize.name };
    console.log("data__", data);
    dispatch(addItemToCart(data));
    navigate("/cart");
  };
  useEffect(() => {
    const data = { productId: params.productId };
    dispatch(findProductsById(data));
    console.log("Product ", data);
  }, [params.productId]);

  return (
    <div className="bg-white lg:px-20">
      <div className="pt-6">
        <nav aria-label="Breadcrumb">
          <ol
            role="list"
            className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
          >
            {product.breadcrumbs.map((breadcrumb) => (
              <li key={breadcrumb.id}>
                <div className="flex items-center">
                  <a
                    href={breadcrumb.href}
                    className="mr-2 text-sm font-medium text-gray-900"
                  >
                    {breadcrumb.name}
                  </a>
                  <svg
                    width={16}
                    height={20}
                    viewBox="0 0 16 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-5 w-4 text-gray-300"
                  >
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>
            ))}
            <li className="text-sm">
              <a
                href={product.href}
                aria-current="page"
                className="font-medium text-gray-500 hover:text-gray-600"
              >
                {product.name}
              </a>
            </li>
          </ol>
        </nav>
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-x8 gap-y-10 px-4 pt-10">
          {/* Image gallery */}
          <div className="flex flex-col items-center">
            <div className="overflow-hidden rounded-lg max-w-[30rem] max-h-[35rem]">
              <img
                src={products.product?.imageUrl}
                alt={product.images[0].alt}
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>

          <div className="lg:col-span-1 max-auto max-w-2xl px-4 pb-16 sm:px-6 lg:max-w-7xl lg:px-8 lg:pb-24">
            <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
              <h1 className="text-xl lg:text-xl font-semibold text-gray-900 pt-1 ">
                {products.product?.title}
              </h1>
            </div>

            <div className=" lg:border-r lg:border-gray-200 lg:pr-8">
              <h1 className=" font-semibold text-gray-500 pt-1 ">
                Start from: 15 April <br />
                Ends to: 25 April
              </h1>
            </div>

            {/* Options */}
            <div className="mt-4 lg:row-span-3 lg:mt-0">
              <h2 className="sr-only">Product information</h2>
              <div className="flex space-x-5 items-center text-lg lg:text-xl text-gray-900 mt-6">
                <p className="font-semibold">₹{products.product?.price}</p>
                {/* <p className="opacity-50 line-through">₹{products.product?.discountedPrice}</p> */}
                <p className="text-green-600 font-semibold">
                  {products.product?.discountPercent}% off
                </p>
              </div>

              {/* Reviews */}
              <div className="mt-6">
                <div className="flex items-center space-x-3">
                  <Rating name="read-only" value={4.5} readOnly />
                  <p className="opacity-50 text-sm">58372 Ratings</p>
                  <p className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                    3738 Reviews
                  </p>
                </div>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-900 mt-7">
                  Description
                </h3>

                <div className="space-y-6 mt-4">
                  <p className="text-base text-gray-900">
                    {products.product?.description}
                  </p>
                </div>
              </div>

              <form className="mt-10">
                <Button
                  onClick={handleAddToCart}
                  variant="contained"
                  sx={{ px: "2rem", py: "1rem", bgcolor: "#9155fd" }}
                >
                  Let's Go...
                </Button>
              </form>
            </div>

            <div className="ml-[25rem] mt-[-4rem]">
              <iframe
                src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3429.4278421816634!2d${products.product?.longitude}!3d${products.product?.latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39083ee051e628b1%3A0x167ce4efaf440f1e!2sKedarnath%2C%20Uttarakhand%20246445!5e0!3m2!1sen!2sin!4v1712646440386!5m2!1sen!2sin`}
                width="300"
                height="300"
                style={{ border: "0" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6 mt-[-18rem]">
              {/* Description and details */}

              <div className="mt-10">
                <h3 className="text-sm font-semibold text-gray-900">
                  Key points
                </h3>

                <div className="mt-4">
                  <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                    {product.highlights.map((highlight) => (
                      <li key={highlight} className="text-gray-400">
                        <span className="text-gray-600">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-10">
                <h2 className="text-sm font-medium text-gray-900">Details</h2>

                <div className="mt-4 space-y-6">
                  <p className="text-sm text-gray-600">{product.details}</p>
                  {/* <p className="text-sm text-gray-600">{products.product?.details}</p> */}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h1 className="font-semibold text-lg pb-4 text-center">
            Recent Review & Rating
          </h1>
          <div className="border p-5 ">
            <Grid container spacing={7}>
              <Grid item xs={7}>
                <div className="space-y-5">
                  {[1, 1, 1].map((item) => (
                    <ProductReviewCard />
                  ))}
                </div>
              </Grid>

              <Grid item xs={5}>
                <h1 className="text-xl font-semibold pb-2 ">Product Ratings</h1>
                <div className="flex items-center space-x-3">
                  <Rating value={4.6} precision={0.5} readOnly />
                  <p className="opacity-60">5893745 Ratings</p>
                </div>

                <Box className="mt-5 space-y-3">
                  <Grid container alignItems="center" gap={2}>
                    <Grid item xs={2}>
                      <p>Excellent</p>
                    </Grid>
                    <Grid item xs={7}>
                      <LinearProgress
                        sx={{ bgcolor: "#d0d0d0", boederRadius: 4, height: 7 }}
                        variant="determinate"
                        value={40}
                        color="success"
                      />
                    </Grid>
                  </Grid>
                  <Grid container alignItems="center" gap={2}>
                    <Grid item xs={2}>
                      <p>Very Good</p>
                    </Grid>
                    <Grid item xs={7}>
                      <LinearProgress
                        sx={{ bgcolor: "#d0d0d0", boederRadius: 4, height: 7 }}
                        variant="determinate"
                        value={30}
                        color="success"
                      />
                    </Grid>
                  </Grid>
                  <Grid container alignItems="center" gap={2}>
                    <Grid item xs={2}>
                      <p>Good</p>
                    </Grid>
                    <Grid item xs={7}>
                      <LinearProgress
                        sx={{ bgcolor: "#d0d0d0", boederRadius: 4, height: 7 }}
                        variant="determinate"
                        value={25}
                      />
                    </Grid>
                  </Grid>
                  <Grid container alignItems="center" gap={2}>
                    <Grid item xs={2}>
                      <p>Average</p>
                    </Grid>
                    <Grid item xs={7}>
                      <LinearProgress
                        sx={{ bgcolor: "#d0d0d0", boederRadius: 4, height: 7 }}
                        variant="determinate"
                        value={20}
                        color="warning"
                      />
                    </Grid>
                  </Grid>
                  <Grid container alignItems="center" gap={2}>
                    <Grid item xs={2}>
                      <p>Poor</p>
                    </Grid>
                    <Grid item xs={7}>
                      <LinearProgress
                        sx={{ bgcolor: "#d0d0d0", boederRadius: 4, height: 7 }}
                        variant="determinate"
                        value={10}
                        color="error"
                      />
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </div>
        </section>

        {/* <section className="pt-10">
            <h1 className="py-5 text-xl font-bold text-center">Avalable Tour Guides</h1>
            <div className="flex flex-wrap space-y-5">
              {mens_kurta.map((item) => <HomeSectionCard product={item}/>)}
            </div>
        </section> */}
      </div>
    </div>
  );
}
