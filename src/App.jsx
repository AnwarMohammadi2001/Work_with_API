import React from "react";
import Navbar from "./Components/Navbar";
import DataCard from "./Components/DataCard";
import Footer from "./Components/Footer";

const App = () => {
  const data = [
    {
      id: 1,
      name: "Business Card Printing",
      description:
        "We offer premium-quality business card printing services, ensuring a professional and memorable impression for you and your business. Whether you are looking for sleek, modern designs or classic, elegant layouts, we have a wide range of customizations to suit your needs. Our business cards come with high-quality paper, a choice of finishes like glossy or matte, and vibrant colors that stand out. Each card is printed with precision to ensure sharp text and images, giving you a product that reflects your professional identity.",
      date: "2024-11-01",
    },
    {
      id: 2,
      name: "Flyer Distribution",
      description:
        "Our flyer printing and distribution service is perfect for businesses, events, or promotions that require broad visibility. We specialize in creating eye-catching flyers that attract attention and deliver your message effectively. Our flyers are printed on high-quality paper, with a range of finishes, including gloss and matte options, to meet your design preferences. After printing, we also offer distribution services, ensuring your flyers reach your target audience at the right location, whether it's a local event, business area, or neighborhood.",
      date: "2024-11-03",
    },
    {
      id: 3,
      name: "Brochure Design & Printing",
      description:
        "Our brochure design and printing service offers a comprehensive solution for your marketing materials. We help you craft professional, informative brochures that highlight your products, services, or business in an engaging way. Our brochures come in a variety of folding styles, including tri-fold, bi-fold, and custom options, and we use premium paper and printing techniques to ensure the final product is durable and visually appealing. Whether you're looking to distribute them at trade shows, events, or to clients, our brochures make sure your business stands out.",
      date: "2024-11-05",
    },
    {
      id: 4,
      name: "Poster Printing",
      description:
        "Our poster printing services are ideal for promoting events, sales, and exhibitions. We print high-resolution posters in a variety of sizes, from small posters to large-format prints, ensuring your designs look sharp and vibrant. Whether you're promoting a local concert, a product launch, or an art exhibit, we use top-tier printing technology and materials to ensure your posters are eye-catching and long-lasting. Additionally, we offer different finishing options such as lamination, ensuring the durability of your posters for both indoor and outdoor use.",
      date: "2024-11-06",
    },
    {
      id: 5,
      name: "Custom Stickers",
      description:
        "Our custom sticker printing service allows you to design personalized stickers for your business, event, or personal use. We offer a wide range of options, from small logo stickers to larger decals, all printed with high-quality materials and vibrant colors. Stickers are a great way to promote your brand or add a creative touch to products, packaging, and marketing materials. Whether you need a few hundred for a local event or thousands for a nationwide campaign, we provide fast and reliable printing with durable materials that stand the test of time.",
      date: "2024-11-07",
    },
  ];

  return (
    <div className=" conatiner mx-auto bg-gray-500 min-h-screen">
      <Navbar />
      <div className="max-w-2xl mx-auto my-10">
        <div className="flex justify-center">
          <button className="px-4 py-2 rounded-md bg-gray-100  font-semibold">
            Fetch Data
          </button>
        </div>
        <div className="py-6  w-full mt-10 space-y-5 rounded-md">
          {data.map((item, index) => (
            <DataCard item={item} key={index} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
