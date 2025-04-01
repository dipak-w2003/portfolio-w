// /*
//    @ This Program is used to capture actual height of the current device
//      ? Reasons:
//      1. In order to avoid height styling issue with cross platform (laptop,mobiles).
//         In other if your current web developing & testing system is laptop or desktop the styling might not
//         seem be problem with setting `style (height:100vh;)` but that will affect styling of `mobile` or `mini screens` platform with large height.
//      2. The calculated height will be better adjustable without unnecessary more.

//    ? Usage:
//     .after-nav-h {
//       height: calc((var(--vh, 1vh) * 100) - var(--nav-h));
//       overflow: hidden;
//      }
// */
// export const setViewportHeight = (): void => {
//   // Calculate 1% of the viewport height
//   const vh: number = window.innerHeight * 0.01;

//   // Set it as a custom CSS variable
//   document.documentElement.style.setProperty("--vh", `${vh}px`);
// };

// // Initialize on load
// setViewportHeight();

// // Recalculate on window resize
// window.addEventListener("resize", setViewportHeight);

// /*
// !CONFUSIONS :: ALert Refactor or remove
// Todo: Debug this whole process & Data's if this process is unnecessary point remove it & consider using better css in in order to avoid large chunks of data
//  */
