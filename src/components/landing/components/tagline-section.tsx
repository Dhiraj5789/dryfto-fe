import { BRAND_TEXT } from '../constants';

const TaglineSection = () => {
  return (
    <section className="px-4 py-12 text-center">
      <p className="text-lg text-gray-600 font-medium">
        {BRAND_TEXT.tagline}
      </p>
    </section>
  );
};

export default TaglineSection; 