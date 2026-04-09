export { default } from "../contactez-nous";

export function getStaticProps() {
  return {
    props: {
      locale: "en",
    },
  };
}
