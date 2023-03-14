import icon from '../assets/favicon.png'

export function Footer() {
  return (
    <footer className='bg-gray-700 h-[150px] flex items-center'>
      <img src={icon} alt="" className='max-w-[100px] m-8' />
      <p className='text-white text-lg font-main'>@copywriting - 2022 Todos direitos reservador - Groover Studio</p>
    </footer>
  )
}