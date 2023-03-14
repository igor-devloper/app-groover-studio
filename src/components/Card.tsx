interface CardProps {
  img: string;
  servico: string;
  description: string
}


export function Card(props: CardProps) {
  return (
    <div className="bg-gray-700 w-80 h-80 m-8 rounded-2xl overflow-hidden bg-blur-serv">
      <img src={props.img} alt="" className="max-w-[150px] mx-auto mt-4"/>
      <div>
        <h1 className="text-white font-main flex justify-center mt-4">{props.servico}</h1>
        <p className="flex justify-center max-w-xs mx-auto text-white font-main p-4">{props.description}</p>
      </div>
    </div>
  )
}