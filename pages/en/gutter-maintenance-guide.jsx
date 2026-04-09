export { default } from "../gestion-de-vos-gouttieres";

export function getStaticProps() {
  return {
    props: {
      locale: "en",
    },
  };
}
