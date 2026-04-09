export { default } from "../realisation";

export function getStaticProps() {
  return {
    props: {
      locale: "en",
    },
  };
}
