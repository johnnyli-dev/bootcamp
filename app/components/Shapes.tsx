export function RedCircle() {
  return (
    <svg className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-[35vw] h-[35vw]" viewBox="0 0 256 256">
      <circle cx="128" cy="128" r="128" fill="#EF4444" />
    </svg>
  );
}

export function YellowHexagon() {
  return (
    <svg className="absolute top-10 right-10 translate-x-1/2 -translate-y-1/2 w-[40vw] h-[40vw]" viewBox="0 0 256 256">
      <path
        d="M192 32L256 128L192 224H64L0 128L64 32H192Z"
        fill="#FCD34D"
      />
    </svg>
  );
}

export function GreenStar() {
  return (
    <svg
      className="absolute top-[90%] left-0 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vw] rotate-5"
      viewBox="0 0 256 256"
    >
      <polygon 
        points="
          128,8 
          152.62,60.34 
          205.13,36.08 
          190.35,92 
          246.18,107.16 
          198.91,140.52 
          231.92,188 
          174.25,183.16 
          169.04,240.76 
          128,200 
          86.96,240.76 
          81.75,183.16 
          24.08,188 
          57.09,140.52 
          9.82,107.16 
          65.65,92 
          50.87,36.08 
          103.38,60.34
        "
        fill="#4ADE80"
      />
    </svg>
  );
}

export function BlueSquare() {
  return (
    <svg
      className="absolute top-[90%] left-[110%] -translate-x-1/2 -translate-y-1/2 w-[35vw] h-[35vw] rotate-45"
      viewBox="0 0 256 256"
    >
      <rect x="0" y="0" width="256" height="256" fill="blue" />
    </svg>
  );
}
