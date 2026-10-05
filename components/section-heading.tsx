type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
};

export function SectionHeading({ eyebrow, title, description, align = 'left' }: SectionHeadingProps) {
  return (
    <div className={align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-xl'}>
      {eyebrow ? (
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#b2774f]">{eyebrow}</p>
      ) : null}
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#1d2a1f] sm:text-4xl">{title}</h2>
      {description ? <p className="mt-4 text-base leading-7 text-[#5c655d]">{description}</p> : null}
    </div>
  );
}
