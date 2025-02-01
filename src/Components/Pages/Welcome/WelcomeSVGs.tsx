// import { useEffect } from "react";
// import "./welcomeStyle.css";
// export function Svg() {
//   useEffect(() => {
//     const paths = document.querySelectorAll("svg path");
//     for (let i = 0; i < paths.length; i++) {
//       console.log(i + 1, paths[i].getTotalLength());
//     }
//   });
//   return (
//     <svg
//       width="333"
//       height="111"
//       viewBox="0 0 607 211"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//     >

//        <style>
//         svg {}

//         svg path:nth-of-type(11) {
//             stroke-dashoffset: 233.66854858398438;
//             stroke-dasharray: 233.66854858398438;
//             animation: line-anime 9s infinite 0.333s forwards;
//             transition: fill;
//         }

//         svg path:nth-of-type(10) {
//             stroke-dashoffset: 227.155517578125;
//             stroke-dasharray: 227.155517578125;
//             animation: line-anime 9s infinite 0.666s forwards;
//             transition: fill;
//         }

//         svg path:nth-of-type(9) {
//             stroke-dashoffset: 219.5888671875;
//             stroke-dasharray: 219.5888671875;
//             animation: line-anime 9s infinite 0.999s forwards;
//             transition: fill;
//         }

//         svg path:nth-of-type(8) {
//             stroke-dashoffset: 210.0989990234375;
//             stroke-dasharray: 210.0989990234375;
//             animation: line-anime 9s infinite 1.333s forwards;
//             transition: fill;
//         }

//         svg path:nth-of-type(7) {
//             stroke-dashoffset: 242.7718963623047;
//             stroke-dasharray: 242.7718963623047;
//             animation: line-anime 9s infinite 1.666s forwards;
//             transition: fill;
//         }

//         svg path:nth-of-type(6) {
//             stroke-dashoffset: 180.03445434570312;
//             stroke-dasharray: 180.03445434570312;
//             animation: line-anime 9s infinite 1.999s forwards;
//             transition: fill;
//         }

//         svg path:nth-of-type(5) {
//             stroke-dashoffset: 210.09939575195312;
//             stroke-dasharray: 210.09939575195312;
//             animation: line-anime 9s infinite 2.333s forwards;
//             transition: fill;
//         }

//         svg path:nth-of-type(4) {
//             stroke-dashoffset: 267.0637512207031;
//             stroke-dasharray: 267.0637512207031;
//             animation: line-anime 9s infinite 2.666s forwards;
//             transition: fill;
//         }

//         svg path:nth-of-type(3) {
//             stroke-dashoffset: 210.09878540039062;
//             stroke-dasharray: 210.09878540039062;
//             animation: line-anime 9s infinite 2.999s forwards;
//             transition: fill;
//         }

//         svg path:nth-of-type(2) {
//             stroke-dashoffset: 193.96234130859375;
//             stroke-dasharray: 193.96234130859375;
//             animation: line-anime 9s infinite 3.333s forwards;
//             transition: fill;
//         }

//         svg path:nth-of-type(1) {
//             stroke-dashoffset: 227.155517578125;
//             stroke-dasharray: 227.155517578125;
//             animation: line-anime 9s infinite 3.666s forwards;
//             transition: fill;
//         }

//         @keyframes line-anime {
//             50% {
//                 stroke-dashoffset: 0;
//             }

