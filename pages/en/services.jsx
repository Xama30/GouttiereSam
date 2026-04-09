export { default } from "../nos-services";

export function getStaticProps() {
  return {
    props: {
      locale: "en",
    },
  };
}
