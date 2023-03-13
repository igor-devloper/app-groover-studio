import logo from './assets/logo.png'
import head from './assets/head.png'

export function App() {
  return (
    <>
      <div className="w-full h-screen">
        <aside className='flex justify-between'>
          <img src={logo} alt="logo groover studio" className='mt-[18px] ml-6 rounded-md' />
          <nav className='flex text-white mt-[37px] mr-[151px] gap-16 font-head'>
            <a href="" className='opacity-70 hover:opacity-100 transition-opacity'>
              inicio
            </a>
            <a href="" className='opacity-70 hover:opacity-100 transition-opacity'>
              serviços
            </a>
            <a href="" className='opacity-70 hover:opacity-100 transition-opacity'>
              contato
            </a>
            <a href="" className='opacity-70 hover:opacity-100 transition-opacity'>
              sobre
            </a>
          </nav>
        </aside>
        <section className='flex flex-1'>
          <div className='text-white text-7xl font-head font-semibold flex gap-10'>
            <h1 className='px-20 py-20 bg-blur'>
              Criamos soluções <br/>inovadoras para <br/>seus desafios...
            </h1>
            <img src={head} alt=""  className='p-2'/>
          </div>
        </section>
      </div>
    </>
  )
}

export default App
