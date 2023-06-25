
interface Props {
  colour: string;
}
export const Blob: React.FC<Props> = ({colour}) => {

  return(
    <svg width="367" height="310" viewBox="0 0 367 310" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g opacity="0.3" filter="url(#filter0_d_37_632)">
        <path d="M211.625 302C128.23 302 4.00006 282.273 4.00006 198.878C4.00006 115.483 128.23 0 211.625 0C295.02 0 362.625 67.605 362.625 151C362.625 234.395 295.02 302 211.625 302Z" fill={colour}/>
        <mask id="mask0_37_632" style={{ maskType:'luminance'}} maskUnits="userSpaceOnUse" x="4" y="0" width="359" height="302">
          <path d="M211.625 302C128.23 302 4.00006 282.273 4.00006 198.878C4.00006 115.483 128.23 0 211.625 0C295.02 0 362.625 67.605 362.625 151C362.625 234.395 295.02 302 211.625 302Z" fill="white"/>
        </mask>
        <g mask="url(#mask0_37_632)">
        </g>
      </g>
      <defs>
        <filter id="filter0_d_37_632" x="0" y="0" width="366.625" height="310" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="2"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_37_632"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_37_632" result="shape"/>
        </filter>
      </defs>
    </svg>
  )
}
