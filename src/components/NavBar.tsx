import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import logo from '../assets/logo.png'
import imgNav from '../assets/img-nav.png'

export function NavBar() {

  return (
    <NavigationMenu.Root className="relative lg:z-[1] lg:justify-between lg:flex z-40 transition-opacity">
      <img src={logo} alt="" className='mt-[18px] ml-6 rounded-md flex mx-auto' />
      <NavigationMenu.List className="center shadow-blackA7 lg:flex list-none rounded-[6px] p-1 text-white mt-[37px] mr-[151px] lg:gap-16 flex gap-4 my-10 mx-4">
        {/* Nav Inicio */}
        <NavigationMenu.Item>
          <NavigationMenu.Trigger className="font-head flex items-center justify-between opacity-50 hover:opacity-100">
            <a href="#home">
              inicio{' '}
            </a>
          </NavigationMenu.Trigger>
        </NavigationMenu.Item>
        {/* Nav Servico */}
        <NavigationMenu.Item >
          <NavigationMenu.Trigger className="font-head flex items-center justify-between opacity-50 hover:opacity-100">
            Serviços{' '}
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="overflow-hidden data-[motion=from-start]:animate-enterFromLeft data-[motion=from-end]:animate-enterFromRight data-[motion=to-start]:animate-exitToLeft data-[motion=to-end]:animate-exitToRight absolute flex w-full sm:w-auto bg-[#00040F] z-[1] justify-center">
            <ul className="one m-0 grid list-none gap-x-[10px] p-[22px] sm:w-[500px] sm:grid-cols-[0.75fr_1fr]">
              <li className="row-span-3 grid">
                <NavigationMenu.Link asChild>
                  <a
                    className="focus:shadow-violet7 from-purple9 to-indigo9 flex 
                  h-full w-full select-none flex-col justify-end rounded-[6px] bg-gradient-to-b p-[25px] no-underline outline-none focus:shadow-[0_0_0_2px]"
                    href="/"
                  >

                    <img src={imgNav} alt="" className='flex justify-center items-center text-center max-w-[200px]'  />
                  </a>
                </NavigationMenu.Link>
              </li>
              <li>
                <h1 className="p-4 text-white font-head text-lg text-center">Conheça nossos serviços</h1>
                <p className='text-white font-main text-center gap-1 text-sm'>
                  &nbsp;&bull; Criação de Websites Responsivos <br />
                  &nbsp;&bull;  Lojas virtuais <br />
                  &nbsp;&bull;  Lojas pronta para Dropshipping <br />
                  &nbsp;&bull; Aplicativos mobile ios / Android <br />
                  &nbsp;&bull; Sistemas web <br />
                  &nbsp;&bull; Deliverys para seus estabelecimentos <br />
                </p>
              </li>
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>
        {/* Nav Contato */}
        <NavigationMenu.Item>
          <NavigationMenu.Trigger className="font-head flex items-center justify-between opacity-50 hover:opacity-100">
            Contato{' '}
          </NavigationMenu.Trigger>
        </NavigationMenu.Item>
          {/* Nav Sobre */}
        <NavigationMenu.Item>
          <NavigationMenu.Trigger className="font-head flex items-center justify-between opacity-50 hover:opacity-100">
            Sobre{' '}
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="overflow-hidden data-[motion=from-start]:animate-enterFromLeft data-[motion=from-end]:animate-enterFromRight data-[motion=to-start]:animate-exitToLeft data-[motion=to-end]:animate-exitToRight absolute flex w-full sm:w-auto bg-[#00040F] z-[1] justify-center">
            <ul className="one m-0 grid list-none gap-x-[10px] p-[22px] sm:w-[500px] sm:grid-cols-[0.75fr_1fr]">
              <li className="row-span-3 grid">
                <NavigationMenu.Link asChild>
                  <a
                    className="focus:shadow-violet7 from-purple9 to-indigo9 flex 
                  h-full w-full select-none flex-col justify-center rounded-[6px] bg-gradient-to-b p-[25px] no-underline outline-none focus:shadow-[0_0_0_2px]"
                    href="/"
                  >

                    <img src={logo} alt="" className='flex  items-center text-center rounded-lg ' />
                  </a>
                </NavigationMenu.Link>
              </li>
              <li>
                <h1 className="p-4 text-white font-head text-lg text-center">Sobre nós:</h1>
                <p className='text-white font-main text-center gap-1 text-sm'>
                  " Focamos em criar uma solução adequada para cada problema de nossos clientes, sem <br />
                  trazer uma preocupação com preços, conversamos sobre o projeto ou serviço desejado e <br />
                  fechamos um acordo que ambas partes fique satisfeito. Nosso objetivo está em sempre <br />
                  entregar uma experiência impecável para quem contrata nossos serviços. "
                </p>
              </li>
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>
      </NavigationMenu.List>

      <div className="perspective-[2000px] absolute top-full left-0 flex w-full justify-center">
        <NavigationMenu.Viewport className="data-[state=open]:animate-scaleIn data-[state=closed]:animate-scaleOut relative mt-[10px] h-[var(--radix-navigation-menu-viewport-height)] w-full origin-[top_center] overflow-hidden rounded-[6px] bg-white transition-[width,_height] duration-300 sm:w-[var(--radix-navigation-menu-viewport-width)]" />
      </div>
    </NavigationMenu.Root>

  )
}