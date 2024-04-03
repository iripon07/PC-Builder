import  Head  from 'next/head'
import { useRouter } from 'next/router'
import NoData from "@images/122.png"
import Image from 'next/image'
import Product from '@/components/UI/Product'

const Products = ({products}) => {
    const router = useRouter()
    const category = router.query.category;
    const categoryProducts = products.filter((cat) => cat.category.toLowerCase()===category.toLocaleLowerCase())
  return (
    <div>
          <Head>
              <title>PC builder</title>
              <meta name='description' content='This is pc builder website' />
              <meta name='viewport' content='width=device-width, initial-scale=1' />
              <link rel='icon' href='/favicon.ico' />
          </Head>
          <div>
            <h1>{category}</h1>
          </div>
          { categoryProducts ? ( <div>
            {
                categoryProducts.map((product => (<Product key={product.id} product ={product}/>)))
            }
            </div> )
            :(
                <div>
                  <Image
                      src={NoData}
                      width={500}
                      height={500}
                      alt="Picture of the author"
                  />
                </div>
            )

          }
    </div>
  )
}

export default Products