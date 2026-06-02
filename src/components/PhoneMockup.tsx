type Props = {
  src: string;
  alt: string;
  className?: string;
  tilt?: boolean;
};

export function PhoneMockup({ src, alt, className = "", tilt = false }: Props) {
  return (
    <div
      className={`phone-mockup ${tilt ? "phone-mockup--tilt" : ""} ${className}`.trim()}
    >
      <div className="phone-mockup-device">
        <span className="phone-mockup-btn phone-mockup-btn--silent" aria-hidden />
        <span className="phone-mockup-btn phone-mockup-btn--vol-up" aria-hidden />
        <span className="phone-mockup-btn phone-mockup-btn--vol-down" aria-hidden />
        <span className="phone-mockup-btn phone-mockup-btn--power" aria-hidden />

        <div className="phone-mockup-bezel">
          <div className="phone-mockup-screen">
            <div className="phone-mockup-island" aria-hidden />
            <img
              src={src}
              alt={alt}
              className="phone-mockup-shot"
              loading="lazy"
              draggable={false}
            />
          </div>
        </div>
      </div>
      <div className="phone-mockup-glow" aria-hidden />
    </div>
  );
}
