import ErrorPage from './index.js'; 

const CustomErrorPage = ({ statusCode }) => {
  // Utilisez le code d'état pour personnaliser la page d'erreur
  return <ErrorPage />;
};

CustomErrorPage.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default CustomErrorPage;
