import { useEffect } from "react";
import "./welcomeStyle.css";
export function Svg() {
  useEffect(() => {
    const paths = document.querySelectorAll("svg path");
    paths.forEach((element, _) => {
      console.log(_ + 1, element);
    });
  });
  return (
    <svg
      width="524"
      height="59"
      viewBox="0 0 524 59"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M521.699 7.18302L521.733 5.65002H520.199H515.299H513.766L513.8 7.18302L514.35 32.183L514.382 33.65H515.849H519.649H521.117L521.149 32.183L521.699 7.18302ZM514.689 42.4607C515.577 43.3487 516.694 43.8 517.949 43.8C519.184 43.8 520.274 43.3387 521.125 42.4456C522.003 41.5601 522.449 40.4479 522.449 39.2C522.449 37.9521 522.003 36.84 521.125 35.9545C520.274 35.0614 519.184 34.6 517.949 34.6C516.694 34.6 515.577 35.0514 514.689 35.9394C513.801 36.8274 513.349 37.9451 513.349 39.2C513.349 40.4549 513.801 41.5727 514.689 42.4607Z"
        stroke="black"
        stroke-width="3"
      />
      <path
        d="M487.18 15.5854C486.644 15.1572 486.06 14.763 485.432 14.4022C483.403 13.2167 481.069 12.65 478.48 12.65C475.795 12.65 473.316 13.2969 471.074 14.6044L471.074 14.6043L471.065 14.6099C468.849 15.9243 467.112 17.7819 465.858 20.142C464.589 22.495 463.98 25.1964 463.98 28.2C463.98 31.1766 464.591 33.8872 465.851 36.2953C467.102 38.6877 468.835 40.5799 471.049 41.9305L471.049 41.9305L471.058 41.9363C473.302 43.2823 475.787 43.95 478.48 43.95C481.079 43.95 483.422 43.3618 485.455 42.1341C486.074 41.7608 486.649 41.3547 487.18 40.9156V42.6C487.18 45.143 486.471 46.914 485.231 48.1283L485.225 48.1338L485.219 48.1394C483.971 49.3876 482.338 50.05 480.18 50.05C478.222 50.05 476.638 49.5933 475.356 48.7479L475.347 48.7417L475.337 48.7356C474.051 47.9147 473.256 46.8668 472.867 45.569L472.546 44.5H471.43H466.93H465.192L465.446 46.2192C465.939 49.5539 467.576 52.2352 470.313 54.1741C473.019 56.0905 476.34 57 480.18 57C483.024 57 485.583 56.4047 487.808 55.1616C490.05 53.9271 491.79 52.1906 492.996 49.9698C494.199 47.7878 494.78 45.3175 494.78 42.6V14.6V13.1H493.28H488.68H487.18V14.6V15.5854ZM483.263 20.639L483.281 20.6496L483.299 20.6598C484.469 21.3126 485.405 22.2659 486.112 23.5663C486.806 24.8426 487.18 26.3875 487.18 28.25C487.18 30.1089 486.807 31.6744 486.109 32.9897C485.401 34.2901 484.46 35.2639 483.281 35.9505C482.121 36.612 480.832 36.95 479.38 36.95C477.931 36.95 476.644 36.6133 475.486 35.9543C474.341 35.27 473.413 34.2962 472.701 32.9897C472.005 31.6776 471.63 30.0965 471.63 28.2C471.63 26.3375 472.004 24.7926 472.698 23.5163C473.41 22.2069 474.336 21.2528 475.474 20.6024C476.635 19.939 477.926 19.6 479.38 19.6C480.822 19.6 482.105 19.9499 483.263 20.639Z"
        stroke="black"
        stroke-width="3"
      />
      <path
        d="M441.248 14.7933V14.6V13.1H439.748H435.198H433.698V14.6V42V43.5H435.198H439.748H441.248V42V26.85C441.248 24.2165 441.889 22.4584 442.938 21.3298C444.043 20.1772 445.541 19.55 447.598 19.55C449.63 19.55 451.069 20.1655 452.1 21.2726L452.106 21.2789L452.112 21.2851C453.125 22.3479 453.748 24.0037 453.748 26.5V42V43.5H455.248H459.748H461.248V42V25.85C461.248 21.7821 460.136 18.441 457.695 16.0764C455.306 13.7282 452.209 12.6 448.548 12.6C446.469 12.6 444.524 13.0286 442.738 13.9027L442.738 13.9026L442.727 13.9083C442.203 14.17 441.71 14.4651 441.248 14.7933Z"
        stroke="black"
        stroke-width="3"
      />
      <path
        d="M428.943 14.6V13.1H427.443H422.893H421.393V14.6V42V43.5H422.893H427.443H428.943V42V14.6ZM421.982 10.3107C422.87 11.1987 423.988 11.65 425.243 11.65C426.477 11.65 427.568 11.1886 428.419 10.2956C429.297 9.41004 429.743 8.29788 429.743 7.05001C429.743 5.80214 429.297 4.68999 428.419 3.80448C427.568 2.91138 426.477 2.45001 425.243 2.45001C423.988 2.45001 422.87 2.90138 421.982 3.78935C421.094 4.67733 420.643 5.79506 420.643 7.05001C420.643 8.30496 421.094 9.42269 421.982 10.3107Z"
        stroke="black"
        stroke-width="3"
      />
      <path
        d="M396.961 14.7933V14.6V13.1H395.461H390.911H389.411V14.6V42V43.5H390.911H395.461H396.961V42V26.85C396.961 24.2165 397.602 22.4584 398.651 21.3298C399.756 20.1772 401.254 19.55 403.311 19.55C405.343 19.55 406.782 20.1655 407.813 21.2726L407.819 21.2789L407.825 21.2851C408.838 22.3479 409.461 24.0037 409.461 26.5V42V43.5H410.961H415.461H416.961V42V25.85C416.961 21.7821 415.849 18.441 413.408 16.0764C411.019 13.7282 407.921 12.6 404.261 12.6C402.182 12.6 400.237 13.0286 398.451 13.9027L398.451 13.9026L398.44 13.9083C397.916 14.17 397.423 14.4651 396.961 14.7933Z"
        stroke="black"
        stroke-width="3"
      />
      <path
        d="M379.445 14.1086C379.045 14.3451 378.666 14.6041 378.308 14.8851V14.6V13.1H376.808H372.258H370.758V14.6V42V43.5H372.258H376.808H378.308V42V27.1C378.308 24.5356 378.902 22.8919 379.824 21.8916C380.724 20.9143 382.172 20.3 384.458 20.3H385.658H387.158V18.8V14.1V12.6H385.658C383.322 12.6 381.233 13.0754 379.458 14.1012L379.451 14.1049L379.445 14.1086Z"
        stroke="black"
        stroke-width="3"
      />
      <path
        d="M344.488 42.0063L344.488 42.0063L344.497 42.0113C346.835 43.3102 349.422 43.95 352.226 43.95C355.059 43.95 357.676 43.3118 360.045 42.0161C362.422 40.7162 364.304 38.8701 365.673 36.5035C367.089 34.0795 367.776 31.3129 367.776 28.25C367.776 25.1964 367.11 22.449 365.729 20.0569C364.395 17.6895 362.546 15.8544 360.196 14.5843C357.857 13.2868 355.256 12.65 352.426 12.65C349.596 12.65 346.994 13.2868 344.655 14.5843C342.3 15.8572 340.436 17.7113 339.072 20.108L339.072 20.108L339.068 20.1146C337.725 22.5031 337.076 25.23 337.076 28.25C337.076 31.2937 337.704 34.0449 339.005 36.4612L339.012 36.4734L339.018 36.4854C340.348 38.8496 342.175 40.7006 344.488 42.0063ZM358.982 33.0907L358.976 33.1013L358.97 33.1119C358.231 34.4191 357.28 35.3561 356.118 35.9773C354.904 36.627 353.614 36.95 352.226 36.95C350.831 36.95 349.581 36.6406 348.447 36.035C347.363 35.4237 346.46 34.4983 345.75 33.195C345.093 31.9307 344.726 30.3039 344.726 28.25C344.726 26.2363 345.107 24.6297 345.794 23.3663C346.506 22.0566 347.407 21.15 348.485 20.5718L348.485 20.5718L348.496 20.5657C349.665 19.9254 350.949 19.6 352.376 19.6C353.763 19.6 355.031 19.9229 356.205 20.5657L356.217 20.5723L356.23 20.5788C357.345 21.163 358.279 22.0765 359.02 23.3881C359.731 24.6468 360.126 26.2451 360.126 28.25C360.126 30.246 359.718 31.8364 358.982 33.0907Z"
        stroke="black"
        stroke-width="3"
      />
      <path
        d="M334.059 7.40002V5.90002H332.559H327.709H326.737L326.34 6.78726L314.909 32.3281L303.479 6.78727L303.081 5.90002H302.109H297.209H295.709V7.40002V42V43.5H297.209H301.759H303.259V42V23.1842L311.94 42.6119L312.337 43.5H313.309H316.509H317.483L317.879 42.6107L326.509 23.2496V42V43.5H328.009H332.559H334.059V42V7.40002Z"
        stroke="black"
        stroke-width="3"
      />
      <path
        d="M240.654 14.6043L240.654 14.6043L240.645 14.6099C238.429 15.9242 236.692 17.7819 235.438 20.1419C234.169 22.4949 233.56 25.1963 233.56 28.2C233.56 31.1766 234.171 33.8872 235.431 36.2952C236.682 38.6877 238.415 40.5799 240.629 41.9305L240.629 41.9305L240.638 41.9362C242.882 43.2823 245.367 43.95 248.06 43.95C250.651 43.95 252.987 43.3823 255.017 42.1948L255.027 42.1895L255.035 42.1841C255.654 41.8106 256.23 41.4028 256.76 40.9606V42V43.5H258.26H262.86H264.36V42V5V3.5H262.86H258.26H256.76V5V15.6078C256.152 15.1337 255.487 14.7073 254.769 14.3281C252.713 13.2086 250.485 12.65 248.11 12.65C245.396 12.65 242.899 13.2951 240.654 14.6043ZM252.843 20.6389L252.861 20.6496L252.879 20.6598C254.049 21.3126 254.985 22.2658 255.692 23.5663C256.386 24.8425 256.76 26.3874 256.76 28.25C256.76 30.1088 256.387 31.6743 255.689 32.9897C254.981 34.29 254.04 35.2639 252.861 35.9505C251.701 36.612 250.412 36.95 248.96 36.95C247.511 36.95 246.224 36.6133 245.066 35.9542C243.921 35.27 242.993 34.2962 242.281 32.9897C241.585 31.6776 241.21 30.0965 241.21 28.2C241.21 26.3374 241.584 24.7925 242.278 23.5163C242.99 22.2069 243.916 21.2527 245.054 20.6024C246.215 19.939 247.506 19.6 248.96 19.6C250.402 19.6 251.685 19.9499 252.843 20.6389Z"
        stroke="black"
        stroke-width="3"
      />
      <path
        d="M208.99 42.0063L208.99 42.0063L208.999 42.0113C211.337 43.3102 213.924 43.95 216.728 43.95C219.561 43.95 222.178 43.3118 224.547 42.0161C226.924 40.7162 228.806 38.8701 230.175 36.5035C231.591 34.0795 232.278 31.3129 232.278 28.25C232.278 25.1964 231.612 22.449 230.231 20.0569C228.897 17.6895 227.048 15.8544 224.698 14.5843C222.359 13.2868 219.758 12.65 216.928 12.65C214.098 12.65 211.496 13.2868 209.157 14.5843C206.802 15.8572 204.938 17.7113 203.574 20.108L203.574 20.108L203.57 20.1146C202.227 22.5031 201.578 25.23 201.578 28.25C201.578 31.2937 202.206 34.0449 203.507 36.4612L203.514 36.4734L203.52 36.4854C204.85 38.8496 206.677 40.7006 208.99 42.0063ZM223.484 33.0907L223.478 33.1013L223.472 33.1119C222.733 34.4191 221.782 35.3561 220.62 35.9773C219.406 36.627 218.115 36.95 216.728 36.95C215.333 36.95 214.083 36.6406 212.949 36.035C211.865 35.4237 210.962 34.4983 210.252 33.195C209.595 31.9307 209.228 30.3039 209.228 28.25C209.228 26.2363 209.609 24.6297 210.296 23.3663C211.007 22.0566 211.909 21.15 212.987 20.5718L212.987 20.5718L212.998 20.5657C214.167 19.9254 215.451 19.6 216.878 19.6C218.265 19.6 219.533 19.9229 220.707 20.5657L220.719 20.5723L220.732 20.5788C221.847 21.163 222.781 22.0765 223.522 23.3881C224.233 24.6468 224.628 26.2451 224.628 28.25C224.628 30.246 224.22 31.8364 223.484 33.0907Z"
        stroke="black"
        stroke-width="3"
      />
      <path
        d="M177.008 42.0063L177.008 42.0063L177.017 42.0113C179.355 43.3102 181.942 43.95 184.745 43.95C187.579 43.95 190.196 43.3118 192.565 42.0161C194.942 40.7162 196.824 38.8701 198.192 36.5035C199.609 34.0796 200.295 31.3129 200.295 28.25C200.295 25.1964 199.629 22.449 198.248 20.0569C196.915 17.6895 195.066 15.8544 192.716 14.5843C190.377 13.2868 187.775 12.65 184.945 12.65C182.115 12.65 179.514 13.2868 177.175 14.5843C174.82 15.8572 172.956 17.7113 171.592 20.108L171.592 20.108L171.588 20.1146C170.244 22.5031 169.595 25.23 169.595 28.25C169.595 31.2937 170.224 34.0449 171.525 36.4612L171.531 36.4734L171.538 36.4854C172.868 38.8496 174.695 40.7006 177.008 42.0063ZM191.502 33.0907L191.495 33.1013L191.489 33.1119C190.751 34.4191 189.799 35.3561 188.638 35.9773C187.423 36.627 186.133 36.95 184.745 36.95C183.351 36.95 182.101 36.6406 180.967 36.035C179.883 35.4237 178.98 34.4983 178.269 33.195C177.613 31.9308 177.245 30.304 177.245 28.25C177.245 26.2363 177.627 24.6297 178.313 23.3663C179.025 22.0566 179.927 21.15 181.005 20.5718L181.005 20.5718L181.016 20.5657C182.185 19.9254 183.469 19.6 184.895 19.6C186.283 19.6 187.551 19.9229 188.725 20.5657L188.737 20.5723L188.749 20.5788C189.865 21.163 190.798 22.0765 191.539 23.3881C192.251 24.6467 192.645 26.2451 192.645 28.25C192.645 30.246 192.238 31.8364 191.502 33.0907Z"
        stroke="black"
        stroke-width="3"
      />
      <path
        d="M158.925 17.894L159.332 18.75H160.279H165.729H167.924L167.127 16.705C165.718 13.0932 163.438 10.2519 160.291 8.23842C157.192 6.23448 153.638 5.25 149.679 5.25C146.2 5.25 142.992 6.07756 140.088 7.74612C137.181 9.38266 134.874 11.6954 133.178 14.6541L133.178 14.6541L133.175 14.6593C131.501 17.6061 130.679 20.9157 130.679 24.55C130.679 28.1844 131.501 31.4939 133.175 34.4407L133.175 34.4408L133.182 34.4528C134.879 37.3768 137.183 39.6839 140.082 41.3504L140.088 41.3539L140.094 41.3574C142.998 42.9909 146.204 43.8 149.679 43.8C152.978 43.8 156.011 43.0626 158.749 41.5662L158.756 41.5625L158.762 41.5588C161.471 40.0416 163.67 37.9904 165.338 35.4156L165.343 35.4076C167.007 32.8039 167.984 29.9409 168.273 26.8389L168.279 26.7696V26.7V23.2V21.7H166.779H148.029H146.529V23.2V26.9V28.4H148.029H160.173C159.658 30.7615 158.606 32.6204 157.061 34.0484C155.176 35.7907 152.757 36.7 149.679 36.7C147.487 36.7 145.547 36.2083 143.825 35.2483C142.146 34.2612 140.806 32.8699 139.799 31.037C138.835 29.2228 138.329 27.075 138.329 24.55C138.329 22.0229 138.836 19.8737 139.801 18.0586C140.811 16.1892 142.151 14.8039 143.821 13.8537L143.821 13.8538L143.828 13.8496C145.551 12.857 147.489 12.35 149.679 12.35C151.871 12.35 153.724 12.8573 155.291 13.8259L155.299 13.8311L155.308 13.8362C156.874 14.776 158.078 16.1126 158.925 17.894Z"
        stroke="black"
        stroke-width="3"
      />
      <path
        d="M103.392 36.2766L104.256 34.2H102.007H97.007H95.8598L95.5594 35.3072L91.9094 48.7572L91.3957 50.65H93.357H96.407H97.4073L97.7918 49.7266L103.392 36.2766Z"
        stroke="black"
        stroke-width="3"
      />
      <path
        d="M94.1214 15.1683L94.9682 13.1H92.7332H88.0332H87.0013L86.6324 14.0636L79.525 32.6264L72.3319 14.0581L71.9608 13.1H70.9332H65.8832H63.6517L64.4942 15.1663L75.3129 41.699L70.1449 54.332L69.2989 56.4H71.5332H76.2332H77.2399L77.6214 55.4683L94.1214 15.1683Z"
        stroke="black"
        stroke-width="3"
      />
      <path
        d="M62.9773 31.5H64.3302L64.4694 30.1544C64.5741 29.1425 64.6273 28.174 64.6273 27.25C64.6273 24.5277 64.0273 22.0418 62.7938 19.8309C61.5915 17.5824 59.8563 15.814 57.6169 14.545C55.3631 13.2678 52.802 12.65 49.9773 12.65C47.0863 12.65 44.461 13.2844 42.1435 14.5918C39.8496 15.8712 38.0655 17.7191 36.8027 20.0963C35.5358 22.481 34.9273 25.2138 34.9273 28.25C34.9273 31.2937 35.5555 34.0449 36.8566 36.4612L36.8566 36.4612L36.8613 36.4697C38.1554 38.8362 39.9485 40.6915 42.2308 42.0011L42.2308 42.0011L42.2399 42.0063C44.5527 43.3118 47.1443 43.95 49.9773 43.95C53.5023 43.95 56.566 43.0645 59.0715 41.2044L59.0773 41.2001L59.0831 41.1957C61.5421 39.3328 63.2 36.9054 64.0224 33.9524L64.5521 32.05H62.5773H57.6773H56.6109L56.2606 33.0572C55.8315 34.2908 55.0944 35.2662 54.0204 36.0189C53.0269 36.7056 51.712 37.1 49.9773 37.1C47.9252 37.1 46.2382 36.472 44.8316 35.2357C43.8251 34.3054 43.1273 33.0846 42.7871 31.5H62.9773ZM55.9941 22.6267L55.9987 22.6344L56.0034 22.6419C56.3843 23.2546 56.6573 23.968 56.8037 24.8H42.8904C43.2606 23.3204 43.9402 22.1793 44.8853 21.3109C46.2281 20.1075 47.8308 19.5 49.7773 19.5C51.1624 19.5 52.3743 19.7868 53.4429 20.3347L53.4632 20.3452L53.4837 20.3549C54.551 20.8619 55.379 21.6104 55.9941 22.6267Z"
        stroke="black"
        stroke-width="3"
      />
      <path
        d="M31.8582 7.15002V5.65002H30.3582H25.8082H24.3082V7.15002V20.95H9.55821V7.15002V5.65002H8.05821H3.50821H2.00821V7.15002V42V43.5H3.50821H8.05821H9.55821V42V27.7H24.3082V42V43.5H25.8082H30.3582H31.8582V42V7.15002Z"
        stroke="black"
        stroke-width="3"
      />
    </svg>
  );
}
