import head from './assets/head.png'
import serv1 from './assets/serv-1.png'
import serv2 from './assets/serv-2.png'
import serv3 from './assets/serv-3.png'
import serv4 from './assets/serv-4.png'
import serv5 from './assets/serv-5.png'
import serv6 from './assets/serv-6.png'
import { Card } from './components/Card'
import { Footer } from './components/Footer'
import { Contato } from './components/Contato'
import { NavBar } from './components/NavBar'


export function App() {
  return (
    <div className="w-full h-screen">
      <NavBar />
      <section className='flex flex-1' id='home'>
        <div className='text-white font-head font-semibold flex gap-10 mb-[230px] md:mb-0'>
          <h1 className='md:px-20 md:py-20 md:bg-blur md:relative z-10 md:z-0 text-5xl flex mx-10 my-14 md:text-7xl'>
            Criamos soluções <br />inovadoras para <br />seus desafios...
          </h1>
          <img src={head} alt="" className='md:p-2 absolute md:relative opacity-80 max-h-[500px] w-screen h-screen mb-9 md:mb-0 md:w-full md:h-full' />
        </div>
      </section>
      <section>
        <div className='bg-gray-700 md:w-[1000px] md:h-[300px] md:mx-auto md:my-10 rounded-3xl'>
          <h1 className='text-white font-main text-4xl flex justify-center p-4 font-light'>
            visão
          </h1>
          <p className='text-white font-main text-2xl flex justify-center p-4'>
            " Focamos em criar uma solução adequada para cada problema de nossos clientes, sem <br />
            trazer uma preocupação com preços, conversamos sobre o projeto ou serviço desejado e <br />
            fechamos um acordo que ambas partes fique satisfeito. Nosso objetivo está em sempre <br />
            entregar uma experiência impecável para quem contrata nossos serviços. "
          </p>
        </div>
      </section>
      <section>
        <h1 className='flex justify-center text-white font-main text-6xl mt-4'>
          Serviços:
        </h1>
        <div className='md:grid md:grid-cols-3 flex flex-col justify-center items-center'>
          <Card img={serv1} servico="Criação de Websites Responsivos" description='Desenvolvemos seu website com layouts modernos e completamente responsivos, de fácil adaptação a qualquer dispositivos.' />
          <Card img={serv2} servico="Criação de Websites Responsivos" description='Criamos sua landing page, como desejar, ou podemos criar um layout do zero a seu gosto, layout moderno e responsivo.' />
          <Card img={serv3} servico="Lojas Virtuais & E-commerces" description='Caso precise por sua loja online, podemos criar seu e-commerce completo, com tudo configurado e pronto para as vendas.' />
          <Card img={serv4} servico="Sistemas WEB" description='Desenvolvemos sistemas para web, com tecnologias modernas e seguras.' />
          <Card img={serv5} servico="Sistemas de Deliverys" description='Criamos seu delivery para seu estabelecimento, com uma ótima interface para seus usuarios.' />
          <Card img={serv6} servico="Desenvolvimento de Aplicativos mobile" description='Ideia de app ? conte com agente para por em produção seu aplicativo do seu jeito.' />
        </div>
      </section>
      <Contato />
      <Footer />
    </div>
  )
}

export default App
