import { WhatsappLogo } from '@phosphor-icons/react';
import imgCtt from '../assets/img-ctt.png';
import '../styles/button.css'

export function Contato() {
  return (
    <div className="flex lg:flex-1 lg:justify-center lg:gap-20 flex-col items-center justify-center lg:flex-row">
      <img src={imgCtt} alt="" className='lg:flex lg:max-w-[400px] max-w-[300px] justify-center flex' />
      <a href="
        https://api.whatsapp.com/send?l=pt-BR&phone=5583986120323&text=Ol%C3%A1%2C+vim+pelo+seu+sites.%0AVoc%C3%AA+pode+me+passar+umas+informa%C3%A7%C3%B5es%3F&fbclid=PAAabd59o93FavSL3byJ1rMjkRXerk4TrHRbpIz7ph8MYmJP7AX5y_rDaEZdo"
        className='lg:flex lg:items-center lg:justify-center my-10'
        target={'_blank'}
      >
        <button 
          id='buttonC'
          className='p-4 bg-green-500 rounded-md font-head  text-white lg:flex lg:items-center gap-2 flex items-center'
        >
          <WhatsappLogo size={32} weight="light" />
          Entre em contato no Whatsapp
        </button>
      </a>
    </div>
  )
}