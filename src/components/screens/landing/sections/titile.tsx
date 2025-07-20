export default function SectionTitle({ title, description }: { title: string, description: string }) {
  return (
    <>
    <h2 className="text-5xl font-bold text-gray-800 mb-4">{title}</h2>
    <p className="text-xl text-gray-500 my-3 max-w-2xl text-center">{description}</p>
    </>
  );
}