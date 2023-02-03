export const getHeaderHeight = () => {
  const headerHeight = document?.querySelector('#first').offsetHeight;
  document.querySelector(':root').style.setProperty('--header-height', `${headerHeight}px`);
}