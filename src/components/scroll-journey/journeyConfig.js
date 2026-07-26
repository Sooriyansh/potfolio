export const cameraKeyframes = [
  { at: 0, position: [0, .25, 11], target: [0, 0, 0], fog: .055 },
  { at: .20, position: [0, .1, 5.4], target: [0, 0, -3], fog: .065 },
  { at: .42, position: [-1.2, .5, .2], target: [.2, 0, -6], fog: .052 },
  { at: .66, position: [1.4, .3, -6], target: [0, 0, -13], fog: .038 },
  { at: .82, position: [0, 1, -12], target: [0, .2, -19], fog: .025 },
  { at: 1, position: [0, 2.2, -18], target: [0, .3, -25], fog: .012 },
];
export function sampleKeyframes(progress) { let i = 0; while (i < cameraKeyframes.length - 1 && progress > cameraKeyframes[i + 1].at) i++; const a = cameraKeyframes[i]; const b = cameraKeyframes[Math.min(i + 1, cameraKeyframes.length - 1)]; return { a, b, t: a === b ? 0 : Math.max(0, Math.min(1, (progress - a.at) / (b.at - a.at))) }; }