//             100% {
//                 stroke-width: 0;
//                 stroke-linecap: round;
//                 fill: rgb(0, 0, 0);
//             }
//         }
//     </style>
//       <path
//         d="M580.207 3.01544L577.959 2.73444V5V72.6395C573.951 68.8204 569.494 65.8008 564.59 63.596C558.174 60.6228 550.799 59.1664 542.514 59.1664C530.614 59.1664 520.302 62.471 511.682 69.1433C503.21 75.6816 496.77 84.6717 492.321 96.0198C487.876 107.269 485.676 120.005 485.676 134.196C485.676 148.796 487.601 161.728 491.496 172.959L491.497 172.964C495.411 184.158 501.458 192.999 509.687 199.379C517.987 205.813 528.449 208.96 540.921 208.96C548.932 208.96 556.458 207.162 563.472 203.564C569.314 200.604 574.554 196.273 579.205 190.621L580.76 204.135L580.964 205.906H582.747H602.266H604.266V203.906V7.78839V6.02282L602.514 5.80383L580.207 3.01544ZM564.637 180.566L564.631 180.571L564.625 180.575C559.444 184.77 553.131 186.902 545.568 186.902C538.712 186.902 533.021 184.99 528.375 181.243C523.805 177.486 520.22 171.759 517.733 163.869C515.246 155.981 513.975 146.107 513.975 134.196C513.975 115.856 517.102 102.53 523.049 93.9034C528.937 85.3618 537.287 81.0918 548.357 81.0918C554.473 81.0918 560.051 82.5951 565.133 85.5944L565.143 85.6006L565.154 85.6067C570.105 88.4475 574.376 92.4418 577.959 97.6335V166.257C574.418 171.536 569.982 176.307 564.637 180.566Z"
//         stroke="#DFDF24"
//         stroke-width="4"
//       />
//       <path
//         d="M424.129 199.304L424.132 199.302C433.408 192.781 440.407 183.838 445.142 172.546C449.866 161.282 452.202 148.396 452.202 133.93C452.202 118.952 449.916 105.847 445.28 94.6637C440.719 83.4473 433.797 74.708 424.495 68.5351C415.243 62.247 403.81 59.1664 390.318 59.1664C376.894 59.1664 365.415 62.3449 355.992 68.8112C346.703 75.1579 339.699 84.0198 334.963 95.3144C330.238 106.582 327.903 119.557 327.903 134.196C327.903 149.004 330.191 162.064 334.825 173.33L334.828 173.339L334.832 173.348C339.571 184.558 346.579 193.333 355.873 199.59C365.209 205.876 376.64 208.96 390.052 208.96C403.475 208.96 414.875 205.782 424.129 199.304ZM415.488 174.097L415.481 174.108C409.881 182.425 401.517 186.636 390.052 186.636C378.59 186.636 370.176 182.426 364.487 174.103C358.801 165.652 355.803 152.457 355.803 134.196C355.803 115.569 358.849 102.257 364.61 93.9058C370.389 85.5694 378.854 81.3574 390.318 81.3574C401.688 81.3574 410.011 85.5637 415.613 93.8853L415.619 93.8929C421.3 102.248 424.302 115.481 424.302 133.93C424.302 152.374 421.258 165.652 415.488 174.097Z"
//         stroke="#DFDF24"
//         stroke-width="4"
//       />
//       <path
//         d="M264.896 199.304L264.899 199.302C274.175 192.781 281.173 183.838 285.908 172.546C290.632 161.282 292.969 148.396 292.969 133.93C292.969 118.952 290.682 105.847 286.047 94.6637C281.486 83.4473 274.563 74.708 265.262 68.5351C256.01 62.247 244.577 59.1664 231.084 59.1664C217.661 59.1664 206.182 62.3448 196.759 68.8111C187.47 75.1578 180.466 84.0197 175.729 95.3144C171.004 106.582 168.669 119.557 168.669 134.196C168.669 149.004 170.957 162.064 175.591 173.33L175.595 173.339L175.599 173.348C180.338 184.558 187.346 193.333 196.639 199.59C205.975 205.876 217.407 208.96 230.819 208.96C244.242 208.96 255.641 205.782 264.896 199.304ZM256.255 174.097L256.247 174.108C250.648 182.425 242.283 186.636 230.819 186.636C219.357 186.636 210.943 182.426 205.254 174.102C199.567 165.651 196.57 152.457 196.57 134.196C196.57 115.569 199.615 102.257 205.377 93.9058C211.155 85.5694 219.621 81.3574 231.084 81.3574C242.454 81.3574 250.777 85.5637 256.38 93.8853L256.385 93.8929C262.067 102.248 265.068 115.481 265.068 133.93C265.068 152.374 262.025 165.652 256.255 174.097Z"
//         stroke="#DFDF24"
//         stroke-width="4"
//       />
//       <path
//         d="M36.3611 198.141L36.3675 198.145C47.444 205.377 60.4047 208.96 75.1707 208.96C88.332 208.96 99.7109 207.394 109.264 204.21C118.662 201.077 127.531 197.271 135.869 192.788L136.922 192.222V191.026V103.922V101.922H134.922H73.3117H70.9989L71.3326 104.21L74.1211 123.331L74.3706 125.042H76.1001H110.084V177.591C105.15 180.086 100.072 182.015 94.8473 183.382L94.8399 183.384C89.356 184.84 83.5103 185.574 77.2952 185.574C67.0097 185.574 58.4972 183.094 51.6398 178.248C44.9031 173.337 39.6643 165.596 36.0393 154.81C32.5021 144.022 30.6973 129.917 30.6973 112.42C30.6973 98.3792 32.1026 86.7259 34.8615 77.4109C37.7273 68.0345 41.5123 60.6459 46.1566 55.1567C50.9375 49.5223 56.2636 45.526 62.1269 43.0969C68.0832 40.6293 74.2411 39.3985 80.6147 39.3985C88.0091 39.3985 94.6087 40.6018 100.444 42.9697L100.453 42.9734C106.387 45.3472 112.067 49.0511 117.489 54.1282L118.928 55.4762L120.296 54.0559L134.238 39.5828L135.663 38.1038L134.147 36.7187C126.835 30.0387 119.127 24.9511 111.019 21.4881C102.811 17.8932 92.6037 16.1453 80.4819 16.1453C70.3837 16.1453 60.603 18.1484 51.1547 22.1457L51.1483 22.1485C41.7502 26.1632 33.3333 32.223 25.8986 40.2924L25.8986 40.2923L25.8903 40.3014C18.5156 48.4044 12.6821 58.4686 8.35948 70.446L8.35944 70.446L8.35499 70.4586C4.10203 82.4936 2 96.493 2 112.42C2 133.656 4.94224 151.466 10.9181 165.772C16.884 180.054 25.3465 190.89 36.3611 198.141Z"
//         stroke="#DFDF24"
//         stroke-width="4"
//       />
//     </svg>
//   );
// }
