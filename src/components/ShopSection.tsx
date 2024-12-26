"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import AutoPlay from "embla-carousel-autoplay";
import { shopifyClient, formatPrice } from "@/utils/shopify";

interface Product {
  id: string;
  title: string;
  price: string;
  image: string;
  tag?: string;
  handle: string;
}

const ProductCard = ({
  title,
  price,
  image,
  tag,
  handle,
  delay,
}: Product & { delay: number }) => (
  <motion.a
    href={`https://shop.myenglishlearners.in/products/${handle}`}
    target="_blank"
    rel="noopener noreferrer"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.5 }}
    className="group relative block mx-4"
  >
    <div className="relative aspect-square rounded-xl overflow-hidden">
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover transition-transform duration-300 
          group-hover:scale-105"
      />

      {tag && (
        <div
          className="absolute top-2 right-2 bg-primary text-white text-sm 
          px-3 py-1 rounded-full z-20"
        >
          {tag}
        </div>
      )}

      <div
        className="absolute inset-0 bg-black/0 group-hover:bg-black/20 
        transition-colors duration-300"
      />
    </div>

    <div className="mt-4">
      <h3
        className="font-garet text-lg font-medium group-hover:text-primary 
        transition-colors duration-300 line-clamp-2"
      >
        {title}
      </h3>
      <p className="text-primary font-semibold mt-2">{price}</p>
    </div>
  </motion.a>
);

export default function ShopSection() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const sectionRef = useRef<HTMLDivElement>(null);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      slidesToScroll: 1,
      breakpoints: {
        "(min-width: 768px)": { slidesToScroll: 2 },
        "(min-width: 1024px)": { slidesToScroll: 3 },
      },
    },
    [AutoPlay({ delay: 4000, stopOnInteraction: false })]
  );

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const products = await shopifyClient.product.fetchAll();

        if (!products || products.length === 0) {
          setProducts([]);
          return;
        }

        const formattedProducts = products.map((p) => ({
          id: p.id || "",
          title: p.title || "",
          price:
            p.variants && p.variants.length > 0 && p.variants[0].price
              ? formatPrice(p.variants[0].price.amount.toString())
              : "Price not available",
          image:
            p.images && p.images.length > 0 && p.images[0].src
              ? p.images[0].src
              : "/placeholder-product.png",
          handle: p.handle || "",
          tag: p.tags && p.tags.length > 0 ? p.tags[0] : undefined,
        }));

        setProducts(formattedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="shop"
      className="py-20 relative overflow-hidden"
    >
      {/* Background Elements */}
      <motion.div style={{ opacity }} className="absolute inset-0 z-0">
        <div
          className="absolute top-1/3 right-1/3 w-96 h-96 bg-primary/10 
          rounded-full blur-3xl"
        ></div>
        <div
          className="absolute bottom-1/3 left-1/3 w-96 h-96 bg-primary/10 
          rounded-full blur-3xl"
        ></div>
      </motion.div>

      <motion.div
        style={{ y }}
        className="max-w-7xl mx-auto px-4 relative z-10"
      >
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="mb-6 inline-block"
          >
            <i className="fas fa-book-open text-3xl text-primary/80" />
          </motion.div>
          <h2 className="font-maharlika text-4xl text-primary mb-4">
            Educational Resources
          </h2>
          <p className="font-garet text-text/80 max-w-2xl mx-auto">
            Premium learning materials to accelerate your English mastery
          </p>
        </motion.div>

        {/* Offer Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="relative mb-12 rounded-xl overflow-hidden bg-gradient-to-r 
            from-primary to-primary-dark p-6 sm:p-8"
        >
          <div
            className="relative z-10 flex flex-col sm:flex-row items-center 
            justify-between gap-6 text-white"
          >
            {/* Offer Text */}
            <div className="text-center sm:text-left">
              <h3 className="font-maharlika text-xl sm:text-2xl mb-2">
                New Year Special Offer!
              </h3>
              <p className="font-garet text-sm sm:text-base opacity-90">
                Get 10% off on all PDFs
              </p>
            </div>

            {/* Coupon Code */}
            <div className="relative">
              <div
                className="absolute inset-0 border-2 border-dashed border-white/30 
                rounded-lg"
              />
              <div
                className="relative px-6 py-3 bg-white/10 backdrop-blur-sm rounded-lg 
                flex items-center gap-4"
              >
                <i className="fas fa-scissors text-white/70 rotate-180" />
                <div>
                  <p className="text-xs uppercase opacity-70">Use Code</p>
                  <p className="font-mono text-lg font-bold">ELNEWYR</p>
                </div>
              </div>
            </div>

            {/* Shop Now Button */}
            <motion.a
              href="https://shop.myenglishlearners.in"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-primary px-6 py-3 rounded-lg font-garet
                hover:bg-white/90 transition-all duration-300 inline-block
                shadow-lg hover:shadow-xl"
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.95 }}
            >
              Shop Now
            </motion.a>
          </div>

          {/* Decorative Elements */}
          <div
            className="absolute top-0 right-0 w-32 sm:w-48 h-32 sm:h-48 
            bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"
          />
          <div
            className="absolute bottom-0 left-0 w-24 sm:w-32 h-24 sm:h-32 
            bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"
          />
        </motion.div>

        {/* Products Carousel */}
        <div className="relative mb-16">
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="aspect-square bg-primary/10 rounded-xl animate-pulse"
                />
              ))}
            </div>
          ) : products.length > 0 ? (
            <>
              {/* Navigation Buttons */}
              <div className="absolute -left-4 sm:-left-8 right-auto top-1/2 -translate-y-1/2 z-10">
                <button
                  onClick={() => emblaApi?.scrollPrev()}
                  className="p-3 rounded-full bg-white/80 dark:bg-white/10 shadow-lg
                    backdrop-blur-sm hover:bg-white dark:hover:bg-white/20 
                    transition-all duration-300 group"
                  aria-label="Previous products"
                  title="Show previous products"
                >
                  <i
                    className="fas fa-chevron-left text-primary group-hover:scale-110 
                    transition-transform duration-300"
                    aria-hidden="true"
                  />
                </button>
              </div>
              <div className="absolute -right-4 sm:-right-8 left-auto top-1/2 -translate-y-1/2 z-10">
                <button
                  onClick={() => emblaApi?.scrollNext()}
                  className="p-3 rounded-full bg-white/80 dark:bg-white/10 shadow-lg
                    backdrop-blur-sm hover:bg-white dark:hover:bg-white/20 
                    transition-all duration-300 group"
                  aria-label="Next products"
                  title="Show next products"
                >
                  <i
                    className="fas fa-chevron-right text-primary group-hover:scale-110 
                    transition-transform duration-300"
                    aria-hidden="true"
                  />
                </button>
              </div>
              <div className="overflow-hidden -mx-4" ref={emblaRef}>
                <div className="flex">
                  {products.map((product, index) => (
                    <div
                      key={product.id}
                      className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] 
                      lg:flex-[0_0_33.333%]"
                    >
                      <ProductCard {...product} delay={0.1 * index} />
                    </div>
                  ))}
                </div>
              </div>
            </>
          ) : (
            <p className="text-center text-text/60 py-12">No products found</p>
          )}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <motion.a
            href="https://shop.myenglishlearners.in"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-white 
              px-8 py-3 rounded-lg hover:bg-primary-dark transition-all duration-300
              shadow-lg hover:shadow-xl"
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.2 },
            }}
            whileTap={{ scale: 0.95 }}
          >
            <i className="fas fa-shopping-cart"></i>
            Visit Our Shop
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
