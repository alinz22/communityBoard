import './App.css';
import Card from './components/Card'

const App = () => {

  return (
    <div className="App">
      <img src="https://static.vecteezy.com/system/resources/thumbnails/011/098/110/small/abstract-background-drawing-a-flag-and-ribbon-transparent-vector-illustration-free-png.png" alt="banner" width="1000" height="300" className='banner'></img>
      <h1>Good Eats in SoCal!</h1>
    <div className="container">
      <Card
      image = "https://imageio.forbes.com/specials-images/imageserve//62be4001cd17d4f79c70f112/0x0.jpg?format=jpg&width=1200"
      name = "Baekjeong"
      description = "Korean BBQ that is VERY popular in the 626!"
      link= "https://www.baekjeongkbbq.com/"
                                />
      <Card
      image = "https://i0.wp.com/aycelovers.com/wp-content/uploads/2021/11/Broth-Shabu-Shabu-Cerritos-CA-09.jpg?resize=800%2C600&ssl=1"
      name = "Broth Shabu Shabu"
      description = "The best shabu shabu in my opinion!!"
      link= "https://brothshabu.com/home"
                                />                           
      <Card
      image = "https://uploads-ssl.webflow.com/5cf04dfa5de32126b13759ff/5d23bcf7059b4b55a7665b91_Omomo_Matcha_menu.jpg"
      name = "Omomo Tea Shoppe"
      description = "The best boba in the area!! Always super long lines"
      link= "https://www.omomoteashoppe.com/"
                                /> 
      <Card
      image = "https://infatuation.imgix.net/golden-deli/GoldenDeli_BrokenRicePlate_MattGendal_SanMarino-011.jpg"
      name = "Golden Deli"
      description = "Good vietnamese food!"
      link= "https://thegoldendeli.com/"
                                />
      
      <Card
      image = "https://images.squarespace-cdn.com/content/v1/566cac710ab377dc3abcb56d/1452705095559-PU0JNGTDBU1MJNZ334OI/BSL_7464.jpg?format=1500w"
      name = "Mama Lu Dumpling House"
      description = "Good chinese fod!"
      link= "http://mamaludumpling.com/"
                                />
    
      <Card
      image = "https://static.wixstatic.com/media/c2d9c5_6f2bf99a9a8d4a0b8d00efdbfceff9dc~mv2.jpg/v1/crop/x_0,y_362,w_4077,h_5392/fill/w_442,h_592,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/IMG_9883.jpg"
      name = "The Vox Kitchen"
      description = "Best Viet-French Fusion food!"
      link= "https://www.eatvox.com/"
                                />
      
      <Card
      image ="https://d1835ylud4heuo.cloudfront.net/assets/merchants/item/DB819843-8651-4F12-1646265257837-BFS1P22GPWPPR-item.png"
      name = "Yupp Dduk"
      description = "Best Ttekboki!"
      link= "https://www.yupddukirvine.com/"
                                />

      
      <Card
      image = "https://images.squarespace-cdn.com/content/v1/5cc8bc4f93a632622cd1616d/1573583122269-Y56LDZPIX5ZFFN91VMPV/tofu-boiling-dark.png?format=2500w"
      name = "BCD Tofu House"
      description = "Best Korean Tofu House!"
      link= "https://www.bcdtofuhouse.com/"
                                />
      
      <Card
      image = "https://thewoksoflife.com/wp-content/uploads/2017/02/pad-see-ew-11-2-500x375.jpg"
      name = "Chef G on 4th Thai Street Food"
      description = "Best Pad See Ew!!"
      link= "https://www.chefgon4ththaistreetfood.com/"
                                />
    
      <Card
      image = "https://farm9.staticflickr.com/8752/16903209906_1d38b2e47f_b.jpg"
      name = "Kang - Kang Food Court"
      description = "Best soup dumplings!"
      link= "https://www.baekjeongkbbq.com/"
                                />                                                        
    </div>
    </div>
  )
}

export default App