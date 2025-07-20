import CategoryCard from "../category-card";
import { exploreByCategory } from "../constants";
import SectionWrapper from "./section-wrapper";
import SectionTitle from "./titile";

export default function ExploreByCategory() {
  return (
    <SectionWrapper>
      <SectionTitle title="Explore By Category" description="From cascading waterfalls to hidden beaches, discover nature&apos;s best-kept secrets" />
      <div className="w-full mt-12 overflow-x-auto px-4">
        <div className="flex gap-6 pb-8 pt-4" style={{ width: 'max-content' }}>
          {exploreByCategory.map((category, index) => (
            <CategoryCard
              key={index}
              title={category.title}
              description={category.description}
              logo={category.logo}
              locationCount={category.locationCount}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
} 