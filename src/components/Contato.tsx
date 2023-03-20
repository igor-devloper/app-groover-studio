import { WhatsappLogo } from '@phosphor-icons/react';
import imgCtt from '../assets/img-ctt.png';
export function Contato() {
  return (
    <div className="flex flex-1 justify-center gap-20">
      <a href="
        https://api.whatsapp.com/send?l=pt-BR&phone=5583986120323&text=Ol%C3%A1%2C+vim+pelo+seu+sites.%0AVoc%C3%AA+pode+me+passar+umas+informa%C3%A7%C3%B5es%3F&fbclid=PAAabd59o93FavSL3byJ1rMjkRXerk4TrHRbpIz7ph8MYmJP7AX5y_rDaEZdo"
        className='flex items-center justify-center '
        target={'_blank'}
      >
        <button 
          className='p-4 bg-green-500 rounded-md font-head  text-white flex items-center gap-2 shadow-md hover:opacity-70 transition-opacity'
        >
          <WhatsappLogo size={32} weight="light" />
          Entre em contato no Whatsapp
        </button>
      </a>
      <img src={imgCtt} alt="" className='flex max-w-[400px] ' />
    </div>
  )
}