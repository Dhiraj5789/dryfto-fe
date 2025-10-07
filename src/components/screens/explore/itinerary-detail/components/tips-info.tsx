"use client";

interface TipsInfoProps {
  tips: {
    gettingAround: string[];
    whatToPack: string[];
    moneySavingTips: string[];
    localEtiquette: string[];
  };
}

interface TipSectionProps {
  title: string;
  items: string[];
}

function TipSection({ title, items }: TipSectionProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li key={index} className="flex items-start gap-3">
            <span className="text-gray-400 mt-1">•</span>
            <span className="text-gray-700">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function TipsInfo({ tips }: TipsInfoProps) {
  return (
    <div className="grid grid-cols-2 gap-6">
      <TipSection title="Getting Around" items={tips.gettingAround} />
      <TipSection title="What to Pack" items={tips.whatToPack} />
      <TipSection title="Money Saving Tips" items={tips.moneySavingTips} />
      <TipSection title="Local Etiquette" items={tips.localEtiquette} />
    </div>
  );
}
