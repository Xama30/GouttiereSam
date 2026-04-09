export { default } from "../tout-savoir-sur-les-gouttieres";

export function getStaticProps() {
  return {
    props: {
      locale: "en",
    },
  };
}
