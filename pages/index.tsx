import { InferGetStaticPropsType } from "next"
import getAllProducts from "@framework/product/get-all-products"
import { getConfig } from "@framework/api/config"
import { Layout } from "@components/common"
import { ProductCard } from "@components/product"
import { Grid, Hero, Marquee } from "@components/ui"

export async function getStaticProps() {
  const config = getConfig()
  const products = await getAllProducts(config)

  return {
    props: {
      products
    },
    revalidate: 4 * 60 * 60
  }
}


export default function Home({
  products
}: InferGetStaticPropsType<typeof getStaticProps>) {

  return (
    <>
      <Grid>
      { products.slice(0,3).map(product => 
        <ProductCard 
          key={product.id}
          product={product} 
        />
      )}
      </Grid>
      <Hero 
        headline="Cookies, ice cream and muffin"
        description="took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
      />
      <Marquee>
        { products.slice(0,3).map(product => 
          <ProductCard 
            key={product.id}
            variant="slim"
            product={product} 
          />
        )}
      </Marquee>
      <Grid layout="B">
      { products.slice(0,3).map(product => 
        <ProductCard 
          key={product.id}
          product={product} 
        />
      )}
      </Grid>
      <Marquee variant="secondary">
        { products.slice(0,3).map(product => 
          <ProductCard 
            key={product.id}
            variant="slim"
            product={product} 
          />
        )}
      </Marquee>
    </>
  )
}

Home.Layout = Layout