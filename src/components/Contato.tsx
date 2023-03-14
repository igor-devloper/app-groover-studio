import imgCtt from '../assets/img-ctt.png';
import * as Tabs from '@radix-ui/react-tabs';
import { WhatsappLogo } from 'phosphor-react-native';

export function Contato() {
  return (
    <div className="flex flex-1">
      <Tabs.Root className='flex flex-col w-[300px] shadow-sm'>
        <Tabs.TabsList className='flex border-b-2'>
          <Tabs.Trigger className="text-white font-main bg-gray-700 py-6 h-11 flex flex-1 items-center justify-center text-base" value="tab1">
            Entre em Contato
          </Tabs.Trigger>
        </Tabs.TabsList>
        <Tabs.Content value='tab1'>
          <p>Entre em contato preenchendo os compos.</p>
          <fieldset>
            <label>Nome</label>
            <input type="text" />
          </fieldset>
          <fieldset>
            <label>Mensagem a ser enviada</label>
            <textarea />
          </fieldset>
          <button>
          <WhatsappLogo size={32} weight="light" />
          </button>
        </Tabs.Content>
      </Tabs.Root>
      <img src={imgCtt} alt="" className='flex max-w-[400px] ' />
    </div>
  )
}