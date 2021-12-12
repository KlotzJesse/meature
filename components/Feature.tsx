import { Card } from "./Card";
export const Feature = () => {
  return (
    <div className="relative flex flex-col justify-around px-4 pt-16 mx-auto my-20 text-gray-600 md:flex-row body-font sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <Card
        title="Lab"
        paragraph="Lab grown meat is still in its early phase. Could this be the future of meat? "
        image="/lab.svg"
        href="/lab"
      />
      <Card
        title="Soy based Meat"
        paragraph="Products: Herbal meat substitutes are as popular as ever and come in many variations "
        image="/soy.svg"
        href="/soy"
      />
      <Card
        title="Meat substitutes"
        paragraph="Insects as food are more popular than you think, especially because of their benefits to health and nutrition "
        image="/insects.svg"
        href="/meat-substitutes"
      />
    </div>
  );
};
export default Feature;
