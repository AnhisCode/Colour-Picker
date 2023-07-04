
interface Props {
  colour: string;
}
export const SectionBleed1: React.FC<Props> = ({colour}) => {
  return(
    <svg width="3000" height="200" viewBox="0 0 1500 238" fill="none" xmlns="http://www.w3.org/2000/svg" className={"w-[102%] -translate-x-[5px] duration-300 ease-out"}>
      <path d="M-9.82384 63.827C-9.82384 63.827 -3.40695 105.267 257.118 80.9949C517.643 56.7231 726.833 -77.66 1052.17 63.827C1377.5 205.314 1536 144.339 1536 144.339L1503.92 237.305L-30.9995 204.746" fill={colour}/>
    </svg>
  )
}