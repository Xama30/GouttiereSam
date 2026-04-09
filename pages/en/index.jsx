export { default } from "../index";

export function getStaticProps() {
  return {
    props: {
      locale: "en",
    },
  };
}
