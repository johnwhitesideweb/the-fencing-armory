const InterchangeableBattery = () => (
<svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker
      id="arrowhead"
      markerWidth="3.5"
      markerHeight="3.5"
      refX="1.75"
      refY="1.75"
      orient="auto"
    >
      <path
        d="M0.5 0.5 L3 1.75 L0.5 3 L1.25 1.75 Z"
        fill="white"
        stroke="white"
        strokeLinejoin="round"
      />
    </marker>
  </defs>

  <path
    d="M16 4a8 8 0 1 1-8 16"
    stroke="white"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    markerEnd="url(#arrowhead)"
  />
  <path
    d="M8 20a8 8 0 1 1 8-16"
    stroke="white"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    markerEnd="url(#arrowhead)"
  />

  <rect
    x="17"
    y="10.5"
    width="2"
    height="3"
    rx="0.5"
    fill="lightgray"
  />
  <rect
    x="7"
    y="9"
    width="10"
    height="6"
    rx="1"
    stroke="lightgray"
    strokeWidth="1.8"
  />
  <rect
    x="8.5"
    y="10.5"
    width="4"
    height="3"
    rx="0.4"
    strokeWidth="1"
    fill="gray"
  />
</svg>
);

export default InterchangeableBattery;