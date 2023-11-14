interface IconProps {
  color?: string
  width?: number
  height?: number
}
export function WC({ color, width = 50, height = 50 }: IconProps) {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 500 500"
    >
      <path fill={color} opacity="1.000000" stroke="none"
        d="
M417.241638,310.000122 
	C417.242218,344.643341 417.242218,378.786560 417.242218,413.280701 
	C306.191071,413.280701 195.511002,413.280701 84.394958,413.280701 
	C84.305969,411.266632 84.145157,409.324036 84.145042,407.381439 
	C84.139145,303.743622 84.151573,200.105789 84.136185,96.467964 
	C84.135544,92.171021 86.551712,90.441994 90.399445,90.288261 
	C94.725258,90.115425 99.060532,90.144714 103.391685,90.144974 
	C206.530746,90.151154 309.669800,90.165260 412.808868,90.177902 
	C413.963013,90.178047 415.117188,90.177925 417.241089,90.177925 
	C417.241089,163.421249 417.241089,236.460678 417.241638,310.000122 
M249.499710,386.523682 
	C295.933990,386.523682 342.368286,386.523682 389.070984,386.523682 
	C389.070984,296.822510 389.070984,207.718460 389.070984,118.345947 
	C296.850281,118.345947 204.609344,118.345947 112.203156,118.345947 
	C112.203156,207.869812 112.203156,297.114563 112.203156,386.523743 
	C157.841187,386.523743 203.170441,386.523743 249.499710,386.523682 
z"/>
      <path fill={color} opacity="1.000000" stroke="none"
        d="
M357.482849,181.371643 
	C365.707001,184.959290 372.454254,189.922577 378.341064,196.089951 
	C371.726746,204.372116 365.332916,212.378189 358.860168,220.483109 
	C355.314392,218.139755 352.292908,215.760513 348.947510,213.995041 
	C329.684265,203.829330 306.762207,210.520782 296.694824,229.861404 
	C287.360016,247.794586 286.391907,266.436096 296.904785,284.194824 
	C308.278412,303.407593 331.738953,308.246765 350.729645,296.206451 
	C352.964142,294.789734 355.087616,293.197998 357.567871,291.475372 
	C364.363373,299.791046 371.078796,308.008789 378.683563,317.314789 
	C372.002991,321.292358 365.889801,325.884399 359.064331,328.820648 
	C337.000824,338.312286 315.104828,337.482544 293.683441,326.274872 
	C274.409241,316.190552 263.348999,299.500305 256.016510,279.804047 
	C251.968536,268.930511 248.137695,257.976135 243.829727,246.004257 
	C236.667755,275.729614 229.712585,304.596649 222.622757,334.022552 
	C215.385803,334.022552 208.090240,334.122131 200.804489,333.900391 
	C199.861221,333.871674 198.429932,332.326752 198.138596,331.239319 
	C196.034622,323.386658 194.222519,315.456268 192.186035,307.584656 
	C191.625305,305.417267 190.617432,303.365570 189.370804,300.096771 
	C186.050613,312.102814 183.059143,322.920227 180.039627,333.838989 
	C171.650589,333.838989 163.515427,333.838989 154.478287,333.838989 
	C143.544464,280.873596 132.574936,227.735214 121.539253,174.276337 
	C132.215500,174.276337 142.318359,174.276337 152.768692,174.276337 
	C158.155396,199.693176 163.521851,225.014481 168.888290,250.335785 
	C169.269821,250.376724 169.651352,250.417679 170.032867,250.458633 
	C176.699097,225.201126 183.365326,199.943604 190.031555,174.686096 
	C190.456787,174.676041 190.882019,174.665970 191.307251,174.655914 
	C197.747269,199.842804 204.187271,225.029694 210.627274,250.216583 
	C210.995667,250.212006 211.364044,250.207428 211.732422,250.202850 
	C217.817581,224.923538 223.902756,199.644226 230.069199,174.027267 
	C238.626328,174.027267 246.771042,173.918930 254.906158,174.149658 
	C256.062836,174.182449 257.745483,175.633942 258.214630,176.814377 
	C262.317688,187.137833 266.200043,197.548981 270.332092,208.418823 
	C292.860779,177.856964 321.900879,169.415787 357.482849,181.371643 
z"/>
    </svg>
  )
}
